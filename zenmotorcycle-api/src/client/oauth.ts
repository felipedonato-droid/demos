/**
 * Zendesk OAuth (authorization-code / refresh / client bootstrap).
 * Preferred auth for Zen Motorcycle — never commit tokens.
 *
 * Docs:
 * - https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/
 * - https://developer.zendesk.com/documentation/authentication/refresh-token/
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export type OAuthTokenSet = {
  subdomain: string;
  token_type: "Bearer";
  access_token: string;
  refresh_token?: string | null;
  client_id?: number | string;
  identifier?: string;
  client_secret?: string;
  scopes?: string[];
  expires_at?: string | null;
  refresh_token_expires_at?: string | null;
  id?: number;
};

export type OAuthClientConfig = {
  subdomain: string;
  client_id?: number | string;
  identifier: string;
  secret: string;
  redirect_uri: string;
};

const DEFAULT_SCOPE = "read write";

function repoRootFromHere(): string {
  // src/client/oauth.ts -> ../../
  return resolve(dirname(fileURLToPath(import.meta.url)), "../..");
}

export function defaultTokenPath(): string {
  return (
    process.env.ZENDESK_OAUTH_TOKEN_FILE ||
    resolve(repoRootFromHere(), ".oauth-tokens.json")
  );
}

export function defaultClientPath(): string {
  return (
    process.env.ZENDESK_OAUTH_CLIENT_FILE ||
    resolve(repoRootFromHere(), ".oauth-client.json")
  );
}

export function loadJsonFile<T>(path: string): T | null {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

export function saveTokenSet(tokens: OAuthTokenSet, path = defaultTokenPath()) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(tokens, null, 2) + "\n", { mode: 0o600 });
}

export async function exchangeRefreshToken(opts: {
  subdomain: string;
  clientId: string;
  clientSecret?: string;
  refreshToken: string;
  scope?: string;
  expiresIn?: number;
  refreshTokenExpiresIn?: number;
}): Promise<OAuthTokenSet> {
  const body: Record<string, unknown> = {
    grant_type: "refresh_token",
    refresh_token: opts.refreshToken,
    client_id: opts.clientId,
    scope: opts.scope ?? DEFAULT_SCOPE,
  };
  if (opts.clientSecret) body.client_secret = opts.clientSecret;
  if (opts.expiresIn) body.expires_in = opts.expiresIn;
  if (opts.refreshTokenExpiresIn) {
    body.refresh_token_expires_in = opts.refreshTokenExpiresIn;
  }

  const res = await fetch(`https://${opts.subdomain}.zendesk.com/oauth/tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    throw new Error(
      `OAuth refresh failed HTTP ${res.status}: ${JSON.stringify(data).slice(0, 400)}`
    );
  }
  return {
    subdomain: opts.subdomain,
    token_type: "Bearer",
    access_token: String(data.access_token),
    refresh_token: (data.refresh_token as string) ?? opts.refreshToken,
    identifier: opts.clientId,
    client_secret: opts.clientSecret,
    scopes: String(data.scope || opts.scope || DEFAULT_SCOPE).split(/\s+/),
    expires_at: data.expires_in
      ? new Date(Date.now() + Number(data.expires_in) * 1000).toISOString()
      : null,
  };
}

export async function exchangeClientCredentials(opts: {
  subdomain: string;
  clientId: string;
  clientSecret: string;
  scope?: string;
}): Promise<OAuthTokenSet> {
  const res = await fetch(`https://${opts.subdomain}.zendesk.com/oauth/tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: opts.clientId,
      client_secret: opts.clientSecret,
      scope: opts.scope ?? DEFAULT_SCOPE,
    }),
  });
  const data = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    throw new Error(
      `OAuth client_credentials failed HTTP ${res.status}: ${JSON.stringify(data).slice(0, 400)}`
    );
  }
  return {
    subdomain: opts.subdomain,
    token_type: "Bearer",
    access_token: String(data.access_token),
    refresh_token: (data.refresh_token as string) || null,
    identifier: opts.clientId,
    client_secret: opts.clientSecret,
    scopes: String(data.scope || opts.scope || DEFAULT_SCOPE).split(/\s+/),
  };
}

export async function exchangeAuthorizationCode(opts: {
  subdomain: string;
  clientId: string;
  clientSecret?: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
  scope?: string;
}): Promise<OAuthTokenSet> {
  const body: Record<string, unknown> = {
    grant_type: "authorization_code",
    code: opts.code,
    client_id: opts.clientId,
    redirect_uri: opts.redirectUri,
    scope: opts.scope ?? DEFAULT_SCOPE,
  };
  if (opts.clientSecret) body.client_secret = opts.clientSecret;
  if (opts.codeVerifier) body.code_verifier = opts.codeVerifier;

  const res = await fetch(`https://${opts.subdomain}.zendesk.com/oauth/tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    throw new Error(
      `OAuth authorization_code failed HTTP ${res.status}: ${JSON.stringify(data).slice(0, 400)}`
    );
  }
  return {
    subdomain: opts.subdomain,
    token_type: "Bearer",
    access_token: String(data.access_token),
    refresh_token: (data.refresh_token as string) || null,
    identifier: opts.clientId,
    client_secret: opts.clientSecret,
    scopes: String(data.scope || opts.scope || DEFAULT_SCOPE).split(/\s+/),
  };
}

/** Build authorize URL for interactive consent (PKCE optional). */
export function buildAuthorizeUrl(opts: {
  subdomain: string;
  clientId: string;
  redirectUri: string;
  scope?: string;
  state?: string;
  codeChallenge?: string;
}): string {
  const u = new URL(`https://${opts.subdomain}.zendesk.com/oauth/authorizations/new`);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("client_id", opts.clientId);
  u.searchParams.set("redirect_uri", opts.redirectUri);
  u.searchParams.set("scope", opts.scope ?? DEFAULT_SCOPE);
  if (opts.state) u.searchParams.set("state", opts.state);
  if (opts.codeChallenge) {
    u.searchParams.set("code_challenge", opts.codeChallenge);
    u.searchParams.set("code_challenge_method", "S256");
  }
  return u.toString();
}

