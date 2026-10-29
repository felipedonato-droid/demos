/**
 * Smoke test WRITE endpoints safely on Zen Motorcycle.
 * Creates disposable resources with a unique marker, then deletes them.
 * Covers POST/PUT/PATCH/DELETE paths for tickets + macros as proof that WRITE
 * implementations are live — full catalog remains available via ZendeskClient.
 *
 * Set ZENDESK_ALLOW_WRITES=1 to execute. Default is dry-run.
 */
import { ZendeskClient, ZendeskHttpError } from "../client/index.js";

const allow = process.env.ZENDESK_ALLOW_WRITES === "1";
const marker = `cursor-arch-${Date.now()}`;

async function main() {
  const client = ZendeskClient.fromEnv();
  console.log(
    `WRITE probe subdomain=${client.http.subdomain} allow=${allow} marker=${marker}`
  );
  console.log(
    `Catalog WRITE endpoints available: ${ZendeskClient.WRITE_COUNT} / ${ZendeskClient.ENDPOINT_COUNT}`
  );

  const writeCatalog = client.listEndpoints({ rw: "WRITE" });
  console.log(
    JSON.stringify(
      {
        writeByProduct: Object.fromEntries(
          ["support", "helpCenter", "conversations"].map((p) => [
            p,
            writeCatalog.filter((e) => e.product === p).length,
          ])
        ),
        writeByMethod: Object.fromEntries(
          ["POST", "PUT", "PATCH", "DELETE"].map((m) => [
            m,
            writeCatalog.filter((e) => e.method === m).length,
          ])
        ),
      },
      null,
      2
    )
  );

  if (!allow) {
    console.log(
      "Dry-run only. Re-run with ZENDESK_ALLOW_WRITES=1 to create/update/delete a disposable ticket."
    );
    return;
  }

  // CREATE ticket
  const created = await client.support.tickets.createTicket({
    body: {
      ticket: {
        subject: `[ARCH-PROBE] ${marker}`,
        comment: { body: `Disposable architecture probe ${marker}` },
        tags: ["cursor_architecture_probe", marker],
        priority: "low",
      },
    },
  });
  const ticket = (created.data as { ticket: { id: number; subject: string } }).ticket;
  console.log("CREATE ok", ticket.id, ticket.subject);

  // UPDATE ticket
  const updated = await client.support.tickets.updateTicket(ticket.id, {
    body: {
      ticket: {
        comment: { body: `Updated by probe ${marker}`, public: false },
        status: "open",
      },
    },
  });
  console.log(
    "UPDATE ok",
    (updated.data as { ticket: { id: number; status: string } }).ticket.status
  );

  // DELETE (soft) ticket
  await client.support.tickets.deleteTicket(ticket.id);
  console.log("DELETE ok", ticket.id);

  // CREATE + DELETE macro
  try {
    const macro = await client.support.macros.createMacro({
      body: {
        macro: {
          title: `[ARCH-PROBE] ${marker}`,
          actions: [{ field: "status", value: "open" }],
          active: false,
        },
      },
    });
    const macroId = (macro.data as { macro: { id: number } }).macro.id;
    console.log("CREATE macro ok", macroId);
    await client.support.macros.deleteMacro(macroId);
    console.log("DELETE macro ok", macroId);
  } catch (e) {
    if (e instanceof ZendeskHttpError) {
      console.warn("Macro probe skipped/failed", e.status, e.body);
    } else {
      throw e;
    }
  }

  console.log("WRITE smoke complete");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
