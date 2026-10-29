import {
  ENDPOINT_COUNT,
  READ_COUNT,
  WRITE_COUNT,
  ENDPOINTS,
} from "../client/catalog.js";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const inv = JSON.parse(
  readFileSync(resolve(root, "inventory/endpoints.json"), "utf8")
) as {
  totals: { operations: number; read: number; write: number };
};

const checks = [
  ["catalog==inventory.operations", ENDPOINT_COUNT === inv.totals.operations],
  ["catalog.read==inventory.read", READ_COUNT === inv.totals.read],
  ["catalog.write==inventory.write", WRITE_COUNT === inv.totals.write],
  ["read+write==total", READ_COUNT + WRITE_COUNT === ENDPOINT_COUNT],
  ["no empty operationId", ENDPOINTS.every((e) => !!e.operationId)],
  ["no empty path", ENDPOINTS.every((e) => e.path.startsWith("/"))],
];

let failed = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
  if (!ok) failed++;
}

console.log(
  JSON.stringify(
    {
      ENDPOINT_COUNT,
      READ_COUNT,
      WRITE_COUNT,
      byProduct: Object.fromEntries(
        ["support", "helpCenter", "conversations"].map((p) => [
          p,
          ENDPOINTS.filter((e) => e.product === p).length,
        ])
      ),
      byMethod: Object.fromEntries(
        ["GET", "POST", "PUT", "PATCH", "DELETE"].map((m) => [
          m,
          ENDPOINTS.filter((e) => e.method === m).length,
        ])
      ),
    },
    null,
    2
  )
);

if (failed) process.exit(1);
console.log(`Coverage OK — ${ENDPOINT_COUNT} endpoints (R=${READ_COUNT} W=${WRITE_COUNT})`);
