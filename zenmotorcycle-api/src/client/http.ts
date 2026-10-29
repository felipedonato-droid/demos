/**
 * Zendesk HTTP transport — Basic Auth (email/token) + OAuth bearer.
 * Implements rate-limit awareness and JSON helpers for ALL products.
 */
export type AuthConfig =
  | { type: "apiToken"; email: string; token: string }
  | { type: "oauth"; accessToken: string }
  | { type: "basic"; email: string; password: string };

export interface ClientOptions {
  subdomain: string;
  auth: AuthConfig;
  /** Override host, e.g. for Conversations apps API */
  baseUrl?: string;
  userAgent?: string;
  fetchImpl?: typeof fetch;
}

export class ZendeskHttpError extends Error {
  constructor(
    message: string,
    public status: number,
    public body: unknown,
    public response: Response
  ) {
    super(message);
    this.name = "ZendeskHttpError";
  }
}

export class ZendeskHttp {
  readonly subdomain: string;
  readonly baseUrl: string;
  private auth: AuthConfig;
  private fetchImpl: typeof fetch;
  private userAgent: string;

  constructor(opts: ClientOptions) {
    this.subdomain = opts.subdomain;
    this.baseUrl = opts.baseUrl ?? `https://${opts.subdomain}.zendesk.com`;
    this.auth = opts.auth;
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.userAgent = opts.userAgent ?? "zenmotorcycle-api-architecture/1.0";
  }

  private authHeader(): string {
    if (this.auth.type === "oauth") return `Bearer ${this.auth.accessToken}`;
    const user =
      this.auth.type === "apiToken"
        ? `${this.auth.email}/token`
        : this.auth.email;
    const pass =
      this.auth.type === "apiToken" ? this.auth.token : this.auth.password;
    const raw = Buffer.from(`${user}:${pass}`).toString("base64");
    return `Basic ${raw}`;
  }

  async request<T = unknown>(
    method: string,
    path: string,
    init: {
      query?: Record<string, string | number | boolean | undefined | null>;
      body?: unknown;
      headers?: Record<string, string>;
      rawBody?: BodyInit;
      contentType?: string;
    } = {}
  ): Promise<{ data: T; response: Response }> {
    const url = new URL(
      path.startsWith("http") ? path : `${this.baseUrl}${path}`
    );
    if (init.query) {
      for (const [k, v] of Object.entries(init.query)) {
        if (v === undefined || v === null) continue;
        url.searchParams.set(k, String(v));
      }
    }
    const headers: Record<string, string> = {
      Authorization: this.authHeader(),
      Accept: "application/json",
      "User-Agent": this.userAgent,
      ...init.headers,
    };
    let body: BodyInit | undefined = init.rawBody;
    if (init.body !== undefined) {
      headers["Content-Type"] = init.contentType ?? "application/json";
      body = JSON.stringify(init.body);
    }
    const response = await this.fetchImpl(url.toString(), {
      method,
      headers,
      body,
    });
    const text = await response.text();
    let data: unknown = undefined;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }
    if (!response.ok) {
      throw new ZendeskHttpError(
        `${method} ${path} -> ${response.status}`,
        response.status,
        data,
        response
      );
    }
    return { data: data as T, response };
  }
}
