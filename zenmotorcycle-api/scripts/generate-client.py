#!/usr/bin/env python3
"""Regenerate TypeScript client from OAS specs — 100% READ+WRITE coverage."""
from __future__ import annotations

import collections
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPECS = ROOT / "specs"
OUT = ROOT / "src"


def parse_spec(path: Path):
    text = path.read_text(errors="replace")
    lines = text.splitlines()
    ops = []
    current_path = None
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r"^  (/[^:]+):\s*$", line)
        if m:
            current_path = m.group(1)
            i += 1
            continue
        m = re.match(r"^    (get|post|put|patch|delete|head|options):\s*$", line)
        if m and current_path:
            method = m.group(1).upper()
            i += 1
            block = []
            while i < len(lines):
                l2 = lines[i]
                if re.match(r"^    (get|post|put|patch|delete|head|options):\s*$", l2):
                    break
                if re.match(r"^  /", l2) or (l2 and not l2.startswith(" ")):
                    break
                if re.match(r"^    [a-zA-Z]", l2) and not l2.startswith("      "):
                    break
                block.append(l2)
                i += 1
            body = "\n".join(block)
            oid = re.search(r"(?m)^      operationId:\s*(.+)$", body)
            summary = re.search(r"(?m)^      summary:\s*(.+)$", body)
            tag = "Untagged"
            tm = re.search(r"(?ms)^      tags:\s*\n((?:        - .+\n?)+)", body)
            if tm:
                tags = re.findall(r"^        - (.+)$", tm.group(1), re.M)
                if tags:
                    tag = tags[0].strip()
            path_params = re.findall(r"\{([^}]+)\}", current_path)
            ops.append(
                {
                    "method": method,
                    "path": current_path,
                    "operationId": oid.group(1).strip() if oid else None,
                    "summary": summary.group(1).strip().strip('"') if summary else None,
                    "tag": tag,
                    "pathParams": path_params,
                    "spec": path.name,
                    "rw": "READ" if method in ("GET", "HEAD", "OPTIONS") else "WRITE",
                }
            )
            continue
        i += 1
    return ops


def sanitize_method_name(oid: str) -> str:
    name = oid[0].lower() + oid[1:]
    name = re.sub(r"[^a-zA-Z0-9_]", "_", name)
    if not name or name[0].isdigit():
        name = "op_" + name
    return name


def prop_name(tag: str) -> str:
    parts = [p for p in re.split(r"[^a-zA-Z0-9]+", tag) if p]
    if not parts:
        return "untagged"
    out = parts[0].lower() + "".join(p.title() for p in parts[1:])
    out = re.sub(r"[^a-zA-Z0-9_]", "", out)
    if out[0].isdigit():
        out = "t" + out
    return out


def class_name(tag: str) -> str:
    parts = [p for p in re.split(r"[^a-zA-Z0-9]+", tag) if p]
    cls = "".join(p.title() for p in parts) + "Api"
    if not cls[0].isalpha():
        cls = "X" + cls
    return cls


