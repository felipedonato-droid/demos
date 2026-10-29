// Auto-generated — DO NOT EDIT BY HAND
export type HttpMethod = "GET"|"POST"|"PUT"|"PATCH"|"DELETE"|"HEAD"|"OPTIONS";
export type Rw = "READ"|"WRITE";
export interface Endpoint {
  operationId: string;
  method: HttpMethod;
  path: string;
  tag: string;
  product: "support"|"helpCenter"|"conversations";
  rw: Rw;
  pathParams: string[];
  summary?: string | null;
}
export const ENDPOINTS: Endpoint[] = [
  {
    "operationId": "GetSourcesByTarget",
    "method": "GET",
    "path": "/api/v2/{target_type}/{target_id}/relationship_fields/{field_id}/{source_type}",
    "tag": "Lookup Relationships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "target_type",
      "target_id",
      "field_id",
      "source_type"
    ],
    "summary": "Get sources by target"
  },
  {
    "operationId": "GetAccountEmailSettings",
    "method": "GET",
    "path": "/api/v2/account/email_settings",
    "tag": "Account Settings",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Email Settings"
  },
  {
    "operationId": "UpdateAccountEmailSettings",
    "method": "PUT",
    "path": "/api/v2/account/email_settings",
    "tag": "Account Settings",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Email Settings"
  },
  {
    "operationId": "ShowAccountSettings",
    "method": "GET",
    "path": "/api/v2/account/settings",
    "tag": "Account Settings",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Settings"
  },
  {
    "operationId": "UpdateAccountSettings",
    "method": "PUT",
    "path": "/api/v2/account/settings",
    "tag": "Account Settings",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Account Settings"
  },
  {
    "operationId": "CreateTrialAccount",
    "method": "POST",
    "path": "/api/v2/accounts",
    "tag": "Reseller",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Trial Account"
  },
  {
    "operationId": "VerifySubdomainAvailability",
    "method": "GET",
    "path": "/api/v2/accounts/available",
    "tag": "Reseller",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Verify Subdomain Availability"
  },
  {
    "operationId": "ListActivities",
    "method": "GET",
    "path": "/api/v2/activities",
    "tag": "Activity Stream",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Activities"
  },
  {
    "operationId": "ShowActivity",
    "method": "GET",
    "path": "/api/v2/activities/{activity_id}",
    "tag": "Activity Stream",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "activity_id"
    ],
    "summary": "Show Activity"
  },
  {
    "operationId": "CountActivities",
    "method": "GET",
    "path": "/api/v2/activities/count",
    "tag": "Activity Stream",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Activities"
  },
  {
    "operationId": "ReportChannelbackError",
    "method": "POST",
    "path": "/api/v2/any_channel/channelback/report_error",
    "tag": "Channel Framework",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Report Channelback Error to Zendesk"
  },
  {
    "operationId": "PushContentToSupport",
    "method": "POST",
    "path": "/api/v2/any_channel/push",
    "tag": "Channel Framework",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Push Content to Support"
  },
  {
    "operationId": "ValidateToken",
    "method": "POST",
    "path": "/api/v2/any_channel/validate_token",
    "tag": "Channel Framework",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Validate Token"
  },
  {
    "operationId": "ListApiTokens",
    "method": "GET",
    "path": "/api/v2/api_tokens",
    "tag": "API Tokens",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List API Tokens"
  },
  {
    "operationId": "CreateApiToken",
    "method": "POST",
    "path": "/api/v2/api_tokens",
    "tag": "API Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create API Token"
  },
  {
    "operationId": "UpdateApiToken",
    "method": "PUT",
    "path": "/api/v2/api_tokens/{id}",
    "tag": "API Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Update API Token"
  },
  {
    "operationId": "DeleteApiToken",
    "method": "DELETE",
    "path": "/api/v2/api_tokens/{id}",
    "tag": "API Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Delete API Token"
  },
  {
    "operationId": "CreateApprovalClarificationFlowMessage",
    "method": "POST",
    "path": "/api/v2/approval_clarification_flow_messages",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Approval Clarification Flow Message"
  },
  {
    "operationId": "ShowApprovalClarificationFlowMessages",
    "method": "GET",
    "path": "/api/v2/approval_clarification_flow_messages/{approval_request_id}",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "approval_request_id"
    ],
    "summary": "Show Approval Clarification Flow Messages"
  },
  {
    "operationId": "ListApprovalRequests",
    "method": "GET",
    "path": "/api/v2/approval_requests",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Approval Requests"
  },
  {
    "operationId": "CreateApprovalRequest",
    "method": "POST",
    "path": "/api/v2/approval_requests",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Approval Request"
  },
  {
    "operationId": "ShowApprovalWorkflowInstanceApprovalRequest",
    "method": "GET",
    "path": "/api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id}",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "workflow_instance_id",
      "id"
    ],
    "summary": "Show Approval Request"
  },
  {
    "operationId": "DecideApprovalRequest",
    "method": "PATCH",
    "path": "/api/v2/approval_workflow_instances/{workflow_instance_id}/approval_requests/{id}/decision",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "workflow_instance_id",
      "id"
    ],
    "summary": "Decide Approval Request"
  },
  {
    "operationId": "WithdrawApprovalWorkflowInstance",
    "method": "PATCH",
    "path": "/api/v2/approval_workflow_instances/{workflow_instance_id}/withdraw",
    "tag": "Approval Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "workflow_instance_id"
    ],
    "summary": "Withdraw Approval Workflow Instance"
  },
  {
    "operationId": "ShowAttachment",
    "method": "GET",
    "path": "/api/v2/attachments/{attachment_id}",
    "tag": "Attachments",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attachment_id"
    ],
    "summary": "Show Attachment"
  },
  {
    "operationId": "UpdateAttachment",
    "method": "PUT",
    "path": "/api/v2/attachments/{attachment_id}",
    "tag": "Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attachment_id"
    ],
    "summary": "Update Attachment for Malware"
  },
  {
    "operationId": "DeleteAttachment",
    "method": "DELETE",
    "path": "/api/v2/attachments/{attachment_id}",
    "tag": "Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attachment_id"
    ],
    "summary": "Delete Attachment"
  },
  {
    "operationId": "ListAuditLogs",
    "method": "GET",
    "path": "/api/v2/audit_logs",
    "tag": "Audit Logs",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Audit Logs"
  },
  {
    "operationId": "ShowAuditLog",
    "method": "GET",
    "path": "/api/v2/audit_logs/{audit_log_id}",
    "tag": "Audit Logs",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "audit_log_id"
    ],
    "summary": "Show Audit Log"
  },
  {
    "operationId": "ExportAuditLogs",
    "method": "POST",
    "path": "/api/v2/audit_logs/export",
    "tag": "Audit Logs",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Export Audit Logs"
  },
  {
    "operationId": "AutocompleteTags",
    "method": "GET",
    "path": "/api/v2/autocomplete/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Tags"
  },
  {
    "operationId": "AutocompleteTagsPost",
    "method": "POST",
    "path": "/api/v2/autocomplete/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Search Tags by Request Body"
  },
  {
    "operationId": "ListAutomations",
    "method": "GET",
    "path": "/api/v2/automations",
    "tag": "Automations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Automations"
  },
  {
    "operationId": "CreateAutomation",
    "method": "POST",
    "path": "/api/v2/automations",
    "tag": "Automations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Automation"
  },
  {
    "operationId": "ShowAutomation",
    "method": "GET",
    "path": "/api/v2/automations/{automation_id}",
    "tag": "Automations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "automation_id"
    ],
    "summary": "Show Automation"
  },
  {
    "operationId": "UpdateAutomation",
    "method": "PUT",
    "path": "/api/v2/automations/{automation_id}",
    "tag": "Automations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "automation_id"
    ],
    "summary": "Update Automation"
  },
  {
    "operationId": "DeleteAutomation",
    "method": "DELETE",
    "path": "/api/v2/automations/{automation_id}",
    "tag": "Automations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "automation_id"
    ],
    "summary": "Delete Automation"
  },
  {
    "operationId": "ListActiveAutomations",
    "method": "GET",
    "path": "/api/v2/automations/active",
    "tag": "Automations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Active Automations"
  },
  {
    "operationId": "BulkDeleteAutomations",
    "method": "DELETE",
    "path": "/api/v2/automations/destroy_many",
    "tag": "Automations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Automations"
  },
  {
    "operationId": "SearchAutomations",
    "method": "GET",
    "path": "/api/v2/automations/search",
    "tag": "Automations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Automations"
  },
  {
    "operationId": "UpdateManyAutomations",
    "method": "PUT",
    "path": "/api/v2/automations/update_many",
    "tag": "Automations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Automations"
  },
  {
    "operationId": "ListBookmarks",
    "method": "GET",
    "path": "/api/v2/bookmarks",
    "tag": "Bookmarks",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Bookmarks"
  },
  {
    "operationId": "CreateBookmark",
    "method": "POST",
    "path": "/api/v2/bookmarks",
    "tag": "Bookmarks",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Bookmark"
  },
  {
    "operationId": "DeleteBookmark",
    "method": "DELETE",
    "path": "/api/v2/bookmarks/{bookmark_id}",
    "tag": "Bookmarks",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "bookmark_id"
    ],
    "summary": "Delete Bookmark"
  },
  {
    "operationId": "ListBrandAgents",
    "method": "GET",
    "path": "/api/v2/brand_agents",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Brand Agent Memberships"
  },
  {
    "operationId": "CreateBrandAgent",
    "method": "POST",
    "path": "/api/v2/brand_agents",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Brand Agent Membership"
  },
  {
    "operationId": "ShowBrandAgentById",
    "method": "GET",
    "path": "/api/v2/brand_agents/{brand_agent_id}",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_agent_id"
    ],
    "summary": "Show Brand Agent Membership"
  },
  {
    "operationId": "DeleteBrandAgentById",
    "method": "DELETE",
    "path": "/api/v2/brand_agents/{brand_agent_id}",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_agent_id"
    ],
    "summary": "Delete Brand Agent Membership"
  },
  {
    "operationId": "ListBrands",
    "method": "GET",
    "path": "/api/v2/brands",
    "tag": "Brands",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Brands"
  },
  {
    "operationId": "CreateBrand",
    "method": "POST",
    "path": "/api/v2/brands",
    "tag": "Brands",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Brand"
  },
  {
    "operationId": "ShowBrand",
    "method": "GET",
    "path": "/api/v2/brands/{brand_id}",
    "tag": "Brands",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Show a Brand"
  },
  {
    "operationId": "UpdateBrand",
    "method": "PUT",
    "path": "/api/v2/brands/{brand_id}",
    "tag": "Brands",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Update a Brand"
  },
  {
    "operationId": "DeleteBrand",
    "method": "DELETE",
    "path": "/api/v2/brands/{brand_id}",
    "tag": "Brands",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Delete a Brand"
  },
  {
    "operationId": "ListBrandAgentsByBrand",
    "method": "GET",
    "path": "/api/v2/brands/{brand_id}/agents",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_id"
    ],
    "summary": "List Agents By Brand"
  },
  {
    "operationId": "CheckHostMappingValidityForExistingBrand",
    "method": "GET",
    "path": "/api/v2/brands/{brand_id}/check_host_mapping",
    "tag": "Brands",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Check Host Mapping Validity for an Existing Brand"
  },
  {
    "operationId": "UpdateBrandLogo",
    "method": "PUT",
    "path": "/api/v2/brands/{brand_id}/logo",
    "tag": "Brands",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Update a Brand Logo"
  },
  {
    "operationId": "DeleteBrandLogo",
    "method": "DELETE",
    "path": "/api/v2/brands/{brand_id}/logo",
    "tag": "Brands",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Delete a Brand Logo"
  },
  {
    "operationId": "ListBrandUserMigrations",
    "method": "GET",
    "path": "/api/v2/brands/{brand_id}/user_migrations",
    "tag": "Brand User Migrations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_id"
    ],
    "summary": "List Brand User Migrations"
  },
  {
    "operationId": "CreateBrandUserMigration",
    "method": "POST",
    "path": "/api/v2/brands/{brand_id}/user_migrations",
    "tag": "Brand User Migrations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id"
    ],
    "summary": "Create Brand User Migration"
  },
  {
    "operationId": "ShowBrandUserMigration",
    "method": "GET",
    "path": "/api/v2/brands/{brand_id}/user_migrations/{migration_id}",
    "tag": "Brand User Migrations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "brand_id",
      "migration_id"
    ],
    "summary": "Show Brand User Migration"
  },
  {
    "operationId": "UpdateBrandUserMigration",
    "method": "PUT",
    "path": "/api/v2/brands/{brand_id}/user_migrations/{migration_id}",
    "tag": "Brand User Migrations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "brand_id",
      "migration_id"
    ],
    "summary": "Update Brand User Migration"
  },
  {
    "operationId": "CheckHostMappingValidity",
    "method": "GET",
    "path": "/api/v2/brands/check_host_mapping",
    "tag": "Brands",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Check Host Mapping Validity"
  },
  {
    "operationId": "ListMonitoredTwitterHandles",
    "method": "GET",
    "path": "/api/v2/channels/twitter/monitored_twitter_handles",
    "tag": "X Channel",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Monitored X Handles"
  },
  {
    "operationId": "ShowMonitoredTwitterHandle",
    "method": "GET",
    "path": "/api/v2/channels/twitter/monitored_twitter_handles/{monitored_twitter_handle_id}",
    "tag": "X Channel",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "monitored_twitter_handle_id"
    ],
    "summary": "Show Monitored X Handle"
  },
  {
    "operationId": "CreateTicketFromTweet",
    "method": "POST",
    "path": "/api/v2/channels/twitter/tickets",
    "tag": "X Channel",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket from Tweet"
  },
  {
    "operationId": "GettingTwicketStatus",
    "method": "GET",
    "path": "/api/v2/channels/twitter/tickets/{comment_id}/statuses",
    "tag": "X Channel",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "comment_id"
    ],
    "summary": "List Ticket statuses"
  },
  {
    "operationId": "OpenTicketInAgentBrowser",
    "method": "POST",
    "path": "/api/v2/channels/voice/agents/{agent_id}/tickets/{ticket_id}/display",
    "tag": "Basics",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "agent_id",
      "ticket_id"
    ],
    "summary": "Open Ticket in Agent's Browser"
  },
  {
    "operationId": "OpenUsersProfileInAgentBrowser",
    "method": "POST",
    "path": "/api/v2/channels/voice/agents/{agent_id}/users/{user_id}/display",
    "tag": "Basics",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "agent_id",
      "user_id"
    ],
    "summary": "Open a User's Profile in an Agent's Browser"
  },
  {
    "operationId": "CreateTicketOrVoicemailTicket",
    "method": "POST",
    "path": "/api/v2/channels/voice/tickets",
    "tag": "Basics",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket or Voicemail Ticket"
  },
  {
    "operationId": "ListWhatsappTemplates",
    "method": "GET",
    "path": "/api/v2/channels/whatsapp_templates",
    "tag": "WhatsApp Templates",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List WhatsApp Templates"
  },
  {
    "operationId": "ToggleWhatsappTemplate",
    "method": "PUT",
    "path": "/api/v2/channels/whatsapp_templates/{template_id}/toggle",
    "tag": "WhatsApp Templates",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "template_id"
    ],
    "summary": "Toggle WhatsApp Template"
  },
  {
    "operationId": "ListWhatsappTemplateLanguages",
    "method": "GET",
    "path": "/api/v2/channels/whatsapp_templates/languages",
    "tag": "WhatsApp Templates",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List WhatsApp Template Languages"
  },
  {
    "operationId": "ToggleManyWhatsappTemplates",
    "method": "PUT",
    "path": "/api/v2/channels/whatsapp_templates/toggle_many",
    "tag": "WhatsApp Templates",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Toggle WhatsApp Templates"
  },
  {
    "operationId": "RedactChatCommentAttachment",
    "method": "PUT",
    "path": "/api/v2/chat_file_redactions/{ticket_id}",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Redact Chat Comment Attachment"
  },
  {
    "operationId": "RedactChatComment",
    "method": "PUT",
    "path": "/api/v2/chat_redactions/{ticket_id}",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Redact Chat Comment"
  },
  {
    "operationId": "RedactTicketCommentInAgentWorkspace",
    "method": "PUT",
    "path": "/api/v2/comment_redactions/{ticket_comment_id}",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_comment_id"
    ],
    "summary": "Redact Ticket Comment In Agent Workspace"
  },
  {
    "operationId": "ListCountries",
    "method": "GET",
    "path": "/api/v2/countries.json",
    "tag": "Countries",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Countries and Calling Codes"
  },
  {
    "operationId": "ShowCountry",
    "method": "GET",
    "path": "/api/v2/countries/{id}.json",
    "tag": "Countries",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "id"
    ],
    "summary": "Show Country"
  },
  {
    "operationId": "ListCustomObjects",
    "method": "GET",
    "path": "/api/v2/custom_objects",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Custom Objects"
  },
  {
    "operationId": "CreateCustomObject",
    "method": "POST",
    "path": "/api/v2/custom_objects",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Custom Object"
  },
  {
    "operationId": "ShowCustomObject",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Show Custom Object"
  },
  {
    "operationId": "UpdateCustomObject",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Update Custom Object"
  },
  {
    "operationId": "DeleteCustomObject",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Delete Custom Object"
  },
  {
    "operationId": "ListAccessRules",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Access Rules"
  },
  {
    "operationId": "CreateAccessRule",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Create Access Rule"
  },
  {
    "operationId": "ShowAccessRule",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "id"
    ],
    "summary": "Show Access Rule"
  },
  {
    "operationId": "UpdateAccessRule",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "id"
    ],
    "summary": "Update Access Rule"
  },
  {
    "operationId": "DeleteAccessRule",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules/{id}",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "id"
    ],
    "summary": "Delete Access Rule"
  },
  {
    "operationId": "ListAccessRuleDefinitions",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/access_rules/definitions",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Access Rule Definitions"
  },
  {
    "operationId": "ListCustomObjectFields",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Custom Object Fields"
  },
  {
    "operationId": "CreateCustomObjectField",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Create Custom Object Field"
  },
  {
    "operationId": "ShowCustomObjectField",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "custom_object_field_key_or_id"
    ],
    "summary": "Show Custom Object Field"
  },
  {
    "operationId": "UpdateCustomObjectField",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "custom_object_field_key_or_id"
    ],
    "summary": "Update Custom Object Field"
  },
  {
    "operationId": "DeleteCustomObjectField",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "custom_object_field_key_or_id"
    ],
    "summary": "Delete Custom Object Field"
  },
  {
    "operationId": "ReorderCustomObjectFields",
    "method": "PUT",
    "path": "/api/v2/custom_objects/{custom_object_key}/fields/reorder",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Reorder Custom Fields of an Object"
  },
  {
    "operationId": "CustomObjectRecordBulkJobs",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/jobs",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Custom Object Record Bulk Jobs"
  },
  {
    "operationId": "CustomObjectFieldsLimit",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/limits/field_limit",
    "tag": "Custom Object Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Custom Object Fields Limit"
  },
  {
    "operationId": "ListPermissionPolicies",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/permission_policies",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Permission Policies"
  },
  {
    "operationId": "ShowPermissionPolicy",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/permission_policies/{id}",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "id"
    ],
    "summary": "Show Permission Policy"
  },
  {
    "operationId": "UpdatePermissionPolicy",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/permission_policies/{id}",
    "tag": "Custom Object Permissions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "id"
    ],
    "summary": "Update Permission Policy"
  },
  {
    "operationId": "ListCustomObjectRecords",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Custom Object Records"
  },
  {
    "operationId": "CreateCustomObjectRecord",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/records",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Create Custom Object Record"
  },
  {
    "operationId": "UpsertCustomObjectRecordByExternalIdOrName",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/records",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Create or Update Custom Object Record"
  },
  {
    "operationId": "DeleteCustomObjectRecordByExternalIdOrName",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/records",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Delete Custom Object Record by External Id Or Name"
  },
  {
    "operationId": "ShowCustomObjectRecord",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "custom_object_record_id"
    ],
    "summary": "Show Custom Object Record"
  },
  {
    "operationId": "UpdateCustomObjectRecord",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "custom_object_record_id"
    ],
    "summary": "Update Custom Object Record"
  },
  {
    "operationId": "DeleteCustomObjectRecord",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "custom_object_record_id"
    ],
    "summary": "Delete Custom Object Record"
  },
  {
    "operationId": "ListCustomObjectRecordAttachments",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments",
    "tag": "Custom Object Record Attachments",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "record_id"
    ],
    "summary": "List Custom Object Record Attachments"
  },
  {
    "operationId": "CreateCustomObjectRecordAttachment",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments",
    "tag": "Custom Object Record Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "record_id"
    ],
    "summary": "Create Custom Object Record Attachment"
  },
  {
    "operationId": "UpdateCustomObjectRecordAttachment",
    "method": "PUT",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}",
    "tag": "Custom Object Record Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "record_id",
      "id"
    ],
    "summary": "Update Custom Object Record Attachment for Malware"
  },
  {
    "operationId": "DeleteCustomObjectRecordAttachment",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}",
    "tag": "Custom Object Record Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "record_id",
      "id"
    ],
    "summary": "Delete Custom Object Record Attachment"
  },
  {
    "operationId": "DownloadCustomObjectRecordAttachment",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/{record_id}/attachments/{id}/download",
    "tag": "Custom Object Record Attachments",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "record_id",
      "id"
    ],
    "summary": "Download Custom Object Record Attachment"
  },
  {
    "operationId": "AutocompleteCustomObjectRecordSearch",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/autocomplete",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Autocomplete Custom Object Record Search"
  },
  {
    "operationId": "CountCustomObjectRecords",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/count",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Count Custom Object Records"
  },
  {
    "operationId": "SearchCustomObjectRecords",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/search",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Search Custom Object Records"
  },
  {
    "operationId": "FilteredSearchCustomObjectRecords",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/search",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Filtered Search of Custom Object Records"
  },
  {
    "operationId": "ShowCustomObjectRecordByUniqueIdentifier",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/show_by_unique_identifier",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Show Custom Object Record by Unique Identifier"
  },
  {
    "operationId": "UpdateCustomObjectRecordByUniqueIdentifierViaPut",
    "method": "PUT",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Update Custom Object Record by Unique Identifier (PUT)"
  },
  {
    "operationId": "UpdateCustomObjectRecordByUniqueIdentifier",
    "method": "PATCH",
    "path": "/api/v2/custom_objects/{custom_object_key}/records/update_by_unique_identifier",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Update Custom Object Record by Unique Identifier"
  },
  {
    "operationId": "ListObjectTriggers",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Object Triggers"
  },
  {
    "operationId": "CreateObjectTrigger",
    "method": "POST",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Create Object Trigger"
  },
  {
    "operationId": "GetObjectTrigger",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key",
      "trigger_id"
    ],
    "summary": "Show Object Trigger"
  },
  {
    "operationId": "UpdateObjectTrigger",
    "method": "PUT",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "trigger_id"
    ],
    "summary": "Update Object Trigger"
  },
  {
    "operationId": "DeleteObjectTrigger",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/{trigger_id}",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key",
      "trigger_id"
    ],
    "summary": "Delete Object Trigger"
  },
  {
    "operationId": "ListActiveObjectTriggers",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/active",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Active Object Triggers"
  },
  {
    "operationId": "ListObjectTriggersDefinitions",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/definitions",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "List Object Trigger Action and Condition Definitions"
  },
  {
    "operationId": "DeleteManyObjectTriggers",
    "method": "DELETE",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/destroy_many",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Delete Many Object Triggers"
  },
  {
    "operationId": "SearchObjectTriggers",
    "method": "GET",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/search",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Search Object Triggers"
  },
  {
    "operationId": "UpdateManyObjectTriggers",
    "method": "PUT",
    "path": "/api/v2/custom_objects/{custom_object_key}/triggers/update_many",
    "tag": "Object Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Update Many Object Triggers"
  },
  {
    "operationId": "CustomObjectsLimit",
    "method": "GET",
    "path": "/api/v2/custom_objects/limits/object_limit",
    "tag": "Custom Objects",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Custom Objects Limit"
  },
  {
    "operationId": "CustomObjectRecordsLimit",
    "method": "GET",
    "path": "/api/v2/custom_objects/limits/record_limit",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Custom Object Records Limit"
  },
  {
    "operationId": "ListCustomRoles",
    "method": "GET",
    "path": "/api/v2/custom_roles",
    "tag": "Custom Roles",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Custom Roles"
  },
  {
    "operationId": "CreateCustomRole",
    "method": "POST",
    "path": "/api/v2/custom_roles",
    "tag": "Custom Roles",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Custom Role"
  },
  {
    "operationId": "ShowCustomRoleById",
    "method": "GET",
    "path": "/api/v2/custom_roles/{custom_role_id}",
    "tag": "Custom Roles",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_role_id"
    ],
    "summary": "Show Custom Role"
  },
  {
    "operationId": "UpdateCustomRoleById",
    "method": "PUT",
    "path": "/api/v2/custom_roles/{custom_role_id}",
    "tag": "Custom Roles",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_role_id"
    ],
    "summary": "Update Custom Role"
  },
  {
    "operationId": "DeleteCustomRoleById",
    "method": "DELETE",
    "path": "/api/v2/custom_roles/{custom_role_id}",
    "tag": "Custom Roles",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_role_id"
    ],
    "summary": "Delete Custom Role"
  },
  {
    "operationId": "BulkUpdateDefaultCustomStatus",
    "method": "PUT",
    "path": "/api/v2/custom_status/default",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Update Default Custom Ticket Status"
  },
  {
    "operationId": "ListCustomStatuses",
    "method": "GET",
    "path": "/api/v2/custom_statuses",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Custom Ticket Statuses"
  },
  {
    "operationId": "CreateCustomStatus",
    "method": "POST",
    "path": "/api/v2/custom_statuses",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Custom Ticket Status"
  },
  {
    "operationId": "ShowCustomStatus",
    "method": "GET",
    "path": "/api/v2/custom_statuses/{custom_status_id}",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_status_id"
    ],
    "summary": "Show Custom Ticket Status"
  },
  {
    "operationId": "UpdateCustomStatus",
    "method": "PUT",
    "path": "/api/v2/custom_statuses/{custom_status_id}",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_status_id"
    ],
    "summary": "Update Custom Ticket Status"
  },
  {
    "operationId": "DeleteCustomStatus",
    "method": "DELETE",
    "path": "/api/v2/custom_statuses/{custom_status_id}",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_status_id"
    ],
    "summary": "Delete Custom Ticket Status"
  },
  {
    "operationId": "CreateTicketFormStatusesForCustomStatus",
    "method": "POST",
    "path": "/api/v2/custom_statuses/{custom_status_id}/ticket_form_statuses",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "custom_status_id"
    ],
    "summary": "Create Ticket Form Statuses for a Custom Status"
  },
  {
    "operationId": "ShowManyCustomStatuses",
    "method": "GET",
    "path": "/api/v2/custom_statuses/show_many",
    "tag": "Custom Ticket Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Custom Ticket Statuses"
  },
  {
    "operationId": "ListDeletedTickets",
    "method": "GET",
    "path": "/api/v2/deleted_tickets",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Deleted Tickets"
  },
  {
    "operationId": "DeleteTicketPermanently",
    "method": "DELETE",
    "path": "/api/v2/deleted_tickets/{ticket_id}",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Delete Ticket Permanently"
  },
  {
    "operationId": "RestoreDeletedTicket",
    "method": "PUT",
    "path": "/api/v2/deleted_tickets/{ticket_id}/restore",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Restore a Previously Deleted Ticket"
  },
  {
    "operationId": "BulkPermanentlyDeleteTickets",
    "method": "DELETE",
    "path": "/api/v2/deleted_tickets/destroy_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Delete Multiple Tickets Permanently"
  },
  {
    "operationId": "BulkRestoreDeletedTickets",
    "method": "PUT",
    "path": "/api/v2/deleted_tickets/restore_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Restore Previously Deleted Tickets in Bulk"
  },
  {
    "operationId": "ListDeletedUsers",
    "method": "GET",
    "path": "/api/v2/deleted_users",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Deleted Users"
  },
  {
    "operationId": "ShowDeletedUser",
    "method": "GET",
    "path": "/api/v2/deleted_users/{deleted_user_id}",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "deleted_user_id"
    ],
    "summary": "Show Deleted User"
  },
  {
    "operationId": "PermanentlyDeleteUser",
    "method": "DELETE",
    "path": "/api/v2/deleted_users/{deleted_user_id}",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "deleted_user_id"
    ],
    "summary": "Permanently Delete User"
  },
  {
    "operationId": "CountDeletedUsers",
    "method": "GET",
    "path": "/api/v2/deleted_users/count",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Deleted Users"
  },
  {
    "operationId": "ListDeletionSchedules",
    "method": "GET",
    "path": "/api/v2/deletion_schedules",
    "tag": "Deletion Schedules",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Deletion Schedules"
  },
  {
    "operationId": "CreateDeletionSchedule",
    "method": "POST",
    "path": "/api/v2/deletion_schedules",
    "tag": "Deletion Schedules",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Deletion Schedule"
  },
  {
    "operationId": "GetDeletionSchedule",
    "method": "GET",
    "path": "/api/v2/deletion_schedules/{deletion_schedule_id}",
    "tag": "Deletion Schedules",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "deletion_schedule_id"
    ],
    "summary": "Get Deletion Schedule"
  },
  {
    "operationId": "UpdateDeletionSchedule",
    "method": "PUT",
    "path": "/api/v2/deletion_schedules/{deletion_schedule_id}",
    "tag": "Deletion Schedules",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "deletion_schedule_id"
    ],
    "summary": "Update Deletion Schedule"
  },
  {
    "operationId": "DeleteDeletionSchedule",
    "method": "DELETE",
    "path": "/api/v2/deletion_schedules/{deletion_schedule_id}",
    "tag": "Deletion Schedules",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "deletion_schedule_id"
    ],
    "summary": "Delete Deletion Schedule"
  },
  {
    "operationId": "ListDynamicContents",
    "method": "GET",
    "path": "/api/v2/dynamic_content/items",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Items"
  },
  {
    "operationId": "CreateDynamicContent",
    "method": "POST",
    "path": "/api/v2/dynamic_content/items",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Item"
  },
  {
    "operationId": "ShowDynamicContentItem",
    "method": "GET",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Show Item"
  },
  {
    "operationId": "UpdateDynamicContentItem",
    "method": "PUT",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Update Item"
  },
  {
    "operationId": "DeleteDynamicContentItem",
    "method": "DELETE",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Delete Item"
  },
  {
    "operationId": "DynamicContentListVariants",
    "method": "GET",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "List Variants"
  },
  {
    "operationId": "CreateDynamicContentVariant",
    "method": "POST",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Create Variant"
  },
  {
    "operationId": "ShowDynamicContentVariant",
    "method": "GET",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "dynamic_content_item_id",
      "dynamic_content_variant_id"
    ],
    "summary": "Show Variant"
  },
  {
    "operationId": "UpdateDynamicContentVariant",
    "method": "PUT",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id",
      "dynamic_content_variant_id"
    ],
    "summary": "Update Variant"
  },
  {
    "operationId": "DeleteDynamicContentVariant",
    "method": "DELETE",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynamic_content_variant_id}",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id",
      "dynamic_content_variant_id"
    ],
    "summary": "Delete Variant"
  },
  {
    "operationId": "CreateManyDynamicContentVariants",
    "method": "POST",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/create_many",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Create Many Variants"
  },
  {
    "operationId": "UpdateManyDynamicContentVariants",
    "method": "PUT",
    "path": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/update_many",
    "tag": "Dynamic Content Item Variants",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "dynamic_content_item_id"
    ],
    "summary": "Update Many Variants"
  },
  {
    "operationId": "ShowManyDynamicContents",
    "method": "GET",
    "path": "/api/v2/dynamic_content/items/show_many",
    "tag": "Dynamic Content",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Items"
  },
  {
    "operationId": "ListEmailNotifications",
    "method": "GET",
    "path": "/api/v2/email_notifications",
    "tag": "Email Notifications",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Email Notifications"
  },
  {
    "operationId": "ShowEmailNotification",
    "method": "GET",
    "path": "/api/v2/email_notifications/{notification_id}",
    "tag": "Email Notifications",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "notification_id"
    ],
    "summary": "Show Email Notification"
  },
  {
    "operationId": "ShowManyEmailNotifications",
    "method": "GET",
    "path": "/api/v2/email_notifications/show_many",
    "tag": "Email Notifications",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Email Notifications"
  },
  {
    "operationId": "ListEndUserIdentities",
    "method": "GET",
    "path": "/api/v2/end_users/{user_id}/identities",
    "tag": "User Identities",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List End User Identities"
  },
  {
    "operationId": "CreateEndUserIdentity",
    "method": "POST",
    "path": "/api/v2/end_users/{user_id}/identities",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create End User Identity"
  },
  {
    "operationId": "ShowEndUserIdentity",
    "method": "GET",
    "path": "/api/v2/end_users/{user_id}/identities/{user_identity_id}",
    "tag": "User Identities",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Show End User Identity"
  },
  {
    "operationId": "DeleteEndUserIdentity",
    "method": "DELETE",
    "path": "/api/v2/end_users/{user_id}/identities/{user_identity_id}",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Delete End User Identity"
  },
  {
    "operationId": "MakeEndUserIdentityPrimary",
    "method": "PUT",
    "path": "/api/v2/end_users/{user_id}/identities/{user_identity_id}/make_primary",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Make End User Identity Primary"
  },
  {
    "operationId": "RequestEndUserVerification",
    "method": "PUT",
    "path": "/api/v2/end_users/{user_id}/identities/{user_identity_id}/request_verification",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Request End User Verification"
  },
  {
    "operationId": "ListGroupMemberships",
    "method": "GET",
    "path": "/api/v2/group_memberships",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Memberships"
  },
  {
    "operationId": "CreateGroupMembership",
    "method": "POST",
    "path": "/api/v2/group_memberships",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Membership"
  },
  {
    "operationId": "ShowGroupMembershipById",
    "method": "GET",
    "path": "/api/v2/group_memberships/{group_membership_id}",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_membership_id"
    ],
    "summary": "Show Membership"
  },
  {
    "operationId": "DeleteGroupMembership",
    "method": "DELETE",
    "path": "/api/v2/group_memberships/{group_membership_id}",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "group_membership_id"
    ],
    "summary": "Delete Membership"
  },
  {
    "operationId": "ListAssignableGroupMemberships",
    "method": "GET",
    "path": "/api/v2/group_memberships/assignable",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Assignable Memberships"
  },
  {
    "operationId": "GroupMembershipBulkCreate",
    "method": "POST",
    "path": "/api/v2/group_memberships/create_many",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Create Memberships"
  },
  {
    "operationId": "GroupMembershipBulkDelete",
    "method": "DELETE",
    "path": "/api/v2/group_memberships/destroy_many",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Memberships"
  },
  {
    "operationId": "ListGroupSLAPolicies",
    "method": "GET",
    "path": "/api/v2/group_slas/policies",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Group SLA Policies"
  },
  {
    "operationId": "CreateGroupSLAPolicy",
    "method": "POST",
    "path": "/api/v2/group_slas/policies",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Group SLA Policy"
  },
  {
    "operationId": "ShowGroupSLAPolicy",
    "method": "GET",
    "path": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_sla_policy_id"
    ],
    "summary": "Show Group SLA Policy"
  },
  {
    "operationId": "UpdateGroupSLAPolicy",
    "method": "PUT",
    "path": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "group_sla_policy_id"
    ],
    "summary": "Update Group SLA Policy"
  },
  {
    "operationId": "DeleteGroupSLAPolicy",
    "method": "DELETE",
    "path": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "group_sla_policy_id"
    ],
    "summary": "Delete Group SLA Policy"
  },
  {
    "operationId": "RetrieveGroupSLAPolicyFilterDefinitionItems",
    "method": "GET",
    "path": "/api/v2/group_slas/policies/definitions",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Retrieve Supported Filter Definition Items"
  },
  {
    "operationId": "ReorderGroupSLAPolicies",
    "method": "PUT",
    "path": "/api/v2/group_slas/policies/reorder",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Group SLA Policies"
  },
  {
    "operationId": "ListGroups",
    "method": "GET",
    "path": "/api/v2/groups",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Groups"
  },
  {
    "operationId": "CreateGroup",
    "method": "POST",
    "path": "/api/v2/groups",
    "tag": "Groups",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Group"
  },
  {
    "operationId": "ShowGroupById",
    "method": "GET",
    "path": "/api/v2/groups/{group_id}",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_id"
    ],
    "summary": "Show Group"
  },
  {
    "operationId": "UpdateGroup",
    "method": "PUT",
    "path": "/api/v2/groups/{group_id}",
    "tag": "Groups",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "group_id"
    ],
    "summary": "Update Group"
  },
  {
    "operationId": "DeleteGroup",
    "method": "DELETE",
    "path": "/api/v2/groups/{group_id}",
    "tag": "Groups",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "group_id"
    ],
    "summary": "Delete Group"
  },
  {
    "operationId": "ListGroupMembershipsByGroup",
    "method": "GET",
    "path": "/api/v2/groups/{group_id}/memberships",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_id"
    ],
    "summary": "List Memberships By Group"
  },
  {
    "operationId": "ListAssignableGroupMembershipsByGroup",
    "method": "GET",
    "path": "/api/v2/groups/{group_id}/memberships/assignable",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_id"
    ],
    "summary": "List Assignable Memberships By Group"
  },
  {
    "operationId": "ListGroupUsers",
    "method": "GET",
    "path": "/api/v2/groups/{group_id}/users",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_id"
    ],
    "summary": "List Users By Group"
  },
  {
    "operationId": "CountGroupUsers",
    "method": "GET",
    "path": "/api/v2/groups/{group_id}/users/count",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "group_id"
    ],
    "summary": "Count Users By Group"
  },
  {
    "operationId": "ListAssignableGroups",
    "method": "GET",
    "path": "/api/v2/groups/assignable",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Assignable Groups"
  },
  {
    "operationId": "AutocompleteGroups",
    "method": "GET",
    "path": "/api/v2/groups/autocomplete",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Autocomplete Groups"
  },
  {
    "operationId": "ListAvailableAgents",
    "method": "GET",
    "path": "/api/v2/groups/available_agents",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Available Agents"
  },
  {
    "operationId": "CountGroups",
    "method": "GET",
    "path": "/api/v2/groups/count",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Groups"
  },
  {
    "operationId": "ShowDefaultGroup",
    "method": "GET",
    "path": "/api/v2/groups/default",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Default Group"
  },
  {
    "operationId": "TicketImport",
    "method": "POST",
    "path": "/api/v2/imports/tickets",
    "tag": "Ticket Import",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Ticket Import"
  },
  {
    "operationId": "TicketBulkImport",
    "method": "POST",
    "path": "/api/v2/imports/tickets/create_many",
    "tag": "Ticket Import",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Ticket Bulk Import"
  },
  {
    "operationId": "IncrementalSampleExport",
    "method": "GET",
    "path": "/api/v2/incremental/{incremental_resource}/sample",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "incremental_resource"
    ],
    "summary": "Incremental Sample Export"
  },
  {
    "operationId": "IncrementalCustomObjectRecordExportCursor",
    "method": "GET",
    "path": "/api/v2/incremental/custom_objects/{custom_object_key}/cursor",
    "tag": "Custom Object Records",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "custom_object_key"
    ],
    "summary": "Incremental Custom Object Record Export, Cursor Based"
  },
  {
    "operationId": "IncrementalOrganizationExport",
    "method": "GET",
    "path": "/api/v2/incremental/organizations",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Organization Export"
  },
  {
    "operationId": "IncrementalSkilBasedRoutingAttributeValuesExport",
    "method": "GET",
    "path": "/api/v2/incremental/routing/attribute_values",
    "tag": "Incremental Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Attributes Values Export"
  },
  {
    "operationId": "IncrementalSkilBasedRoutingAttributesExport",
    "method": "GET",
    "path": "/api/v2/incremental/routing/attributes",
    "tag": "Incremental Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Attributes Export"
  },
  {
    "operationId": "IncrementalSkilBasedRoutingInstanceValuesExport",
    "method": "GET",
    "path": "/api/v2/incremental/routing/instance_values",
    "tag": "Incremental Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Instance Values Export"
  },
  {
    "operationId": "IncrementalTicketEvents",
    "method": "GET",
    "path": "/api/v2/incremental/ticket_events",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Ticket Event Export"
  },
  {
    "operationId": "ListTicketMetricEvents",
    "method": "GET",
    "path": "/api/v2/incremental/ticket_metric_events",
    "tag": "Ticket Metric Events",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Metric Events"
  },
  {
    "operationId": "IncrementalTicketExportTime",
    "method": "GET",
    "path": "/api/v2/incremental/tickets",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Ticket Export, Time Based"
  },
  {
    "operationId": "IncrementalTicketExportCursor",
    "method": "GET",
    "path": "/api/v2/incremental/tickets/cursor",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental Ticket Export, Cursor Based"
  },
  {
    "operationId": "IncrementalUserExportTime",
    "method": "GET",
    "path": "/api/v2/incremental/users",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental User Export, Time Based"
  },
  {
    "operationId": "IncrementalUserExportCursor",
    "method": "GET",
    "path": "/api/v2/incremental/users/cursor",
    "tag": "Incremental Export",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Incremental User Export, Cursor Based"
  },
  {
    "operationId": "ListItamAssetTypes",
    "method": "GET",
    "path": "/api/v2/it_asset_management/asset_types",
    "tag": "ITAM Asset Types",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Asset Types"
  },
  {
    "operationId": "CreateItamAssetType",
    "method": "POST",
    "path": "/api/v2/it_asset_management/asset_types",
    "tag": "ITAM Asset Types",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Asset Type"
  },
  {
    "operationId": "ShowItamAssetType",
    "method": "GET",
    "path": "/api/v2/it_asset_management/asset_types/{asset_type_id}",
    "tag": "ITAM Asset Types",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "asset_type_id"
    ],
    "summary": "Show Asset Type"
  },
  {
    "operationId": "UpdateItamAssetType",
    "method": "PATCH",
    "path": "/api/v2/it_asset_management/asset_types/{asset_type_id}",
    "tag": "ITAM Asset Types",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "asset_type_id"
    ],
    "summary": "Update Asset Type"
  },
  {
    "operationId": "DeleteItamAssetType",
    "method": "DELETE",
    "path": "/api/v2/it_asset_management/asset_types/{asset_type_id}",
    "tag": "ITAM Asset Types",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "asset_type_id"
    ],
    "summary": "Delete Asset Type"
  },
  {
    "operationId": "ListItamAssetTypeFields",
    "method": "GET",
    "path": "/api/v2/it_asset_management/asset_types/{asset_type_id}/fields",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "asset_type_id"
    ],
    "summary": "List Asset Fields"
  },
  {
    "operationId": "ShowItamAssetTypeField",
    "method": "GET",
    "path": "/api/v2/it_asset_management/asset_types/{asset_type_id}/fields/{asset_type_field_id}",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "asset_type_id",
      "asset_type_field_id"
    ],
    "summary": "Show Asset Field"
  },
  {
    "operationId": "ListItamAssets",
    "method": "GET",
    "path": "/api/v2/it_asset_management/assets",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Assets"
  },
  {
    "operationId": "CreateItamAsset",
    "method": "POST",
    "path": "/api/v2/it_asset_management/assets",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Asset"
  },
  {
    "operationId": "ShowItamAsset",
    "method": "GET",
    "path": "/api/v2/it_asset_management/assets/{asset_id}",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "asset_id"
    ],
    "summary": "Show Asset"
  },
  {
    "operationId": "UpdateItamAsset",
    "method": "PATCH",
    "path": "/api/v2/it_asset_management/assets/{asset_id}",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "asset_id"
    ],
    "summary": "Update Asset"
  },
  {
    "operationId": "DeleteItamAsset",
    "method": "DELETE",
    "path": "/api/v2/it_asset_management/assets/{asset_id}",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "asset_id"
    ],
    "summary": "Delete Asset"
  },
  {
    "operationId": "ItamAssetBulkJobs",
    "method": "POST",
    "path": "/api/v2/it_asset_management/assets/jobs",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Asset Bulk Jobs"
  },
  {
    "operationId": "SearchItamAssets",
    "method": "GET",
    "path": "/api/v2/it_asset_management/assets/search",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Assets"
  },
  {
    "operationId": "FilteredSearchItamAssets",
    "method": "POST",
    "path": "/api/v2/it_asset_management/assets/search",
    "tag": "ITAM Assets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Filtered Search of Assets"
  },
  {
    "operationId": "ListItamFields",
    "method": "GET",
    "path": "/api/v2/it_asset_management/fields",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Fields"
  },
  {
    "operationId": "CreateItamField",
    "method": "POST",
    "path": "/api/v2/it_asset_management/fields",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Field"
  },
  {
    "operationId": "ShowItamField",
    "method": "GET",
    "path": "/api/v2/it_asset_management/fields/{id}",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "id"
    ],
    "summary": "Show Field"
  },
  {
    "operationId": "UpdateItamField",
    "method": "PATCH",
    "path": "/api/v2/it_asset_management/fields/{id}",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Update Field"
  },
  {
    "operationId": "DeleteItamField",
    "method": "DELETE",
    "path": "/api/v2/it_asset_management/fields/{id}",
    "tag": "ITAM Asset Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Delete Field"
  },
  {
    "operationId": "ListItamLocations",
    "method": "GET",
    "path": "/api/v2/it_asset_management/locations",
    "tag": "ITAM Asset Locations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Asset Locations"
  },
  {
    "operationId": "CreateItamLocation",
    "method": "POST",
    "path": "/api/v2/it_asset_management/locations",
    "tag": "ITAM Asset Locations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Asset Location"
  },
  {
    "operationId": "ShowItamLocation",
    "method": "GET",
    "path": "/api/v2/it_asset_management/locations/{location_id}",
    "tag": "ITAM Asset Locations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "location_id"
    ],
    "summary": "Show Asset Location"
  },
  {
    "operationId": "UpdateItamLocation",
    "method": "PATCH",
    "path": "/api/v2/it_asset_management/locations/{location_id}",
    "tag": "ITAM Asset Locations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "location_id"
    ],
    "summary": "Update Asset Location"
  },
  {
    "operationId": "DeleteItamLocation",
    "method": "DELETE",
    "path": "/api/v2/it_asset_management/locations/{location_id}",
    "tag": "ITAM Asset Locations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "location_id"
    ],
    "summary": "Delete Asset Location"
  },
  {
    "operationId": "ListItamStatuses",
    "method": "GET",
    "path": "/api/v2/it_asset_management/statuses",
    "tag": "ITAM Asset Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Asset Statuses"
  },
  {
    "operationId": "CreateItamStatus",
    "method": "POST",
    "path": "/api/v2/it_asset_management/statuses",
    "tag": "ITAM Asset Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Asset Status"
  },
  {
    "operationId": "ShowItamStatus",
    "method": "GET",
    "path": "/api/v2/it_asset_management/statuses/{status_id}",
    "tag": "ITAM Asset Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "status_id"
    ],
    "summary": "Show Asset Status"
  },
  {
    "operationId": "UpdateItamStatus",
    "method": "PATCH",
    "path": "/api/v2/it_asset_management/statuses/{status_id}",
    "tag": "ITAM Asset Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "status_id"
    ],
    "summary": "Update Asset Status"
  },
  {
    "operationId": "DeleteItamStatus",
    "method": "DELETE",
    "path": "/api/v2/it_asset_management/statuses/{status_id}",
    "tag": "ITAM Asset Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "status_id"
    ],
    "summary": "Delete Asset Status"
  },
  {
    "operationId": "ListJobStatuses",
    "method": "GET",
    "path": "/api/v2/job_statuses",
    "tag": "Job Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Job Statuses"
  },
  {
    "operationId": "ShowJobStatus",
    "method": "GET",
    "path": "/api/v2/job_statuses/{job_status_id}",
    "tag": "Job Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "job_status_id"
    ],
    "summary": "Show Job Status"
  },
  {
    "operationId": "ShowManyJobStatuses",
    "method": "GET",
    "path": "/api/v2/job_statuses/show_many",
    "tag": "Job Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Job Statuses"
  },
  {
    "operationId": "ListLocales",
    "method": "GET",
    "path": "/api/v2/locales",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Locales"
  },
  {
    "operationId": "ShowLocaleById",
    "method": "GET",
    "path": "/api/v2/locales/{locale_id}",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "locale_id"
    ],
    "summary": "Show Locale"
  },
  {
    "operationId": "ListLocalesForAgent",
    "method": "GET",
    "path": "/api/v2/locales/agent",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Locales for Agent"
  },
  {
    "operationId": "ShowCurrentLocale",
    "method": "GET",
    "path": "/api/v2/locales/current",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Current Locale"
  },
  {
    "operationId": "DetectBestLocale",
    "method": "GET",
    "path": "/api/v2/locales/detect_best_locale",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Detect Best Language for User"
  },
  {
    "operationId": "ListAvailablePublicLocales",
    "method": "GET",
    "path": "/api/v2/locales/public",
    "tag": "Locales",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Available Public Locales"
  },
  {
    "operationId": "ListMacros",
    "method": "GET",
    "path": "/api/v2/macros",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Macros"
  },
  {
    "operationId": "CreateMacro",
    "method": "POST",
    "path": "/api/v2/macros",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Macro"
  },
  {
    "operationId": "ShowMacro",
    "method": "GET",
    "path": "/api/v2/macros/{macro_id}",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "macro_id"
    ],
    "summary": "Show Macro"
  },
  {
    "operationId": "UpdateMacro",
    "method": "PUT",
    "path": "/api/v2/macros/{macro_id}",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "macro_id"
    ],
    "summary": "Update Macro"
  },
  {
    "operationId": "DeleteMacro",
    "method": "DELETE",
    "path": "/api/v2/macros/{macro_id}",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "macro_id"
    ],
    "summary": "Delete Macro"
  },
  {
    "operationId": "ShowChangesToTicket",
    "method": "GET",
    "path": "/api/v2/macros/{macro_id}/apply",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "macro_id"
    ],
    "summary": "Show Changes to Ticket"
  },
  {
    "operationId": "ListMacroAttachments",
    "method": "GET",
    "path": "/api/v2/macros/{macro_id}/attachments",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "macro_id"
    ],
    "summary": "List Macro Attachments"
  },
  {
    "operationId": "CreateAssociatedMacroAttachment",
    "method": "POST",
    "path": "/api/v2/macros/{macro_id}/attachments",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "macro_id"
    ],
    "summary": "Create Macro Attachment"
  },
  {
    "operationId": "ListMacrosActions",
    "method": "GET",
    "path": "/api/v2/macros/actions",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Supported Actions for Macros"
  },
  {
    "operationId": "ListActiveMacros",
    "method": "GET",
    "path": "/api/v2/macros/active",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Active Macros"
  },
  {
    "operationId": "CreateMacroAttachment",
    "method": "POST",
    "path": "/api/v2/macros/attachments",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Unassociated Macro Attachment"
  },
  {
    "operationId": "ShowMacroAttachment",
    "method": "GET",
    "path": "/api/v2/macros/attachments/{attachment_id}",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attachment_id"
    ],
    "summary": "Show Macro Attachment"
  },
  {
    "operationId": "DownloadMacroAttachment",
    "method": "GET",
    "path": "/api/v2/macros/attachments/{attachment_id}/content",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attachment_id"
    ],
    "summary": "Download Macro Attachment"
  },
  {
    "operationId": "ListMacroCategories",
    "method": "GET",
    "path": "/api/v2/macros/categories",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Macro Categories"
  },
  {
    "operationId": "ListMacroActionDefinitions",
    "method": "GET",
    "path": "/api/v2/macros/definitions",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Macro Action Definitions"
  },
  {
    "operationId": "DeleteManyMacros",
    "method": "DELETE",
    "path": "/api/v2/macros/destroy_many",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Macros"
  },
  {
    "operationId": "ListMacroGroups",
    "method": "GET",
    "path": "/api/v2/macros/groups",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Macro Groups"
  },
  {
    "operationId": "ListMostUsedMacros",
    "method": "GET",
    "path": "/api/v2/macros/most_used",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Most Used Macros"
  },
  {
    "operationId": "ShowDerivedMacro",
    "method": "GET",
    "path": "/api/v2/macros/new",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Macro Replica"
  },
  {
    "operationId": "SearchMacro",
    "method": "GET",
    "path": "/api/v2/macros/search",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Macros"
  },
  {
    "operationId": "UpdateManyMacros",
    "method": "PUT",
    "path": "/api/v2/macros/update_many",
    "tag": "Macros",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Macros"
  },
  {
    "operationId": "ListOAuthClients",
    "method": "GET",
    "path": "/api/v2/oauth/clients",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Clients"
  },
  {
    "operationId": "CreateOAuthClient",
    "method": "POST",
    "path": "/api/v2/oauth/clients",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Client"
  },
  {
    "operationId": "ShowClient",
    "method": "GET",
    "path": "/api/v2/oauth/clients/{oauth_client_id}",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "oauth_client_id"
    ],
    "summary": "Show Client"
  },
  {
    "operationId": "UpdateClient",
    "method": "PUT",
    "path": "/api/v2/oauth/clients/{oauth_client_id}",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "oauth_client_id"
    ],
    "summary": "Update Client"
  },
  {
    "operationId": "DeleteClient",
    "method": "DELETE",
    "path": "/api/v2/oauth/clients/{oauth_client_id}",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "oauth_client_id"
    ],
    "summary": "Delete Client"
  },
  {
    "operationId": "ClientGenerateSecret",
    "method": "PUT",
    "path": "/api/v2/oauth/clients/{oauth_client_id}/generate_secret",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "oauth_client_id"
    ],
    "summary": "Generate Secret"
  },
  {
    "operationId": "ListGlobalOAuthClients",
    "method": "GET",
    "path": "/api/v2/oauth/global_clients",
    "tag": "Global Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Global OAuth Clients"
  },
  {
    "operationId": "ShowGlobalClient",
    "method": "GET",
    "path": "/api/v2/oauth/global_clients/{global_client_id}",
    "tag": "Global Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "global_client_id"
    ],
    "summary": "Show Global OAuth Client"
  },
  {
    "operationId": "GlobalOAuthClientsTokenSummary",
    "method": "GET",
    "path": "/api/v2/oauth/global_clients/token_summary",
    "tag": "Global Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Token summary for Global OAuth Clients"
  },
  {
    "operationId": "ListOAuthTokens",
    "method": "GET",
    "path": "/api/v2/oauth/tokens",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Tokens"
  },
  {
    "operationId": "ShowToken",
    "method": "GET",
    "path": "/api/v2/oauth/tokens/{oauth_token_id}",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "oauth_token_id"
    ],
    "summary": "Show Token"
  },
  {
    "operationId": "RevokeOAuthToken",
    "method": "DELETE",
    "path": "/api/v2/oauth/tokens/{oauth_token_id}",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "oauth_token_id"
    ],
    "summary": "Revoke Token"
  },
  {
    "operationId": "ShowCurrentToken",
    "method": "GET",
    "path": "/api/v2/oauth/tokens/current",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Current Token"
  },
  {
    "operationId": "RevokeCurrentOAuthToken",
    "method": "DELETE",
    "path": "/api/v2/oauth/tokens/current",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Revoke Current Token"
  },
  {
    "operationId": "RevokeManyOAuthTokens",
    "method": "POST",
    "path": "/api/v2/oauth/tokens/delete_many",
    "tag": "OAuth Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Revoke Many Tokens"
  },
  {
    "operationId": "ListOrganizationFields",
    "method": "GET",
    "path": "/api/v2/organization_fields",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Organization Fields"
  },
  {
    "operationId": "CreateOrganizationField",
    "method": "POST",
    "path": "/api/v2/organization_fields",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Organization Field"
  },
  {
    "operationId": "ShowOrganizationField",
    "method": "GET",
    "path": "/api/v2/organization_fields/{organization_field_id}",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_field_id"
    ],
    "summary": "Show Organization Field"
  },
  {
    "operationId": "UpdateOrganizationField",
    "method": "PUT",
    "path": "/api/v2/organization_fields/{organization_field_id}",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_field_id"
    ],
    "summary": "Update Organization Field"
  },
  {
    "operationId": "DeleteOrganizationField",
    "method": "DELETE",
    "path": "/api/v2/organization_fields/{organization_field_id}",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_field_id"
    ],
    "summary": "Delete Organization Field"
  },
  {
    "operationId": "ReorderOrganizationField",
    "method": "PUT",
    "path": "/api/v2/organization_fields/reorder",
    "tag": "Organization Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Organization Field"
  },
  {
    "operationId": "ListOrganizationMemberships",
    "method": "GET",
    "path": "/api/v2/organization_memberships",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Memberships"
  },
  {
    "operationId": "CreateOrganizationMembership",
    "method": "POST",
    "path": "/api/v2/organization_memberships",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Membership"
  },
  {
    "operationId": "ShowOrganizationMembershipById",
    "method": "GET",
    "path": "/api/v2/organization_memberships/{organization_membership_id}",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_membership_id"
    ],
    "summary": "Show Membership"
  },
  {
    "operationId": "DeleteOrganizationMembership",
    "method": "DELETE",
    "path": "/api/v2/organization_memberships/{organization_membership_id}",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_membership_id"
    ],
    "summary": "Delete Membership"
  },
  {
    "operationId": "CreateManyOrganizationMemberships",
    "method": "POST",
    "path": "/api/v2/organization_memberships/create_many",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Many Memberships"
  },
  {
    "operationId": "DeleteManyOrganizationMemberships",
    "method": "DELETE",
    "path": "/api/v2/organization_memberships/destroy_many",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Memberships"
  },
  {
    "operationId": "ShowOrganizationMerge",
    "method": "GET",
    "path": "/api/v2/organization_merges/{organization_merge_id}",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_merge_id"
    ],
    "summary": "Show Organization Merge"
  },
  {
    "operationId": "ListOrganizationSubscriptions",
    "method": "GET",
    "path": "/api/v2/organization_subscriptions",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Organization Subscriptions"
  },
  {
    "operationId": "CreateOrganizationSubscription",
    "method": "POST",
    "path": "/api/v2/organization_subscriptions",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Organization Subscription"
  },
  {
    "operationId": "ShowOrganizationSubscription",
    "method": "GET",
    "path": "/api/v2/organization_subscriptions/{organization_subscription_id}",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_subscription_id"
    ],
    "summary": "Show Organization Subscription"
  },
  {
    "operationId": "DeleteOrganizationSubscription",
    "method": "DELETE",
    "path": "/api/v2/organization_subscriptions/{organization_subscription_id}",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_subscription_id"
    ],
    "summary": "Delete Organization Subscription"
  },
  {
    "operationId": "ListOrganizations",
    "method": "GET",
    "path": "/api/v2/organizations",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Organizations"
  },
  {
    "operationId": "CreateOrganization",
    "method": "POST",
    "path": "/api/v2/organizations",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Organization"
  },
  {
    "operationId": "ShowOrganization",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Show Organization"
  },
  {
    "operationId": "UpdateOrganization",
    "method": "PUT",
    "path": "/api/v2/organizations/{organization_id}",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Update Organization"
  },
  {
    "operationId": "DeleteOrganization",
    "method": "DELETE",
    "path": "/api/v2/organizations/{organization_id}",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Delete Organization"
  },
  {
    "operationId": "CreateOrganizationMerge",
    "method": "POST",
    "path": "/api/v2/organizations/{organization_id}/merge",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Merge Organization With Another Organization"
  },
  {
    "operationId": "ListOrganizationMerges",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/merges",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Merges"
  },
  {
    "operationId": "ListOrganizationMembershipsByOrganization",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/organization_memberships",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Memberships by Organization"
  },
  {
    "operationId": "OrganizationRelated",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/related",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Show Organization's Related Information"
  },
  {
    "operationId": "ListOrganizationRequests",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/requests",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Requests"
  },
  {
    "operationId": "ListOrganizationSubscriptionsByOrganization",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/subscriptions",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Subscriptions By Organization"
  },
  {
    "operationId": "ListOrganizationTags",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Tags"
  },
  {
    "operationId": "SetOrganizationTags",
    "method": "POST",
    "path": "/api/v2/organizations/{organization_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Set Organization Tags"
  },
  {
    "operationId": "AddOrganizationTags",
    "method": "PUT",
    "path": "/api/v2/organizations/{organization_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Add Organization Tags"
  },
  {
    "operationId": "RemoveOrganizationTags",
    "method": "DELETE",
    "path": "/api/v2/organizations/{organization_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Remove Organization Tags"
  },
  {
    "operationId": "ListOrganizationTickets",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/tickets",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Tickets"
  },
  {
    "operationId": "CountOrganizationTickets",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/tickets/count",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Count Organization Tickets"
  },
  {
    "operationId": "ListOrganizationUsers",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/users",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "List Organization Users"
  },
  {
    "operationId": "CountOrganizationUsers",
    "method": "GET",
    "path": "/api/v2/organizations/{organization_id}/users/count",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "organization_id"
    ],
    "summary": "Count Organization Users"
  },
  {
    "operationId": "AutocompleteOrganizations",
    "method": "GET",
    "path": "/api/v2/organizations/autocomplete",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Autocomplete Organizations"
  },
  {
    "operationId": "CountOrganizations",
    "method": "GET",
    "path": "/api/v2/organizations/count",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Organizations"
  },
  {
    "operationId": "CreateManyOrganizations",
    "method": "POST",
    "path": "/api/v2/organizations/create_many",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Many Organizations"
  },
  {
    "operationId": "CreateOrUpdateOrganization",
    "method": "POST",
    "path": "/api/v2/organizations/create_or_update",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Or Update Organization"
  },
  {
    "operationId": "DeleteManyOrganizations",
    "method": "DELETE",
    "path": "/api/v2/organizations/destroy_many",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Organizations"
  },
  {
    "operationId": "SearchOrganizations",
    "method": "GET",
    "path": "/api/v2/organizations/search",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Organizations"
  },
  {
    "operationId": "ShowManyOrganizations",
    "method": "GET",
    "path": "/api/v2/organizations/show_many",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Organizations"
  },
  {
    "operationId": "UpdateManyOrganizations",
    "method": "PUT",
    "path": "/api/v2/organizations/update_many",
    "tag": "Organizations",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Organizations"
  },
  {
    "operationId": "ListTicketProblems",
    "method": "GET",
    "path": "/api/v2/problems",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Problems"
  },
  {
    "operationId": "AutocompleteProblems",
    "method": "POST",
    "path": "/api/v2/problems/autocomplete",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Autocomplete Problems"
  },
  {
    "operationId": "PushNotificationDevices",
    "method": "POST",
    "path": "/api/v2/push_notification_devices/destroy_many",
    "tag": "Push Notification Devices",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Unregister Push Notification Devices"
  },
  {
    "operationId": "ListQueues",
    "method": "GET",
    "path": "/api/v2/queues",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List queues"
  },
  {
    "operationId": "CreateQueue",
    "method": "POST",
    "path": "/api/v2/queues",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Queue"
  },
  {
    "operationId": "ShowQueueById",
    "method": "GET",
    "path": "/api/v2/queues/{queue_id}",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "queue_id"
    ],
    "summary": "Show Queue"
  },
  {
    "operationId": "UpdateQueue",
    "method": "PUT",
    "path": "/api/v2/queues/{queue_id}",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "queue_id"
    ],
    "summary": "Update Queue"
  },
  {
    "operationId": "DeleteQueue",
    "method": "DELETE",
    "path": "/api/v2/queues/{queue_id}",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "queue_id"
    ],
    "summary": "Delete Queue"
  },
  {
    "operationId": "ListQueueDefinitions",
    "method": "GET",
    "path": "/api/v2/queues/definitions",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Queue Definitions"
  },
  {
    "operationId": "ReorderQueues",
    "method": "PATCH",
    "path": "/api/v2/queues/order",
    "tag": "Omnichannel Routing Queues",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Queues"
  },
  {
    "operationId": "ListSupportAddresses",
    "method": "GET",
    "path": "/api/v2/recipient_addresses",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Support Addresses"
  },
  {
    "operationId": "CreateSupportAddress",
    "method": "POST",
    "path": "/api/v2/recipient_addresses",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Support Address"
  },
  {
    "operationId": "ShowSupportAddress",
    "method": "GET",
    "path": "/api/v2/recipient_addresses/{support_address_id}",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "support_address_id"
    ],
    "summary": "Show Support Address"
  },
  {
    "operationId": "UpdateSupportAddress",
    "method": "PUT",
    "path": "/api/v2/recipient_addresses/{support_address_id}",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "support_address_id"
    ],
    "summary": "Update Support Address"
  },
  {
    "operationId": "DeleteRecipientAddress",
    "method": "DELETE",
    "path": "/api/v2/recipient_addresses/{support_address_id}",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "support_address_id"
    ],
    "summary": "Delete Support Address"
  },
  {
    "operationId": "VerifySupportAddressForwarding",
    "method": "PUT",
    "path": "/api/v2/recipient_addresses/{support_address_id}/verify",
    "tag": "Support Addresses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "support_address_id"
    ],
    "summary": "Verify Support Address Forwarding"
  },
  {
    "operationId": "GetRelationshipFilterDefinitions",
    "method": "GET",
    "path": "/api/v2/relationships/definitions/{target_type}",
    "tag": "Lookup Relationships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "target_type"
    ],
    "summary": "Filter Definitions"
  },
  {
    "operationId": "ListRemoteAuthentications",
    "method": "GET",
    "path": "/api/v2/remote_authentications",
    "tag": "Remote Authentications",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Remote Authentications"
  },
  {
    "operationId": "ListRequests",
    "method": "GET",
    "path": "/api/v2/requests",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Requests"
  },
  {
    "operationId": "CreateRequest",
    "method": "POST",
    "path": "/api/v2/requests",
    "tag": "Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Request"
  },
  {
    "operationId": "ShowRequest",
    "method": "GET",
    "path": "/api/v2/requests/{request_id}",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "request_id"
    ],
    "summary": "Show Request"
  },
  {
    "operationId": "UpdateRequest",
    "method": "PUT",
    "path": "/api/v2/requests/{request_id}",
    "tag": "Requests",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "request_id"
    ],
    "summary": "Update Request"
  },
  {
    "operationId": "ListComments",
    "method": "GET",
    "path": "/api/v2/requests/{request_id}/comments",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "request_id"
    ],
    "summary": "Listing Comments"
  },
  {
    "operationId": "ShowComment",
    "method": "GET",
    "path": "/api/v2/requests/{request_id}/comments/{ticket_comment_id}",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "request_id",
      "ticket_comment_id"
    ],
    "summary": "Getting Comments"
  },
  {
    "operationId": "ListCCDRequests",
    "method": "GET",
    "path": "/api/v2/requests/ccd",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List CCD Requests"
  },
  {
    "operationId": "ListOpenRequests",
    "method": "GET",
    "path": "/api/v2/requests/open",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Open Requests"
  },
  {
    "operationId": "SearchRequests",
    "method": "GET",
    "path": "/api/v2/requests/search",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Requests"
  },
  {
    "operationId": "ListSolvedRequests",
    "method": "GET",
    "path": "/api/v2/requests/solved",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Solved Requests"
  },
  {
    "operationId": "ListResourceCollections",
    "method": "GET",
    "path": "/api/v2/resource_collections",
    "tag": "Resource Collections",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Resource Collections"
  },
  {
    "operationId": "CreateResourceCollection",
    "method": "POST",
    "path": "/api/v2/resource_collections",
    "tag": "Resource Collections",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Resource Collection"
  },
  {
    "operationId": "RetrieveResourceCollection",
    "method": "GET",
    "path": "/api/v2/resource_collections/{resource_collection_id}",
    "tag": "Resource Collections",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "resource_collection_id"
    ],
    "summary": "Show Resource Collection"
  },
  {
    "operationId": "UpdateResourceCollection",
    "method": "PUT",
    "path": "/api/v2/resource_collections/{resource_collection_id}",
    "tag": "Resource Collections",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "resource_collection_id"
    ],
    "summary": "Update Resource Collection"
  },
  {
    "operationId": "DeleteResourceCollection",
    "method": "DELETE",
    "path": "/api/v2/resource_collections/{resource_collection_id}",
    "tag": "Resource Collections",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "resource_collection_id"
    ],
    "summary": "Delete Resource Collection"
  },
  {
    "operationId": "ListAgentAttributeValues",
    "method": "GET",
    "path": "/api/v2/routing/agents/{user_id}/instance_values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Agent Attribute Values"
  },
  {
    "operationId": "SetAgentAttributeValues",
    "method": "POST",
    "path": "/api/v2/routing/agents/{user_id}/instance_values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Set Agent Attribute Values"
  },
  {
    "operationId": "ListManyAgentsAttributeValues",
    "method": "GET",
    "path": "/api/v2/routing/agents/instance_values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Attribute Values for Many Agents"
  },
  {
    "operationId": "BulkSetAgentAttributeValuesJob",
    "method": "POST",
    "path": "/api/v2/routing/agents/instance_values/jobs",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Set Agent Attribute Values Jobs"
  },
  {
    "operationId": "ListAccountAttributes",
    "method": "GET",
    "path": "/api/v2/routing/attributes",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Account Attributes"
  },
  {
    "operationId": "CreateAttribute",
    "method": "POST",
    "path": "/api/v2/routing/attributes",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Attribute"
  },
  {
    "operationId": "ShowAttribute",
    "method": "GET",
    "path": "/api/v2/routing/attributes/{attribute_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attribute_id"
    ],
    "summary": "Show Attribute"
  },
  {
    "operationId": "UpdateAttribute",
    "method": "PUT",
    "path": "/api/v2/routing/attributes/{attribute_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id"
    ],
    "summary": "Update Attribute"
  },
  {
    "operationId": "DeleteAttribute",
    "method": "DELETE",
    "path": "/api/v2/routing/attributes/{attribute_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id"
    ],
    "summary": "Delete Attribute"
  },
  {
    "operationId": "ListAttributeValues",
    "method": "GET",
    "path": "/api/v2/routing/attributes/{attribute_id}/values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attribute_id"
    ],
    "summary": "List Attribute Values for an Attribute"
  },
  {
    "operationId": "CreateAttributeValue",
    "method": "POST",
    "path": "/api/v2/routing/attributes/{attribute_id}/values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id"
    ],
    "summary": "Create Attribute Value"
  },
  {
    "operationId": "ShowAttributeValue",
    "method": "GET",
    "path": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "attribute_id",
      "attribute_value_id"
    ],
    "summary": "Show Attribute Value"
  },
  {
    "operationId": "UpdateAttributeValuePut",
    "method": "PUT",
    "path": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id",
      "attribute_value_id"
    ],
    "summary": "Update Attribute Value"
  },
  {
    "operationId": "UpdateAttributeValue",
    "method": "PATCH",
    "path": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id",
      "attribute_value_id"
    ],
    "summary": "Update Attribute Value"
  },
  {
    "operationId": "DeleteAttributeValue",
    "method": "DELETE",
    "path": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "attribute_id",
      "attribute_value_id"
    ],
    "summary": "Delete Attribute Value"
  },
  {
    "operationId": "ListRoutingAttributeDefinitions",
    "method": "GET",
    "path": "/api/v2/routing/attributes/definitions",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Routing Attribute Definitions"
  },
  {
    "operationId": "ListTicketsFullfilledByUser",
    "method": "GET",
    "path": "/api/v2/routing/requirements/fulfilled",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Tickets Fulfilled by a User"
  },
  {
    "operationId": "ListTicketAttributeValues",
    "method": "GET",
    "path": "/api/v2/routing/tickets/{ticket_id}/instance_values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket Attribute Values"
  },
  {
    "operationId": "SetTicketAttributeValues",
    "method": "POST",
    "path": "/api/v2/routing/tickets/{ticket_id}/instance_values",
    "tag": "Skill Based Routing",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Set Ticket Attribute Values"
  },
  {
    "operationId": "ListSatisfactionRatings",
    "method": "GET",
    "path": "/api/v2/satisfaction_ratings",
    "tag": "Satisfaction Ratings",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Satisfaction Ratings"
  },
  {
    "operationId": "ShowSatisfactionRating",
    "method": "GET",
    "path": "/api/v2/satisfaction_ratings/{satisfaction_rating_id}",
    "tag": "Satisfaction Ratings",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "satisfaction_rating_id"
    ],
    "summary": "Show Satisfaction Rating"
  },
  {
    "operationId": "CountSatisfactionRatings",
    "method": "GET",
    "path": "/api/v2/satisfaction_ratings/count",
    "tag": "Satisfaction Ratings",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Satisfaction Ratings"
  },
  {
    "operationId": "ListSatisfactionRatingReasons",
    "method": "GET",
    "path": "/api/v2/satisfaction_reasons",
    "tag": "Satisfaction Reasons",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Reasons for Satisfaction Rating"
  },
  {
    "operationId": "ShowSatisfactionRatings",
    "method": "GET",
    "path": "/api/v2/satisfaction_reasons/{satisfaction_reason_id}",
    "tag": "Satisfaction Reasons",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "satisfaction_reason_id"
    ],
    "summary": "Show Reason for Satisfaction Rating"
  },
  {
    "operationId": "ListSavedSearches",
    "method": "GET",
    "path": "/api/v2/saved_searches",
    "tag": "Saved Searches",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Saved Searches"
  },
  {
    "operationId": "CreateSavedSearch",
    "method": "POST",
    "path": "/api/v2/saved_searches",
    "tag": "Saved Searches",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Saved Search"
  },
  {
    "operationId": "UpdateSavedSearch",
    "method": "PUT",
    "path": "/api/v2/saved_searches/{id}",
    "tag": "Saved Searches",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Update Saved Search"
  },
  {
    "operationId": "DeleteSavedSearch",
    "method": "DELETE",
    "path": "/api/v2/saved_searches/{id}",
    "tag": "Saved Searches",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Delete Saved Search"
  },
  {
    "operationId": "ListSearchResults",
    "method": "GET",
    "path": "/api/v2/search",
    "tag": "Search",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Search Results"
  },
  {
    "operationId": "CountSearchResults",
    "method": "GET",
    "path": "/api/v2/search/count",
    "tag": "Search",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Results Count"
  },
  {
    "operationId": "ExportSearchResults",
    "method": "GET",
    "path": "/api/v2/search/export",
    "tag": "Search",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Export Search Results"
  },
  {
    "operationId": "ShowSecuritySettings",
    "method": "GET",
    "path": "/api/v2/security_settings",
    "tag": "Security Settings",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Security Settings"
  },
  {
    "operationId": "ListSessions",
    "method": "GET",
    "path": "/api/v2/sessions",
    "tag": "Sessions",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Sessions"
  },
  {
    "operationId": "ListSharingAgreements",
    "method": "GET",
    "path": "/api/v2/sharing_agreements",
    "tag": "Sharing Agreements",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Sharing Agreements"
  },
  {
    "operationId": "CreateSharingAgreement",
    "method": "POST",
    "path": "/api/v2/sharing_agreements",
    "tag": "Sharing Agreements",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Sharing Agreement"
  },
  {
    "operationId": "ShowSharingAgreement",
    "method": "GET",
    "path": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "tag": "Sharing Agreements",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "sharing_agreement_id"
    ],
    "summary": "Show a Sharing Agreement"
  },
  {
    "operationId": "UpdateSharingAgreement",
    "method": "PUT",
    "path": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "tag": "Sharing Agreements",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "sharing_agreement_id"
    ],
    "summary": "Update a Sharing Agreement"
  },
  {
    "operationId": "DeleteSharingAgreement",
    "method": "DELETE",
    "path": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "tag": "Sharing Agreements",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "sharing_agreement_id"
    ],
    "summary": "Delete a Sharing Agreement"
  },
  {
    "operationId": "ListSkips",
    "method": "GET",
    "path": "/api/v2/skips",
    "tag": "Ticket Skips",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List All Skips"
  },
  {
    "operationId": "RecordNewSkip",
    "method": "POST",
    "path": "/api/v2/skips",
    "tag": "Ticket Skips",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Record a New Skip for the Current User"
  },
  {
    "operationId": "ListSLAPolicies",
    "method": "GET",
    "path": "/api/v2/slas/policies",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List SLA Policies"
  },
  {
    "operationId": "CreateSLAPolicy",
    "method": "POST",
    "path": "/api/v2/slas/policies",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create SLA Policy"
  },
  {
    "operationId": "ShowSLAPolicy",
    "method": "GET",
    "path": "/api/v2/slas/policies/{sla_policy_id}",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "sla_policy_id"
    ],
    "summary": "Show SLA Policy"
  },
  {
    "operationId": "UpdateSLAPolicy",
    "method": "PUT",
    "path": "/api/v2/slas/policies/{sla_policy_id}",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "sla_policy_id"
    ],
    "summary": "Update SLA Policy"
  },
  {
    "operationId": "DeleteSLAPolicy",
    "method": "DELETE",
    "path": "/api/v2/slas/policies/{sla_policy_id}",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "sla_policy_id"
    ],
    "summary": "Delete SLA Policy"
  },
  {
    "operationId": "RetrieveSLAPolicyFilterDefinitionItems",
    "method": "GET",
    "path": "/api/v2/slas/policies/definitions",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Retrieve Supported Filter Definition Items"
  },
  {
    "operationId": "ReorderSLAPolicies",
    "method": "PUT",
    "path": "/api/v2/slas/policies/reorder",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder SLA Policies"
  },
  {
    "operationId": "ListSuspendedTickets",
    "method": "GET",
    "path": "/api/v2/suspended_tickets",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Suspended Tickets"
  },
  {
    "operationId": "ShowSuspendedTickets",
    "method": "GET",
    "path": "/api/v2/suspended_tickets/{id}",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "id"
    ],
    "summary": "Show Suspended Ticket"
  },
  {
    "operationId": "DeleteSuspendedTicket",
    "method": "DELETE",
    "path": "/api/v2/suspended_tickets/{id}",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Delete Suspended Ticket"
  },
  {
    "operationId": "RecoverSuspendedTicket",
    "method": "PUT",
    "path": "/api/v2/suspended_tickets/{id}/recover",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "id"
    ],
    "summary": "Recover Suspended Ticket"
  },
  {
    "operationId": "SuspendedTicketsAttachments",
    "method": "POST",
    "path": "/api/v2/suspended_tickets/attachments",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Suspended Ticket Attachments"
  },
  {
    "operationId": "BulkRecoverSuspendedTickets",
    "method": "PUT",
    "path": "/api/v2/suspended_tickets/bulk_recover",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Recover Suspended Tickets"
  },
  {
    "operationId": "DeleteSuspendedTickets",
    "method": "DELETE",
    "path": "/api/v2/suspended_tickets/destroy_many",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Delete Multiple Suspended Tickets"
  },
  {
    "operationId": "ExportSuspendedTickets",
    "method": "POST",
    "path": "/api/v2/suspended_tickets/export",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Export Suspended Tickets"
  },
  {
    "operationId": "RecoverSuspendedTickets",
    "method": "PUT",
    "path": "/api/v2/suspended_tickets/recover_many",
    "tag": "Suspended Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Recover Multiple Suspended Tickets"
  },
  {
    "operationId": "ListTags",
    "method": "GET",
    "path": "/api/v2/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Tags"
  },
  {
    "operationId": "CountTags",
    "method": "GET",
    "path": "/api/v2/tags/count",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Tags"
  },
  {
    "operationId": "ListTargetFailures",
    "method": "GET",
    "path": "/api/v2/target_failures",
    "tag": "Target Failures",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Target Failures"
  },
  {
    "operationId": "ShowTargetFailure",
    "method": "GET",
    "path": "/api/v2/target_failures/{target_failure_id}",
    "tag": "Target Failures",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "target_failure_id"
    ],
    "summary": "Show Target Failure"
  },
  {
    "operationId": "ListTargets",
    "method": "GET",
    "path": "/api/v2/targets",
    "tag": "Targets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Targets"
  },
  {
    "operationId": "CreateTarget",
    "method": "POST",
    "path": "/api/v2/targets",
    "tag": "Targets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Target"
  },
  {
    "operationId": "ShowTarget",
    "method": "GET",
    "path": "/api/v2/targets/{target_id}",
    "tag": "Targets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "target_id"
    ],
    "summary": "Show Target"
  },
  {
    "operationId": "UpdateTarget",
    "method": "PUT",
    "path": "/api/v2/targets/{target_id}",
    "tag": "Targets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "target_id"
    ],
    "summary": "Update Target"
  },
  {
    "operationId": "DeleteTarget",
    "method": "DELETE",
    "path": "/api/v2/targets/{target_id}",
    "tag": "Targets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "target_id"
    ],
    "summary": "Delete Target"
  },
  {
    "operationId": "ListTaskListTemplates",
    "method": "GET",
    "path": "/api/v2/task_list_templates",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Task List Templates"
  },
  {
    "operationId": "CreateTaskListTemplate",
    "method": "POST",
    "path": "/api/v2/task_list_templates",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Task List Template"
  },
  {
    "operationId": "ShowTaskListTemplate",
    "method": "GET",
    "path": "/api/v2/task_list_templates/{task_list_template_id}",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "task_list_template_id"
    ],
    "summary": "Show Task List Template"
  },
  {
    "operationId": "UpdateTaskListTemplate",
    "method": "PUT",
    "path": "/api/v2/task_list_templates/{task_list_template_id}",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_template_id"
    ],
    "summary": "Update Task List Template"
  },
  {
    "operationId": "DeleteTaskListTemplate",
    "method": "DELETE",
    "path": "/api/v2/task_list_templates/{task_list_template_id}",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_template_id"
    ],
    "summary": "Delete Task List Template"
  },
  {
    "operationId": "GetTasksByTaskListTemplateId",
    "method": "GET",
    "path": "/api/v2/task_list_templates/{task_list_template_id}/tasks",
    "tag": "Task List Templates",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "task_list_template_id"
    ],
    "summary": "Get Tasks by Task List Template Id"
  },
  {
    "operationId": "ShowTaskListInstance",
    "method": "GET",
    "path": "/api/v2/task_lists/{task_list_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "task_list_id"
    ],
    "summary": "Show Task List"
  },
  {
    "operationId": "UpdateCustomTaskList",
    "method": "PUT",
    "path": "/api/v2/task_lists/{task_list_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_id"
    ],
    "summary": "Update Custom Task List"
  },
  {
    "operationId": "DeleteTaskList",
    "method": "DELETE",
    "path": "/api/v2/task_lists/{task_list_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_id"
    ],
    "summary": "Delete Task List"
  },
  {
    "operationId": "ListTaskItems",
    "method": "GET",
    "path": "/api/v2/task_lists/{task_list_id}/task_items",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "task_list_id"
    ],
    "summary": "List Task Items"
  },
  {
    "operationId": "CreateCustomTaskItem",
    "method": "POST",
    "path": "/api/v2/task_lists/{task_list_id}/task_items",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_id"
    ],
    "summary": "Create Custom Task Item"
  },
  {
    "operationId": "ShowTaskItem",
    "method": "GET",
    "path": "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "task_list_id",
      "task_item_id"
    ],
    "summary": "Show Task Item"
  },
  {
    "operationId": "UpdateTaskItem",
    "method": "PUT",
    "path": "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_id",
      "task_item_id"
    ],
    "summary": "Update Task Item"
  },
  {
    "operationId": "DeleteCustomTaskItem",
    "method": "DELETE",
    "path": "/api/v2/task_lists/{task_list_id}/task_items/{task_item_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "task_list_id",
      "task_item_id"
    ],
    "summary": "Delete Custom Task Item"
  },
  {
    "operationId": "ListTicketAudits",
    "method": "GET",
    "path": "/api/v2/ticket_audits",
    "tag": "Ticket Audits",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List All Ticket Audits"
  },
  {
    "operationId": "ListTicketContentPins",
    "method": "GET",
    "path": "/api/v2/ticket_content_pins",
    "tag": "Ticket Content Pins",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Content Pins"
  },
  {
    "operationId": "CreateTicketContentPin",
    "method": "POST",
    "path": "/api/v2/ticket_content_pins",
    "tag": "Ticket Content Pins",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket Content Pin"
  },
  {
    "operationId": "DeleteTicketContentPin",
    "method": "DELETE",
    "path": "/api/v2/ticket_content_pins/{content_pin_id}",
    "tag": "Ticket Content Pins",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "content_pin_id"
    ],
    "summary": "Delete Content Pin from Ticket"
  },
  {
    "operationId": "ListTicketFields",
    "method": "GET",
    "path": "/api/v2/ticket_fields",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Fields"
  },
  {
    "operationId": "CreateTicketField",
    "method": "POST",
    "path": "/api/v2/ticket_fields",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket Field"
  },
  {
    "operationId": "ShowTicketfield",
    "method": "GET",
    "path": "/api/v2/ticket_fields/{ticket_field_id}",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_field_id"
    ],
    "summary": "Show Ticket Field"
  },
  {
    "operationId": "UpdateTicketField",
    "method": "PUT",
    "path": "/api/v2/ticket_fields/{ticket_field_id}",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_field_id"
    ],
    "summary": "Update Ticket Field"
  },
  {
    "operationId": "DeleteTicketField",
    "method": "DELETE",
    "path": "/api/v2/ticket_fields/{ticket_field_id}",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_field_id"
    ],
    "summary": "Delete Ticket Field"
  },
  {
    "operationId": "ListTicketFieldOptions",
    "method": "GET",
    "path": "/api/v2/ticket_fields/{ticket_field_id}/options",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_field_id"
    ],
    "summary": "List Ticket Field Options"
  },
  {
    "operationId": "CreateOrUpdateTicketFieldOption",
    "method": "POST",
    "path": "/api/v2/ticket_fields/{ticket_field_id}/options",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_field_id"
    ],
    "summary": "Create or Update Ticket Field Option"
  },
  {
    "operationId": "ShowTicketFieldOption",
    "method": "GET",
    "path": "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_field_id",
      "ticket_field_option_id"
    ],
    "summary": "Show Ticket Field Option"
  },
  {
    "operationId": "DeleteTicketFieldOption",
    "method": "DELETE",
    "path": "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_field_id",
      "ticket_field_option_id"
    ],
    "summary": "Delete Ticket Field Option"
  },
  {
    "operationId": "CountTicketFields",
    "method": "GET",
    "path": "/api/v2/ticket_fields/count",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Ticket Fields"
  },
  {
    "operationId": "ReorderTicketFields",
    "method": "PUT",
    "path": "/api/v2/ticket_fields/reorder",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Ticket Fields"
  },
  {
    "operationId": "ShowManyTicketFields",
    "method": "GET",
    "path": "/api/v2/ticket_fields/show_many",
    "tag": "Ticket Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Ticket Fields"
  },
  {
    "operationId": "ListTicketFormStatuses",
    "method": "GET",
    "path": "/api/v2/ticket_form_statuses",
    "tag": "Ticket Form Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Form Statuses"
  },
  {
    "operationId": "ShowManyTicketFormStatuses",
    "method": "GET",
    "path": "/api/v2/ticket_form_statuses/show_many",
    "tag": "Ticket Form Statuses",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Ticket Form Statuses"
  },
  {
    "operationId": "ListTicketForms",
    "method": "GET",
    "path": "/api/v2/ticket_forms",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Forms"
  },
  {
    "operationId": "CreateTicketForm",
    "method": "POST",
    "path": "/api/v2/ticket_forms",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket Form"
  },
  {
    "operationId": "ShowTicketForm",
    "method": "GET",
    "path": "/api/v2/ticket_forms/{ticket_form_id}",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Show Ticket Form"
  },
  {
    "operationId": "UpdateTicketForm",
    "method": "PUT",
    "path": "/api/v2/ticket_forms/{ticket_form_id}",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Update Ticket Form"
  },
  {
    "operationId": "DeleteTicketForm",
    "method": "DELETE",
    "path": "/api/v2/ticket_forms/{ticket_form_id}",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Delete Ticket Form"
  },
  {
    "operationId": "CloneTicketForm",
    "method": "POST",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/clone",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Clone an Already Existing Ticket Form"
  },
  {
    "operationId": "TicketFormTicketFormStatuses",
    "method": "GET",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "List Ticket Form Statuses of a Ticket Form"
  },
  {
    "operationId": "CreateTicketFormStatuses",
    "method": "POST",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Create Ticket Form Statuses"
  },
  {
    "operationId": "UpdateTicketFormStatuses",
    "method": "PUT",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Bulk Update Ticket Form Statuses of a Ticket Form"
  },
  {
    "operationId": "DeleteTicketFormStatuses",
    "method": "DELETE",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses",
    "tag": "Ticket Form Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id"
    ],
    "summary": "Delete Ticket Form Statuses"
  },
  {
    "operationId": "UpdateTicketFormStatusById",
    "method": "PUT",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id}",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id",
      "ticket_form_status_id"
    ],
    "summary": "Update Ticket Form Status By Id"
  },
  {
    "operationId": "DeleteTicketFormStatusById",
    "method": "DELETE",
    "path": "/api/v2/ticket_forms/{ticket_form_id}/ticket_form_statuses/{ticket_form_status_id}",
    "tag": "Ticket Form Statuses",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_form_id",
      "ticket_form_status_id"
    ],
    "summary": "Delete Ticket Form Status By Id"
  },
  {
    "operationId": "ReorderTicketForms",
    "method": "PUT",
    "path": "/api/v2/ticket_forms/reorder",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Ticket Forms"
  },
  {
    "operationId": "ShowManyTicketForms",
    "method": "GET",
    "path": "/api/v2/ticket_forms/show_many",
    "tag": "Ticket Forms",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Ticket Forms"
  },
  {
    "operationId": "ListTicketMetrics",
    "method": "GET",
    "path": "/api/v2/ticket_metrics",
    "tag": "Ticket Metrics",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Metrics"
  },
  {
    "operationId": "ShowTicketMetrics",
    "method": "GET",
    "path": "/api/v2/ticket_metrics/{ticket_metric_id}",
    "tag": "Ticket Metrics",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_metric_id"
    ],
    "summary": "Show Ticket Metrics"
  },
  {
    "operationId": "ListTickets",
    "method": "GET",
    "path": "/api/v2/tickets",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Tickets"
  },
  {
    "operationId": "CreateTicket",
    "method": "POST",
    "path": "/api/v2/tickets",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket"
  },
  {
    "operationId": "ShowTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Show Ticket"
  },
  {
    "operationId": "UpdateTicket",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Update Ticket"
  },
  {
    "operationId": "DeleteTicket",
    "method": "DELETE",
    "path": "/api/v2/tickets/{ticket_id}",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Delete Ticket"
  },
  {
    "operationId": "ListAuditsForTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/audits",
    "tag": "Ticket Audits",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Audits for a Ticket"
  },
  {
    "operationId": "ShowTicketAudit",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}",
    "tag": "Ticket Audits",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id",
      "ticket_audit_id"
    ],
    "summary": "Show Audit"
  },
  {
    "operationId": "MakeTicketCommentPrivateFromAudits",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}/make_private",
    "tag": "Ticket Audits",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "ticket_audit_id"
    ],
    "summary": "Change a Comment From Public To Private"
  },
  {
    "operationId": "CountAuditsForTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/audits/count",
    "tag": "Ticket Audits",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Count Audits for a Ticket"
  },
  {
    "operationId": "ListTicketCollaborators",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/collaborators",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Collaborators for a Ticket"
  },
  {
    "operationId": "ListTicketComments",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/comments",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Comments"
  },
  {
    "operationId": "RedactCommentAttachment",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/comments/{comment_id}/attachments/{attachment_id}/redact",
    "tag": "Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "comment_id",
      "attachment_id"
    ],
    "summary": "Redact Comment Attachment"
  },
  {
    "operationId": "MakeTicketCommentPrivate",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/make_private",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "ticket_comment_id"
    ],
    "summary": "Make Comment Private"
  },
  {
    "operationId": "RedactStringInComment",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/redact",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "ticket_comment_id"
    ],
    "summary": "Redact String in Comment"
  },
  {
    "operationId": "CountTicketComments",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/comments/count",
    "tag": "Ticket Comments",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Count Ticket Comments"
  },
  {
    "operationId": "ListConversationLogForTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/conversation_log",
    "tag": "Conversation Log",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Conversation log for Ticket"
  },
  {
    "operationId": "ListTicketEmailCCs",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/email_ccs",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Email CCs for a Ticket"
  },
  {
    "operationId": "ListTicketFollowers",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/followers",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Followers for a Ticket"
  },
  {
    "operationId": "ListTicketGroupSlaPolicyMetrics",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/group_slas/policy_metrics",
    "tag": "Group SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket Group SLA Policy Metrics"
  },
  {
    "operationId": "ListTicketIncidents",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/incidents",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket Incidents"
  },
  {
    "operationId": "ShowTicketAfterChanges",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/macros/{macro_id}/apply",
    "tag": "Macros",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id",
      "macro_id"
    ],
    "summary": "Show Ticket After Changes"
  },
  {
    "operationId": "MarkTicketAsSpamAndSuspendRequester",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/mark_as_spam",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Mark Ticket as Spam and Suspend Requester"
  },
  {
    "operationId": "MergeTicketsIntoTargetTicket",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/merge",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Merge Tickets into Target Ticket"
  },
  {
    "operationId": "ListTicketMetricEventsByTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/metric_events",
    "tag": "Ticket Metric Events",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket Metric Events by Ticket"
  },
  {
    "operationId": "ShowTicketMetricsByTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/metrics",
    "tag": "Ticket Metrics",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Show Ticket Metrics By Ticket"
  },
  {
    "operationId": "ListParentTicketReferences",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/parent_ticket_tasks",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Parent Ticket References"
  },
  {
    "operationId": "TicketRelatedInformation",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/related",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Ticket Related Information"
  },
  {
    "operationId": "CreateTicketSatisfactionRating",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/satisfaction_rating",
    "tag": "Satisfaction Ratings",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Create a Satisfaction Rating"
  },
  {
    "operationId": "ListTicketSkipsByTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/skips",
    "tag": "Ticket Skips",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket Skips By Ticket"
  },
  {
    "operationId": "ListTicketSlaPolicyMetrics",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/slas/policy_metrics",
    "tag": "SLA Policies",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Ticket SLA Policy Metrics"
  },
  {
    "operationId": "ListResourceTags",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "List Resource Tags"
  },
  {
    "operationId": "SetTagsTicket",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Set Tags"
  },
  {
    "operationId": "PutTagsTicket",
    "method": "PUT",
    "path": "/api/v2/tickets/{ticket_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Add Tags"
  },
  {
    "operationId": "DeleteTagsTicket",
    "method": "DELETE",
    "path": "/api/v2/tickets/{ticket_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Remove Tags"
  },
  {
    "operationId": "CreateSubticket",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/subticket",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "task_item_id"
    ],
    "summary": "Create Subticket"
  },
  {
    "operationId": "ListLinkedTicketsForTaskItem",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id",
      "task_item_id"
    ],
    "summary": "List Linked Tickets"
  },
  {
    "operationId": "LinkExistingTicket",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "task_item_id"
    ],
    "summary": "Link Existing Ticket"
  },
  {
    "operationId": "UnlinkTicket",
    "method": "DELETE",
    "path": "/api/v2/tickets/{ticket_id}/task_items/{task_item_id}/task_links/{task_object_link_id}",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id",
      "task_item_id",
      "task_object_link_id"
    ],
    "summary": "Unlink Ticket"
  },
  {
    "operationId": "ShowTaskListsForTicket",
    "method": "GET",
    "path": "/api/v2/tickets/{ticket_id}/task_lists",
    "tag": "Task Lists",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Show Task Lists for Ticket"
  },
  {
    "operationId": "CreateTaskList",
    "method": "POST",
    "path": "/api/v2/tickets/{ticket_id}/task_lists",
    "tag": "Task Lists",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "ticket_id"
    ],
    "summary": "Create Task List"
  },
  {
    "operationId": "AutocompleteTickets",
    "method": "GET",
    "path": "/api/v2/tickets/autocomplete",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Autocomplete Tickets"
  },
  {
    "operationId": "CountTickets",
    "method": "GET",
    "path": "/api/v2/tickets/count",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Tickets"
  },
  {
    "operationId": "TicketsCreateMany",
    "method": "POST",
    "path": "/api/v2/tickets/create_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Many Tickets"
  },
  {
    "operationId": "BulkDeleteTickets",
    "method": "DELETE",
    "path": "/api/v2/tickets/destroy_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Tickets"
  },
  {
    "operationId": "MarkManyTicketsAsSpam",
    "method": "PUT",
    "path": "/api/v2/tickets/mark_many_as_spam",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Mark Tickets as Spam"
  },
  {
    "operationId": "ShowTicketByMessagingConversationId",
    "method": "GET",
    "path": "/api/v2/tickets/messaging/conversations/{conversation_id}/ticket",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "conversation_id"
    ],
    "summary": "Show Ticket by Messaging Conversation ID"
  },
  {
    "operationId": "ListRecentTickets",
    "method": "GET",
    "path": "/api/v2/tickets/recent",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Recent Tickets"
  },
  {
    "operationId": "TicketsShowMany",
    "method": "GET",
    "path": "/api/v2/tickets/show_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Multiple Tickets"
  },
  {
    "operationId": "TicketsUpdateMany",
    "method": "PUT",
    "path": "/api/v2/tickets/update_many",
    "tag": "Tickets",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Tickets"
  },
  {
    "operationId": "ListTriggerCategories",
    "method": "GET",
    "path": "/api/v2/trigger_categories",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Trigger Categories"
  },
  {
    "operationId": "CreateTriggerCategory",
    "method": "POST",
    "path": "/api/v2/trigger_categories",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Ticket Trigger Category"
  },
  {
    "operationId": "ShowTriggerCategoryById",
    "method": "GET",
    "path": "/api/v2/trigger_categories/{trigger_category_id}",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "trigger_category_id"
    ],
    "summary": "Show Ticket Trigger Category"
  },
  {
    "operationId": "UpdateTriggerCategory",
    "method": "PATCH",
    "path": "/api/v2/trigger_categories/{trigger_category_id}",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "trigger_category_id"
    ],
    "summary": "Update Ticket Trigger Category"
  },
  {
    "operationId": "DeleteTriggerCategory",
    "method": "DELETE",
    "path": "/api/v2/trigger_categories/{trigger_category_id}",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "trigger_category_id"
    ],
    "summary": "Delete Ticket Trigger Category"
  },
  {
    "operationId": "BatchOperateTriggerCategories",
    "method": "POST",
    "path": "/api/v2/trigger_categories/jobs",
    "tag": "Trigger Categories",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Batch Job for Ticket Trigger Categories"
  },
  {
    "operationId": "ListTriggers",
    "method": "GET",
    "path": "/api/v2/triggers",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Triggers"
  },
  {
    "operationId": "CreateTrigger",
    "method": "POST",
    "path": "/api/v2/triggers",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Trigger"
  },
  {
    "operationId": "GetTrigger",
    "method": "GET",
    "path": "/api/v2/triggers/{trigger_id}",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "trigger_id"
    ],
    "summary": "Show Ticket Trigger"
  },
  {
    "operationId": "UpdateTrigger",
    "method": "PUT",
    "path": "/api/v2/triggers/{trigger_id}",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "trigger_id"
    ],
    "summary": "Update Ticket Trigger"
  },
  {
    "operationId": "DeleteTrigger",
    "method": "DELETE",
    "path": "/api/v2/triggers/{trigger_id}",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "trigger_id"
    ],
    "summary": "Delete Ticket Trigger"
  },
  {
    "operationId": "ListTriggerRevisions",
    "method": "GET",
    "path": "/api/v2/triggers/{trigger_id}/revisions",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "trigger_id"
    ],
    "summary": "List Ticket Trigger Revisions"
  },
  {
    "operationId": "TriggerRevision",
    "method": "GET",
    "path": "/api/v2/triggers/{trigger_id}/revisions/{trigger_revision_id}",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "trigger_id",
      "trigger_revision_id"
    ],
    "summary": "Show Ticket Trigger Revision"
  },
  {
    "operationId": "ListActiveTriggers",
    "method": "GET",
    "path": "/api/v2/triggers/active",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Active Ticket Triggers"
  },
  {
    "operationId": "ListTriggerActionConditionDefinitions",
    "method": "GET",
    "path": "/api/v2/triggers/definitions",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Ticket Trigger Action and Condition Definitions"
  },
  {
    "operationId": "DeleteManyTriggers",
    "method": "DELETE",
    "path": "/api/v2/triggers/destroy_many",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Ticket Triggers"
  },
  {
    "operationId": "ShowTriggerLimits",
    "method": "GET",
    "path": "/api/v2/triggers/limits",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Ticket Trigger Limits"
  },
  {
    "operationId": "ReorderTriggers",
    "method": "PUT",
    "path": "/api/v2/triggers/reorder",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Ticket Triggers"
  },
  {
    "operationId": "SearchTriggers",
    "method": "GET",
    "path": "/api/v2/triggers/search",
    "tag": "Triggers",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Ticket Triggers"
  },
  {
    "operationId": "UpdateManyTriggers",
    "method": "PUT",
    "path": "/api/v2/triggers/update_many",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Ticket Triggers"
  },
  {
    "operationId": "ValidateTrigger",
    "method": "POST",
    "path": "/api/v2/triggers/validate",
    "tag": "Triggers",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Validate Ticket Trigger"
  },
  {
    "operationId": "UploadFiles",
    "method": "POST",
    "path": "/api/v2/uploads",
    "tag": "Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Upload Files"
  },
  {
    "operationId": "DeleteUpload",
    "method": "DELETE",
    "path": "/api/v2/uploads/{token}",
    "tag": "Attachments",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "token"
    ],
    "summary": "Delete Upload"
  },
  {
    "operationId": "ListUserFields",
    "method": "GET",
    "path": "/api/v2/user_fields",
    "tag": "User Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List User Fields"
  },
  {
    "operationId": "CreateUserField",
    "method": "POST",
    "path": "/api/v2/user_fields",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create User Field"
  },
  {
    "operationId": "ShowUserField",
    "method": "GET",
    "path": "/api/v2/user_fields/{user_field_id}",
    "tag": "User Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_field_id"
    ],
    "summary": "Show User Field"
  },
  {
    "operationId": "UpdateUserField",
    "method": "PUT",
    "path": "/api/v2/user_fields/{user_field_id}",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_field_id"
    ],
    "summary": "Update User Field"
  },
  {
    "operationId": "DeleteUserField",
    "method": "DELETE",
    "path": "/api/v2/user_fields/{user_field_id}",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_field_id"
    ],
    "summary": "Delete User Field"
  },
  {
    "operationId": "ListUserFieldOptions",
    "method": "GET",
    "path": "/api/v2/user_fields/{user_field_id}/options",
    "tag": "User Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_field_id"
    ],
    "summary": "List User Field Options"
  },
  {
    "operationId": "CreateOrUpdateUserFieldOption",
    "method": "POST",
    "path": "/api/v2/user_fields/{user_field_id}/options",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_field_id"
    ],
    "summary": "Create or Update a User Field Option"
  },
  {
    "operationId": "ShowUserFieldOption",
    "method": "GET",
    "path": "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}",
    "tag": "User Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_field_id",
      "user_field_option_id"
    ],
    "summary": "Show a User Field Option"
  },
  {
    "operationId": "DeleteUserFieldOption",
    "method": "DELETE",
    "path": "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_field_id",
      "user_field_option_id"
    ],
    "summary": "Delete User Field Option"
  },
  {
    "operationId": "ReorderUserField",
    "method": "PUT",
    "path": "/api/v2/user_fields/reorder",
    "tag": "User Fields",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder User Field"
  },
  {
    "operationId": "ShowManyUserFields",
    "method": "GET",
    "path": "/api/v2/user_fields/show_many",
    "tag": "User Fields",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many User Fields"
  },
  {
    "operationId": "ListUsers",
    "method": "GET",
    "path": "/api/v2/users",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Users"
  },
  {
    "operationId": "CreateUser",
    "method": "POST",
    "path": "/api/v2/users",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create User"
  },
  {
    "operationId": "ShowUser",
    "method": "GET",
    "path": "/api/v2/users/{user_id}",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Show User"
  },
  {
    "operationId": "UpdateUser",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Update User"
  },
  {
    "operationId": "DeleteUser",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Delete User"
  },
  {
    "operationId": "ListUserBrandAgents",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/brand_agents",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Brand Agent Memberships By User"
  },
  {
    "operationId": "ShowUserBrandAgentById",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/brand_agents/{brand_agent_id}",
    "tag": "Brand Agents",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "brand_agent_id"
    ],
    "summary": "Show Brand Agent Membership By User"
  },
  {
    "operationId": "ShowUserComplianceDeletionStatuses",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/compliance_deletion_statuses",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Show Compliance Deletion Statuses"
  },
  {
    "operationId": "GetUserEntitlementsFull",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/entitlements/full",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Get Full User Entitlements"
  },
  {
    "operationId": "ListUserGroupMemberships",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/group_memberships",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Group Memberships by User"
  },
  {
    "operationId": "CreateUserGroupMembership",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/group_memberships",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create Group Membership for User"
  },
  {
    "operationId": "ShowUserGroupMembershipById",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/group_memberships/{group_membership_id}",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "group_membership_id"
    ],
    "summary": "Show User's Group Membership"
  },
  {
    "operationId": "DeleteUserGroupMembership",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/group_memberships/{group_membership_id}",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "group_membership_id"
    ],
    "summary": "Delete User's Group Membership"
  },
  {
    "operationId": "GroupMembershipSetDefault",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/group_memberships/{group_membership_id}/make_default",
    "tag": "Group Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "group_membership_id"
    ],
    "summary": "Set Membership as Default"
  },
  {
    "operationId": "ListUserGroups",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/groups",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Groups"
  },
  {
    "operationId": "CountUserGroups",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/groups/count",
    "tag": "Groups",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Count User Groups"
  },
  {
    "operationId": "ListUserIdentities",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/identities",
    "tag": "User Identities",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Identities"
  },
  {
    "operationId": "CreateUserIdentity",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/identities",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create Identity"
  },
  {
    "operationId": "ShowUserIdentity",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "tag": "User Identities",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Show Identity"
  },
  {
    "operationId": "UpdateUserIdentity",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Update Identity"
  },
  {
    "operationId": "DeleteUserIdentity",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Delete Identity"
  },
  {
    "operationId": "MakeUserIdentityPrimary",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}/make_primary",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Make Identity Primary"
  },
  {
    "operationId": "RequestUserVerification",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}/request_verification",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Request User Verification"
  },
  {
    "operationId": "VerifyUserIdentity",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/identities/{user_identity_id}/verify",
    "tag": "User Identities",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "user_identity_id"
    ],
    "summary": "Verify Identity"
  },
  {
    "operationId": "MergeEndUsers",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/merge",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Merge End Users"
  },
  {
    "operationId": "ListUserOrganizationMemberships",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/organization_memberships",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Organization Memberships by User"
  },
  {
    "operationId": "CreateUserOrganizationMembership",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/organization_memberships",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create Organization Membership for User"
  },
  {
    "operationId": "ShowOrganizationMembershipByUserId",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "organization_membership_id"
    ],
    "summary": "Show Organization Membership by User"
  },
  {
    "operationId": "DeleteUserOrganizationMembership",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "organization_membership_id"
    ],
    "summary": "Delete Organization Membership for User"
  },
  {
    "operationId": "SetOrganizationMembershipAsDefault",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}/make_default",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "organization_membership_id"
    ],
    "summary": "Set Membership as Default"
  },
  {
    "operationId": "ListUserOrganizationSubscriptions",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/organization_subscriptions",
    "tag": "Organization Subscriptions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User's Organization Subscriptions"
  },
  {
    "operationId": "ListUserOrganizations",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/organizations",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Organizations"
  },
  {
    "operationId": "UnassignOrganization",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/organizations/{organization_id}",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "organization_id"
    ],
    "summary": "Unassign Organization"
  },
  {
    "operationId": "SetOrganizationAsDefault",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/organizations/{organization_id}/make_default",
    "tag": "Organization Memberships",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "organization_id"
    ],
    "summary": "Set Organization as Default"
  },
  {
    "operationId": "CountUserOrganizations",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/organizations/count",
    "tag": "Organizations",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Count User's Organizations"
  },
  {
    "operationId": "SetUserPassword",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/password",
    "tag": "User Passwords",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Set a User's Password"
  },
  {
    "operationId": "ChangeOwnPassword",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/password",
    "tag": "User Passwords",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Change Your Password"
  },
  {
    "operationId": "GetUserPasswordRequirements",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/password/requirements",
    "tag": "User Passwords",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List password requirements"
  },
  {
    "operationId": "ShowUserRelated",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/related",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Show User Related Information"
  },
  {
    "operationId": "ListUserRequests",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/requests",
    "tag": "Requests",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Requests"
  },
  {
    "operationId": "ListUserSessions",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/sessions",
    "tag": "Sessions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Sessions for User"
  },
  {
    "operationId": "BulkDeleteSessionsByUserId",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/sessions",
    "tag": "Sessions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Bulk Delete Sessions"
  },
  {
    "operationId": "ShowSession",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/sessions/{session_id}",
    "tag": "Sessions",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id",
      "session_id"
    ],
    "summary": "Show Session"
  },
  {
    "operationId": "DeleteSession",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/sessions/{session_id}",
    "tag": "Sessions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "session_id"
    ],
    "summary": "Delete Session"
  },
  {
    "operationId": "ListTicketSkips",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/skips",
    "tag": "Ticket Skips",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Ticket Skips"
  },
  {
    "operationId": "ShowUserSuspension",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/suspension",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Show a User's Suspension"
  },
  {
    "operationId": "CreateUserSuspension",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/suspension",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create a User Suspension"
  },
  {
    "operationId": "UpdateUserSuspension",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/suspension",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Update a User's Suspension"
  },
  {
    "operationId": "DeleteUserSuspension",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/suspension",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Delete the User Suspension"
  },
  {
    "operationId": "ListUserTags",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Tags"
  },
  {
    "operationId": "SetUserTags",
    "method": "POST",
    "path": "/api/v2/users/{user_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Set User Tags"
  },
  {
    "operationId": "PutUserTags",
    "method": "PUT",
    "path": "/api/v2/users/{user_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Add User Tags"
  },
  {
    "operationId": "DeleteUserTags",
    "method": "DELETE",
    "path": "/api/v2/users/{user_id}/tags",
    "tag": "Tags",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Remove User Tags"
  },
  {
    "operationId": "ListUserAssignedTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/assigned",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Assigned Tickets"
  },
  {
    "operationId": "CountUserAssignedTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/assigned/count",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Count User Assigned Tickets"
  },
  {
    "operationId": "ListUserCCDTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/ccd",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User CCD Tickets"
  },
  {
    "operationId": "CountUserCCDTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/ccd/count",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "Count User CCD Tickets"
  },
  {
    "operationId": "ListUserFollowedTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/followed",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Followed Tickets"
  },
  {
    "operationId": "ListUserRequestedTickets",
    "method": "GET",
    "path": "/api/v2/users/{user_id}/tickets/requested",
    "tag": "Tickets",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Requested Tickets"
  },
  {
    "operationId": "AutocompleteUsers",
    "method": "GET",
    "path": "/api/v2/users/autocomplete",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Autocomplete Users"
  },
  {
    "operationId": "AutocompleteUsersPost",
    "method": "POST",
    "path": "/api/v2/users/autocomplete",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Autocomplete Users by Request Body"
  },
  {
    "operationId": "CountUsers",
    "method": "GET",
    "path": "/api/v2/users/count",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Users"
  },
  {
    "operationId": "CreateManyUsers",
    "method": "POST",
    "path": "/api/v2/users/create_many",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Many Users"
  },
  {
    "operationId": "CreateOrUpdateUser",
    "method": "POST",
    "path": "/api/v2/users/create_or_update",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Or Update User"
  },
  {
    "operationId": "CreateOrUpdateManyUsers",
    "method": "POST",
    "path": "/api/v2/users/create_or_update_many",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Or Update Many Users"
  },
  {
    "operationId": "DestroyManyUsers",
    "method": "DELETE",
    "path": "/api/v2/users/destroy_many",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Users"
  },
  {
    "operationId": "LogoutManyUsers",
    "method": "POST",
    "path": "/api/v2/users/logout_many",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Logout many users"
  },
  {
    "operationId": "ShowCurrentUser",
    "method": "GET",
    "path": "/api/v2/users/me",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Self"
  },
  {
    "operationId": "DeleteAuthenticatedSession",
    "method": "DELETE",
    "path": "/api/v2/users/me/logout",
    "tag": "Sessions",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Delete the Authenticated Session"
  },
  {
    "operationId": "ListCurrentUserOAuthClients",
    "method": "GET",
    "path": "/api/v2/users/me/oauth/clients",
    "tag": "OAuth Clients",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Current User's Clients"
  },
  {
    "operationId": "ShowCurrentlyAuthenticatedSession",
    "method": "GET",
    "path": "/api/v2/users/me/session",
    "tag": "Sessions",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show the Currently Authenticated Session"
  },
  {
    "operationId": "RenewCurrentSession",
    "method": "GET",
    "path": "/api/v2/users/me/session/renew",
    "tag": "Sessions",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Renew the current session"
  },
  {
    "operationId": "ShowCurrentUserSettings",
    "method": "GET",
    "path": "/api/v2/users/me/settings",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Current User Settings"
  },
  {
    "operationId": "UpdateCurrentUserSettings",
    "method": "PUT",
    "path": "/api/v2/users/me/settings",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Current User Settings"
  },
  {
    "operationId": "RequestUserCreate",
    "method": "POST",
    "path": "/api/v2/users/request_create",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Request User Create"
  },
  {
    "operationId": "SearchUsers",
    "method": "GET",
    "path": "/api/v2/users/search",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Users"
  },
  {
    "operationId": "ShowManyUsers",
    "method": "GET",
    "path": "/api/v2/users/show_many",
    "tag": "Users",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Many Users"
  },
  {
    "operationId": "UpdateManyUsers",
    "method": "PUT",
    "path": "/api/v2/users/update_many",
    "tag": "Users",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Users"
  },
  {
    "operationId": "ListViews",
    "method": "GET",
    "path": "/api/v2/views",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Views"
  },
  {
    "operationId": "CreateView",
    "method": "POST",
    "path": "/api/v2/views",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create View"
  },
  {
    "operationId": "ShowView",
    "method": "GET",
    "path": "/api/v2/views/{view_id}",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "view_id"
    ],
    "summary": "Show View"
  },
  {
    "operationId": "UpdateView",
    "method": "PUT",
    "path": "/api/v2/views/{view_id}",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "view_id"
    ],
    "summary": "Update View"
  },
  {
    "operationId": "DeleteView",
    "method": "DELETE",
    "path": "/api/v2/views/{view_id}",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "view_id"
    ],
    "summary": "Delete View"
  },
  {
    "operationId": "GetViewCount",
    "method": "GET",
    "path": "/api/v2/views/{view_id}/count",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "view_id"
    ],
    "summary": "Count Tickets in View"
  },
  {
    "operationId": "ExecuteView",
    "method": "GET",
    "path": "/api/v2/views/{view_id}/execute",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "view_id"
    ],
    "summary": "Execute View"
  },
  {
    "operationId": "ExportView",
    "method": "GET",
    "path": "/api/v2/views/{view_id}/export",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "view_id"
    ],
    "summary": "Export View"
  },
  {
    "operationId": "ListTicketsFromView",
    "method": "GET",
    "path": "/api/v2/views/{view_id}/tickets",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "view_id"
    ],
    "summary": "List Tickets From a View"
  },
  {
    "operationId": "ListActiveViews",
    "method": "GET",
    "path": "/api/v2/views/active",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Active Views"
  },
  {
    "operationId": "ListCompactViews",
    "method": "GET",
    "path": "/api/v2/views/compact",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Views - Compact"
  },
  {
    "operationId": "CountViews",
    "method": "GET",
    "path": "/api/v2/views/count",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Views"
  },
  {
    "operationId": "GetViewCounts",
    "method": "GET",
    "path": "/api/v2/views/count_many",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Count Tickets in Views"
  },
  {
    "operationId": "ListViewDefinitions",
    "method": "GET",
    "path": "/api/v2/views/definitions",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List View Filter Definitions"
  },
  {
    "operationId": "BulkDeleteViews",
    "method": "DELETE",
    "path": "/api/v2/views/destroy_many",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Views"
  },
  {
    "operationId": "PreviewViews",
    "method": "POST",
    "path": "/api/v2/views/preview",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Preview Views"
  },
  {
    "operationId": "PreviewCount",
    "method": "POST",
    "path": "/api/v2/views/preview/count",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Preview Ticket Count"
  },
  {
    "operationId": "SearchViews",
    "method": "GET",
    "path": "/api/v2/views/search",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Views"
  },
  {
    "operationId": "ListViewsById",
    "method": "GET",
    "path": "/api/v2/views/show_many",
    "tag": "Views",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Views By ID"
  },
  {
    "operationId": "UpdateManyViews",
    "method": "PUT",
    "path": "/api/v2/views/update_many",
    "tag": "Views",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Update Many Views"
  },
  {
    "operationId": "ListWorkspaces",
    "method": "GET",
    "path": "/api/v2/workspaces",
    "tag": "Workspaces",
    "product": "support",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Workspaces"
  },
  {
    "operationId": "CreateWorkspace",
    "method": "POST",
    "path": "/api/v2/workspaces",
    "tag": "Workspaces",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Workspace"
  },
  {
    "operationId": "ShowWorkspace",
    "method": "GET",
    "path": "/api/v2/workspaces/{workspace_id}",
    "tag": "Workspaces",
    "product": "support",
    "rw": "READ",
    "pathParams": [
      "workspace_id"
    ],
    "summary": "Show Workspace"
  },
  {
    "operationId": "UpdateWorkspace",
    "method": "PUT",
    "path": "/api/v2/workspaces/{workspace_id}",
    "tag": "Workspaces",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "workspace_id"
    ],
    "summary": "Update Workspace"
  },
  {
    "operationId": "DeleteWorkspace",
    "method": "DELETE",
    "path": "/api/v2/workspaces/{workspace_id}",
    "tag": "Workspaces",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [
      "workspace_id"
    ],
    "summary": "Delete Workspace"
  },
  {
    "operationId": "DestroyManyWorkspaces",
    "method": "DELETE",
    "path": "/api/v2/workspaces/destroy_many",
    "tag": "Workspaces",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Bulk Delete Workspaces"
  },
  {
    "operationId": "ReorderWorkspaces",
    "method": "PUT",
    "path": "/api/v2/workspaces/reorder",
    "tag": "Workspaces",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Reorder Workspaces"
  },
  {
    "operationId": "CreateTokenForGrantType",
    "method": "POST",
    "path": "/oauth/tokens",
    "tag": "Grant Type Tokens",
    "product": "support",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Token for Grant Type"
  },
  {
    "operationId": "ListPosts",
    "method": "GET",
    "path": "/api/v2/community/posts",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Posts"
  },
  {
    "operationId": "CreatePost",
    "method": "POST",
    "path": "/api/v2/community/posts",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Post"
  },
  {
    "operationId": "ShowPost",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id"
    ],
    "summary": "Show Post"
  },
  {
    "operationId": "UpdatePost",
    "method": "PUT",
    "path": "/api/v2/community/posts/{post_id}",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Update Post"
  },
  {
    "operationId": "DeletePost",
    "method": "DELETE",
    "path": "/api/v2/community/posts/{post_id}",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Delete Post"
  },
  {
    "operationId": "ListPostComments",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/comments",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id"
    ],
    "summary": "List Comments"
  },
  {
    "operationId": "CreatePostComment",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/comments",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Create Post Comment"
  },
  {
    "operationId": "DownvotePostComment",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/comments/{comment_id}/down",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id",
      "comment_id"
    ],
    "summary": "Downvote Post Comment"
  },
  {
    "operationId": "UpvotePostComment",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/comments/{comment_id}/up",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id",
      "comment_id"
    ],
    "summary": "Upvote Post Comment"
  },
  {
    "operationId": "ListPostCommentVotes",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/comments/{comment_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id",
      "comment_id"
    ],
    "summary": "List Post Comment Votes"
  },
  {
    "operationId": "ShowPostComment",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/comments/{post_comment_id}",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id",
      "post_comment_id"
    ],
    "summary": "Show Comment"
  },
  {
    "operationId": "UpdatePostComment",
    "method": "PUT",
    "path": "/api/v2/community/posts/{post_id}/comments/{post_comment_id}",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id",
      "post_comment_id"
    ],
    "summary": "Update Comment"
  },
  {
    "operationId": "DeletePostComment",
    "method": "DELETE",
    "path": "/api/v2/community/posts/{post_id}/comments/{post_comment_id}",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id",
      "post_comment_id"
    ],
    "summary": "Delete Comment"
  },
  {
    "operationId": "DownvotePost",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/down",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Downvote Post"
  },
  {
    "operationId": "ListPostSubscriptions",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id"
    ],
    "summary": "List Post Subscriptions"
  },
  {
    "operationId": "CreatePostSubscription",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Create Post Subscription"
  },
  {
    "operationId": "ShowPostSubscription",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id",
      "subscription_id"
    ],
    "summary": "Show Post Subscription"
  },
  {
    "operationId": "DeletePostSubscription",
    "method": "DELETE",
    "path": "/api/v2/community/posts/{post_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id",
      "subscription_id"
    ],
    "summary": "Delete Post Subscription"
  },
  {
    "operationId": "UpvotePost",
    "method": "POST",
    "path": "/api/v2/community/posts/{post_id}/up",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "post_id"
    ],
    "summary": "Upvote Post"
  },
  {
    "operationId": "ListPostVotes",
    "method": "GET",
    "path": "/api/v2/community/posts/{post_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "post_id"
    ],
    "summary": "List Post Votes"
  },
  {
    "operationId": "ListTopics",
    "method": "GET",
    "path": "/api/v2/community/topics",
    "tag": "Topics",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Topics"
  },
  {
    "operationId": "CreateTopic",
    "method": "POST",
    "path": "/api/v2/community/topics",
    "tag": "Topics",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Topic"
  },
  {
    "operationId": "ShowTopic",
    "method": "GET",
    "path": "/api/v2/community/topics/{topic_id}",
    "tag": "Topics",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "topic_id"
    ],
    "summary": "Show Topic"
  },
  {
    "operationId": "UpdateTopic",
    "method": "PUT",
    "path": "/api/v2/community/topics/{topic_id}",
    "tag": "Topics",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "topic_id"
    ],
    "summary": "Update Topic"
  },
  {
    "operationId": "DeleteTopic",
    "method": "DELETE",
    "path": "/api/v2/community/topics/{topic_id}",
    "tag": "Topics",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "topic_id"
    ],
    "summary": "Delete Topic"
  },
  {
    "operationId": "ListPostsByTopicNoLocale",
    "method": "GET",
    "path": "/api/v2/community/topics/{topic_id}/posts",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "topic_id"
    ],
    "summary": "List Posts in Topic"
  },
  {
    "operationId": "ListTopicSubscriptions",
    "method": "GET",
    "path": "/api/v2/community/topics/{topic_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "topic_id"
    ],
    "summary": "List Topic Subscriptions"
  },
  {
    "operationId": "CreateTopicSubscription",
    "method": "POST",
    "path": "/api/v2/community/topics/{topic_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "topic_id"
    ],
    "summary": "Create Topic Subscription"
  },
  {
    "operationId": "ShowTopicSubscription",
    "method": "GET",
    "path": "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "topic_id",
      "subscription_id"
    ],
    "summary": "Show Topic Subscription"
  },
  {
    "operationId": "UpdateTopicSubscription",
    "method": "PUT",
    "path": "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "topic_id",
      "subscription_id"
    ],
    "summary": "Update Topic Subscription"
  },
  {
    "operationId": "DeleteTopicSubscription",
    "method": "DELETE",
    "path": "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "topic_id",
      "subscription_id"
    ],
    "summary": "Delete Topic Subscription"
  },
  {
    "operationId": "ListPostCommentsByUserNoLocale",
    "method": "GET",
    "path": "/api/v2/community/users/{user_id}/comments",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Post Comments by User"
  },
  {
    "operationId": "ListPostsByUserNoLocale",
    "method": "GET",
    "path": "/api/v2/community/users/{user_id}/posts",
    "tag": "Posts",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Posts by User"
  },
  {
    "operationId": "UnifiedSearch",
    "method": "GET",
    "path": "/api/v2/guide/search",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Unified Search"
  },
  {
    "operationId": "CreateUserImage",
    "method": "POST",
    "path": "/api/v2/guide/user_images",
    "tag": "User Images",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Image Path"
  },
  {
    "operationId": "RequestUserImageUpload",
    "method": "POST",
    "path": "/api/v2/guide/user_images/uploads",
    "tag": "User Images",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Image Upload URL and Token"
  },
  {
    "operationId": "ListArticles",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale"
    ],
    "summary": "List Articles by Locale"
  },
  {
    "operationId": "ShowArticle",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Show Article by Locale"
  },
  {
    "operationId": "UpdateArticle",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Update Article by Locale"
  },
  {
    "operationId": "ArchiveArticle",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Archive Article by Locale"
  },
  {
    "operationId": "ListArticleAttachmentsWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/attachments",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Attachments by Locale"
  },
  {
    "operationId": "ListBlockArticleAttachmentsWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/attachments/block",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Block Attachments by Locale"
  },
  {
    "operationId": "ListInlineArticleAttachmentsWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/attachments/inline",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Inline Attachments by Locale"
  },
  {
    "operationId": "BulkAttachmentsArticles",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/bulk_attachments",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Associate Attachments in Bulk to Article by Locale"
  },
  {
    "operationId": "ListArticleComments",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Comments by Locale"
  },
  {
    "operationId": "CreateArticleComment",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Create Comment"
  },
  {
    "operationId": "ShowComment_2",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id",
      "comment_id"
    ],
    "summary": "Show Article Comment by Locale"
  },
  {
    "operationId": "UpdateComment",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id",
      "comment_id"
    ],
    "summary": "Update Article Comment by Locale"
  },
  {
    "operationId": "DeleteComment",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id",
      "comment_id"
    ],
    "summary": "Delete Article Comment by Locale"
  },
  {
    "operationId": "ListArticleCommentVotesWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id",
      "comment_id"
    ],
    "summary": "List Article Comment Votes by Locale"
  },
  {
    "operationId": "ListArticleLabels",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/labels",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Labels by Locale"
  },
  {
    "operationId": "CreateArticleLabel",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/labels",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Create Label by Locale"
  },
  {
    "operationId": "DeleteArticleLabel",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/labels/{label_id}",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id",
      "label_id"
    ],
    "summary": "Delete Label from Article by Locale"
  },
  {
    "operationId": "UpdateArticleSourceLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/source_locale",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Update Article Source Locale by Locale"
  },
  {
    "operationId": "ListArticleSubscriptions",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Subscriptions by Locale"
  },
  {
    "operationId": "CreateArticleSubscription",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Create Article Subscription by Locale"
  },
  {
    "operationId": "ShowArticleSubscription",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id",
      "subscription_id"
    ],
    "summary": "Show Article Subscription by Locale"
  },
  {
    "operationId": "DeleteArticleSubscription",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id",
      "subscription_id"
    ],
    "summary": "Delete Article Subscription by Locale"
  },
  {
    "operationId": "CreateArticleUpVote",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/up",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "Create Vote"
  },
  {
    "operationId": "ListArticleVotesWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/articles/{article_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "article_id"
    ],
    "summary": "List Article Votes by Locale"
  },
  {
    "operationId": "ListCategories",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/categories",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale"
    ],
    "summary": "List Categories by Locale"
  },
  {
    "operationId": "CreateCategory",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/categories",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale"
    ],
    "summary": "Create Category by Locale"
  },
  {
    "operationId": "ShowCategory",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "Show Category by Locale"
  },
  {
    "operationId": "UpdateCategory",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "Update Category by Locale"
  },
  {
    "operationId": "DeleteCategory",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "Delete Category by Locale"
  },
  {
    "operationId": "ListArticlesByCategoryWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "List Articles in Category by Locale"
  },
  {
    "operationId": "ListSectionsByCategoryWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "List Sections in Category by Locale"
  },
  {
    "operationId": "CreateSection",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "Create Section"
  },
  {
    "operationId": "UpdateCategorySourceLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/categories/{category_id}/source_locale",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "category_id"
    ],
    "summary": "Update Category Source Locale by Locale"
  },
  {
    "operationId": "ShowPostCommentByLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/community/posts/{post_id}/comments/{post_comment_id}",
    "tag": "Post Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "post_id",
      "post_comment_id"
    ],
    "summary": "Show Post Comment by Locale"
  },
  {
    "operationId": "ListSections",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale"
    ],
    "summary": "List Sections by Locale"
  },
  {
    "operationId": "ShowSection",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Show Section by Locale"
  },
  {
    "operationId": "UpdateSection",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Update Section by Locale"
  },
  {
    "operationId": "DeleteSection",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Delete Section by Locale"
  },
  {
    "operationId": "ListArticlesBySectionWithLocale",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "List Articles in Section by Locale"
  },
  {
    "operationId": "CreateArticle",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Create Article"
  },
  {
    "operationId": "UpdateSectionSourceLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/source_locale",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Update Section Source Locale by Locale"
  },
  {
    "operationId": "ListSectionSubscriptions",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "List Section Subscriptions by Locale"
  },
  {
    "operationId": "CreateSectionSubscription",
    "method": "POST",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id"
    ],
    "summary": "Create Section Subscription by Locale"
  },
  {
    "operationId": "ShowSectionSubscription",
    "method": "GET",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "locale",
      "section_id",
      "subscription_id"
    ],
    "summary": "Show Section Subscription by Locale"
  },
  {
    "operationId": "DeleteSectionSubscription",
    "method": "DELETE",
    "path": "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "locale",
      "section_id",
      "subscription_id"
    ],
    "summary": "Delete Section Subscription by Locale"
  },
  {
    "operationId": "ListArticlesNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Articles"
  },
  {
    "operationId": "ShowArticleNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "Show Article"
  },
  {
    "operationId": "UpdateArticleNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Update Article"
  },
  {
    "operationId": "ArchiveArticleNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/{article_id}",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Archive Article"
  },
  {
    "operationId": "ListArticleAttachments",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/attachments",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Attachments"
  },
  {
    "operationId": "CreateArticleAttachment",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/attachments",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Create Article Attachment"
  },
  {
    "operationId": "ShowArticleAttachment",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/attachments/{article_attachment_id}",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id",
      "article_attachment_id"
    ],
    "summary": "Show Article Attachment in Article"
  },
  {
    "operationId": "ListBlockArticleAttachments",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/attachments/block",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Block Attachments"
  },
  {
    "operationId": "ListInlineArticleAttachments",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/attachments/inline",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Inline Attachments"
  },
  {
    "operationId": "BulkAttachmentsArticlesNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/bulk_attachments",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Associate Attachments in Bulk to Article"
  },
  {
    "operationId": "ListArticleCommentsNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/comments",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Comments"
  },
  {
    "operationId": "CreateArticleCommentNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/comments",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Create Article Comment"
  },
  {
    "operationId": "ShowArticleCommentNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "Show Article Comment"
  },
  {
    "operationId": "UpdateArticleCommentNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "Update Article Comment"
  },
  {
    "operationId": "DeleteArticleCommentNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "Delete Article Comment"
  },
  {
    "operationId": "DownvoteArticleCommentNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/down",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "Downvote Article Comment"
  },
  {
    "operationId": "UpvoteArticleCommentNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/up",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "Upvote Article Comment"
  },
  {
    "operationId": "ListArticleCommentVotesNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id",
      "comment_id"
    ],
    "summary": "List Article Comment Votes"
  },
  {
    "operationId": "DownvoteArticleNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/down",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Downvote Article"
  },
  {
    "operationId": "ListArticleLabelsNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/labels",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Labels"
  },
  {
    "operationId": "CreateArticleLabelNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/labels",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Create Label"
  },
  {
    "operationId": "DeleteArticleLabelNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/{article_id}/labels/{label_id}",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "label_id"
    ],
    "summary": "Delete Label from Article"
  },
  {
    "operationId": "UpdateArticleSourceLocaleNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/articles/{article_id}/source_locale",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Update Article Source Locale"
  },
  {
    "operationId": "ListArticleSubscriptionsNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Subscriptions"
  },
  {
    "operationId": "CreateArticleSubscriptionNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Create Article Subscription"
  },
  {
    "operationId": "ShowArticleSubscriptionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id",
      "subscription_id"
    ],
    "summary": "Show Article Subscription"
  },
  {
    "operationId": "DeleteArticleSubscriptionNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "subscription_id"
    ],
    "summary": "Delete Article Subscription"
  },
  {
    "operationId": "ListTranslations",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Translations"
  },
  {
    "operationId": "CreateTranslation",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Create Translation"
  },
  {
    "operationId": "ShowTranslation",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id",
      "locale"
    ],
    "summary": "Show Translation"
  },
  {
    "operationId": "UpdateTranslation",
    "method": "PUT",
    "path": "/api/v2/help_center/articles/{article_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id",
      "locale"
    ],
    "summary": "Update Translation"
  },
  {
    "operationId": "ListMissingTranslations",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/translations/missing",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Missing Translations"
  },
  {
    "operationId": "UpvoteArticleNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/articles/{article_id}/up",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_id"
    ],
    "summary": "Upvote Article"
  },
  {
    "operationId": "ListArticleVotesNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/articles/{article_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_id"
    ],
    "summary": "List Article Votes"
  },
  {
    "operationId": "CreateAttachment",
    "method": "POST",
    "path": "/api/v2/help_center/articles/attachments",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Unassociated Attachment"
  },
  {
    "operationId": "ShowArticleAttachmentNoArticle",
    "method": "GET",
    "path": "/api/v2/help_center/articles/attachments/{article_attachment_id}",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "article_attachment_id"
    ],
    "summary": "Show Article Attachment"
  },
  {
    "operationId": "DeleteArticleAttachment",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/attachments/{article_attachment_id}",
    "tag": "Article Attachments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "article_attachment_id"
    ],
    "summary": "Delete Article Attachment"
  },
  {
    "operationId": "EmbeddableArticleSearch",
    "method": "GET",
    "path": "/api/v2/help_center/articles/embeddable_search",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Embeddable Widget Search"
  },
  {
    "operationId": "ListAllArticleLabels",
    "method": "GET",
    "path": "/api/v2/help_center/articles/labels",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List All Labels"
  },
  {
    "operationId": "ShowLabel",
    "method": "GET",
    "path": "/api/v2/help_center/articles/labels/{label_id}",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "label_id"
    ],
    "summary": "Show Label"
  },
  {
    "operationId": "DeleteLabel",
    "method": "DELETE",
    "path": "/api/v2/help_center/articles/labels/{label_id}",
    "tag": "Article Labels",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "label_id"
    ],
    "summary": "Delete Label"
  },
  {
    "operationId": "ArticleSearch",
    "method": "GET",
    "path": "/api/v2/help_center/articles/search",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Articles"
  },
  {
    "operationId": "ListCategoriesNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/categories",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Categories"
  },
  {
    "operationId": "CreateCategoryNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/categories",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create Category"
  },
  {
    "operationId": "ShowCategoryNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id"
    ],
    "summary": "Show Category"
  },
  {
    "operationId": "UpdateCategoryNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id"
    ],
    "summary": "Update Category"
  },
  {
    "operationId": "DeleteCategoryNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/categories/{category_id}",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id"
    ],
    "summary": "Delete Category"
  },
  {
    "operationId": "ListArticlesByCategoryNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id"
    ],
    "summary": "List Articles in Category"
  },
  {
    "operationId": "ListSectionsByCategory",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id"
    ],
    "summary": "List Sections in Category"
  },
  {
    "operationId": "CreateSectionByCategory",
    "method": "POST",
    "path": "/api/v2/help_center/categories/{category_id}/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id"
    ],
    "summary": "Create Section in Category"
  },
  {
    "operationId": "UpdateCategorySourceLocaleNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/categories/{category_id}/source_locale",
    "tag": "Categories",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id"
    ],
    "summary": "Update Category Source Locale"
  },
  {
    "operationId": "ListTranslationsByCategoryNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id"
    ],
    "summary": "List Category Translations"
  },
  {
    "operationId": "CreateTranslationByCategoryNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/categories/{category_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id"
    ],
    "summary": "Create Category Translation"
  },
  {
    "operationId": "ShowTranslationByCategoryNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id",
      "locale"
    ],
    "summary": "Show Category Translation"
  },
  {
    "operationId": "UpdateTranslationByCategoryNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/categories/{category_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "category_id",
      "locale"
    ],
    "summary": "Update Category Translation"
  },
  {
    "operationId": "ListMissingTranslationsByCategory",
    "method": "GET",
    "path": "/api/v2/help_center/categories/{category_id}/translations/missing",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "category_id"
    ],
    "summary": "List Missing Category Translations"
  },
  {
    "operationId": "CommunityPostSearch",
    "method": "GET",
    "path": "/api/v2/help_center/community_posts/search",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Posts"
  },
  {
    "operationId": "ListDeflectionSuggestions",
    "method": "GET",
    "path": "/api/v2/help_center/deflection/suggestions",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Suggested Articles"
  },
  {
    "operationId": "ListArticlesIncremental",
    "method": "GET",
    "path": "/api/v2/help_center/incremental/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Articles Incrementally"
  },
  {
    "operationId": "ListLocales_2",
    "method": "GET",
    "path": "/api/v2/help_center/locales",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Enabled Locales and Default Locale"
  },
  {
    "operationId": "ListSectionsNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Sections"
  },
  {
    "operationId": "ShowSectionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id"
    ],
    "summary": "Show Section"
  },
  {
    "operationId": "UpdateSectionNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Update Section"
  },
  {
    "operationId": "DeleteSectionNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/sections/{section_id}",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Delete Section"
  },
  {
    "operationId": "ListArticlesBySectionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id"
    ],
    "summary": "List Articles in Section"
  },
  {
    "operationId": "CreateArticleBySection",
    "method": "POST",
    "path": "/api/v2/help_center/sections/{section_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Create Article in Section"
  },
  {
    "operationId": "UpdateSectionSourceLocaleNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/sections/{section_id}/source_locale",
    "tag": "Sections",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Update Section Source Locale"
  },
  {
    "operationId": "ListSectionSubscriptionsNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id"
    ],
    "summary": "List Section Subscriptions"
  },
  {
    "operationId": "CreateSectionSubscriptionNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/sections/{section_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Create Section Subscription"
  },
  {
    "operationId": "ShowSectionSubscriptionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id",
      "subscription_id"
    ],
    "summary": "Show Section Subscription"
  },
  {
    "operationId": "DeleteSectionSubscriptionNoLocale",
    "method": "DELETE",
    "path": "/api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id}",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id",
      "subscription_id"
    ],
    "summary": "Delete Section Subscription"
  },
  {
    "operationId": "ListTranslationsBySectionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id"
    ],
    "summary": "List Section Translations"
  },
  {
    "operationId": "CreateTranslationBySectionNoLocale",
    "method": "POST",
    "path": "/api/v2/help_center/sections/{section_id}/translations",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id"
    ],
    "summary": "Create Section Translation"
  },
  {
    "operationId": "ShowTranslationBySectionNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id",
      "locale"
    ],
    "summary": "Show Section Translation"
  },
  {
    "operationId": "UpdateTranslationBySectionNoLocale",
    "method": "PUT",
    "path": "/api/v2/help_center/sections/{section_id}/translations/{locale}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "section_id",
      "locale"
    ],
    "summary": "Update Section Translation"
  },
  {
    "operationId": "ListMissingTranslationsBySection",
    "method": "GET",
    "path": "/api/v2/help_center/sections/{section_id}/translations/missing",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "section_id"
    ],
    "summary": "List Missing Section Translations"
  },
  {
    "operationId": "ListAllServiceCatalogItems",
    "method": "GET",
    "path": "/api/v2/help_center/service_catalog/items",
    "tag": "Service Catalog Items",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Service Catalog Items"
  },
  {
    "operationId": "ShowServiceCatalogItem",
    "method": "GET",
    "path": "/api/v2/help_center/service_catalog/items/{item_id}",
    "tag": "Service Catalog Items",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "item_id"
    ],
    "summary": "Show Service Catalog Item"
  },
  {
    "operationId": "SearchServiceCatalogItems",
    "method": "GET",
    "path": "/api/v2/help_center/service_catalog/items/search",
    "tag": "Service Catalog Items",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Search Service Catalog Items"
  },
  {
    "operationId": "ShowHelpCenterSession",
    "method": "GET",
    "path": "/api/v2/help_center/sessions",
    "tag": "Help Center Sessions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "Show Help Center Session"
  },
  {
    "operationId": "DeleteTranslation",
    "method": "DELETE",
    "path": "/api/v2/help_center/translations/{translation_id}",
    "tag": "Translations",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "translation_id"
    ],
    "summary": "Delete Translation"
  },
  {
    "operationId": "ListUserSegments",
    "method": "GET",
    "path": "/api/v2/help_center/user_segments",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List User Segments"
  },
  {
    "operationId": "CreateUserSegment",
    "method": "POST",
    "path": "/api/v2/help_center/user_segments",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create User Segment"
  },
  {
    "operationId": "ShowUserSegment",
    "method": "GET",
    "path": "/api/v2/help_center/user_segments/{user_segment_id}",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_segment_id"
    ],
    "summary": "Show User Segment"
  },
  {
    "operationId": "UpdateUserSegment",
    "method": "PUT",
    "path": "/api/v2/help_center/user_segments/{user_segment_id}",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "user_segment_id"
    ],
    "summary": "Update User Segment"
  },
  {
    "operationId": "DeleteUserSegment",
    "method": "DELETE",
    "path": "/api/v2/help_center/user_segments/{user_segment_id}",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "user_segment_id"
    ],
    "summary": "Delete User Segment"
  },
  {
    "operationId": "ListUserSegmentSections",
    "method": "GET",
    "path": "/api/v2/help_center/user_segments/{user_segment_id}/sections",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_segment_id"
    ],
    "summary": "List Sections with User Segment"
  },
  {
    "operationId": "ListUserSegmentTopics",
    "method": "GET",
    "path": "/api/v2/help_center/user_segments/{user_segment_id}/topics",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_segment_id"
    ],
    "summary": "List Topics with User Segment"
  },
  {
    "operationId": "ListUserSegmentsApplicable",
    "method": "GET",
    "path": "/api/v2/help_center/user_segments/applicable",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Applicable User Segments"
  },
  {
    "operationId": "ListArticlesByUser",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/articles",
    "tag": "Articles",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Articles by User"
  },
  {
    "operationId": "ListArticleCommentsByUserNoLocale",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/comments",
    "tag": "Article Comments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Article Comments by User"
  },
  {
    "operationId": "ListContentSubscriptionsByUserId",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/subscriptions",
    "tag": "Content Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Content Subscriptions By User"
  },
  {
    "operationId": "ListUserSegmentsByUser",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/user_segments",
    "tag": "User Segments",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Segments by User"
  },
  {
    "operationId": "ListUserSubscriptionsByUserId",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/user_subscriptions",
    "tag": "User Subscriptions",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List User Subscriptions By User"
  },
  {
    "operationId": "CreateUserSubscriptionByUserId",
    "method": "POST",
    "path": "/api/v2/help_center/users/{user_id}/user_subscriptions",
    "tag": "User Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "user_id"
    ],
    "summary": "Create User Subscription"
  },
  {
    "operationId": "DeleteUserSubscriptionByUserId",
    "method": "DELETE",
    "path": "/api/v2/help_center/users/{user_id}/user_subscriptions/{subscription_id}",
    "tag": "User Subscriptions",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "user_id",
      "subscription_id"
    ],
    "summary": "Delete User Subscription"
  },
  {
    "operationId": "ListUserVotes",
    "method": "GET",
    "path": "/api/v2/help_center/users/{user_id}/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "user_id"
    ],
    "summary": "List Votes by User"
  },
  {
    "operationId": "ListVotesNoUser",
    "method": "GET",
    "path": "/api/v2/help_center/votes",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List All Votes"
  },
  {
    "operationId": "ShowVote",
    "method": "GET",
    "path": "/api/v2/help_center/votes/{vote_id}",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "vote_id"
    ],
    "summary": "Show Vote"
  },
  {
    "operationId": "DeleteVote",
    "method": "DELETE",
    "path": "/api/v2/help_center/votes/{vote_id}",
    "tag": "Votes",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "vote_id"
    ],
    "summary": "Delete Vote"
  },
  {
    "operationId": "ListApplications",
    "method": "GET",
    "path": "/hc/api/v2/applications",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Applications"
  },
  {
    "operationId": "GetApplication",
    "method": "GET",
    "path": "/hc/api/v2/applications/{application_id}",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "application_id"
    ],
    "summary": "Get Application"
  },
  {
    "operationId": "CreateApplicationAccessRequest",
    "method": "POST",
    "path": "/hc/api/v2/applications/{application_id}/access_requests",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "WRITE",
    "pathParams": [
      "application_id"
    ],
    "summary": "Create Access Request"
  },
  {
    "operationId": "GetLatestApplicationAccessRequest",
    "method": "GET",
    "path": "/hc/api/v2/applications/{application_id}/access_requests/latest",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "application_id"
    ],
    "summary": "Get Latest Access Request"
  },
  {
    "operationId": "GetApplicationAccessStatus",
    "method": "GET",
    "path": "/hc/api/v2/applications/{application_id}/access_status",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [
      "application_id"
    ],
    "summary": "Get Application Access Status"
  },
  {
    "operationId": "ListApplicationFilters",
    "method": "GET",
    "path": "/hc/api/v2/applications/filters",
    "tag": "Applications",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Application Filters"
  },
  {
    "operationId": "ListFeaturedArticles",
    "method": "GET",
    "path": "/hc/api/v2/articles/featured",
    "tag": "Help Center Search",
    "product": "helpCenter",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Featured Articles"
  },
  {
    "operationId": "CreateApp",
    "method": "POST",
    "path": "/v2/apps",
    "tag": "Apps",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Create App"
  },
  {
    "operationId": "ListApps",
    "method": "GET",
    "path": "/v2/apps",
    "tag": "Apps",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [],
    "summary": "List Apps"
  },
  {
    "operationId": "GetApp",
    "method": "GET",
    "path": "/v2/apps/{appId}",
    "tag": "Apps",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "Get App"
  },
  {
    "operationId": "UpdateApp",
    "method": "PATCH",
    "path": "/v2/apps/{appId}",
    "tag": "Apps",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Update App"
  },
  {
    "operationId": "DeleteApp",
    "method": "DELETE",
    "path": "/v2/apps/{appId}",
    "tag": "Apps",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Delete App"
  },
  {
    "operationId": "CreateAppKey",
    "method": "POST",
    "path": "/v2/apps/{appId}/keys",
    "tag": "App Keys",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Create App Key"
  },
  {
    "operationId": "ListAppKeys",
    "method": "GET",
    "path": "/v2/apps/{appId}/keys",
    "tag": "App Keys",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "List App Keys"
  },
  {
    "operationId": "GetAppKey",
    "method": "GET",
    "path": "/v2/apps/{appId}/keys/{keyId}",
    "tag": "App Keys",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "keyId"
    ],
    "summary": "Get App Key"
  },
  {
    "operationId": "DeleteAppKey",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/keys/{keyId}",
    "tag": "App Keys",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "keyId"
    ],
    "summary": "Delete App Key"
  },
  {
    "operationId": "UploadAttachment",
    "method": "POST",
    "path": "/v2/apps/{appId}/attachments",
    "tag": "Attachments",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Upload Attachment"
  },
  {
    "operationId": "DeleteAttachment_2",
    "method": "POST",
    "path": "/v2/apps/{appId}/attachments/remove",
    "tag": "Attachments",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Delete Attachment"
  },
  {
    "operationId": "CreateConversation",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Create Conversation"
  },
  {
    "operationId": "ListConversations",
    "method": "GET",
    "path": "/v2/apps/{appId}/conversations",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "List Conversations"
  },
  {
    "operationId": "GetConversation",
    "method": "GET",
    "path": "/v2/apps/{appId}/conversations/{conversationId}",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Get Conversation"
  },
  {
    "operationId": "UpdateConversation",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/conversations/{conversationId}",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Update Conversation"
  },
  {
    "operationId": "DeleteConversation",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/conversations/{conversationId}",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Delete Conversation"
  },
  {
    "operationId": "JoinConversation",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/join",
    "tag": "Participants",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Join Conversation"
  },
  {
    "operationId": "ListParticipants",
    "method": "GET",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/participants",
    "tag": "Participants",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "List Participants"
  },
  {
    "operationId": "LeaveConversation",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/leave",
    "tag": "Participants",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Leave Conversation"
  },
  {
    "operationId": "PostMessage",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/messages",
    "tag": "Messages",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Post Message"
  },
  {
    "operationId": "ListMessages",
    "method": "GET",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/messages",
    "tag": "Messages",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "List Messages"
  },
  {
    "operationId": "DeleteAllMessages",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/messages",
    "tag": "Messages",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Delete All Messages"
  },
  {
    "operationId": "DeleteMessage",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/messages/{messageId}",
    "tag": "Messages",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId",
      "messageId"
    ],
    "summary": "Delete Message"
  },
  {
    "operationId": "PostActivity",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/activity",
    "tag": "Activities",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Post Activity"
  },
  {
    "operationId": "PassControl",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/passControl",
    "tag": "Switchboard Actions",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Pass Control"
  },
  {
    "operationId": "ReleaseControl",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/releaseControl",
    "tag": "Switchboard Actions",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Release Control"
  },
  {
    "operationId": "OfferControl",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/offerControl",
    "tag": "Switchboard Actions",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Offer Control"
  },
  {
    "operationId": "AcceptControl",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/acceptControl",
    "tag": "Switchboard Actions",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Accept Control"
  },
  {
    "operationId": "DownloadMessageRef",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/download",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Download Message Ref"
  },
  {
    "operationId": "PostConversionEvents",
    "method": "POST",
    "path": "/v2/apps/{appId}/conversations/{conversationId}/conversionEvents",
    "tag": "Conversations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "conversationId"
    ],
    "summary": "Post Conversion Events"
  },
  {
    "operationId": "CreateIntegration",
    "method": "POST",
    "path": "/v2/apps/{appId}/integrations",
    "tag": "Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Create Integration"
  },
  {
    "operationId": "ListIntegrations",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations",
    "tag": "Integrations",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "List Integrations"
  },
  {
    "operationId": "GetIntegration",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations/{integrationId}",
    "tag": "Integrations",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "Get Integration"
  },
  {
    "operationId": "UpdateIntegration",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/integrations/{integrationId}",
    "tag": "Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "Update Integration"
  },
  {
    "operationId": "DeleteIntegration",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/integrations/{integrationId}",
    "tag": "Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "Delete Integration"
  },
  {
    "operationId": "CreateCustomIntegrationKey",
    "method": "POST",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/keys",
    "tag": "CustomIntegrationApiKeys",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "Create Integration Key"
  },
  {
    "operationId": "ListCustomIntegrationKeys",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/keys",
    "tag": "CustomIntegrationApiKeys",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "List Integration Keys"
  },
  {
    "operationId": "GetCustomIntegrationKey",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}",
    "tag": "CustomIntegrationApiKeys",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "integrationId",
      "keyId"
    ],
    "summary": "Get Integration Key"
  },
  {
    "operationId": "DeleteCustomIntegrationKey",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}",
    "tag": "CustomIntegrationApiKeys",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId",
      "keyId"
    ],
    "summary": "Delete Integration Key"
  },
  {
    "operationId": "CreateWebhook",
    "method": "POST",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/webhooks",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "Create Webhook"
  },
  {
    "operationId": "ListWebhooks",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/webhooks",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "integrationId"
    ],
    "summary": "List Webhooks"
  },
  {
    "operationId": "GetWebhook",
    "method": "GET",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "integrationId",
      "webhookId"
    ],
    "summary": "Get Webhook"
  },
  {
    "operationId": "UpdateWebhook",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId",
      "webhookId"
    ],
    "summary": "Update Webhook"
  },
  {
    "operationId": "DeleteWebhook",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "integrationId",
      "webhookId"
    ],
    "summary": "Delete Webhook"
  },
  {
    "operationId": "CreateSwitchboard",
    "method": "POST",
    "path": "/v2/apps/{appId}/switchboards",
    "tag": "Switchboards",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Create Switchboard"
  },
  {
    "operationId": "ListSwitchboards",
    "method": "GET",
    "path": "/v2/apps/{appId}/switchboards",
    "tag": "Switchboards",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "List Switchboards"
  },
  {
    "operationId": "UpdateSwitchboard",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}",
    "tag": "Switchboards",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "switchboardId"
    ],
    "summary": "Update Switchboard"
  },
  {
    "operationId": "DeleteSwitchboard",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}",
    "tag": "Switchboards",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "switchboardId"
    ],
    "summary": "Delete Switchboard"
  },
  {
    "operationId": "CreateSwitchboardIntegration",
    "method": "POST",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations",
    "tag": "Switchboard Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "switchboardId"
    ],
    "summary": "Create Switchboard Integration"
  },
  {
    "operationId": "ListSwitchboardIntegrations",
    "method": "GET",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations",
    "tag": "Switchboard Integrations",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "switchboardId"
    ],
    "summary": "List Switchboard Integrations"
  },
  {
    "operationId": "UpdateSwitchboardIntegration",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}",
    "tag": "Switchboard Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "switchboardId",
      "switchboardIntegrationId"
    ],
    "summary": "Update Switchboard Integration"
  },
  {
    "operationId": "DeleteSwitchboardIntegration",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}",
    "tag": "Switchboard Integrations",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "switchboardId",
      "switchboardIntegrationId"
    ],
    "summary": "Delete Switchboard Integration"
  },
  {
    "operationId": "CreateUser_2",
    "method": "POST",
    "path": "/v2/apps/{appId}/users",
    "tag": "Users",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId"
    ],
    "summary": "Create User"
  },
  {
    "operationId": "ListUsers_2",
    "method": "GET",
    "path": "/v2/apps/{appId}/users",
    "tag": "Users",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId"
    ],
    "summary": "List Users"
  },
  {
    "operationId": "GetUser",
    "method": "GET",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}",
    "tag": "Users",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "Get User"
  },
  {
    "operationId": "UpdateUser_2",
    "method": "PATCH",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}",
    "tag": "Users",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "Update User"
  },
  {
    "operationId": "DeleteUser_2",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}",
    "tag": "Users",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "Delete User"
  },
  {
    "operationId": "CreateClient",
    "method": "POST",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/clients",
    "tag": "Clients",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "Create Client"
  },
  {
    "operationId": "ListClients",
    "method": "GET",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/clients",
    "tag": "Clients",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "List Clients"
  },
  {
    "operationId": "RemoveClient",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId}",
    "tag": "Clients",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "userIdOrExternalId",
      "clientId"
    ],
    "summary": "Remove Client"
  },
  {
    "operationId": "ListDevices",
    "method": "GET",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/devices",
    "tag": "Devices",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "List Devices"
  },
  {
    "operationId": "GetDevice",
    "method": "GET",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/devices/{deviceId}",
    "tag": "Devices",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [
      "appId",
      "userIdOrExternalId",
      "deviceId"
    ],
    "summary": "Get Device"
  },
  {
    "operationId": "DeleteUserPersonalInformation",
    "method": "DELETE",
    "path": "/v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation",
    "tag": "Users",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "userIdOrExternalId"
    ],
    "summary": "Delete User Personal Information"
  },
  {
    "operationId": "SyncUser",
    "method": "POST",
    "path": "/v2/apps/{appId}/users/{zendeskId}/sync",
    "tag": "Users",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [
      "appId",
      "zendeskId"
    ],
    "summary": "Synchronize User"
  },
  {
    "operationId": "GetTokenInfo",
    "method": "GET",
    "path": "/v2/tokenInfo",
    "tag": "OAuth Endpoints",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [],
    "summary": "Get Token Info"
  },
  {
    "operationId": "Authorize",
    "method": "GET",
    "path": "/oauth/authorize",
    "tag": "OAuth Endpoints",
    "product": "conversations",
    "rw": "READ",
    "pathParams": [],
    "summary": "Authorize"
  },
  {
    "operationId": "GetToken",
    "method": "POST",
    "path": "/oauth/token",
    "tag": "OAuth Endpoints",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Get Token"
  },
  {
    "operationId": "RevokeAccess",
    "method": "DELETE",
    "path": "/oauth/authorization",
    "tag": "OAuth Endpoints",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Revoke Access"
  },
  {
    "operationId": "EventWebhooks",
    "method": "POST",
    "path": "/oauth/authorization",
    "tag": "Webhooks",
    "product": "conversations",
    "rw": "WRITE",
    "pathParams": [],
    "summary": "Webhook Events"
  }
];
export const ENDPOINT_COUNT = 933;
export const READ_COUNT = 474;
export const WRITE_COUNT = 459;