/**
 * Resolve a usable access token from env + local oauth files.
 * Preference: explicit ACCESS_TOKEN → refresh_token flow → token file → client_credentials.
 */
export async function resolveOAuthAccessToken(
  env: NodeJS.ProcessEnv = process.env
): Promise<{ subdomain: string; accessToken: string; tokens?: OAuthTokenSet }> {
  const subdomain =
    env.ZENDESK_OAUTH_SUBDOMAIN ||
    (env.ZENDESK_SUBDOMAIN && !/^[A-Za-z0-9]{40,}$/.test(env.ZENDESK_SUBDOMAIN)
      ? env.ZENDESK_SUBDOMAIN
      : null) ||
    loadJsonFile<OAuthTokenSet>(defaultTokenPath())?.subdomain ||
    "zenmotorcycle";

  if (env.ZENDESK_OAUTH_ACCESS_TOKEN) {
    return { subdomain, accessToken: env.ZENDESK_OAUTH_ACCESS_TOKEN };
  }

  const clientFile = loadJsonFile<OAuthClientConfig>(defaultClientPath());
  const tokenFile = loadJsonFile<OAuthTokenSet>(defaultTokenPath());
  const identifier =
    env.ZENDESK_OAUTH_CLIENT_ID ||
    clientFile?.identifier ||
    tokenFile?.identifier ||
    undefined;
  const secret =
    env.ZENDESK_OAUTH_CLIENT_SECRET || clientFile?.secret || tokenFile?.client_secret;
  const refresh =
    env.ZENDESK_OAUTH_REFRESH_TOKEN || tokenFile?.refresh_token || undefined;

  // Confidential clients: client_credentials is the durable server-to-server grant.
  if (identifier && secret) {
    const tokens = await exchangeClientCredentials({
      subdomain,
      clientId: identifier,
      clientSecret: secret,
    });
    tokens.client_secret = secret;
    tokens.identifier = identifier;
    tokens.client_id = clientFile?.client_id ?? tokenFile?.client_id;
    saveTokenSet(tokens);
    return { subdomain, accessToken: tokens.access_token, tokens };
  }

  if (refresh && identifier) {
    try {
      const tokens = await exchangeRefreshToken({
        subdomain,
        clientId: identifier,
        clientSecret: secret,
        refreshToken: refresh,
      });
      tokens.client_secret = secret;
      tokens.identifier = identifier;
      tokens.client_id = clientFile?.client_id ?? tokenFile?.client_id;
      saveTokenSet(tokens);
      return { subdomain, accessToken: tokens.access_token, tokens };
    } catch {
      // Fall through to stored access_token.
    }
  }

  if (tokenFile?.access_token) {
    return { subdomain, accessToken: tokenFile.access_token, tokens: tokenFile };
  }

  throw new Error(
    "OAuth credentials missing. Need ZENDESK_OAUTH_ACCESS_TOKEN or refresh_token+client_id, or .oauth-tokens.json"
  );
}
