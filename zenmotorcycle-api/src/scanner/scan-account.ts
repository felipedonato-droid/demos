/**
 * Varredura admin da conta Zen Motorcycle via API.
 * Lê a configuração real (brands, groups, tickets, automations, triggers,
 * help center, etc.) e materializa a arquitetura em inventory/architecture.json.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ZendeskClient, ZendeskHttpError } from "../client/index.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = resolve(root, "inventory");
mkdirSync(outDir, { recursive: true });

type ProbeResult = {
  operationId: string;
  method: string;
  path: string;
  tag: string;
  status: "ok" | "error" | "skipped";
  httpStatus?: number;
  count?: number | null;
  error?: string;
  sampleKeys?: string[];
};

async function safeGet(
  client: ZendeskClient,
  operationId: string,
  path: string,
  tag: string
): Promise<ProbeResult> {
  try {
    const { data, response } = await client.http.request<Record<string, unknown>>(
      "GET",
      path
    );
    const count = extractCount(data);
    return {
      operationId,
      method: "GET",
      path,
      tag,
      status: "ok",
      httpStatus: response.status,
      count,
      sampleKeys: data && typeof data === "object" ? Object.keys(data).slice(0, 12) : [],
    };
  } catch (e) {
    if (e instanceof ZendeskHttpError) {
      return {
        operationId,
        method: "GET",
        path,
        tag,
        status: "error",
        httpStatus: e.status,
        error: typeof e.body === "object" ? JSON.stringify(e.body).slice(0, 300) : String(e.body),
      };
    }
    return {
      operationId,
      method: "GET",
      path,
      tag,
      status: "error",
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

function extractCount(data: unknown): number | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  if (d.count && typeof d.count === "object" && d.count !== null) {
    const c = d.count as Record<string, unknown>;
    if (typeof c.value === "number") return c.value;
  }
  for (const key of Object.keys(d)) {
    if (Array.isArray(d[key])) return (d[key] as unknown[]).length;
  }
  return null;
}

/** Endpoints de inventário (sem path params) — leitura segura da arquitetura. */
const ARCHITECTURE_READS: Array<{ operationId: string; path: string; tag: string }> = [
  { operationId: "ShowAccountSettings", path: "/api/v2/account/settings.json", tag: "Account Settings" },
  { operationId: "ListBrands", path: "/api/v2/brands.json", tag: "Brands" },
  { operationId: "ListGroups", path: "/api/v2/groups.json", tag: "Groups" },
  { operationId: "ListUsers", path: "/api/v2/users.json?role[]=admin&role[]=agent", tag: "Users" },
  { operationId: "ListOrganizations", path: "/api/v2/organizations.json", tag: "Organizations" },
  { operationId: "ListTicketFields", path: "/api/v2/ticket_fields.json", tag: "Ticket Fields" },
  { operationId: "ListTicketForms", path: "/api/v2/ticket_forms.json", tag: "Ticket Forms" },
  { operationId: "ListCustomStatuses", path: "/api/v2/custom_statuses.json", tag: "Custom Ticket Statuses" },
  { operationId: "ListViews", path: "/api/v2/views.json", tag: "Views" },
  { operationId: "ListMacros", path: "/api/v2/macros.json", tag: "Macros" },
  { operationId: "ListTriggers", path: "/api/v2/triggers.json", tag: "Triggers" },
  { operationId: "ListAutomations", path: "/api/v2/automations.json", tag: "Automations" },
  { operationId: "ListUserFields", path: "/api/v2/user_fields.json", tag: "User Fields" },
  { operationId: "ListOrganizationFields", path: "/api/v2/organization_fields.json", tag: "Organization Fields" },
  { operationId: "ListTarget", path: "/api/v2/targets.json", tag: "Targets" },
  { operationId: "ListWebhooks", path: "/api/v2/webhooks.json", tag: "Webhooks" },
  { operationId: "ListApps", path: "/api/v2/apps.json", tag: "Apps" },
  { operationId: "ListSchedules", path: "/api/v2/business_hours/schedules.json", tag: "Schedules" },
  { operationId: "ListSLAs", path: "/api/v2/slas/policies.json", tag: "SLA Policies" },
  { operationId: "ListSkills", path: "/api/v2/routing/attributes.json", tag: "Skill Based Routing" },
  { operationId: "ListCustomObjects", path: "/api/v2/custom_objects.json", tag: "Custom Objects" },
  { operationId: "ListLocales", path: "/api/v2/locales.json", tag: "Locales" },
  { operationId: "ListSupportAddresses", path: "/api/v2/recipient_addresses.json", tag: "Support Addresses" },
  { operationId: "CountTickets", path: "/api/v2/tickets/count.json", tag: "Tickets" },
  { operationId: "ListTickets", path: "/api/v2/tickets.json?page[size]=1", tag: "Tickets" },
  { operationId: "ListCategories", path: "/api/v2/help_center/categories.json", tag: "Categories" },
  { operationId: "ListSections", path: "/api/v2/help_center/sections.json", tag: "Sections" },
  { operationId: "ListArticles", path: "/api/v2/help_center/articles.json", tag: "Articles" },
  { operationId: "ListUserSegments", path: "/api/v2/help_center/user_segments.json", tag: "User Segments" },
  { operationId: "ShowMe", path: "/api/v2/users/me.json", tag: "Users" },
];

