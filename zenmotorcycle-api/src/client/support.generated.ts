// Auto-generated — 100% of OAS endpoints (READ + WRITE)
// Product: support — 676 operations / 92 resources
import type { ZendeskHttp } from './http.js';

/** API Tokens — 4 endpoints */
export class ApiTokensApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/api_tokens — List API Tokens */
  async listApiTokens(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/api_tokens";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/api_tokens — Create API Token */
  async createApiToken(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/api_tokens";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/api_tokens/{id} — Update API Token */
  async updateApiToken(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/api_tokens/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/api_tokens/{id} — Delete API Token */
  async deleteApiToken(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/api_tokens/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Account Settings — 4 endpoints */
export class AccountSettingsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/account/email_settings — Show Email Settings */
  async getAccountEmailSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/account/email_settings";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/account/email_settings — Update Email Settings */
  async updateAccountEmailSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/account/email_settings";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/account/settings — Show Settings */
  async showAccountSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/account/settings";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/account/settings — Update Account Settings */
  async updateAccountSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/account/settings";
    return this.http.request("PUT", path, options);
  }
}

/** Activity Stream — 3 endpoints */
export class ActivityStreamApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/activities — List Activities */
  async listActivities(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/activities";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/activities/{activity_id} — Show Activity */
  async showActivity(activity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/activities/{activity_id}".replaceAll("{activity_id}", encodeURIComponent(String(activity_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/activities/count — Count Activities */
  async countActivities(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/activities/count";
    return this.http.request("GET", path, options);
  }
}

/** Approval Requests — 7 endpoints */
export class ApprovalRequestsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/approval_clarification_flow_messages — Create Approval Clarification Flow Message */
  async createApprovalClarificationFlowMessage(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_clarification_flow_messages";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/approval_clarification_flow_messages/{approval_request_id} — Show Approval Clarification Flow Messages */
  async showApprovalClarificationFlowMessages(approval_request_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_clarification_flow_messages/{approval_request_id}".replaceAll("{approval_request_id}", encodeURIComponent(String(approval_request_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/approval_requests — List Approval Requests */
  async listApprovalRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_requests";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/approval_requests — Create Approval Request */
  async createApprovalRequest(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_requests";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id} — Show Approval Request */
  async showApprovalWorkflowInstanceApprovalRequest(workflow_instance_id: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id}".replaceAll("{workflow_instance_id}", encodeURIComponent(String(workflow_instance_id))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id}/decision — Decide Approval Request */
  async decideApprovalRequest(workflow_instance_id: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id}/decision".replaceAll("{workflow_instance_id}", encodeURIComponent(String(workflow_instance_id))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] PATCH /api/v2/approval_workflow_instances/{workflow_instance_id}/withdraw — Withdraw Approval Workflow Instance */
  async withdrawApprovalWorkflowInstance(workflow_instance_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/approval_workflow_instances/{workflow_instance_id}/withdraw".replaceAll("{workflow_instance_id}", encodeURIComponent(String(workflow_instance_id)));
    return this.http.request("PATCH", path, options);
  }
}

/** Attachments — 6 endpoints */
export class AttachmentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/attachments/{attachment_id} — Show Attachment */
  async showAttachment(attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/attachments/{attachment_id}".replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/attachments/{attachment_id} — Update Attachment for Malware */
  async updateAttachment(attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/attachments/{attachment_id}".replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/attachments/{attachment_id} — Delete Attachment */
  async deleteAttachment(attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/attachments/{attachment_id}".replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/comments/{comment_id}/attachments/{attachment_id}/redact — Redact Comment Attachment */
  async redactCommentAttachment(ticket_id: string | number, comment_id: string | number, attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/comments/{comment_id}/attachments/{attachment_id}/redact".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id))).replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] POST /api/v2/uploads — Upload Files */
  async uploadFiles(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/uploads";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/uploads/{token} — Delete Upload */
  async deleteUpload(token: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/uploads/{token}".replaceAll("{token}", encodeURIComponent(String(token)));
    return this.http.request("DELETE", path, options);
  }
}

/** Audit Logs — 3 endpoints */
export class AuditLogsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/audit_logs — List Audit Logs */
  async listAuditLogs(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/audit_logs";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/audit_logs/{audit_log_id} — Show Audit Log */
  async showAuditLog(audit_log_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/audit_logs/{audit_log_id}".replaceAll("{audit_log_id}", encodeURIComponent(String(audit_log_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/audit_logs/export — Export Audit Logs */
  async exportAuditLogs(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/audit_logs/export";
    return this.http.request("POST", path, options);
  }
}

/** Automations — 9 endpoints */
export class AutomationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/automations — List Automations */
  async listAutomations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/automations — Create Automation */
  async createAutomation(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/automations/{automation_id} — Show Automation */
  async showAutomation(automation_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/{automation_id}".replaceAll("{automation_id}", encodeURIComponent(String(automation_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/automations/{automation_id} — Update Automation */
  async updateAutomation(automation_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/{automation_id}".replaceAll("{automation_id}", encodeURIComponent(String(automation_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/automations/{automation_id} — Delete Automation */
  async deleteAutomation(automation_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/{automation_id}".replaceAll("{automation_id}", encodeURIComponent(String(automation_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/automations/active — List Active Automations */
  async listActiveAutomations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/active";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/automations/destroy_many — Bulk Delete Automations */
  async bulkDeleteAutomations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/automations/search — Search Automations */
  async searchAutomations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/search";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/automations/update_many — Update Many Automations */
  async updateManyAutomations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/automations/update_many";
    return this.http.request("PUT", path, options);
  }
}

/** Basics — 3 endpoints */
export class BasicsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/channels/voice/agents/{agent_id}/tickets/{ticket_id}/display — Open Ticket in Agent's Browser */
  async openTicketInAgentBrowser(agent_id: string | number, ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/voice/agents/{agent_id}/tickets/{ticket_id}/display".replaceAll("{agent_id}", encodeURIComponent(String(agent_id))).replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/channels/voice/agents/{agent_id}/users/{user_id}/display — Open a User's Profile in an Agent's Browser */
  async openUsersProfileInAgentBrowser(agent_id: string | number, user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/voice/agents/{agent_id}/users/{user_id}/display".replaceAll("{agent_id}", encodeURIComponent(String(agent_id))).replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/channels/voice/tickets — Create Ticket or Voicemail Ticket */
  async createTicketOrVoicemailTicket(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/voice/tickets";
    return this.http.request("POST", path, options);
  }
}

/** Bookmarks — 3 endpoints */
export class BookmarksApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/bookmarks — List Bookmarks */
  async listBookmarks(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/bookmarks";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/bookmarks — Create Bookmark */
  async createBookmark(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/bookmarks";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/bookmarks/{bookmark_id} — Delete Bookmark */
  async deleteBookmark(bookmark_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/bookmarks/{bookmark_id}".replaceAll("{bookmark_id}", encodeURIComponent(String(bookmark_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Brand Agents — 7 endpoints */
export class BrandAgentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/brand_agents — List Brand Agent Memberships */
  async listBrandAgents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brand_agents";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/brand_agents — Create Brand Agent Membership */
  async createBrandAgent(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brand_agents";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/brand_agents/{brand_agent_id} — Show Brand Agent Membership */
  async showBrandAgentById(brand_agent_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brand_agents/{brand_agent_id}".replaceAll("{brand_agent_id}", encodeURIComponent(String(brand_agent_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/brand_agents/{brand_agent_id} — Delete Brand Agent Membership */
  async deleteBrandAgentById(brand_agent_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brand_agents/{brand_agent_id}".replaceAll("{brand_agent_id}", encodeURIComponent(String(brand_agent_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/brands/{brand_id}/agents — List Agents By Brand */
  async listBrandAgentsByBrand(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/agents".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/brand_agents — List Brand Agent Memberships By User */
  async listUserBrandAgents(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/brand_agents".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/brand_agents/{brand_agent_id} — Show Brand Agent Membership By User */
  async showUserBrandAgentById(user_id: string | number, brand_agent_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/brand_agents/{brand_agent_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{brand_agent_id}", encodeURIComponent(String(brand_agent_id)));
    return this.http.request("GET", path, options);
  }
}

/** Brand User Migrations — 4 endpoints */
export class BrandUserMigrationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/brands/{brand_id}/user_migrations — List Brand User Migrations */
  async listBrandUserMigrations(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/user_migrations".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/brands/{brand_id}/user_migrations — Create Brand User Migration */
  async createBrandUserMigration(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/user_migrations".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/brands/{brand_id}/user_migrations/{migration_id} — Show Brand User Migration */
  async showBrandUserMigration(brand_id: string | number, migration_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/user_migrations/{migration_id}".replaceAll("{brand_id}", encodeURIComponent(String(brand_id))).replaceAll("{migration_id}", encodeURIComponent(String(migration_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/brands/{brand_id}/user_migrations/{migration_id} — Update Brand User Migration */
  async updateBrandUserMigration(brand_id: string | number, migration_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/user_migrations/{migration_id}".replaceAll("{brand_id}", encodeURIComponent(String(brand_id))).replaceAll("{migration_id}", encodeURIComponent(String(migration_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Brands — 9 endpoints */
export class BrandsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/brands — List Brands */
  async listBrands(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/brands — Create Brand */
  async createBrand(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/brands/{brand_id} — Show a Brand */
  async showBrand(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/brands/{brand_id} — Update a Brand */
  async updateBrand(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/brands/{brand_id} — Delete a Brand */
  async deleteBrand(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/brands/{brand_id}/check_host_mapping — Check Host Mapping Validity for an Existing Brand */
  async checkHostMappingValidityForExistingBrand(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/check_host_mapping".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/brands/{brand_id}/logo — Update a Brand Logo */
  async updateBrandLogo(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/logo".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/brands/{brand_id}/logo — Delete a Brand Logo */
  async deleteBrandLogo(brand_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/{brand_id}/logo".replaceAll("{brand_id}", encodeURIComponent(String(brand_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/brands/check_host_mapping — Check Host Mapping Validity */
  async checkHostMappingValidity(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/brands/check_host_mapping";
    return this.http.request("GET", path, options);
  }
}

/** Channel Framework — 3 endpoints */
export class ChannelFrameworkApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/any_channel/channelback/report_error — Report Channelback Error to Zendesk */
  async reportChannelbackError(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/any_channel/channelback/report_error";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/any_channel/push — Push Content to Support */
  async pushContentToSupport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/any_channel/push";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/any_channel/validate_token — Validate Token */
  async validateToken(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/any_channel/validate_token";
    return this.http.request("POST", path, options);
  }
}

/** Conversation Log — 1 endpoints */
export class ConversationLogApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/tickets/{ticket_id}/conversation_log — List Conversation log for Ticket */
  async listConversationLogForTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/conversation_log".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Countries — 2 endpoints */
export class CountriesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/countries.json — List Countries and Calling Codes */
  async listCountries(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/countries.json";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/countries/{id}.json — Show Country */
  async showCountry(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/countries/{id}.json".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
}

/** Custom Object Fields — 7 endpoints */
export class CustomObjectFieldsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/fields — List Custom Object Fields */
  async listCustomObjectFields(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/fields — Create Custom Object Field */
  async createCustomObjectField(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id} — Show Custom Object Field */
  async showCustomObjectField(custom_object_key: string | number, custom_object_field_key_or_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_field_key_or_id}", encodeURIComponent(String(custom_object_field_key_or_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id} — Update Custom Object Field */
  async updateCustomObjectField(custom_object_key: string | number, custom_object_field_key_or_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_field_key_or_id}", encodeURIComponent(String(custom_object_field_key_or_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id} — Delete Custom Object Field */
  async deleteCustomObjectField(custom_object_key: string | number, custom_object_field_key_or_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_field_key_or_id}", encodeURIComponent(String(custom_object_field_key_or_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_objects/{custom_object_key}/fields/reorder — Reorder Custom Fields of an Object */
  async reorderCustomObjectFields(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/fields/reorder".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/limits/field_limit — Custom Object Fields Limit */
  async customObjectFieldsLimit(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/limits/field_limit".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
}

/** Custom Object Permissions — 9 endpoints */
export class CustomObjectPermissionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/access_rules — List Access Rules */
  async listAccessRules(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/access_rules — Create Access Rule */
  async createAccessRule(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/access_rules/{id} — Show Access Rule */
  async showAccessRule(custom_object_key: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/access_rules/{id} — Update Access Rule */
  async updateAccessRule(custom_object_key: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/access_rules/{id} — Delete Access Rule */
  async deleteAccessRule(custom_object_key: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/access_rules/definitions — List Access Rule Definitions */
  async listAccessRuleDefinitions(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/access_rules/definitions".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/permission_policies — List Permission Policies */
  async listPermissionPolicies(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/permission_policies".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/permission_policies/{id} — Show Permission Policy */
  async showPermissionPolicy(custom_object_key: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/permission_policies/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/permission_policies/{id} — Update Permission Policy */
  async updatePermissionPolicy(custom_object_key: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/permission_policies/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PATCH", path, options);
  }
}

/** Custom Object Record Attachments — 5 endpoints */
export class CustomObjectRecordAttachmentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments — List Custom Object Record Attachments */
  async listCustomObjectRecordAttachments(custom_object_key: string | number, record_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{record_id}", encodeURIComponent(String(record_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments — Create Custom Object Record Attachment */
  async createCustomObjectRecordAttachment(custom_object_key: string | number, record_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{record_id}", encodeURIComponent(String(record_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id} — Update Custom Object Record Attachment for Malware */
  async updateCustomObjectRecordAttachment(custom_object_key: string | number, record_id: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{record_id}", encodeURIComponent(String(record_id))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id} — Delete Custom Object Record Attachment */
  async deleteCustomObjectRecordAttachment(custom_object_key: string | number, record_id: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{record_id}", encodeURIComponent(String(record_id))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}/download — Download Custom Object Record Attachment */
  async downloadCustomObjectRecordAttachment(custom_object_key: string | number, record_id: string | number, id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}/download".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{record_id}", encodeURIComponent(String(record_id))).replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
}

/** Custom Object Records — 17 endpoints */
export class CustomObjectRecordsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/jobs — Custom Object Record Bulk Jobs */
  async customObjectRecordBulkJobs(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/jobs".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records — List Custom Object Records */
  async listCustomObjectRecords(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/records — Create Custom Object Record */
  async createCustomObjectRecord(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/records — Create or Update Custom Object Record */
  async upsertCustomObjectRecordByExternalIdOrName(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/records — Delete Custom Object Record by External Id Or Name */
  async deleteCustomObjectRecordByExternalIdOrName(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id} — Show Custom Object Record */
  async showCustomObjectRecord(custom_object_key: string | number, custom_object_record_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_record_id}", encodeURIComponent(String(custom_object_record_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id} — Update Custom Object Record */
  async updateCustomObjectRecord(custom_object_key: string | number, custom_object_record_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_record_id}", encodeURIComponent(String(custom_object_record_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id} — Delete Custom Object Record */
  async deleteCustomObjectRecord(custom_object_key: string | number, custom_object_record_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{custom_object_record_id}", encodeURIComponent(String(custom_object_record_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/autocomplete — Autocomplete Custom Object Record Search */
  async autocompleteCustomObjectRecordSearch(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/autocomplete".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/count — Count Custom Object Records */
  async countCustomObjectRecords(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/count".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/search — Search Custom Object Records */
  async searchCustomObjectRecords(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/search".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/records/search — Filtered Search of Custom Object Records */
  async filteredSearchCustomObjectRecords(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/search".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/records/show_by_unique_identifier — Show Custom Object Record by Unique Identifier */
  async showCustomObjectRecordByUniqueIdentifier(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/show_by_unique_identifier".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier — Update Custom Object Record by Unique Identifier (PUT) */
  async updateCustomObjectRecordByUniqueIdentifierViaPut(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier — Update Custom Object Record by Unique Identifier */
  async updateCustomObjectRecordByUniqueIdentifier(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PATCH", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/limits/record_limit — Custom Object Records Limit */
  async customObjectRecordsLimit(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/limits/record_limit";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/custom_objects/{custom_object_key}/cursor — Incremental Custom Object Record Export, Cursor Based */
  async incrementalCustomObjectRecordExportCursor(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/custom_objects/{custom_object_key}/cursor".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
}

/** Custom Objects — 6 endpoints */
export class CustomObjectsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_objects — List Custom Objects */
  async listCustomObjects(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects — Create Custom Object */
  async createCustomObject(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key} — Show Custom Object */
  async showCustomObject(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/custom_objects/{custom_object_key} — Update Custom Object */
  async updateCustomObject(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key} — Delete Custom Object */
  async deleteCustomObject(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/limits/object_limit — Custom Objects Limit */
  async customObjectsLimit(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/limits/object_limit";
    return this.http.request("GET", path, options);
  }
}

/** Custom Roles — 5 endpoints */
export class CustomRolesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_roles — List Custom Roles */
  async listCustomRoles(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_roles";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_roles — Create Custom Role */
  async createCustomRole(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_roles";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_roles/{custom_role_id} — Show Custom Role */
  async showCustomRoleById(custom_role_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_roles/{custom_role_id}".replaceAll("{custom_role_id}", encodeURIComponent(String(custom_role_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_roles/{custom_role_id} — Update Custom Role */
  async updateCustomRoleById(custom_role_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_roles/{custom_role_id}".replaceAll("{custom_role_id}", encodeURIComponent(String(custom_role_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_roles/{custom_role_id} — Delete Custom Role */
  async deleteCustomRoleById(custom_role_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_roles/{custom_role_id}".replaceAll("{custom_role_id}", encodeURIComponent(String(custom_role_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Custom Ticket Statuses — 8 endpoints */
export class CustomTicketStatusesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] PUT /api/v2/custom_status/default — Bulk Update Default Custom Ticket Status */
  async bulkUpdateDefaultCustomStatus(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_status/default";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/custom_statuses — List Custom Ticket Statuses */
  async listCustomStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_statuses — Create Custom Ticket Status */
  async createCustomStatus(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_statuses/{custom_status_id} — Show Custom Ticket Status */
  async showCustomStatus(custom_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses/{custom_status_id}".replaceAll("{custom_status_id}", encodeURIComponent(String(custom_status_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_statuses/{custom_status_id} — Update Custom Ticket Status */
  async updateCustomStatus(custom_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses/{custom_status_id}".replaceAll("{custom_status_id}", encodeURIComponent(String(custom_status_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_statuses/{custom_status_id} — Delete Custom Ticket Status */
  async deleteCustomStatus(custom_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses/{custom_status_id}".replaceAll("{custom_status_id}", encodeURIComponent(String(custom_status_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/custom_statuses/{custom_status_id}/ticket_form_statuses — Create Ticket Form Statuses for a Custom Status */
  async createTicketFormStatusesForCustomStatus(custom_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses/{custom_status_id}/ticket_form_statuses".replaceAll("{custom_status_id}", encodeURIComponent(String(custom_status_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_statuses/show_many — Show Many Custom Ticket Statuses */
  async showManyCustomStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_statuses/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Deletion Schedules — 5 endpoints */
export class DeletionSchedulesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/deletion_schedules — List Deletion Schedules */
  async listDeletionSchedules(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deletion_schedules";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/deletion_schedules — Create Deletion Schedule */
  async createDeletionSchedule(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deletion_schedules";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/deletion_schedules/{deletion_schedule_id} — Get Deletion Schedule */
  async getDeletionSchedule(deletion_schedule_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deletion_schedules/{deletion_schedule_id}".replaceAll("{deletion_schedule_id}", encodeURIComponent(String(deletion_schedule_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/deletion_schedules/{deletion_schedule_id} — Update Deletion Schedule */
  async updateDeletionSchedule(deletion_schedule_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deletion_schedules/{deletion_schedule_id}".replaceAll("{deletion_schedule_id}", encodeURIComponent(String(deletion_schedule_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/deletion_schedules/{deletion_schedule_id} — Delete Deletion Schedule */
  async deleteDeletionSchedule(deletion_schedule_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deletion_schedules/{deletion_schedule_id}".replaceAll("{deletion_schedule_id}", encodeURIComponent(String(deletion_schedule_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Dynamic Content — 6 endpoints */
export class DynamicContentApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/dynamic_content/items — List Items */
  async listDynamicContents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/dynamic_content/items — Create Item */
  async createDynamicContent(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/dynamic_content/items/{dynamic_content_item_id} — Show Item */
  async showDynamicContentItem(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/dynamic_content/items/{dynamic_content_item_id} — Update Item */
  async updateDynamicContentItem(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/dynamic_content/items/{dynamic_content_item_id} — Delete Item */
  async deleteDynamicContentItem(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/dynamic_content/items/show_many — Show Many Items */
  async showManyDynamicContents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Dynamic Content Item Variants — 7 endpoints */
export class DynamicContentItemVariantsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants — List Variants */
  async dynamicContentListVariants(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants — Create Variant */
  async createDynamicContentVariant(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id} — Show Variant */
  async showDynamicContentVariant(dynamic_content_item_id: string | number, dynamic_content_variant_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id))).replaceAll("{dynamic_content_variant_id}", encodeURIComponent(String(dynamic_content_variant_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id} — Update Variant */
  async updateDynamicContentVariant(dynamic_content_item_id: string | number, dynamic_content_variant_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id))).replaceAll("{dynamic_content_variant_id}", encodeURIComponent(String(dynamic_content_variant_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id} — Delete Variant */
  async deleteDynamicContentVariant(dynamic_content_item_id: string | number, dynamic_content_variant_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id))).replaceAll("{dynamic_content_variant_id}", encodeURIComponent(String(dynamic_content_variant_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/create_many — Create Many Variants */
  async createManyDynamicContentVariants(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/create_many".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/update_many — Update Many Variants */
  async updateManyDynamicContentVariants(dynamic_content_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/update_many".replaceAll("{dynamic_content_item_id}", encodeURIComponent(String(dynamic_content_item_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Email Notifications — 3 endpoints */
export class EmailNotificationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/email_notifications — List Email Notifications */
  async listEmailNotifications(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/email_notifications";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/email_notifications/{notification_id} — Show Email Notification */
  async showEmailNotification(notification_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/email_notifications/{notification_id}".replaceAll("{notification_id}", encodeURIComponent(String(notification_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/email_notifications/show_many — Show Many Email Notifications */
  async showManyEmailNotifications(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/email_notifications/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Global Clients — 3 endpoints */
export class GlobalClientsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/oauth/global_clients — List Global OAuth Clients */
  async listGlobalOAuthClients(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/global_clients";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/oauth/global_clients/{global_client_id} — Show Global OAuth Client */
  async showGlobalClient(global_client_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/global_clients/{global_client_id}".replaceAll("{global_client_id}", encodeURIComponent(String(global_client_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/oauth/global_clients/token_summary — Show Token summary for Global OAuth Clients */
  async globalOAuthClientsTokenSummary(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/global_clients/token_summary";
    return this.http.request("GET", path, options);
  }
}

/** Grant Type Tokens — 1 endpoints */
export class GrantTypeTokensApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /oauth/tokens — Create Token for Grant Type */
  async createTokenForGrantType(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/oauth/tokens";
    return this.http.request("POST", path, options);
  }
}

/** Group Memberships — 14 endpoints */
export class GroupMembershipsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/group_memberships — List Memberships */
  async listGroupMemberships(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/group_memberships — Create Membership */
  async createGroupMembership(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/group_memberships/{group_membership_id} — Show Membership */
  async showGroupMembershipById(group_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships/{group_membership_id}".replaceAll("{group_membership_id}", encodeURIComponent(String(group_membership_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/group_memberships/{group_membership_id} — Delete Membership */
  async deleteGroupMembership(group_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships/{group_membership_id}".replaceAll("{group_membership_id}", encodeURIComponent(String(group_membership_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/group_memberships/assignable — List Assignable Memberships */
  async listAssignableGroupMemberships(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships/assignable";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/group_memberships/create_many — Bulk Create Memberships */
  async groupMembershipBulkCreate(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships/create_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/group_memberships/destroy_many — Bulk Delete Memberships */
  async groupMembershipBulkDelete(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_memberships/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/groups/{group_id}/memberships — List Memberships By Group */
  async listGroupMembershipsByGroup(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}/memberships".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/{group_id}/memberships/assignable — List Assignable Memberships By Group */
  async listAssignableGroupMembershipsByGroup(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}/memberships/assignable".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/group_memberships — List Group Memberships by User */
  async listUserGroupMemberships(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/group_memberships".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/{user_id}/group_memberships — Create Group Membership for User */
  async createUserGroupMembership(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/group_memberships".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/group_memberships/{group_membership_id} — Show User's Group Membership */
  async showUserGroupMembershipById(user_id: string | number, group_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/group_memberships/{group_membership_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{group_membership_id}", encodeURIComponent(String(group_membership_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/group_memberships/{group_membership_id} — Delete User's Group Membership */
  async deleteUserGroupMembership(user_id: string | number, group_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/group_memberships/{group_membership_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{group_membership_id}", encodeURIComponent(String(group_membership_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/group_memberships/{group_membership_id}/make_default — Set Membership as Default */
  async groupMembershipSetDefault(user_id: string | number, group_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/group_memberships/{group_membership_id}/make_default".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{group_membership_id}", encodeURIComponent(String(group_membership_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Group SLA Policies — 8 endpoints */
export class GroupSlaPoliciesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/group_slas/policies — List Group SLA Policies */
  async listGroupSLAPolicies(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/group_slas/policies — Create Group SLA Policy */
  async createGroupSLAPolicy(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/group_slas/policies/{group_sla_policy_id} — Show Group SLA Policy */
  async showGroupSLAPolicy(group_sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies/{group_sla_policy_id}".replaceAll("{group_sla_policy_id}", encodeURIComponent(String(group_sla_policy_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/group_slas/policies/{group_sla_policy_id} — Update Group SLA Policy */
  async updateGroupSLAPolicy(group_sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies/{group_sla_policy_id}".replaceAll("{group_sla_policy_id}", encodeURIComponent(String(group_sla_policy_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/group_slas/policies/{group_sla_policy_id} — Delete Group SLA Policy */
  async deleteGroupSLAPolicy(group_sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies/{group_sla_policy_id}".replaceAll("{group_sla_policy_id}", encodeURIComponent(String(group_sla_policy_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/group_slas/policies/definitions — Retrieve Supported Filter Definition Items */
  async retrieveGroupSLAPolicyFilterDefinitionItems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/group_slas/policies/reorder — Reorder Group SLA Policies */
  async reorderGroupSLAPolicies(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/group_slas/policies/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/group_slas/policy_metrics — List Ticket Group SLA Policy Metrics */
  async listTicketGroupSlaPolicyMetrics(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/group_slas/policy_metrics".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Groups — 12 endpoints */
export class GroupsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/groups — List Groups */
  async listGroups(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/groups — Create Group */
  async createGroup(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/groups/{group_id} — Show Group */
  async showGroupById(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/groups/{group_id} — Update Group */
  async updateGroup(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/groups/{group_id} — Delete Group */
  async deleteGroup(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/groups/assignable — List Assignable Groups */
  async listAssignableGroups(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/assignable";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/autocomplete — Autocomplete Groups */
  async autocompleteGroups(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/autocomplete";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/available_agents — List Available Agents */
  async listAvailableAgents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/available_agents";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/count — Count Groups */
  async countGroups(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/count";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/default — Show Default Group */
  async showDefaultGroup(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/default";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/groups — List User Groups */
  async listUserGroups(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/groups".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/groups/count — Count User Groups */
  async countUserGroups(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/groups/count".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** ITAM Asset Fields — 7 endpoints */
export class ItamAssetFieldsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/it_asset_management/asset_types/{asset_type_id}/fields — List Asset Fields */
  async listItamAssetTypeFields(asset_type_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types/{asset_type_id}/fields".replaceAll("{asset_type_id}", encodeURIComponent(String(asset_type_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/asset_types/{asset_type_id}/fields/{asset_type_field_id} — Show Asset Field */
  async showItamAssetTypeField(asset_type_id: string | number, asset_type_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types/{asset_type_id}/fields/{asset_type_field_id}".replaceAll("{asset_type_id}", encodeURIComponent(String(asset_type_id))).replaceAll("{asset_type_field_id}", encodeURIComponent(String(asset_type_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/fields — List Fields */
  async listItamFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/fields";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/fields — Create Field */
  async createItamField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/fields";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/fields/{id} — Show Field */
  async showItamField(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/fields/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/it_asset_management/fields/{id} — Update Field */
  async updateItamField(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/fields/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/it_asset_management/fields/{id} — Delete Field */
  async deleteItamField(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/fields/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
}

/** ITAM Asset Locations — 5 endpoints */
export class ItamAssetLocationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/it_asset_management/locations — List Asset Locations */
  async listItamLocations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/locations";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/locations — Create Asset Location */
  async createItamLocation(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/locations";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/locations/{location_id} — Show Asset Location */
  async showItamLocation(location_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/locations/{location_id}".replaceAll("{location_id}", encodeURIComponent(String(location_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/it_asset_management/locations/{location_id} — Update Asset Location */
  async updateItamLocation(location_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/locations/{location_id}".replaceAll("{location_id}", encodeURIComponent(String(location_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/it_asset_management/locations/{location_id} — Delete Asset Location */
  async deleteItamLocation(location_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/locations/{location_id}".replaceAll("{location_id}", encodeURIComponent(String(location_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** ITAM Asset Statuses — 5 endpoints */
export class ItamAssetStatusesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/it_asset_management/statuses — List Asset Statuses */
  async listItamStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/statuses";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/statuses — Create Asset Status */
  async createItamStatus(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/statuses";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/statuses/{status_id} — Show Asset Status */
  async showItamStatus(status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/statuses/{status_id}".replaceAll("{status_id}", encodeURIComponent(String(status_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/it_asset_management/statuses/{status_id} — Update Asset Status */
  async updateItamStatus(status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/statuses/{status_id}".replaceAll("{status_id}", encodeURIComponent(String(status_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/it_asset_management/statuses/{status_id} — Delete Asset Status */
  async deleteItamStatus(status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/statuses/{status_id}".replaceAll("{status_id}", encodeURIComponent(String(status_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** ITAM Asset Types — 5 endpoints */
export class ItamAssetTypesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/it_asset_management/asset_types — List Asset Types */
  async listItamAssetTypes(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/asset_types — Create Asset Type */
  async createItamAssetType(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/asset_types/{asset_type_id} — Show Asset Type */
  async showItamAssetType(asset_type_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types/{asset_type_id}".replaceAll("{asset_type_id}", encodeURIComponent(String(asset_type_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/it_asset_management/asset_types/{asset_type_id} — Update Asset Type */
  async updateItamAssetType(asset_type_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types/{asset_type_id}".replaceAll("{asset_type_id}", encodeURIComponent(String(asset_type_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/it_asset_management/asset_types/{asset_type_id} — Delete Asset Type */
  async deleteItamAssetType(asset_type_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/asset_types/{asset_type_id}".replaceAll("{asset_type_id}", encodeURIComponent(String(asset_type_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** ITAM Assets — 8 endpoints */
export class ItamAssetsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/it_asset_management/assets — List Assets */
  async listItamAssets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/assets — Create Asset */
  async createItamAsset(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/assets/{asset_id} — Show Asset */
  async showItamAsset(asset_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/{asset_id}".replaceAll("{asset_id}", encodeURIComponent(String(asset_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/it_asset_management/assets/{asset_id} — Update Asset */
  async updateItamAsset(asset_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/{asset_id}".replaceAll("{asset_id}", encodeURIComponent(String(asset_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/it_asset_management/assets/{asset_id} — Delete Asset */
  async deleteItamAsset(asset_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/{asset_id}".replaceAll("{asset_id}", encodeURIComponent(String(asset_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/assets/jobs — Asset Bulk Jobs */
  async itamAssetBulkJobs(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/jobs";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/it_asset_management/assets/search — Search Assets */
  async searchItamAssets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/search";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/it_asset_management/assets/search — Filtered Search of Assets */
  async filteredSearchItamAssets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/it_asset_management/assets/search";
    return this.http.request("POST", path, options);
  }
}

/** Incremental Export — 7 endpoints */
export class IncrementalExportApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/incremental/{incremental_resource}/sample — Incremental Sample Export */
  async incrementalSampleExport(incremental_resource: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/{incremental_resource}/sample".replaceAll("{incremental_resource}", encodeURIComponent(String(incremental_resource)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/organizations — Incremental Organization Export */
  async incrementalOrganizationExport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/organizations";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/ticket_events — Incremental Ticket Event Export */
  async incrementalTicketEvents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/ticket_events";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/tickets — Incremental Ticket Export, Time Based */
  async incrementalTicketExportTime(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/tickets";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/tickets/cursor — Incremental Ticket Export, Cursor Based */
  async incrementalTicketExportCursor(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/tickets/cursor";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/users — Incremental User Export, Time Based */
  async incrementalUserExportTime(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/users";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/users/cursor — Incremental User Export, Cursor Based */
  async incrementalUserExportCursor(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/users/cursor";
    return this.http.request("GET", path, options);
  }
}

/** Incremental Skill Based Routing — 3 endpoints */
export class IncrementalSkillBasedRoutingApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/incremental/routing/attribute_values — Incremental Attributes Values Export */
  async incrementalSkilBasedRoutingAttributeValuesExport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/routing/attribute_values";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/routing/attributes — Incremental Attributes Export */
  async incrementalSkilBasedRoutingAttributesExport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/routing/attributes";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/incremental/routing/instance_values — Incremental Instance Values Export */
  async incrementalSkilBasedRoutingInstanceValuesExport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/routing/instance_values";
    return this.http.request("GET", path, options);
  }
}

/** Job Statuses — 3 endpoints */
export class JobStatusesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/job_statuses — List Job Statuses */
  async listJobStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/job_statuses";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/job_statuses/{job_status_id} — Show Job Status */
  async showJobStatus(job_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/job_statuses/{job_status_id}".replaceAll("{job_status_id}", encodeURIComponent(String(job_status_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/job_statuses/show_many — Show Many Job Statuses */
  async showManyJobStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/job_statuses/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Locales — 6 endpoints */
export class LocalesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/locales — List Locales */
  async listLocales(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/locales/{locale_id} — Show Locale */
  async showLocaleById(locale_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales/{locale_id}".replaceAll("{locale_id}", encodeURIComponent(String(locale_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/locales/agent — List Locales for Agent */
  async listLocalesForAgent(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales/agent";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/locales/current — Show Current Locale */
  async showCurrentLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales/current";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/locales/detect_best_locale — Detect Best Language for User */
  async detectBestLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales/detect_best_locale";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/locales/public — List Available Public Locales */
  async listAvailablePublicLocales(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/locales/public";
    return this.http.request("GET", path, options);
  }
}

/** Lookup Relationships — 2 endpoints */
export class LookupRelationshipsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/{target_type}/{target_id}/relationship_fields/{field_id}/{source_type} — Get sources by target */
  async getSourcesByTarget(target_type: string | number, target_id: string | number, field_id: string | number, source_type: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/{target_type}/{target_id}/relationship_fields/{field_id}/{source_type}".replaceAll("{target_type}", encodeURIComponent(String(target_type))).replaceAll("{target_id}", encodeURIComponent(String(target_id))).replaceAll("{field_id}", encodeURIComponent(String(field_id))).replaceAll("{source_type}", encodeURIComponent(String(source_type)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/relationships/definitions/{target_type} — Filter Definitions */
  async getRelationshipFilterDefinitions(target_type: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/relationships/definitions/{target_type}".replaceAll("{target_type}", encodeURIComponent(String(target_type)));
    return this.http.request("GET", path, options);
  }
}

/** Macros — 22 endpoints */
export class MacrosApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/macros — List Macros */
  async listMacros(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/macros — Create Macro */
  async createMacro(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/macros/{macro_id} — Show Macro */
  async showMacro(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/macros/{macro_id} — Update Macro */
  async updateMacro(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/macros/{macro_id} — Delete Macro */
  async deleteMacro(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/macros/{macro_id}/apply — Show Changes to Ticket */
  async showChangesToTicket(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}/apply".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/{macro_id}/attachments — List Macro Attachments */
  async listMacroAttachments(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}/attachments".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/macros/{macro_id}/attachments — Create Macro Attachment */
  async createAssociatedMacroAttachment(macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/{macro_id}/attachments".replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/macros/actions — List Supported Actions for Macros */
  async listMacrosActions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/actions";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/active — List Active Macros */
  async listActiveMacros(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/active";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/macros/attachments — Create Unassociated Macro Attachment */
  async createMacroAttachment(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/attachments";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/macros/attachments/{attachment_id} — Show Macro Attachment */
  async showMacroAttachment(attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/attachments/{attachment_id}".replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/attachments/{attachment_id}/content — Download Macro Attachment */
  async downloadMacroAttachment(attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/attachments/{attachment_id}/content".replaceAll("{attachment_id}", encodeURIComponent(String(attachment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/categories — List Macro Categories */
  async listMacroCategories(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/categories";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/definitions — List Macro Action Definitions */
  async listMacroActionDefinitions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/macros/destroy_many — Bulk Delete Macros */
  async deleteManyMacros(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/macros/groups — List Macro Groups */
  async listMacroGroups(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/groups";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/most_used — List Most Used Macros */
  async listMostUsedMacros(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/most_used";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/new — Show Macro Replica */
  async showDerivedMacro(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/new";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/macros/search — Search Macros */
  async searchMacro(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/search";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/macros/update_many — Update Many Macros */
  async updateManyMacros(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/macros/update_many";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/macros/{macro_id}/apply — Show Ticket After Changes */
  async showTicketAfterChanges(ticket_id: string | number, macro_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/macros/{macro_id}/apply".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{macro_id}", encodeURIComponent(String(macro_id)));
    return this.http.request("GET", path, options);
  }
}

/** OAuth Clients — 7 endpoints */
export class OauthClientsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/oauth/clients — List Clients */
  async listOAuthClients(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/oauth/clients — Create Client */
  async createOAuthClient(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/oauth/clients/{oauth_client_id} — Show Client */
  async showClient(oauth_client_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients/{oauth_client_id}".replaceAll("{oauth_client_id}", encodeURIComponent(String(oauth_client_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/oauth/clients/{oauth_client_id} — Update Client */
  async updateClient(oauth_client_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients/{oauth_client_id}".replaceAll("{oauth_client_id}", encodeURIComponent(String(oauth_client_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/oauth/clients/{oauth_client_id} — Delete Client */
  async deleteClient(oauth_client_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients/{oauth_client_id}".replaceAll("{oauth_client_id}", encodeURIComponent(String(oauth_client_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/oauth/clients/{oauth_client_id}/generate_secret — Generate Secret */
  async clientGenerateSecret(oauth_client_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/clients/{oauth_client_id}/generate_secret".replaceAll("{oauth_client_id}", encodeURIComponent(String(oauth_client_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/me/oauth/clients — List Current User's Clients */
  async listCurrentUserOAuthClients(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/oauth/clients";
    return this.http.request("GET", path, options);
  }
}

/** OAuth Tokens — 6 endpoints */
export class OauthTokensApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/oauth/tokens — List Tokens */
  async listOAuthTokens(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/oauth/tokens/{oauth_token_id} — Show Token */
  async showToken(oauth_token_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens/{oauth_token_id}".replaceAll("{oauth_token_id}", encodeURIComponent(String(oauth_token_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/oauth/tokens/{oauth_token_id} — Revoke Token */
  async revokeOAuthToken(oauth_token_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens/{oauth_token_id}".replaceAll("{oauth_token_id}", encodeURIComponent(String(oauth_token_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/oauth/tokens/current — Show Current Token */
  async showCurrentToken(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens/current";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/oauth/tokens/current — Revoke Current Token */
  async revokeCurrentOAuthToken(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens/current";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/oauth/tokens/delete_many — Revoke Many Tokens */
  async revokeManyOAuthTokens(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/oauth/tokens/delete_many";
    return this.http.request("POST", path, options);
  }
}

/** Object Triggers — 10 endpoints */
export class ObjectTriggersApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/triggers — List Object Triggers */
  async listObjectTriggers(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/custom_objects/{custom_object_key}/triggers — Create Object Trigger */
  async createObjectTrigger(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id} — Show Object Trigger */
  async getObjectTrigger(custom_object_key: string | number, trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id} — Update Object Trigger */
  async updateObjectTrigger(custom_object_key: string | number, trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id} — Delete Object Trigger */
  async deleteObjectTrigger(custom_object_key: string | number, trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key))).replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/triggers/active — List Active Object Triggers */
  async listActiveObjectTriggers(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/active".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/triggers/definitions — List Object Trigger Action and Condition Definitions */
  async listObjectTriggersDefinitions(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/definitions".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/custom_objects/{custom_object_key}/triggers/destroy_many — Delete Many Object Triggers */
  async deleteManyObjectTriggers(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/destroy_many".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/custom_objects/{custom_object_key}/triggers/search — Search Object Triggers */
  async searchObjectTriggers(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/search".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/custom_objects/{custom_object_key}/triggers/update_many — Update Many Object Triggers */
  async updateManyObjectTriggers(custom_object_key: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/custom_objects/{custom_object_key}/triggers/update_many".replaceAll("{custom_object_key}", encodeURIComponent(String(custom_object_key)));
    return this.http.request("PUT", path, options);
  }
}

/** Omnichannel Routing Queues — 7 endpoints */
export class OmnichannelRoutingQueuesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/queues — List queues */
  async listQueues(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/queues — Create Queue */
  async createQueue(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/queues/{queue_id} — Show Queue */
  async showQueueById(queue_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues/{queue_id}".replaceAll("{queue_id}", encodeURIComponent(String(queue_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/queues/{queue_id} — Update Queue */
  async updateQueue(queue_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues/{queue_id}".replaceAll("{queue_id}", encodeURIComponent(String(queue_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/queues/{queue_id} — Delete Queue */
  async deleteQueue(queue_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues/{queue_id}".replaceAll("{queue_id}", encodeURIComponent(String(queue_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/queues/definitions — List Queue Definitions */
  async listQueueDefinitions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/queues/order — Reorder Queues */
  async reorderQueues(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/queues/order";
    return this.http.request("PATCH", path, options);
  }
}

/** Organization Fields — 6 endpoints */
export class OrganizationFieldsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/organization_fields — List Organization Fields */
  async listOrganizationFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organization_fields — Create Organization Field */
  async createOrganizationField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organization_fields/{organization_field_id} — Show Organization Field */
  async showOrganizationField(organization_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields/{organization_field_id}".replaceAll("{organization_field_id}", encodeURIComponent(String(organization_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/organization_fields/{organization_field_id} — Update Organization Field */
  async updateOrganizationField(organization_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields/{organization_field_id}".replaceAll("{organization_field_id}", encodeURIComponent(String(organization_field_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/organization_fields/{organization_field_id} — Delete Organization Field */
  async deleteOrganizationField(organization_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields/{organization_field_id}".replaceAll("{organization_field_id}", encodeURIComponent(String(organization_field_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/organization_fields/reorder — Reorder Organization Field */
  async reorderOrganizationField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_fields/reorder";
    return this.http.request("PUT", path, options);
  }
}

/** Organization Memberships — 14 endpoints */
export class OrganizationMembershipsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/organization_memberships — List Memberships */
  async listOrganizationMemberships(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organization_memberships — Create Membership */
  async createOrganizationMembership(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organization_memberships/{organization_membership_id} — Show Membership */
  async showOrganizationMembershipById(organization_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships/{organization_membership_id}".replaceAll("{organization_membership_id}", encodeURIComponent(String(organization_membership_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/organization_memberships/{organization_membership_id} — Delete Membership */
  async deleteOrganizationMembership(organization_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships/{organization_membership_id}".replaceAll("{organization_membership_id}", encodeURIComponent(String(organization_membership_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/organization_memberships/create_many — Create Many Memberships */
  async createManyOrganizationMemberships(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships/create_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/organization_memberships/destroy_many — Bulk Delete Memberships */
  async deleteManyOrganizationMemberships(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_memberships/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/organization_memberships — List Organization Memberships by Organization */
  async listOrganizationMembershipsByOrganization(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/organization_memberships".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/organization_memberships — List Organization Memberships by User */
  async listUserOrganizationMemberships(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_memberships".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/{user_id}/organization_memberships — Create Organization Membership for User */
  async createUserOrganizationMembership(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_memberships".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/organization_memberships/{organization_membership_id} — Show Organization Membership by User */
  async showOrganizationMembershipByUserId(user_id: string | number, organization_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{organization_membership_id}", encodeURIComponent(String(organization_membership_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/organization_memberships/{organization_membership_id} — Delete Organization Membership for User */
  async deleteUserOrganizationMembership(user_id: string | number, organization_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{organization_membership_id}", encodeURIComponent(String(organization_membership_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/organization_memberships/{organization_membership_id}/make_default — Set Membership as Default */
  async setOrganizationMembershipAsDefault(user_id: string | number, organization_membership_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}/make_default".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{organization_membership_id}", encodeURIComponent(String(organization_membership_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/organizations/{organization_id} — Unassign Organization */
  async unassignOrganization(user_id: string | number, organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organizations/{organization_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/organizations/{organization_id}/make_default — Set Organization as Default */
  async setOrganizationAsDefault(user_id: string | number, organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organizations/{organization_id}/make_default".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Organization Subscriptions — 6 endpoints */
export class OrganizationSubscriptionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/organization_subscriptions — List Organization Subscriptions */
  async listOrganizationSubscriptions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_subscriptions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organization_subscriptions — Create Organization Subscription */
  async createOrganizationSubscription(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_subscriptions";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organization_subscriptions/{organization_subscription_id} — Show Organization Subscription */
  async showOrganizationSubscription(organization_subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_subscriptions/{organization_subscription_id}".replaceAll("{organization_subscription_id}", encodeURIComponent(String(organization_subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/organization_subscriptions/{organization_subscription_id} — Delete Organization Subscription */
  async deleteOrganizationSubscription(organization_subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_subscriptions/{organization_subscription_id}".replaceAll("{organization_subscription_id}", encodeURIComponent(String(organization_subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/subscriptions — List Subscriptions By Organization */
  async listOrganizationSubscriptionsByOrganization(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/subscriptions".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/organization_subscriptions — List User's Organization Subscriptions */
  async listUserOrganizationSubscriptions(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organization_subscriptions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Organizations — 19 endpoints */
export class OrganizationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/organization_merges/{organization_merge_id} — Show Organization Merge */
  async showOrganizationMerge(organization_merge_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organization_merges/{organization_merge_id}".replaceAll("{organization_merge_id}", encodeURIComponent(String(organization_merge_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations — List Organizations */
  async listOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organizations — Create Organization */
  async createOrganization(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id} — Show Organization */
  async showOrganization(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/organizations/{organization_id} — Update Organization */
  async updateOrganization(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/organizations/{organization_id} — Delete Organization */
  async deleteOrganization(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/organizations/{organization_id}/merge — Merge Organization With Another Organization */
  async createOrganizationMerge(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/merge".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/merges — List Organization Merges */
  async listOrganizationMerges(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/merges".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/related — Show Organization's Related Information */
  async organizationRelated(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/related".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/autocomplete — Autocomplete Organizations */
  async autocompleteOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/autocomplete";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/count — Count Organizations */
  async countOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/count";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organizations/create_many — Create Many Organizations */
  async createManyOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/create_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/organizations/create_or_update — Create Or Update Organization */
  async createOrUpdateOrganization(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/create_or_update";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/organizations/destroy_many — Bulk Delete Organizations */
  async deleteManyOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/organizations/search — Search Organizations */
  async searchOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/show_many — Show Many Organizations */
  async showManyOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/show_many";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/organizations/update_many — Update Many Organizations */
  async updateManyOrganizations(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/update_many";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/organizations — List User Organizations */
  async listUserOrganizations(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organizations".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/organizations/count — Count User's Organizations */
  async countUserOrganizations(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/organizations/count".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Push Notification Devices — 1 endpoints */
export class PushNotificationDevicesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/push_notification_devices/destroy_many — Bulk Unregister Push Notification Devices */
  async pushNotificationDevices(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/push_notification_devices/destroy_many";
    return this.http.request("POST", path, options);
  }
}

/** Remote Authentications — 1 endpoints */
export class RemoteAuthenticationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/remote_authentications — List Remote Authentications */
  async listRemoteAuthentications(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/remote_authentications";
    return this.http.request("GET", path, options);
  }
}

/** Requests — 12 endpoints */
export class RequestsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/organizations/{organization_id}/requests — List Organization Requests */
  async listOrganizationRequests(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/requests".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests — List Requests */
  async listRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/requests — Create Request */
  async createRequest(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/requests/{request_id} — Show Request */
  async showRequest(request_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/{request_id}".replaceAll("{request_id}", encodeURIComponent(String(request_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/requests/{request_id} — Update Request */
  async updateRequest(request_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/{request_id}".replaceAll("{request_id}", encodeURIComponent(String(request_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/requests/{request_id}/comments — Listing Comments */
  async listComments(request_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/{request_id}/comments".replaceAll("{request_id}", encodeURIComponent(String(request_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests/{request_id}/comments/{ticket_comment_id} — Getting Comments */
  async showComment(request_id: string | number, ticket_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/{request_id}/comments/{ticket_comment_id}".replaceAll("{request_id}", encodeURIComponent(String(request_id))).replaceAll("{ticket_comment_id}", encodeURIComponent(String(ticket_comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests/ccd — List CCD Requests */
  async listCCDRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/ccd";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests/open — List Open Requests */
  async listOpenRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/open";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests/search — Search Requests */
  async searchRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/requests/solved — List Solved Requests */
  async listSolvedRequests(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/requests/solved";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/requests — List User Requests */
  async listUserRequests(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/requests".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Reseller — 2 endpoints */
export class ResellerApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/accounts — Create Trial Account */
  async createTrialAccount(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/accounts";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/accounts/available — Verify Subdomain Availability */
  async verifySubdomainAvailability(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/accounts/available";
    return this.http.request("GET", path, options);
  }
}

/** Resource Collections — 5 endpoints */
export class ResourceCollectionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/resource_collections — List Resource Collections */
  async listResourceCollections(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/resource_collections";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/resource_collections — Create Resource Collection */
  async createResourceCollection(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/resource_collections";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/resource_collections/{resource_collection_id} — Show Resource Collection */
  async retrieveResourceCollection(resource_collection_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/resource_collections/{resource_collection_id}".replaceAll("{resource_collection_id}", encodeURIComponent(String(resource_collection_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/resource_collections/{resource_collection_id} — Update Resource Collection */
  async updateResourceCollection(resource_collection_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/resource_collections/{resource_collection_id}".replaceAll("{resource_collection_id}", encodeURIComponent(String(resource_collection_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/resource_collections/{resource_collection_id} — Delete Resource Collection */
  async deleteResourceCollection(resource_collection_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/resource_collections/{resource_collection_id}".replaceAll("{resource_collection_id}", encodeURIComponent(String(resource_collection_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** SLA Policies — 8 endpoints */
export class SlaPoliciesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/slas/policies — List SLA Policies */
  async listSLAPolicies(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/slas/policies — Create SLA Policy */
  async createSLAPolicy(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/slas/policies/{sla_policy_id} — Show SLA Policy */
  async showSLAPolicy(sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies/{sla_policy_id}".replaceAll("{sla_policy_id}", encodeURIComponent(String(sla_policy_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/slas/policies/{sla_policy_id} — Update SLA Policy */
  async updateSLAPolicy(sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies/{sla_policy_id}".replaceAll("{sla_policy_id}", encodeURIComponent(String(sla_policy_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/slas/policies/{sla_policy_id} — Delete SLA Policy */
  async deleteSLAPolicy(sla_policy_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies/{sla_policy_id}".replaceAll("{sla_policy_id}", encodeURIComponent(String(sla_policy_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/slas/policies/definitions — Retrieve Supported Filter Definition Items */
  async retrieveSLAPolicyFilterDefinitionItems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/slas/policies/reorder — Reorder SLA Policies */
  async reorderSLAPolicies(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/slas/policies/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/slas/policy_metrics — List Ticket SLA Policy Metrics */
  async listTicketSlaPolicyMetrics(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/slas/policy_metrics".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Satisfaction Ratings — 4 endpoints */
export class SatisfactionRatingsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/satisfaction_ratings — List Satisfaction Ratings */
  async listSatisfactionRatings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/satisfaction_ratings";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/satisfaction_ratings/{satisfaction_rating_id} — Show Satisfaction Rating */
  async showSatisfactionRating(satisfaction_rating_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/satisfaction_ratings/{satisfaction_rating_id}".replaceAll("{satisfaction_rating_id}", encodeURIComponent(String(satisfaction_rating_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/satisfaction_ratings/count — Count Satisfaction Ratings */
  async countSatisfactionRatings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/satisfaction_ratings/count";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/satisfaction_rating — Create a Satisfaction Rating */
  async createTicketSatisfactionRating(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/satisfaction_rating".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
}

/** Satisfaction Reasons — 2 endpoints */
export class SatisfactionReasonsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/satisfaction_reasons — List Reasons for Satisfaction Rating */
  async listSatisfactionRatingReasons(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/satisfaction_reasons";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/satisfaction_reasons/{satisfaction_reason_id} — Show Reason for Satisfaction Rating */
  async showSatisfactionRatings(satisfaction_reason_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/satisfaction_reasons/{satisfaction_reason_id}".replaceAll("{satisfaction_reason_id}", encodeURIComponent(String(satisfaction_reason_id)));
    return this.http.request("GET", path, options);
  }
}

/** Saved Searches — 4 endpoints */
export class SavedSearchesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/saved_searches — List Saved Searches */
  async listSavedSearches(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/saved_searches";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/saved_searches — Create Saved Search */
  async createSavedSearch(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/saved_searches";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/saved_searches/{id} — Update Saved Search */
  async updateSavedSearch(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/saved_searches/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/saved_searches/{id} — Delete Saved Search */
  async deleteSavedSearch(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/saved_searches/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Search — 3 endpoints */
export class SearchApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/search — List Search Results */
  async listSearchResults(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/search/count — Show Results Count */
  async countSearchResults(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/search/count";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/search/export — Export Search Results */
  async exportSearchResults(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/search/export";
    return this.http.request("GET", path, options);
  }
}

/** Security Settings — 1 endpoints */
export class SecuritySettingsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/security_settings — Show Security Settings */
  async showSecuritySettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/security_settings";
    return this.http.request("GET", path, options);
  }
}

/** Sessions — 8 endpoints */
export class SessionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/sessions — List Sessions */
  async listSessions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sessions";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/sessions — List Sessions for User */
  async listUserSessions(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/sessions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/sessions — Bulk Delete Sessions */
  async bulkDeleteSessionsByUserId(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/sessions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/sessions/{session_id} — Show Session */
  async showSession(user_id: string | number, session_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/sessions/{session_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{session_id}", encodeURIComponent(String(session_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/sessions/{session_id} — Delete Session */
  async deleteSession(user_id: string | number, session_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/sessions/{session_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{session_id}", encodeURIComponent(String(session_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/me/logout — Delete the Authenticated Session */
  async deleteAuthenticatedSession(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/logout";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/users/me/session — Show the Currently Authenticated Session */
  async showCurrentlyAuthenticatedSession(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/session";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/me/session/renew — Renew the current session */
  async renewCurrentSession(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/session/renew";
    return this.http.request("GET", path, options);
  }
}

/** Sharing Agreements — 5 endpoints */
export class SharingAgreementsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/sharing_agreements — List Sharing Agreements */
  async listSharingAgreements(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sharing_agreements";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/sharing_agreements — Create Sharing Agreement */
  async createSharingAgreement(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sharing_agreements";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/sharing_agreements/{sharing_agreement_id} — Show a Sharing Agreement */
  async showSharingAgreement(sharing_agreement_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sharing_agreements/{sharing_agreement_id}".replaceAll("{sharing_agreement_id}", encodeURIComponent(String(sharing_agreement_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/sharing_agreements/{sharing_agreement_id} — Update a Sharing Agreement */
  async updateSharingAgreement(sharing_agreement_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sharing_agreements/{sharing_agreement_id}".replaceAll("{sharing_agreement_id}", encodeURIComponent(String(sharing_agreement_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/sharing_agreements/{sharing_agreement_id} — Delete a Sharing Agreement */
  async deleteSharingAgreement(sharing_agreement_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/sharing_agreements/{sharing_agreement_id}".replaceAll("{sharing_agreement_id}", encodeURIComponent(String(sharing_agreement_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Skill Based Routing — 19 endpoints */
export class SkillBasedRoutingApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/routing/agents/{user_id}/instance_values — List Agent Attribute Values */
  async listAgentAttributeValues(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/agents/{user_id}/instance_values".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/routing/agents/{user_id}/instance_values — Set Agent Attribute Values */
  async setAgentAttributeValues(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/agents/{user_id}/instance_values".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/routing/agents/instance_values — List Attribute Values for Many Agents */
  async listManyAgentsAttributeValues(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/agents/instance_values";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/routing/agents/instance_values/jobs — Bulk Set Agent Attribute Values Jobs */
  async bulkSetAgentAttributeValuesJob(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/agents/instance_values/jobs";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/routing/attributes — List Account Attributes */
  async listAccountAttributes(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/routing/attributes — Create Attribute */
  async createAttribute(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/routing/attributes/{attribute_id} — Show Attribute */
  async showAttribute(attribute_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/routing/attributes/{attribute_id} — Update Attribute */
  async updateAttribute(attribute_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/routing/attributes/{attribute_id} — Delete Attribute */
  async deleteAttribute(attribute_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/routing/attributes/{attribute_id}/values — List Attribute Values for an Attribute */
  async listAttributeValues(attribute_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/routing/attributes/{attribute_id}/values — Create Attribute Value */
  async createAttributeValue(attribute_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id} — Show Attribute Value */
  async showAttributeValue(attribute_id: string | number, attribute_value_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id))).replaceAll("{attribute_value_id}", encodeURIComponent(String(attribute_value_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id} — Update Attribute Value */
  async updateAttributeValuePut(attribute_id: string | number, attribute_value_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id))).replaceAll("{attribute_value_id}", encodeURIComponent(String(attribute_value_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PATCH /api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id} — Update Attribute Value */
  async updateAttributeValue(attribute_id: string | number, attribute_value_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id))).replaceAll("{attribute_value_id}", encodeURIComponent(String(attribute_value_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id} — Delete Attribute Value */
  async deleteAttributeValue(attribute_id: string | number, attribute_value_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}".replaceAll("{attribute_id}", encodeURIComponent(String(attribute_id))).replaceAll("{attribute_value_id}", encodeURIComponent(String(attribute_value_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/routing/attributes/definitions — List Routing Attribute Definitions */
  async listRoutingAttributeDefinitions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/attributes/definitions";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/routing/requirements/fulfilled — List Tickets Fulfilled by a User */
  async listTicketsFullfilledByUser(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/requirements/fulfilled";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/routing/tickets/{ticket_id}/instance_values — List Ticket Attribute Values */
  async listTicketAttributeValues(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/tickets/{ticket_id}/instance_values".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/routing/tickets/{ticket_id}/instance_values — Set Ticket Attribute Values */
  async setTicketAttributeValues(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/routing/tickets/{ticket_id}/instance_values".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
}

/** Support Addresses — 6 endpoints */
export class SupportAddressesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/recipient_addresses — List Support Addresses */
  async listSupportAddresses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/recipient_addresses — Create Support Address */
  async createSupportAddress(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/recipient_addresses/{support_address_id} — Show Support Address */
  async showSupportAddress(support_address_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses/{support_address_id}".replaceAll("{support_address_id}", encodeURIComponent(String(support_address_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/recipient_addresses/{support_address_id} — Update Support Address */
  async updateSupportAddress(support_address_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses/{support_address_id}".replaceAll("{support_address_id}", encodeURIComponent(String(support_address_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/recipient_addresses/{support_address_id} — Delete Support Address */
  async deleteRecipientAddress(support_address_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses/{support_address_id}".replaceAll("{support_address_id}", encodeURIComponent(String(support_address_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/recipient_addresses/{support_address_id}/verify — Verify Support Address Forwarding */
  async verifySupportAddressForwarding(support_address_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/recipient_addresses/{support_address_id}/verify".replaceAll("{support_address_id}", encodeURIComponent(String(support_address_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Suspended Tickets — 9 endpoints */
export class SuspendedTicketsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/suspended_tickets — List Suspended Tickets */
  async listSuspendedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/suspended_tickets/{id} — Show Suspended Ticket */
  async showSuspendedTickets(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/suspended_tickets/{id} — Delete Suspended Ticket */
  async deleteSuspendedTicket(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/{id}".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/suspended_tickets/{id}/recover — Recover Suspended Ticket */
  async recoverSuspendedTicket(id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/{id}/recover".replaceAll("{id}", encodeURIComponent(String(id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] POST /api/v2/suspended_tickets/attachments — Suspended Ticket Attachments */
  async suspendedTicketsAttachments(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/attachments";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/suspended_tickets/bulk_recover — Bulk Recover Suspended Tickets */
  async bulkRecoverSuspendedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/bulk_recover";
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/suspended_tickets/destroy_many — Delete Multiple Suspended Tickets */
  async deleteSuspendedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/suspended_tickets/export — Export Suspended Tickets */
  async exportSuspendedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/export";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/suspended_tickets/recover_many — Recover Multiple Suspended Tickets */
  async recoverSuspendedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/suspended_tickets/recover_many";
    return this.http.request("PUT", path, options);
  }
}

/** Tags — 16 endpoints */
export class TagsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/autocomplete/tags — Search Tags */
  async autocompleteTags(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/autocomplete/tags";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/autocomplete/tags — Search Tags by Request Body */
  async autocompleteTagsPost(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/autocomplete/tags";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/tags — List Organization Tags */
  async listOrganizationTags(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tags".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/organizations/{organization_id}/tags — Set Organization Tags */
  async setOrganizationTags(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tags".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/organizations/{organization_id}/tags — Add Organization Tags */
  async addOrganizationTags(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tags".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/organizations/{organization_id}/tags — Remove Organization Tags */
  async removeOrganizationTags(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tags".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/tags — List Tags */
  async listTags(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tags";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tags/count — Count Tags */
  async countTags(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tags/count";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/tags — List Resource Tags */
  async listResourceTags(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/tags".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/tags — Set Tags */
  async setTagsTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/tags".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/tags — Add Tags */
  async putTagsTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/tags".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/tickets/{ticket_id}/tags — Remove Tags */
  async deleteTagsTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/tags".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tags — List User Tags */
  async listUserTags(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tags".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/{user_id}/tags — Set User Tags */
  async setUserTags(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tags".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/tags — Add User Tags */
  async putUserTags(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tags".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/tags — Remove User Tags */
  async deleteUserTags(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tags".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Target Failures — 2 endpoints */
export class TargetFailuresApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/target_failures — List Target Failures */
  async listTargetFailures(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/target_failures";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/target_failures/{target_failure_id} — Show Target Failure */
  async showTargetFailure(target_failure_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/target_failures/{target_failure_id}".replaceAll("{target_failure_id}", encodeURIComponent(String(target_failure_id)));
    return this.http.request("GET", path, options);
  }
}

/** Targets — 5 endpoints */
export class TargetsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/targets — List Targets */
  async listTargets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/targets";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/targets — Create Target */
  async createTarget(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/targets";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/targets/{target_id} — Show Target */
  async showTarget(target_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/targets/{target_id}".replaceAll("{target_id}", encodeURIComponent(String(target_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/targets/{target_id} — Update Target */
  async updateTarget(target_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/targets/{target_id}".replaceAll("{target_id}", encodeURIComponent(String(target_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/targets/{target_id} — Delete Target */
  async deleteTarget(target_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/targets/{target_id}".replaceAll("{target_id}", encodeURIComponent(String(target_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Task List Templates — 6 endpoints */
export class TaskListTemplatesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/task_list_templates — List Task List Templates */
  async listTaskListTemplates(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/task_list_templates — Create Task List Template */
  async createTaskListTemplate(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/task_list_templates/{task_list_template_id} — Show Task List Template */
  async showTaskListTemplate(task_list_template_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates/{task_list_template_id}".replaceAll("{task_list_template_id}", encodeURIComponent(String(task_list_template_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/task_list_templates/{task_list_template_id} — Update Task List Template */
  async updateTaskListTemplate(task_list_template_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates/{task_list_template_id}".replaceAll("{task_list_template_id}", encodeURIComponent(String(task_list_template_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/task_list_templates/{task_list_template_id} — Delete Task List Template */
  async deleteTaskListTemplate(task_list_template_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates/{task_list_template_id}".replaceAll("{task_list_template_id}", encodeURIComponent(String(task_list_template_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/task_list_templates/{task_list_template_id}/tasks — Get Tasks by Task List Template Id */
  async getTasksByTaskListTemplateId(task_list_template_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_list_templates/{task_list_template_id}/tasks".replaceAll("{task_list_template_id}", encodeURIComponent(String(task_list_template_id)));
    return this.http.request("GET", path, options);
  }
}

/** Task Lists — 15 endpoints */
export class TaskListsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/task_lists/{task_list_id} — Show Task List */
  async showTaskListInstance(task_list_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/task_lists/{task_list_id} — Update Custom Task List */
  async updateCustomTaskList(task_list_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/task_lists/{task_list_id} — Delete Task List */
  async deleteTaskList(task_list_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/task_lists/{task_list_id}/task_items — List Task Items */
  async listTaskItems(task_list_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}/task_items".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/task_lists/{task_list_id}/task_items — Create Custom Task Item */
  async createCustomTaskItem(task_list_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}/task_items".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/task_lists/{task_list_id}/task_items/{task_item_id} — Show Task Item */
  async showTaskItem(task_list_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/task_lists/{task_list_id}/task_items/{task_item_id} — Update Task Item */
  async updateTaskItem(task_list_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/task_lists/{task_list_id}/task_items/{task_item_id} — Delete Custom Task Item */
  async deleteCustomTaskItem(task_list_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}".replaceAll("{task_list_id}", encodeURIComponent(String(task_list_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/parent_ticket_tasks — List Parent Ticket References */
  async listParentTicketReferences(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/parent_ticket_tasks".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/task_items/{task_item_id}/subticket — Create Subticket */
  async createSubticket(ticket_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/subticket".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links — List Linked Tickets */
  async listLinkedTicketsForTaskItem(ticket_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links — Link Existing Ticket */
  async linkExistingTicket(ticket_id: string | number, task_item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links/{task_object_link_id} — Unlink Ticket */
  async unlinkTicket(ticket_id: string | number, task_item_id: string | number, task_object_link_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links/{task_object_link_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{task_item_id}", encodeURIComponent(String(task_item_id))).replaceAll("{task_object_link_id}", encodeURIComponent(String(task_object_link_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/task_lists — Show Task Lists for Ticket */
  async showTaskListsForTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_lists".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/task_lists — Create Task List */
  async createTaskList(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/task_lists".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
}

/** Ticket Audits — 5 endpoints */
export class TicketAuditsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_audits — List All Ticket Audits */
  async listTicketAudits(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_audits";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/audits — List Audits for a Ticket */
  async listAuditsForTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/audits".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/audits/{ticket_audit_id} — Show Audit */
  async showTicketAudit(ticket_id: string | number, ticket_audit_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{ticket_audit_id}", encodeURIComponent(String(ticket_audit_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}/make_private — Change a Comment From Public To Private */
  async makeTicketCommentPrivateFromAudits(ticket_id: string | number, ticket_audit_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}/make_private".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{ticket_audit_id}", encodeURIComponent(String(ticket_audit_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/audits/count — Count Audits for a Ticket */
  async countAuditsForTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/audits/count".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Ticket Comments — 7 endpoints */
export class TicketCommentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] PUT /api/v2/chat_file_redactions/{ticket_id} — Redact Chat Comment Attachment */
  async redactChatCommentAttachment(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/chat_file_redactions/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/chat_redactions/{ticket_id} — Redact Chat Comment */
  async redactChatComment(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/chat_redactions/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/comment_redactions/{ticket_comment_id} — Redact Ticket Comment In Agent Workspace */
  async redactTicketCommentInAgentWorkspace(ticket_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/comment_redactions/{ticket_comment_id}".replaceAll("{ticket_comment_id}", encodeURIComponent(String(ticket_comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/comments — List Comments */
  async listTicketComments(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/comments".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/make_private — Make Comment Private */
  async makeTicketCommentPrivate(ticket_id: string | number, ticket_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/make_private".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{ticket_comment_id}", encodeURIComponent(String(ticket_comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/redact — Redact String in Comment */
  async redactStringInComment(ticket_id: string | number, ticket_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/redact".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id))).replaceAll("{ticket_comment_id}", encodeURIComponent(String(ticket_comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/comments/count — Count Ticket Comments */
  async countTicketComments(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/comments/count".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Ticket Content Pins — 3 endpoints */
export class TicketContentPinsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_content_pins — List Ticket Content Pins */
  async listTicketContentPins(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_content_pins";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_content_pins — Create Ticket Content Pin */
  async createTicketContentPin(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_content_pins";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_content_pins/{content_pin_id} — Delete Content Pin from Ticket */
  async deleteTicketContentPin(content_pin_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_content_pins/{content_pin_id}".replaceAll("{content_pin_id}", encodeURIComponent(String(content_pin_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Ticket Fields — 12 endpoints */
export class TicketFieldsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_fields — List Ticket Fields */
  async listTicketFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_fields — Create Ticket Field */
  async createTicketField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/ticket_fields/{ticket_field_id} — Show Ticket Field */
  async showTicketfield(ticket_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_fields/{ticket_field_id} — Update Ticket Field */
  async updateTicketField(ticket_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_fields/{ticket_field_id} — Delete Ticket Field */
  async deleteTicketField(ticket_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/ticket_fields/{ticket_field_id}/options — List Ticket Field Options */
  async listTicketFieldOptions(ticket_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}/options".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_fields/{ticket_field_id}/options — Create or Update Ticket Field Option */
  async createOrUpdateTicketFieldOption(ticket_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}/options".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id} — Show Ticket Field Option */
  async showTicketFieldOption(ticket_field_id: string | number, ticket_field_option_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id))).replaceAll("{ticket_field_option_id}", encodeURIComponent(String(ticket_field_option_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id} — Delete Ticket Field Option */
  async deleteTicketFieldOption(ticket_field_id: string | number, ticket_field_option_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}".replaceAll("{ticket_field_id}", encodeURIComponent(String(ticket_field_id))).replaceAll("{ticket_field_option_id}", encodeURIComponent(String(ticket_field_option_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/ticket_fields/count — Count Ticket Fields */
  async countTicketFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/count";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_fields/reorder — Reorder Ticket Fields */
  async reorderTicketFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/ticket_fields/show_many — Show Many Ticket Fields */
  async showManyTicketFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_fields/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Ticket Form Statuses — 4 endpoints */
export class TicketFormStatusesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_form_statuses — List Ticket Form Statuses */
  async listTicketFormStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_form_statuses";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/ticket_form_statuses/show_many — Show Many Ticket Form Statuses */
  async showManyTicketFormStatuses(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_form_statuses/show_many";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses — Delete Ticket Form Statuses */
  async deleteTicketFormStatuses(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id} — Delete Ticket Form Status By Id */
  async deleteTicketFormStatusById(ticket_form_id: string | number, ticket_form_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id}".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id))).replaceAll("{ticket_form_status_id}", encodeURIComponent(String(ticket_form_status_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Ticket Forms — 12 endpoints */
export class TicketFormsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_forms — List Ticket Forms */
  async listTicketForms(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_forms — Create Ticket Form */
  async createTicketForm(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/ticket_forms/{ticket_form_id} — Show Ticket Form */
  async showTicketForm(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_forms/{ticket_form_id} — Update Ticket Form */
  async updateTicketForm(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/ticket_forms/{ticket_form_id} — Delete Ticket Form */
  async deleteTicketForm(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_forms/{ticket_form_id}/clone — Clone an Already Existing Ticket Form */
  async cloneTicketForm(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/clone".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses — List Ticket Form Statuses of a Ticket Form */
  async ticketFormTicketFormStatuses(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses — Create Ticket Form Statuses */
  async createTicketFormStatuses(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses — Bulk Update Ticket Form Statuses of a Ticket Form */
  async updateTicketFormStatuses(ticket_form_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id} — Update Ticket Form Status By Id */
  async updateTicketFormStatusById(ticket_form_id: string | number, ticket_form_status_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id}".replaceAll("{ticket_form_id}", encodeURIComponent(String(ticket_form_id))).replaceAll("{ticket_form_status_id}", encodeURIComponent(String(ticket_form_status_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/ticket_forms/reorder — Reorder Ticket Forms */
  async reorderTicketForms(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/ticket_forms/show_many — Show Many Ticket Forms */
  async showManyTicketForms(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_forms/show_many";
    return this.http.request("GET", path, options);
  }
}

/** Ticket Import — 2 endpoints */
export class TicketImportApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/imports/tickets — Ticket Import */
  async ticketImport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/imports/tickets";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/imports/tickets/create_many — Ticket Bulk Import */
  async ticketBulkImport(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/imports/tickets/create_many";
    return this.http.request("POST", path, options);
  }
}

/** Ticket Metric Events — 2 endpoints */
export class TicketMetricEventsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/incremental/ticket_metric_events — List Ticket Metric Events */
  async listTicketMetricEvents(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/incremental/ticket_metric_events";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/metric_events — List Ticket Metric Events by Ticket */
  async listTicketMetricEventsByTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/metric_events".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Ticket Metrics — 3 endpoints */
export class TicketMetricsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/ticket_metrics — List Ticket Metrics */
  async listTicketMetrics(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_metrics";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/ticket_metrics/{ticket_metric_id} — Show Ticket Metrics */
  async showTicketMetrics(ticket_metric_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/ticket_metrics/{ticket_metric_id}".replaceAll("{ticket_metric_id}", encodeURIComponent(String(ticket_metric_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/metrics — Show Ticket Metrics By Ticket */
  async showTicketMetricsByTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/metrics".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
}

/** Ticket Skips — 4 endpoints */
export class TicketSkipsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/skips — List All Skips */
  async listSkips(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/skips";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/skips — Record a New Skip for the Current User */
  async recordNewSkip(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/skips";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/skips — List Ticket Skips By Ticket */
  async listTicketSkipsByTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/skips".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/skips — List Ticket Skips */
  async listTicketSkips(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/skips".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Tickets — 36 endpoints */
export class TicketsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/deleted_tickets — List Deleted Tickets */
  async listDeletedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_tickets";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/deleted_tickets/{ticket_id} — Delete Ticket Permanently */
  async deleteTicketPermanently(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_tickets/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/deleted_tickets/{ticket_id}/restore — Restore a Previously Deleted Ticket */
  async restoreDeletedTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_tickets/{ticket_id}/restore".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/deleted_tickets/destroy_many — Delete Multiple Tickets Permanently */
  async bulkPermanentlyDeleteTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_tickets/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/deleted_tickets/restore_many — Restore Previously Deleted Tickets in Bulk */
  async bulkRestoreDeletedTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_tickets/restore_many";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/tickets — List Organization Tickets */
  async listOrganizationTickets(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tickets".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/tickets/count — Count Organization Tickets */
  async countOrganizationTickets(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/tickets/count".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/problems — List Ticket Problems */
  async listTicketProblems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/problems";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/problems/autocomplete — Autocomplete Problems */
  async autocompleteProblems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/problems/autocomplete";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/tickets — List Tickets */
  async listTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets — Create Ticket */
  async createTicket(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id} — Show Ticket */
  async showTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id} — Update Ticket */
  async updateTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/tickets/{ticket_id} — Delete Ticket */
  async deleteTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/collaborators — List Collaborators for a Ticket */
  async listTicketCollaborators(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/collaborators".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/email_ccs — List Email CCs for a Ticket */
  async listTicketEmailCCs(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/email_ccs".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/followers — List Followers for a Ticket */
  async listTicketFollowers(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/followers".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/incidents — List Ticket Incidents */
  async listTicketIncidents(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/incidents".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/{ticket_id}/mark_as_spam — Mark Ticket as Spam and Suspend Requester */
  async markTicketAsSpamAndSuspendRequester(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/mark_as_spam".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/{ticket_id}/merge — Merge Tickets into Target Ticket */
  async mergeTicketsIntoTargetTicket(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/merge".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/tickets/{ticket_id}/related — Ticket Related Information */
  async ticketRelatedInformation(ticket_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/{ticket_id}/related".replaceAll("{ticket_id}", encodeURIComponent(String(ticket_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/autocomplete — Autocomplete Tickets */
  async autocompleteTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/autocomplete";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/count — Count Tickets */
  async countTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/count";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/tickets/create_many — Create Many Tickets */
  async ticketsCreateMany(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/create_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/tickets/destroy_many — Bulk Delete Tickets */
  async bulkDeleteTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/mark_many_as_spam — Bulk Mark Tickets as Spam */
  async markManyTicketsAsSpam(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/mark_many_as_spam";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/tickets/messaging/conversations/{conversation_id}/ticket — Show Ticket by Messaging Conversation ID */
  async showTicketByMessagingConversationId(conversation_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/messaging/conversations/{conversation_id}/ticket".replaceAll("{conversation_id}", encodeURIComponent(String(conversation_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/recent — List Recent Tickets */
  async listRecentTickets(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/recent";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/tickets/show_many — Show Multiple Tickets */
  async ticketsShowMany(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/show_many";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/tickets/update_many — Update Many Tickets */
  async ticketsUpdateMany(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/tickets/update_many";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/assigned — List User Assigned Tickets */
  async listUserAssignedTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/assigned".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/assigned/count — Count User Assigned Tickets */
  async countUserAssignedTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/assigned/count".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/ccd — List User CCD Tickets */
  async listUserCCDTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/ccd".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/ccd/count — Count User CCD Tickets */
  async countUserCCDTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/ccd/count".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/followed — List User Followed Tickets */
  async listUserFollowedTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/followed".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/tickets/requested — List User Requested Tickets */
  async listUserRequestedTickets(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/tickets/requested".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Trigger Categories — 6 endpoints */
export class TriggerCategoriesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/trigger_categories — List Ticket Trigger Categories */
  async listTriggerCategories(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/trigger_categories — Create Ticket Trigger Category */
  async createTriggerCategory(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/trigger_categories/{trigger_category_id} — Show Ticket Trigger Category */
  async showTriggerCategoryById(trigger_category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories/{trigger_category_id}".replaceAll("{trigger_category_id}", encodeURIComponent(String(trigger_category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PATCH /api/v2/trigger_categories/{trigger_category_id} — Update Ticket Trigger Category */
  async updateTriggerCategory(trigger_category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories/{trigger_category_id}".replaceAll("{trigger_category_id}", encodeURIComponent(String(trigger_category_id)));
    return this.http.request("PATCH", path, options);
  }
  /** [WRITE] DELETE /api/v2/trigger_categories/{trigger_category_id} — Delete Ticket Trigger Category */
  async deleteTriggerCategory(trigger_category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories/{trigger_category_id}".replaceAll("{trigger_category_id}", encodeURIComponent(String(trigger_category_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/trigger_categories/jobs — Create Batch Job for Ticket Trigger Categories */
  async batchOperateTriggerCategories(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/trigger_categories/jobs";
    return this.http.request("POST", path, options);
  }
}

/** Triggers — 15 endpoints */
export class TriggersApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/triggers — List Ticket Triggers */
  async listTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/triggers — Create Trigger */
  async createTrigger(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/triggers/{trigger_id} — Show Ticket Trigger */
  async getTrigger(trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/{trigger_id}".replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/triggers/{trigger_id} — Update Ticket Trigger */
  async updateTrigger(trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/{trigger_id}".replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/triggers/{trigger_id} — Delete Ticket Trigger */
  async deleteTrigger(trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/{trigger_id}".replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/triggers/{trigger_id}/revisions — List Ticket Trigger Revisions */
  async listTriggerRevisions(trigger_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/{trigger_id}/revisions".replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/triggers/{trigger_id}/revisions/{trigger_revision_id} — Show Ticket Trigger Revision */
  async triggerRevision(trigger_id: string | number, trigger_revision_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/{trigger_id}/revisions/{trigger_revision_id}".replaceAll("{trigger_id}", encodeURIComponent(String(trigger_id))).replaceAll("{trigger_revision_id}", encodeURIComponent(String(trigger_revision_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/triggers/active — List Active Ticket Triggers */
  async listActiveTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/active";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/triggers/definitions — List Ticket Trigger Action and Condition Definitions */
  async listTriggerActionConditionDefinitions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/triggers/destroy_many — Bulk Delete Ticket Triggers */
  async deleteManyTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/triggers/limits — Show Ticket Trigger Limits */
  async showTriggerLimits(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/limits";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/triggers/reorder — Reorder Ticket Triggers */
  async reorderTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/triggers/search — Search Ticket Triggers */
  async searchTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/search";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/triggers/update_many — Update Many Ticket Triggers */
  async updateManyTriggers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/update_many";
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] POST /api/v2/triggers/validate — Validate Ticket Trigger */
  async validateTrigger(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/triggers/validate";
    return this.http.request("POST", path, options);
  }
}

/** User Fields — 11 endpoints */
export class UserFieldsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/user_fields — List User Fields */
  async listUserFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/user_fields — Create User Field */
  async createUserField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/user_fields/{user_field_id} — Show User Field */
  async showUserField(user_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/user_fields/{user_field_id} — Update User Field */
  async updateUserField(user_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/user_fields/{user_field_id} — Delete User Field */
  async deleteUserField(user_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/user_fields/{user_field_id}/options — List User Field Options */
  async listUserFieldOptions(user_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}/options".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/user_fields/{user_field_id}/options — Create or Update a User Field Option */
  async createOrUpdateUserFieldOption(user_field_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}/options".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/user_fields/{user_field_id}/options/{user_field_option_id} — Show a User Field Option */
  async showUserFieldOption(user_field_id: string | number, user_field_option_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id))).replaceAll("{user_field_option_id}", encodeURIComponent(String(user_field_option_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/user_fields/{user_field_id}/options/{user_field_option_id} — Delete User Field Option */
  async deleteUserFieldOption(user_field_id: string | number, user_field_option_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}".replaceAll("{user_field_id}", encodeURIComponent(String(user_field_id))).replaceAll("{user_field_option_id}", encodeURIComponent(String(user_field_option_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/user_fields/reorder — Reorder User Field */
  async reorderUserField(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/reorder";
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/user_fields/show_many — Show Many User Fields */
  async showManyUserFields(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/user_fields/show_many";
    return this.http.request("GET", path, options);
  }
}

/** User Identities — 14 endpoints */
export class UserIdentitiesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/end_users/{user_id}/identities — List End User Identities */
  async listEndUserIdentities(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/end_users/{user_id}/identities — Create End User Identity */
  async createEndUserIdentity(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/end_users/{user_id}/identities/{user_identity_id} — Show End User Identity */
  async showEndUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities/{user_identity_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/end_users/{user_id}/identities/{user_identity_id} — Delete End User Identity */
  async deleteEndUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities/{user_identity_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/end_users/{user_id}/identities/{user_identity_id}/make_primary — Make End User Identity Primary */
  async makeEndUserIdentityPrimary(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities/{user_identity_id}/make_primary".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/end_users/{user_id}/identities/{user_identity_id}/request_verification — Request End User Verification */
  async requestEndUserVerification(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/end_users/{user_id}/identities/{user_identity_id}/request_verification".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/identities — List Identities */
  async listUserIdentities(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/{user_id}/identities — Create Identity */
  async createUserIdentity(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/identities/{user_identity_id} — Show Identity */
  async showUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/identities/{user_identity_id} — Update Identity */
  async updateUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/identities/{user_identity_id} — Delete Identity */
  async deleteUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/identities/{user_identity_id}/make_primary — Make Identity Primary */
  async makeUserIdentityPrimary(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}/make_primary".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/identities/{user_identity_id}/request_verification — Request User Verification */
  async requestUserVerification(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}/request_verification".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/identities/{user_identity_id}/verify — Verify Identity */
  async verifyUserIdentity(user_id: string | number, user_identity_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/identities/{user_identity_id}/verify".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{user_identity_id}", encodeURIComponent(String(user_identity_id)));
    return this.http.request("PUT", path, options);
  }
}

/** User Passwords — 3 endpoints */
export class UserPasswordsApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/users/{user_id}/password — Set a User's Password */
  async setUserPassword(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/password".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/password — Change Your Password */
  async changeOwnPassword(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/password".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/password/requirements — List password requirements */
  async getUserPasswordRequirements(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/password/requirements".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Users — 36 endpoints */
export class UsersApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/deleted_users — List Deleted Users */
  async listDeletedUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_users";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/deleted_users/{deleted_user_id} — Show Deleted User */
  async showDeletedUser(deleted_user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_users/{deleted_user_id}".replaceAll("{deleted_user_id}", encodeURIComponent(String(deleted_user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/deleted_users/{deleted_user_id} — Permanently Delete User */
  async permanentlyDeleteUser(deleted_user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_users/{deleted_user_id}".replaceAll("{deleted_user_id}", encodeURIComponent(String(deleted_user_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/deleted_users/count — Count Deleted Users */
  async countDeletedUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/deleted_users/count";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/{group_id}/users — List Users By Group */
  async listGroupUsers(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}/users".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/groups/{group_id}/users/count — Count Users By Group */
  async countGroupUsers(group_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/groups/{group_id}/users/count".replaceAll("{group_id}", encodeURIComponent(String(group_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/users — List Organization Users */
  async listOrganizationUsers(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/users".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/organizations/{organization_id}/users/count — Count Organization Users */
  async countOrganizationUsers(organization_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/organizations/{organization_id}/users/count".replaceAll("{organization_id}", encodeURIComponent(String(organization_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users — List Users */
  async listUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users — Create User */
  async createUser(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id} — Show User */
  async showUser(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id} — Update User */
  async updateUser(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id} — Delete User */
  async deleteUser(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/compliance_deletion_statuses — Show Compliance Deletion Statuses */
  async showUserComplianceDeletionStatuses(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/compliance_deletion_statuses".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/entitlements/full — Get Full User Entitlements */
  async getUserEntitlementsFull(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/entitlements/full".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/merge — Merge End Users */
  async mergeEndUsers(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/merge".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/related — Show User Related Information */
  async showUserRelated(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/related".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/{user_id}/suspension — Show a User's Suspension */
  async showUserSuspension(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/suspension".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/{user_id}/suspension — Create a User Suspension */
  async createUserSuspension(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/suspension".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/users/{user_id}/suspension — Update a User's Suspension */
  async updateUserSuspension(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/suspension".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/{user_id}/suspension — Delete the User Suspension */
  async deleteUserSuspension(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/{user_id}/suspension".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/users/autocomplete — Autocomplete Users */
  async autocompleteUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/autocomplete";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/autocomplete — Autocomplete Users by Request Body */
  async autocompleteUsersPost(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/autocomplete";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/count — Count Users */
  async countUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/count";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/users/create_many — Create Many Users */
  async createManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/create_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/users/create_or_update — Create Or Update User */
  async createOrUpdateUser(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/create_or_update";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/users/create_or_update_many — Create Or Update Many Users */
  async createOrUpdateManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/create_or_update_many";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/users/destroy_many — Bulk Delete Users */
  async destroyManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/users/logout_many — Logout many users */
  async logoutManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/logout_many";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/me — Show Self */
  async showCurrentUser(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/me/settings — Show Current User Settings */
  async showCurrentUserSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/settings";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/users/me/settings — Update Current User Settings */
  async updateCurrentUserSettings(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/me/settings";
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] POST /api/v2/users/request_create — Request User Create */
  async requestUserCreate(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/request_create";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/users/search — Search Users */
  async searchUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/users/show_many — Show Many Users */
  async showManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/show_many";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/users/update_many — Update Many Users */
  async updateManyUsers(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/users/update_many";
    return this.http.request("PUT", path, options);
  }
}

/** Views — 20 endpoints */
export class ViewsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/views — List Views */
  async listViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/views — Create View */
  async createView(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/views/{view_id} — Show View */
  async showView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/views/{view_id} — Update View */
  async updateView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/views/{view_id} — Delete View */
  async deleteView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/views/{view_id}/count — Count Tickets in View */
  async getViewCount(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}/count".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/{view_id}/execute — Execute View */
  async executeView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}/execute".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/{view_id}/export — Export View */
  async exportView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}/export".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/{view_id}/tickets — List Tickets From a View */
  async listTicketsFromView(view_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/{view_id}/tickets".replaceAll("{view_id}", encodeURIComponent(String(view_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/active — List Active Views */
  async listActiveViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/active";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/compact — List Views - Compact */
  async listCompactViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/compact";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/count — Count Views */
  async countViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/count";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/count_many — Count Tickets in Views */
  async getViewCounts(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/count_many";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/definitions — List View Filter Definitions */
  async listViewDefinitions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/definitions";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/views/destroy_many — Bulk Delete Views */
  async bulkDeleteViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/views/preview — Preview Views */
  async previewViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/preview";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/views/preview/count — Preview Ticket Count */
  async previewCount(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/preview/count";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/views/search — Search Views */
  async searchViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/views/show_many — List Views By ID */
  async listViewsById(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/show_many";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/views/update_many — Update Many Views */
  async updateManyViews(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/views/update_many";
    return this.http.request("PUT", path, options);
  }
}

/** WhatsApp Templates — 4 endpoints */
export class WhatsappTemplatesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/channels/whatsapp_templates — List WhatsApp Templates */
  async listWhatsappTemplates(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/whatsapp_templates";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/channels/whatsapp_templates/{template_id}/toggle — Toggle WhatsApp Template */
  async toggleWhatsappTemplate(template_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/whatsapp_templates/{template_id}/toggle".replaceAll("{template_id}", encodeURIComponent(String(template_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/channels/whatsapp_templates/languages — List WhatsApp Template Languages */
  async listWhatsappTemplateLanguages(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/whatsapp_templates/languages";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/channels/whatsapp_templates/toggle_many — Bulk Toggle WhatsApp Templates */
  async toggleManyWhatsappTemplates(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/whatsapp_templates/toggle_many";
    return this.http.request("PUT", path, options);
  }
}

/** Workspaces — 7 endpoints */
export class WorkspacesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/workspaces — List Workspaces */
  async listWorkspaces(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/workspaces — Create Workspace */
  async createWorkspace(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/workspaces/{workspace_id} — Show Workspace */
  async showWorkspace(workspace_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces/{workspace_id}".replaceAll("{workspace_id}", encodeURIComponent(String(workspace_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/workspaces/{workspace_id} — Update Workspace */
  async updateWorkspace(workspace_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces/{workspace_id}".replaceAll("{workspace_id}", encodeURIComponent(String(workspace_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/workspaces/{workspace_id} — Delete Workspace */
  async deleteWorkspace(workspace_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces/{workspace_id}".replaceAll("{workspace_id}", encodeURIComponent(String(workspace_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] DELETE /api/v2/workspaces/destroy_many — Bulk Delete Workspaces */
  async destroyManyWorkspaces(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces/destroy_many";
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/workspaces/reorder — Reorder Workspaces */
  async reorderWorkspaces(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/workspaces/reorder";
    return this.http.request("PUT", path, options);
  }
}

/** X Channel — 4 endpoints */
export class XChannelApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/channels/twitter/monitored_twitter_handles — List Monitored X Handles */
  async listMonitoredTwitterHandles(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/twitter/monitored_twitter_handles";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/channels/twitter/monitored_twitter_handles/{monitored_twitter_handle_id} — Show Monitored X Handle */
  async showMonitoredTwitterHandle(monitored_twitter_handle_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/twitter/monitored_twitter_handles/{monitored_twitter_handle_id}".replaceAll("{monitored_twitter_handle_id}", encodeURIComponent(String(monitored_twitter_handle_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/channels/twitter/tickets — Create Ticket from Tweet */
  async createTicketFromTweet(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/twitter/tickets";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/channels/twitter/tickets/{comment_id}/statuses — List Ticket statuses */
  async gettingTwicketStatus(comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/channels/twitter/tickets/{comment_id}/statuses".replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
}

export class SupportClient {
  readonly apiTokens: ApiTokensApi;
  readonly accountSettings: AccountSettingsApi;
  readonly activityStream: ActivityStreamApi;
  readonly approvalRequests: ApprovalRequestsApi;
  readonly attachments: AttachmentsApi;
  readonly auditLogs: AuditLogsApi;
  readonly automations: AutomationsApi;
  readonly basics: BasicsApi;
  readonly bookmarks: BookmarksApi;
  readonly brandAgents: BrandAgentsApi;
  readonly brandUserMigrations: BrandUserMigrationsApi;
  readonly brands: BrandsApi;
  readonly channelFramework: ChannelFrameworkApi;
  readonly conversationLog: ConversationLogApi;
  readonly countries: CountriesApi;
  readonly customObjectFields: CustomObjectFieldsApi;
  readonly customObjectPermissions: CustomObjectPermissionsApi;
  readonly customObjectRecordAttachments: CustomObjectRecordAttachmentsApi;
  readonly customObjectRecords: CustomObjectRecordsApi;
  readonly customObjects: CustomObjectsApi;
  readonly customRoles: CustomRolesApi;
  readonly customTicketStatuses: CustomTicketStatusesApi;
  readonly deletionSchedules: DeletionSchedulesApi;
  readonly dynamicContent: DynamicContentApi;
  readonly dynamicContentItemVariants: DynamicContentItemVariantsApi;
  readonly emailNotifications: EmailNotificationsApi;
  readonly globalClients: GlobalClientsApi;
  readonly grantTypeTokens: GrantTypeTokensApi;
  readonly groupMemberships: GroupMembershipsApi;
  readonly groupSlaPolicies: GroupSlaPoliciesApi;
  readonly groups: GroupsApi;
  readonly itamAssetFields: ItamAssetFieldsApi;
  readonly itamAssetLocations: ItamAssetLocationsApi;
  readonly itamAssetStatuses: ItamAssetStatusesApi;
  readonly itamAssetTypes: ItamAssetTypesApi;
  readonly itamAssets: ItamAssetsApi;
  readonly incrementalExport: IncrementalExportApi;
  readonly incrementalSkillBasedRouting: IncrementalSkillBasedRoutingApi;
  readonly jobStatuses: JobStatusesApi;
  readonly locales: LocalesApi;
  readonly lookupRelationships: LookupRelationshipsApi;
  readonly macros: MacrosApi;
  readonly oauthClients: OauthClientsApi;
  readonly oauthTokens: OauthTokensApi;
  readonly objectTriggers: ObjectTriggersApi;
  readonly omnichannelRoutingQueues: OmnichannelRoutingQueuesApi;
  readonly organizationFields: OrganizationFieldsApi;
  readonly organizationMemberships: OrganizationMembershipsApi;
  readonly organizationSubscriptions: OrganizationSubscriptionsApi;
  readonly organizations: OrganizationsApi;
  readonly pushNotificationDevices: PushNotificationDevicesApi;
  readonly remoteAuthentications: RemoteAuthenticationsApi;
  readonly requests: RequestsApi;
  readonly reseller: ResellerApi;
  readonly resourceCollections: ResourceCollectionsApi;
  readonly slaPolicies: SlaPoliciesApi;
  readonly satisfactionRatings: SatisfactionRatingsApi;
  readonly satisfactionReasons: SatisfactionReasonsApi;
  readonly savedSearches: SavedSearchesApi;
  readonly search: SearchApi;
  readonly securitySettings: SecuritySettingsApi;
  readonly sessions: SessionsApi;
  readonly sharingAgreements: SharingAgreementsApi;
  readonly skillBasedRouting: SkillBasedRoutingApi;
  readonly supportAddresses: SupportAddressesApi;
  readonly suspendedTickets: SuspendedTicketsApi;
  readonly tags: TagsApi;
  readonly targetFailures: TargetFailuresApi;
  readonly targets: TargetsApi;
  readonly taskListTemplates: TaskListTemplatesApi;
  readonly taskLists: TaskListsApi;
  readonly ticketAudits: TicketAuditsApi;
  readonly ticketComments: TicketCommentsApi;
  readonly ticketContentPins: TicketContentPinsApi;
  readonly ticketFields: TicketFieldsApi;
  readonly ticketFormStatuses: TicketFormStatusesApi;
  readonly ticketForms: TicketFormsApi;
  readonly ticketImport: TicketImportApi;
  readonly ticketMetricEvents: TicketMetricEventsApi;
  readonly ticketMetrics: TicketMetricsApi;
  readonly ticketSkips: TicketSkipsApi;
  readonly tickets: TicketsApi;
  readonly triggerCategories: TriggerCategoriesApi;
  readonly triggers: TriggersApi;
  readonly userFields: UserFieldsApi;
  readonly userIdentities: UserIdentitiesApi;
  readonly userPasswords: UserPasswordsApi;
  readonly users: UsersApi;
  readonly views: ViewsApi;
  readonly whatsappTemplates: WhatsappTemplatesApi;
  readonly workspaces: WorkspacesApi;
  readonly xChannel: XChannelApi;
  constructor(http: ZendeskHttp) {
    this.apiTokens = new ApiTokensApi(http);
    this.accountSettings = new AccountSettingsApi(http);
    this.activityStream = new ActivityStreamApi(http);
    this.approvalRequests = new ApprovalRequestsApi(http);
    this.attachments = new AttachmentsApi(http);
    this.auditLogs = new AuditLogsApi(http);
    this.automations = new AutomationsApi(http);
    this.basics = new BasicsApi(http);
    this.bookmarks = new BookmarksApi(http);
    this.brandAgents = new BrandAgentsApi(http);
    this.brandUserMigrations = new BrandUserMigrationsApi(http);
    this.brands = new BrandsApi(http);
    this.channelFramework = new ChannelFrameworkApi(http);
    this.conversationLog = new ConversationLogApi(http);
    this.countries = new CountriesApi(http);
    this.customObjectFields = new CustomObjectFieldsApi(http);
    this.customObjectPermissions = new CustomObjectPermissionsApi(http);
    this.customObjectRecordAttachments = new CustomObjectRecordAttachmentsApi(http);
    this.customObjectRecords = new CustomObjectRecordsApi(http);
    this.customObjects = new CustomObjectsApi(http);
    this.customRoles = new CustomRolesApi(http);
    this.customTicketStatuses = new CustomTicketStatusesApi(http);
    this.deletionSchedules = new DeletionSchedulesApi(http);
    this.dynamicContent = new DynamicContentApi(http);
    this.dynamicContentItemVariants = new DynamicContentItemVariantsApi(http);
    this.emailNotifications = new EmailNotificationsApi(http);
    this.globalClients = new GlobalClientsApi(http);
    this.grantTypeTokens = new GrantTypeTokensApi(http);
    this.groupMemberships = new GroupMembershipsApi(http);
    this.groupSlaPolicies = new GroupSlaPoliciesApi(http);
    this.groups = new GroupsApi(http);
    this.itamAssetFields = new ItamAssetFieldsApi(http);
    this.itamAssetLocations = new ItamAssetLocationsApi(http);
    this.itamAssetStatuses = new ItamAssetStatusesApi(http);
    this.itamAssetTypes = new ItamAssetTypesApi(http);
    this.itamAssets = new ItamAssetsApi(http);
    this.incrementalExport = new IncrementalExportApi(http);
    this.incrementalSkillBasedRouting = new IncrementalSkillBasedRoutingApi(http);
    this.jobStatuses = new JobStatusesApi(http);
    this.locales = new LocalesApi(http);
    this.lookupRelationships = new LookupRelationshipsApi(http);
    this.macros = new MacrosApi(http);
    this.oauthClients = new OauthClientsApi(http);
    this.oauthTokens = new OauthTokensApi(http);
    this.objectTriggers = new ObjectTriggersApi(http);
    this.omnichannelRoutingQueues = new OmnichannelRoutingQueuesApi(http);
    this.organizationFields = new OrganizationFieldsApi(http);
    this.organizationMemberships = new OrganizationMembershipsApi(http);
    this.organizationSubscriptions = new OrganizationSubscriptionsApi(http);
    this.organizations = new OrganizationsApi(http);
    this.pushNotificationDevices = new PushNotificationDevicesApi(http);
    this.remoteAuthentications = new RemoteAuthenticationsApi(http);
    this.requests = new RequestsApi(http);
    this.reseller = new ResellerApi(http);
    this.resourceCollections = new ResourceCollectionsApi(http);
    this.slaPolicies = new SlaPoliciesApi(http);
    this.satisfactionRatings = new SatisfactionRatingsApi(http);
    this.satisfactionReasons = new SatisfactionReasonsApi(http);
    this.savedSearches = new SavedSearchesApi(http);
    this.search = new SearchApi(http);
    this.securitySettings = new SecuritySettingsApi(http);
    this.sessions = new SessionsApi(http);
    this.sharingAgreements = new SharingAgreementsApi(http);
    this.skillBasedRouting = new SkillBasedRoutingApi(http);
    this.supportAddresses = new SupportAddressesApi(http);
    this.suspendedTickets = new SuspendedTicketsApi(http);
    this.tags = new TagsApi(http);
    this.targetFailures = new TargetFailuresApi(http);
    this.targets = new TargetsApi(http);
    this.taskListTemplates = new TaskListTemplatesApi(http);
    this.taskLists = new TaskListsApi(http);
    this.ticketAudits = new TicketAuditsApi(http);
    this.ticketComments = new TicketCommentsApi(http);
    this.ticketContentPins = new TicketContentPinsApi(http);
    this.ticketFields = new TicketFieldsApi(http);
    this.ticketFormStatuses = new TicketFormStatusesApi(http);
    this.ticketForms = new TicketFormsApi(http);
    this.ticketImport = new TicketImportApi(http);
    this.ticketMetricEvents = new TicketMetricEventsApi(http);
    this.ticketMetrics = new TicketMetricsApi(http);
    this.ticketSkips = new TicketSkipsApi(http);
    this.tickets = new TicketsApi(http);
    this.triggerCategories = new TriggerCategoriesApi(http);
    this.triggers = new TriggersApi(http);
    this.userFields = new UserFieldsApi(http);
    this.userIdentities = new UserIdentitiesApi(http);
    this.userPasswords = new UserPasswordsApi(http);
    this.users = new UsersApi(http);
    this.views = new ViewsApi(http);
    this.whatsappTemplates = new WhatsappTemplatesApi(http);
    this.workspaces = new WorkspacesApi(http);
    this.xChannel = new XChannelApi(http);
  }
}