def main() -> None:
    all_ops = []
    for f in ["support.oas.yaml", "help_center.oas.yaml", "conversations.oas.yaml"]:
        ops = parse_spec(SPECS / f)
        print(f, len(ops))
        all_ops.extend(ops)

    seen: collections.Counter[str] = collections.Counter()
    for op in all_ops:
        base = op["operationId"] or re.sub(
            r"[^a-zA-Z0-9]+", "_", f"{op['method']}_{op['path']}"
        ).strip("_")
        key = base
        seen[key] += 1
        if seen[key] > 1:
            key = f"{base}_{seen[key]}"
        op["operationId"] = key
        op["product"] = {
            "support.oas.yaml": "support",
            "help_center.oas.yaml": "helpCenter",
            "conversations.oas.yaml": "conversations",
        }[op["spec"]]

    inv = {
        "generatedAt": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        "subdomainTarget": "zenmotorcycle",
        "docs": [
            "https://developer.zendesk.com/api-reference/",
            "https://developer.zendesk.com/documentation/",
            "https://developer.zendesk.com/zendesk/oas.yaml",
            "https://developer.zendesk.com/help_center/oas.yaml",
            "https://github.com/zendesk/sunshine-conversations-api-spec",
        ],
        "totals": {
            "operations": len(all_ops),
            "read": sum(1 for o in all_ops if o["rw"] == "READ"),
            "write": sum(1 for o in all_ops if o["rw"] == "WRITE"),
            "byProduct": dict(collections.Counter(o["product"] for o in all_ops)),
            "byMethod": dict(collections.Counter(o["method"] for o in all_ops)),
            "byTag": dict(
                sorted(
                    collections.Counter(o["tag"] for o in all_ops).items(),
                    key=lambda x: -x[1],
                )
            ),
        },
        "operations": all_ops,
    }
    (ROOT / "inventory").mkdir(exist_ok=True)
    (ROOT / "inventory" / "endpoints.json").write_text(json.dumps(inv, indent=2))
    with (ROOT / "inventory" / "endpoints.csv").open("w") as f:
        f.write("product,rw,method,path,operationId,tag\n")
        for o in all_ops:
            f.write(
                f"{o['product']},{o['rw']},{o['method']},{o['path']},{o['operationId']},{o['tag']}\n"
            )

    by_prod: dict = collections.defaultdict(lambda: collections.defaultdict(list))
    for op in all_ops:
        by_prod[op["product"]][op["tag"]].append(op)

    (OUT / "client").mkdir(parents=True, exist_ok=True)
    (OUT / "client" / "catalog.ts").write_text(
        "// Auto-generated — DO NOT EDIT BY HAND\n"
        'export type HttpMethod = "GET"|"POST"|"PUT"|"PATCH"|"DELETE"|"HEAD"|"OPTIONS";\n'
        'export type Rw = "READ"|"WRITE";\n'
        "export interface Endpoint {\n"
        "  operationId: string;\n"
        "  method: HttpMethod;\n"
        "  path: string;\n"
        "  tag: string;\n"
        '  product: "support"|"helpCenter"|"conversations";\n'
        "  rw: Rw;\n"
        "  pathParams: string[];\n"
        "  summary?: string | null;\n"
        "}\n"
        f"export const ENDPOINTS: Endpoint[] = {json.dumps([{k:o[k] for k in ['operationId','method','path','tag','product','rw','pathParams','summary']} for o in all_ops], indent=2)};\n"
        f"export const ENDPOINT_COUNT = {len(all_ops)};\n"
        f"export const READ_COUNT = {sum(1 for o in all_ops if o['rw']=='READ')};\n"
        f"export const WRITE_COUNT = {sum(1 for o in all_ops if o['rw']=='WRITE')};\n"
    )

    def js_str(s: str) -> str:
        return json.dumps(s)

    for product, tags in by_prod.items():
        lines = [
            "// Auto-generated — 100% of OAS endpoints (READ + WRITE)",
            f"// Product: {product} — {sum(len(v) for v in tags.values())} operations / {len(tags)} resources",
            "import type { ZendeskHttp } from './http.js';",
            "",
        ]
        tag_to_cls = {}
        used_cls: set[str] = set()
        for tag in sorted(tags.keys()):
            cls = class_name(tag)
            base = cls
            n = 2
            while cls in used_cls:
                cls = f"{base}{n}"
                n += 1
            used_cls.add(cls)
            tag_to_cls[tag] = cls
        tag_to_prop = {}
        used_prop: set[str] = set()
        for tag in sorted(tags.keys()):
            prop = prop_name(tag)
            base = prop
            n = 2
            while prop in used_prop:
                prop = f"{base}{n}"
                n += 1
            used_prop.add(prop)
            tag_to_prop[tag] = prop

        for tag in sorted(tags.keys()):
            cls = tag_to_cls[tag]
            ops = tags[tag]
            lines.append(f"/** {tag} — {len(ops)} endpoints */")
            lines.append(f"export class {cls} {{")
            lines.append("  constructor(private http: ZendeskHttp) {}")
            used_names: set[str] = set()
            for op in ops:
                mname = sanitize_method_name(op["operationId"])
                orig = mname
                c = 2
                while mname in used_names:
                    mname = f"{orig}_{c}"
                    c += 1
                used_names.add(mname)
                params = []
                path_js = js_str(op["path"])
                for pp in op["pathParams"]:
                    safe = re.sub(r"[^a-zA-Z0-9_]", "_", pp)
                    if not safe or safe[0].isdigit():
                        safe = "p_" + safe
                    params.append(f"{safe}: string | number")
                    path_js += f'.replaceAll("{{{pp}}}", encodeURIComponent(String({safe})))'
                params.append(
                    "options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}"
                )
                summary = (op.get("summary") or op["operationId"] or "").replace(
                    "*/", "* /"
                )
                lines.append(
                    f'  /** [{op["rw"]}] {op["method"]} {op["path"]} — {summary} */'
                )
                lines.append(f"  async {mname}({', '.join(params)}) {{")
                lines.append(f"    const path = {path_js};")
                lines.append(
                    f'    return this.http.request({js_str(op["method"])}, path, options);'
                )
                lines.append("  }")
            lines.append("}")
            lines.append("")

        facade = product[0].upper() + product[1:] + "Client"
        lines.append(f"export class {facade} {{")
        for tag in sorted(tags.keys()):
            lines.append(f"  readonly {tag_to_prop[tag]}: {tag_to_cls[tag]};")
        lines.append("  constructor(http: ZendeskHttp) {")
        for tag in sorted(tags.keys()):
            lines.append(
                f"    this.{tag_to_prop[tag]} = new {tag_to_cls[tag]}(http);"
            )
        lines.append("  }")
        lines.append("}")
        (OUT / "client" / f"{product}.generated.ts").write_text("\n".join(lines) + "\n")
        print("wrote", product, "classes", len(tags))

    print(
        "OK",
        inv["totals"]["operations"],
        "R",
        inv["totals"]["read"],
        "W",
        inv["totals"]["write"],
    )


if __name__ == "__main__":
    main()
