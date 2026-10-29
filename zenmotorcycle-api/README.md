# Zen Motorcycle — Zendesk API Architecture

Client + inventário + scanners para `zenmotorcycle.zendesk.com` com **100% dos endpoints OAS** (leitura e escrita).

## Cobertura

| Produto | Ops | READ | WRITE |
|---------|-----|------|-------|
| Support | 676 | 350 | 326 |
| Help Center | 188 | 101 | 87 |
| Conversations | 69 | 23 | 46 |
| **Total** | **933** | **474** | **459** |

Specs oficiais em `specs/`. Catálogo em `inventory/endpoints.json`.

## Setup

```bash
cp .env.example .env   # preencha ZENDESK_EMAIL + ZENDESK_API_TOKEN
npm install
npm run coverage       # prova 100% R/W no catálogo
npm run scan           # varre a conta admin e gera architecture.json
ZENDESK_ALLOW_WRITES=1 npm run probe-writes
```

Secrets necessárias:

- `ZENDESK_SUBDOMAIN=zenmotorcycle`
- `ZENDESK_EMAIL` (admin)
- `ZENDESK_API_TOKEN` (token ativo)

## Uso do client

```ts
import { ZendeskClient } from "./src/client/index.js";

const zd = ZendeskClient.fromEnv();

// READ
await zd.support.tickets.listTickets();
await zd.helpCenter.articles.listArticles();

// WRITE
await zd.support.tickets.createTicket({
  body: { ticket: { subject: "Hi", comment: { body: "..." } } },
});

// Qualquer operationId do catálogo
await zd.invoke("ListAutomations");
```

## Docs

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- [developer.zendesk.com/api-reference](https://developer.zendesk.com/api-reference/)
- [developer.zendesk.com/documentation](https://developer.zendesk.com/documentation/)
