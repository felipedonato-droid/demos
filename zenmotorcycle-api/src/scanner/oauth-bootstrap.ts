/**
 * Materializa OAuth Bearer via client_credentials (confidential client).
 * Usa .oauth-client.json (gitignored). Não imprime secrets.
 */
import {
  defaultClientPath,
  defaultTokenPath,
  exchangeClientCredentials,
  loadJsonFile,
  saveTokenSet,
  type OAuthClientConfig,
} from "../client/oauth.js";
import { ZendeskClient } from "../client/index.js";

async function main() {
  const subdomain = "zenmotorcycle";
  const client = loadJsonFile<OAuthClientConfig>(defaultClientPath());
  if (!client?.identifier || !client.secret) {
    throw new Error(
      `Missing ${defaultClientPath()} with identifier+secret. Create confidential OAuth client first.`
    );
  }

  console.log(
    JSON.stringify({
      subdomain,
      grant: "client_credentials",
      identifier: client.identifier,
      clientPath: defaultClientPath(),
    })
  );

  const tokens = await exchangeClientCredentials({
    subdomain,
    clientId: client.identifier,
    clientSecret: client.secret,
  });
  tokens.client_secret = client.secret;
  tokens.identifier = client.identifier;
  tokens.client_id = client.client_id;
  saveTokenSet(tokens);

  const zd = await ZendeskClient.fromOAuth();
  const { data } = await zd.http.request<{
    user: { id: number; role: string; name: string; email: string };
  }>("GET", "/api/v2/users/me.json");

  console.log(
    JSON.stringify({
      auth: "oauth_bearer",
      grant: "client_credentials",
      me: {
        id: data.user.id,
        role: data.user.role,
        name: data.user.name,
        email: data.user.email,
      },
      catalog: {
        endpoints: ZendeskClient.ENDPOINT_COUNT,
        read: ZendeskClient.READ_COUNT,
        write: ZendeskClient.WRITE_COUNT,
      },
      tokenPath: defaultTokenPath(),
    })
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
