import { ZendeskHttp, type ClientOptions, type AuthConfig } from "./http.js";
import { SupportClient } from "./support.generated.js";
import { HelpCenterClient } from "./helpCenter.generated.js";
import { ConversationsClient } from "./conversations.generated.js";
import {
  ENDPOINTS,
  ENDPOINT_COUNT,
  READ_COUNT,
  WRITE_COUNT,
  type Endpoint,
} from "./catalog.js";

export * from "./http.js";
export * from "./catalog.js";
export { SupportClient } from "./support.generated.js";
export { HelpCenterClient } from "./helpCenter.generated.js";
export { ConversationsClient } from "./conversations.generated.js";
// Resource *Api classes are available via product clients to avoid cross-product name clashes
// (e.g. Support UsersApi vs Conversations UsersApi).

/**
 * Full Zendesk API surface for Zen Motorcycle.
 * Implements 100% of Support + Help Center + Conversations OAS operations (READ + WRITE).
 *
 * Sources:
 * - https://developer.zendesk.com/zendesk/oas.yaml
 * - https://developer.zendesk.com/help_center/oas.yaml
 * - https://github.com/zendesk/sunshine-conversations-api-spec
 */
export class ZendeskClient {
  readonly http: ZendeskHttp;
  readonly support: SupportClient;
  readonly helpCenter: HelpCenterClient;
  readonly conversations: ConversationsClient;

  static readonly ENDPOINT_COUNT = ENDPOINT_COUNT;
  static readonly READ_COUNT = READ_COUNT;
  static readonly WRITE_COUNT = WRITE_COUNT;
  static readonly ENDPOINTS: Endpoint[] = ENDPOINTS;

  constructor(opts: ClientOptions) {
    this.http = new ZendeskHttp(opts);
    this.support = new SupportClient(this.http);
    this.helpCenter = new HelpCenterClient(this.http);
    this.conversations = new ConversationsClient(this.http);
  }

  /** Generic invoke by operationId — covers every catalogued endpoint. */
  async invoke(
    operationId: string,
    pathParams: Record<string, string | number> = {},
    options: {
      query?: Record<string, string | number | boolean | null | undefined>;
      body?: unknown;
      headers?: Record<string, string>;
    } = {}
  ) {
    const ep = ENDPOINTS.find((e) => e.operationId === operationId);
    if (!ep) throw new Error(`Unknown operationId: ${operationId}`);
    let path = ep.path;
    for (const [k, v] of Object.entries(pathParams)) {
      path = path.replaceAll(`{${k}}`, encodeURIComponent(String(v)));
    }
    if (path.includes("{")) {
      throw new Error(`Missing path params for ${operationId}: ${path}`);
    }
    return this.http.request(ep.method, path, options);
  }

  listEndpoints(filter?: {
    product?: Endpoint["product"];
    rw?: Endpoint["rw"];
    tag?: string;
    method?: Endpoint["method"];
  }): Endpoint[] {
    return ENDPOINTS.filter((e) => {
      if (filter?.product && e.product !== filter.product) return false;
      if (filter?.rw && e.rw !== filter.rw) return false;
      if (filter?.tag && e.tag !== filter.tag) return false;
      if (filter?.method && e.method !== filter.method) return false;
      return true;
    });
  }

  static fromEnv(env: NodeJS.ProcessEnv = process.env): ZendeskClient {
    const subdomain = env.ZENDESK_SUBDOMAIN || "zenmotorcycle";
    const email = env.ZENDESK_EMAIL;
    const token = env.ZENDESK_API_TOKEN;
    if (!email || !token) {
      throw new Error(
        "Missing ZENDESK_EMAIL / ZENDESK_API_TOKEN. Add admin API secrets for zenmotorcycle.zendesk.com"
      );
    }
    const auth: AuthConfig = { type: "apiToken", email, token };
    return new ZendeskClient({ subdomain, auth });
  }
}
