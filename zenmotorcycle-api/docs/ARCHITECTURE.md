# Zen Motorcycle — Arquitetura API Zendesk

Alvo: `https://zenmotorcycle.zendesk.com`  
Fontes: [API Reference](https://developer.zendesk.com/api-reference/) · [Documentation](https://developer.zendesk.com/documentation/) · OAS oficiais

## Cobertura obrigatória (100% READ + WRITE)

| Produto | Operações | READ | WRITE | Spec |
|---------|-----------|------|-------|------|
| Support (Ticketing) | 676 | — | — | `/zendesk/oas.yaml` |
| Help Center | 188 | — | — | `/help_center/oas.yaml` |
| Conversations (Sunshine) | 69 | — | — | sunshine-conversations-api-spec |
| **TOTAL** | **933** | **474** | **459** | |

### Métodos HTTP

- `GET`: 474
- `PUT`: 120
- `POST`: 185
- `DELETE`: 130
- `PATCH`: 24

### Recursos (tags) Support — top 20

- **Users**: 43
- **Tickets**: 36
- **Content Subscriptions**: 26
- **Macros**: 22
- **Views**: 20
- **Articles**: 20
- **Organizations**: 19
- **Skill Based Routing**: 19
- **Votes**: 19
- **Custom Object Records**: 17
- **Translations**: 17
- **Tags**: 16
- **Task Lists**: 15
- **Triggers**: 15
- **User Identities**: 14
- **Group Memberships**: 14
- **Organization Memberships**: 14
- **Sections**: 14
- **Groups**: 12
- **Requests**: 12

## Camadas da arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│  scanners / CLI (scan-account, probe-writes, coverage)      │
├─────────────────────────────────────────────────────────────┤
│  ZendeskClient                                              │
│   ├─ support.*        (92 recursos, 676 ops)                │
│   ├─ helpCenter.*     (19 recursos, 188 ops)                │
│   └─ conversations.*  (17 recursos, 69 ops)                 │
├─────────────────────────────────────────────────────────────┤
│  ZendeskHttp (Basic email/token · OAuth · rate headers)     │
├─────────────────────────────────────────────────────────────┤
│  OAS catalog (ENDPOINTS[]) — inventário canônico R/W        │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
              zenmotorcycle.zendesk.com/api/v2
```

## Autenticação admin

Basic Auth Zendesk API token:

- usuário: `{email}/token`
- senha: `{api_token}`
- secrets: `ZENDESK_SUBDOMAIN`, `ZENDESK_EMAIL`, `ZENDESK_API_TOKEN`

O token `jarvis` (prefixo `7ykUPeeH`) estava marcado para desativação em 2026-10-25. Use um token admin ativo.

## Varredura da conta

```bash
export ZENDESK_SUBDOMAIN=zenmotorcycle
export ZENDESK_EMAIL=...
export ZENDESK_API_TOKEN=...
npm run scan          # lê arquitetura + coverage de GETs sem path params
ZENDESK_ALLOW_WRITES=1 npm run probe-writes  # smoke CREATE/UPDATE/DELETE
npm run coverage      # valida 100% R/W no catálogo
```

Saídas:

- `inventory/endpoints.json` — catálogo completo
- `inventory/endpoints.csv` — planilha de endpoints
- `inventory/architecture.json` — snapshot live (após scan)
- `inventory/architecture-summary.json` — resumo

## Política WRITE

Todos os endpoints de escrita estão **implementados** no client tipado (`create*`, `update*`, `delete*`, `patch*`).  
O probe de escrita é opt-in (`ZENDESK_ALLOW_WRITES=1`) e só cria recursos descartáveis marcados `cursor_architecture_probe`.

## Produtos sem OAS público neste pacote

Talk Partner Edition, Live Chat REST legado, Sell CRM e alguns SDKs de widget **não** publicam OAS no mesmo formato em `developer.zendesk.com`.  
Support/Help Center/Conversations cobrem o núcleo documentado por OpenAPI. Endpoints Talk embutidos em Support (`/api/v2/channels/voice/*`) já estão no catálogo Support.

## Regeneração

```bash
npm run codegen   # reparseia specs/ e regenera src/client/*.generated.ts
```
