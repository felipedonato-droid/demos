// Auto-generated — 100% of OAS endpoints (READ + WRITE)
// Product: conversations — 69 operations / 17 resources
import type { ZendeskHttp } from './http.js';

/** Activities — 1 endpoints */
export class ActivitiesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/activity — Post Activity */
  async postActivity(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/activity".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
}

/** App Keys — 4 endpoints */
export class AppKeysApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/keys — Create App Key */
  async createAppKey(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/keys".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/keys — List App Keys */
  async listAppKeys(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/keys".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/keys/{keyId} — Get App Key */
  async getAppKey(appId: string | number, keyId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/keys/{keyId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{keyId}", encodeURIComponent(String(keyId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/keys/{keyId} — Delete App Key */
  async deleteAppKey(appId: string | number, keyId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/keys/{keyId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{keyId}", encodeURIComponent(String(keyId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Apps — 5 endpoints */
export class AppsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps — Create App */
  async createApp(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps — List Apps */
  async listApps(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId} — Get App */
  async getApp(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId} — Update App */
  async updateApp(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId} — Delete App */
  async deleteApp(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Attachments — 2 endpoints */
export class AttachmentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/attachments — Upload Attachment */
  async uploadAttachment(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/attachments".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/attachments/remove — Delete Attachment */
  async deleteAttachment_2(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/attachments/remove".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
}

/** Clients — 3 endpoints */
export class ClientsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/users/{userIdOrExternalId}/clients — Create Client */
  async createClient(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/clients".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/users/{userIdOrExternalId}/clients — List Clients */
  async listClients(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/clients".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId} — Remove Client */
  async removeClient(appId: string | number, userIdOrExternalId: string | number, clientId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId))).replaceAll("{clientId}", encodeURIComponent(String(clientId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Conversations — 7 endpoints */
export class ConversationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/conversations — Create Conversation */
  async createConversation(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/conversations — List Conversations */
  async listConversations(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/conversations/{conversationId} — Get Conversation */
  async getConversation(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/conversations/{conversationId} — Update Conversation */
  async updateConversation(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/conversations/{conversationId} — Delete Conversation */
  async deleteConversation(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/download — Download Message Ref */
  async downloadMessageRef(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/download".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/conversionEvents — Post Conversion Events */
  async postConversionEvents(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/conversionEvents".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
}

/** CustomIntegrationApiKeys — 4 endpoints */
export class CustomintegrationapikeysApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/integrations/{integrationId}/keys — Create Integration Key */
  async createCustomIntegrationKey(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/keys".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations/{integrationId}/keys — List Integration Keys */
  async listCustomIntegrationKeys(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/keys".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} — Get Integration Key */
  async getCustomIntegrationKey(appId: string | number, integrationId: string | number, keyId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId))).replaceAll("{keyId}", encodeURIComponent(String(keyId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} — Delete Integration Key */
  async deleteCustomIntegrationKey(appId: string | number, integrationId: string | number, keyId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId))).replaceAll("{keyId}", encodeURIComponent(String(keyId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Devices — 2 endpoints */
export class DevicesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /v2/apps/{appId}/users/{userIdOrExternalId}/devices — List Devices */
  async listDevices(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/devices".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/users/{userIdOrExternalId}/devices/{deviceId} — Get Device */
  async getDevice(appId: string | number, userIdOrExternalId: string | number, deviceId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/devices/{deviceId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId))).replaceAll("{deviceId}", encodeURIComponent(String(deviceId)));
    return this.http.request("GET", path, options);
  }
}

/** Integrations — 5 endpoints */
export class IntegrationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/integrations — Create Integration */
  async createIntegration(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations — List Integrations */
  async listIntegrations(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations/{integrationId} — Get Integration */
  async getIntegration(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/integrations/{integrationId} — Update Integration */
  async updateIntegration(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/integrations/{integrationId} — Delete Integration */
  async deleteIntegration(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Messages — 4 endpoints */
export class MessagesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/messages — Post Message */
  async postMessage(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/messages".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/conversations/{conversationId}/messages — List Messages */
  async listMessages(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/messages".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/conversations/{conversationId}/messages — Delete All Messages */
  async deleteAllMessages(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/messages".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/conversations/{conversationId}/messages/{messageId} — Delete Message */
  async deleteMessage(appId: string | number, conversationId: string | number, messageId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/messages/{messageId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId))).replaceAll("{messageId}", encodeURIComponent(String(messageId)));
    return this.http.request("DELETE", path, options);
  }
}

/** OAuth Endpoints — 4 endpoints */
export class OauthEndpointsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /v2/tokenInfo — Get Token Info */
  async getTokenInfo(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/tokenInfo";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /oauth/authorize — Authorize */
  async authorize(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/oauth/authorize";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /oauth/token — Get Token */
  async getToken(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/oauth/token";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /oauth/authorization — Revoke Access */
  async revokeAccess(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/oauth/authorization";
    return this.http.request("DELETE", path, options);
  }
}

/** Participants — 3 endpoints */
export class ParticipantsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/join — Join Conversation */
  async joinConversation(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/join".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/conversations/{conversationId}/participants — List Participants */
  async listParticipants(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/participants".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/leave — Leave Conversation */
  async leaveConversation(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/leave".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
}

/** Switchboard Actions — 4 endpoints */
export class SwitchboardActionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/passControl — Pass Control */
  async passControl(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/passControl".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/releaseControl — Release Control */
  async releaseControl(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/releaseControl".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/offerControl — Offer Control */
  async offerControl(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/offerControl".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/conversations/{conversationId}/acceptControl — Accept Control */
  async acceptControl(appId: string | number, conversationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/conversations/{conversationId}/acceptControl".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{conversationId}", encodeURIComponent(String(conversationId)));
    return this.http.request("POST", path, options);
  }
}

/** Switchboard Integrations — 4 endpoints */
export class SwitchboardIntegrationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations — Create Switchboard Integration */
  async createSwitchboardIntegration(appId: string | number, switchboardId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations — List Switchboard Integrations */
  async listSwitchboardIntegrations(appId: string | number, switchboardId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} — Update Switchboard Integration */
  async updateSwitchboardIntegration(appId: string | number, switchboardId: string | number, switchboardIntegrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId))).replaceAll("{switchboardIntegrationId}", encodeURIComponent(String(switchboardIntegrationId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} — Delete Switchboard Integration */
  async deleteSwitchboardIntegration(appId: string | number, switchboardId: string | number, switchboardIntegrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId))).replaceAll("{switchboardIntegrationId}", encodeURIComponent(String(switchboardIntegrationId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Switchboards — 4 endpoints */
export class SwitchboardsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/switchboards — Create Switchboard */
  async createSwitchboard(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/switchboards — List Switchboards */
  async listSwitchboards(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/switchboards/{switchboardId} — Update Switchboard */
  async updateSwitchboard(appId: string | number, switchboardId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/switchboards/{switchboardId} — Delete Switchboard */
  async deleteSwitchboard(appId: string | number, switchboardId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/switchboards/{switchboardId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{switchboardId}", encodeURIComponent(String(switchboardId)));
    return this.http.request("DELETE", path, options);
  }
}

/** Users — 7 endpoints */
export class UsersApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/users — Create User */
  async createUser_2(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/users — List Users */
  async listUsers_2(appId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users".replaceAll("{appId}", encodeURIComponent(String(appId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/users/{userIdOrExternalId} — Get User */
  async getUser(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/users/{userIdOrExternalId} — Update User */
  async updateUser_2(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/users/{userIdOrExternalId} — Delete User */
  async deleteUser_2(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation — Delete User Personal Information */
  async deleteUserPersonalInformation(appId: string | number, userIdOrExternalId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{userIdOrExternalId}", encodeURIComponent(String(userIdOrExternalId)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /v2/apps/{appId}/users/{zendeskId}/sync — Synchronize User */
  async syncUser(appId: string | number, zendeskId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/users/{zendeskId}/sync".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{zendeskId}", encodeURIComponent(String(zendeskId)));
    return this.http.request("POST", path, options);
  }
}

/** Webhooks — 6 endpoints */
export class WebhooksApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /v2/apps/{appId}/integrations/{integrationId}/webhooks — Create Webhook */
  async createWebhook(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/webhooks".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations/{integrationId}/webhooks — List Webhooks */
  async listWebhooks(appId: string | number, integrationId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/webhooks".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} — Get Webhook */
  async getWebhook(appId: string | number, integrationId: string | number, webhookId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId))).replaceAll("{webhookId}", encodeURIComponent(String(webhookId)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} — Update Webhook */
  async updateWebhook(appId: string | number, integrationId: string | number, webhookId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId))).replaceAll("{webhookId}", encodeURIComponent(String(webhookId)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} — Delete Webhook */
  async deleteWebhook(appId: string | number, integrationId: string | number, webhookId: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}".replaceAll("{appId}", encodeURIComponent(String(appId))).replaceAll("{integrationId}", encodeURIComponent(String(integrationId))).replaceAll("{webhookId}", encodeURIComponent(String(webhookId)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /oauth/authorization — Webhook Events */
  async eventWebhooks(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/oauth/authorization";
    return this.http.request("POST", path, options);
  }
}

export class ConversationsClient {
  readonly activities: ActivitiesApi;
  readonly appKeys: AppKeysApi;
  readonly apps: AppsApi;
  readonly attachments: AttachmentsApi;
  readonly clients: ClientsApi;
  readonly conversations: ConversationsApi;
  readonly customintegrationapikeys: CustomintegrationapikeysApi;
  readonly devices: DevicesApi;
  readonly integrations: IntegrationsApi;
  readonly messages: MessagesApi;
  readonly oauthEndpoints: OauthEndpointsApi;
  readonly participants: ParticipantsApi;
  readonly switchboardActions: SwitchboardActionsApi;
  readonly switchboardIntegrations: SwitchboardIntegrationsApi;
  readonly switchboards: SwitchboardsApi;
  readonly users: UsersApi;
  readonly webhooks: WebhooksApi;
  constructor(http: ZendeskHttp) {
    this.activities = new ActivitiesApi(http);
    this.appKeys = new AppKeysApi(http);
    this.apps = new AppsApi(http);
    this.attachments = new AttachmentsApi(http);
    this.clients = new ClientsApi(http);
    this.conversations = new ConversationsApi(http);
    this.customintegrationapikeys = new CustomintegrationapikeysApi(http);
    this.devices = new DevicesApi(http);
    this.integrations = new IntegrationsApi(http);
    this.messages = new MessagesApi(http);
    this.oauthEndpoints = new OauthEndpointsApi(http);
    this.participants = new ParticipantsApi(http);
    this.switchboardActions = new SwitchboardActionsApi(http);
    this.switchboardIntegrations = new SwitchboardIntegrationsApi(http);
    this.switchboards = new SwitchboardsApi(http);
    this.users = new UsersApi(http);
    this.webhooks = new WebhooksApi(http);
  }
}
