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
import {
  defaultClientPath,
  defaultTokenPath,
  exchangeRefreshToken,
  loadJsonFile,
  resolveOAuthAccessToken,
  saveTokenSet,
  type OAuthClientConfig,
  type OAuthTokenSet,
} from "./oauth.js";

export * from "./http.js";
export * from "./catalog.js";
export * from "./oauth.js";
export { SupportClient } from "./support.generated.js";
export { HelpCenterClient } from "./helpCenter.generated.js";
export { ConversationsClient } from "./conversations.generated.js";
// Resource *Api classes are available via product clients to avoid cross-product name clashes
// (e.g. Support UsersApi vs Conversations UsersApi).

/**
 * Full Zendesk API surface for Zen Motorcycle.
 * Implements 100% of Support + Help Center + Conversations OAS operations (READ + WRITE).
 * Auth: OAuth Bearer (refresh-capable). API token Basic Auth is not used by default.
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

  /** Preferred: OAuth Bearer from env / .oauth-tokens.json with auto-refresh. */
  static async fromOAuth(
    env: NodeJS.ProcessEnv = process.env
  ): Promise<ZendeskClient> {
    const resolved = await resolveOAuthAccessToken(env);
    const clientFile = loadJsonFile<OAuthClientConfig>(defaultClientPath());
    const tokenFile = loadJsonFile<OAuthTokenSet>(defaultTokenPath());
    const identifier =
      env.ZENDESK_OAUTH_CLIENT_ID ||
      clientFile?.identifier ||
      tokenFile?.identifier ||
      resolved.tokens?.identifier;
    const secret =
      env.ZENDESK_OAUTH_CLIENT_SECRET ||
      clientFile?.secret ||
      tokenFile?.client_secret ||
      resolved.tokens?.client_secret;
    let refreshToken =
      env.ZENDESK_OAUTH_REFRESH_TOKEN ||
      tokenFile?.refresh_token ||
      resolved.tokens?.refresh_token ||
      undefined;

    const auth: AuthConfig = {
      type: "oauth",
      accessToken: resolved.accessToken,
      refresh:
        identifier && secret
          ? async () => {
              const { exchangeClientCredentials } = await import("./oauth.js");
              const next = await exchangeClientCredentials({
                subdomain: resolved.subdomain,
                clientId: identifier,
                clientSecret: secret,
              });
              next.client_secret = secret;
              next.identifier = identifier;
              next.client_id = clientFile?.client_id ?? tokenFile?.client_id;
              saveTokenSet(next);
              return next.access_token;
            }
          : identifier && refreshToken
            ? async () => {
                const next = await exchangeRefreshToken({
                  subdomain: resolved.subdomain,
                  clientId: identifier,
                  clientSecret: secret,
                  refreshToken: refreshToken!,
                });
                refreshToken = next.refresh_token || refreshToken;
                next.client_secret = secret;
                next.identifier = identifier;
                next.client_id = clientFile?.client_id ?? tokenFile?.client_id;
                saveTokenSet(next);
                return next.access_token;
              }
            : undefined,
    };
    return new ZendeskClient({ subdomain: resolved.subdomain, auth });
  }

  /** Sync helper used by scanners — requires OAuth already materialized. */
  static fromEnv(env: NodeJS.ProcessEnv = process.env): ZendeskClient {
    const tokenFile = loadJsonFile<OAuthTokenSet>(defaultTokenPath());
    const access =
      env.ZENDESK_OAUTH_ACCESS_TOKEN || tokenFile?.access_token || undefined;
    const subdomain =
      env.ZENDESK_OAUTH_SUBDOMAIN ||
      tokenFile?.subdomain ||
      (env.ZENDESK_SUBDOMAIN && !/^[A-Za-z0-9]{40,}$/.test(env.ZENDESK_SUBDOMAIN)
        ? env.ZENDESK_SUBDOMAIN
        : "zenmotorcycle");
    if (!access) {
      throw new Error(
        "OAuth access token missing. Run: npx tsx src/scanner/oauth-bootstrap.ts or ZendeskClient.fromOAuth()"
      );
    }
    const clientFile = loadJsonFile<OAuthClientConfig>(defaultClientPath());
    const identifier =
      env.ZENDESK_OAUTH_CLIENT_ID ||
      clientFile?.identifier ||
      tokenFile?.identifier;
    const secret =
      env.ZENDESK_OAUTH_CLIENT_SECRET ||
      clientFile?.secret ||
      tokenFile?.client_secret;
    let refreshToken =
      env.ZENDESK_OAUTH_REFRESH_TOKEN || tokenFile?.refresh_token || undefined;

    const auth: AuthConfig = {
      type: "oauth",
      accessToken: access,
      refresh:
        identifier && refreshToken
          ? async () => {
              const next = await exchangeRefreshToken({
                subdomain,
                clientId: identifier,
                clientSecret: secret,
                refreshToken: refreshToken!,
              });
              refreshToken = next.refresh_token || refreshToken;
              next.client_secret = secret;
              next.identifier = identifier;
              saveTokenSet(next);
              return next.access_token;
            }
          : undefined,
    };
    return new ZendeskClient({ subdomain, auth });
  }
}