async function main() {
  const client = await ZendeskClient.fromOAuth();
  console.log(
    `Scanning ${client.http.subdomain}.zendesk.com via OAuth — catalog ${ZendeskClient.ENDPOINT_COUNT} endpoints (R=${ZendeskClient.READ_COUNT} W=${ZendeskClient.WRITE_COUNT})`
  );

  const me = await safeGet(client, "ShowMe", "/api/v2/users/me.json", "Users");
  if (me.status !== "ok") {
    console.error("Auth failed:", me);
    process.exit(1);
  }

  const probes: ProbeResult[] = [me];
  const snapshots: Record<string, unknown> = {};

  for (const item of ARCHITECTURE_READS) {
    if (item.operationId === "ShowMe") continue;
    const result = await safeGet(client, item.operationId, item.path, item.tag);
    probes.push(result);
    console.log(
      `${result.status === "ok" ? "OK" : "ERR"} GET ${item.path} ${result.httpStatus ?? ""} count=${result.count ?? "-"}`
    );
    if (result.status === "ok") {
      try {
        const { data } = await client.http.request("GET", item.path);
        snapshots[item.operationId] = data;
      } catch {
        /* already recorded */
      }
    }
    // gentle pacing
    await new Promise((r) => setTimeout(r, 80));
  }

  // Sweep ALL parameter-free READ endpoints from catalog (coverage proof)
  const freeReads = ZendeskClient.ENDPOINTS.filter(
    (e) => e.rw === "READ" && e.pathParams.length === 0 && e.product !== "conversations"
  );
  const coverage: ProbeResult[] = [];
  for (const ep of freeReads) {
    const path = ep.path.endsWith(".json") ? ep.path : `${ep.path}.json`;
    const result = await safeGet(client, ep.operationId, path, ep.tag);
    coverage.push(result);
    if (coverage.length % 25 === 0) {
      console.log(`coverage progress ${coverage.length}/${freeReads.length}`);
    }
    await new Promise((r) => setTimeout(r, 50));
  }

  const architecture = {
    scannedAt: new Date().toISOString(),
    subdomain: client.http.subdomain,
    catalog: {
      endpoints: ZendeskClient.ENDPOINT_COUNT,
      read: ZendeskClient.READ_COUNT,
      write: ZendeskClient.WRITE_COUNT,
    },
    me: snapshots.ShowMe ?? null,
    architectureProbes: probes,
    coverageSweep: {
      attempted: freeReads.length,
      ok: coverage.filter((c) => c.status === "ok").length,
      error: coverage.filter((c) => c.status === "error").length,
      byHttpStatus: coverage.reduce<Record<string, number>>((acc, c) => {
        const k = String(c.httpStatus ?? "none");
        acc[k] = (acc[k] ?? 0) + 1;
        return acc;
      }, {}),
      results: coverage,
    },
    snapshots,
  };

  writeFileSync(
    resolve(outDir, "architecture.json"),
    JSON.stringify(architecture, null, 2)
  );
  writeFileSync(
    resolve(outDir, "architecture-summary.json"),
    JSON.stringify(
      {
        scannedAt: architecture.scannedAt,
        subdomain: architecture.subdomain,
        catalog: architecture.catalog,
        architectureOk: probes.filter((p) => p.status === "ok").length,
        architectureErr: probes.filter((p) => p.status === "error").length,
        coverage: {
          attempted: architecture.coverageSweep.attempted,
          ok: architecture.coverageSweep.ok,
          error: architecture.coverageSweep.error,
          byHttpStatus: architecture.coverageSweep.byHttpStatus,
        },
        resourceCounts: Object.fromEntries(
          probes
            .filter((p) => p.status === "ok")
            .map((p) => [p.operationId, p.count])
        ),
      },
      null,
      2
    )
  );

  console.log(
    `Done. architecture.json written. coverage ok=${architecture.coverageSweep.ok}/${architecture.coverageSweep.attempted}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
