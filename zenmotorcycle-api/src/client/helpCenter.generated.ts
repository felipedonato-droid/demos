// Auto-generated — 100% of OAS endpoints (READ + WRITE)
// Product: helpCenter — 188 operations / 19 resources
import type { ZendeskHttp } from './http.js';

/** Applications — 6 endpoints */
export class ApplicationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /hc/api/v2/applications — List Applications */
  async listApplications(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /hc/api/v2/applications/{application_id} — Get Application */
  async getApplication(application_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications/{application_id}".replaceAll("{application_id}", encodeURIComponent(String(application_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /hc/api/v2/applications/{application_id}/access_requests — Create Access Request */
  async createApplicationAccessRequest(application_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications/{application_id}/access_requests".replaceAll("{application_id}", encodeURIComponent(String(application_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /hc/api/v2/applications/{application_id}/access_requests/latest — Get Latest Access Request */
  async getLatestApplicationAccessRequest(application_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications/{application_id}/access_requests/latest".replaceAll("{application_id}", encodeURIComponent(String(application_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /hc/api/v2/applications/{application_id}/access_status — Get Application Access Status */
  async getApplicationAccessStatus(application_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications/{application_id}/access_status".replaceAll("{application_id}", encodeURIComponent(String(application_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /hc/api/v2/applications/filters — List Application Filters */
  async listApplicationFilters(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/applications/filters";
    return this.http.request("GET", path, options);
  }
}

/** Article Attachments — 11 endpoints */
export class ArticleAttachmentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/attachments — List Article Attachments by Locale */
  async listArticleAttachmentsWithLocale(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/attachments".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/attachments/block — List Article Block Attachments by Locale */
  async listBlockArticleAttachmentsWithLocale(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/attachments/block".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/attachments/inline — List Article Inline Attachments by Locale */
  async listInlineArticleAttachmentsWithLocale(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/attachments/inline".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/attachments — List Article Attachments */
  async listArticleAttachments(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/attachments".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/attachments — Create Article Attachment */
  async createArticleAttachment(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/attachments".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/attachments/{article_attachment_id} — Show Article Attachment in Article */
  async showArticleAttachment(article_id: string | number, article_attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/attachments/{article_attachment_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{article_attachment_id}", encodeURIComponent(String(article_attachment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/attachments/block — List Article Block Attachments */
  async listBlockArticleAttachments(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/attachments/block".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/attachments/inline — List Article Inline Attachments */
  async listInlineArticleAttachments(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/attachments/inline".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/attachments — Create Unassociated Attachment */
  async createAttachment(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/attachments";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/attachments/{article_attachment_id} — Show Article Attachment */
  async showArticleAttachmentNoArticle(article_attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/attachments/{article_attachment_id}".replaceAll("{article_attachment_id}", encodeURIComponent(String(article_attachment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/attachments/{article_attachment_id} — Delete Article Attachment */
  async deleteArticleAttachment(article_attachment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/attachments/{article_attachment_id}".replaceAll("{article_attachment_id}", encodeURIComponent(String(article_attachment_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Article Comments — 11 endpoints */
export class ArticleCommentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/comments — List Article Comments by Locale */
  async listArticleComments(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/articles/{article_id}/comments — Create Comment */
  async createArticleComment(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id} — Show Article Comment by Locale */
  async showComment_2(locale: string | number, article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id} — Update Article Comment by Locale */
  async updateComment(locale: string | number, article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id} — Delete Article Comment by Locale */
  async deleteComment(locale: string | number, article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/comments — List Article Comments */
  async listArticleCommentsNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/comments — Create Article Comment */
  async createArticleCommentNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/comments/{comment_id} — Show Article Comment */
  async showArticleCommentNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/articles/{article_id}/comments/{comment_id} — Update Article Comment */
  async updateArticleCommentNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/{article_id}/comments/{comment_id} — Delete Article Comment */
  async deleteArticleCommentNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/users/{user_id}/comments — List Article Comments by User */
  async listArticleCommentsByUserNoLocale(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/comments".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Article Labels — 9 endpoints */
export class ArticleLabelsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/labels — List Article Labels by Locale */
  async listArticleLabels(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/labels".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/articles/{article_id}/labels — Create Label by Locale */
  async createArticleLabel(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/labels".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/articles/{article_id}/labels/{label_id} — Delete Label from Article by Locale */
  async deleteArticleLabel(locale: string | number, article_id: string | number, label_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/labels/{label_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{label_id}", encodeURIComponent(String(label_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/labels — List Article Labels */
  async listArticleLabelsNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/labels".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/labels — Create Label */
  async createArticleLabelNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/labels".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/{article_id}/labels/{label_id} — Delete Label from Article */
  async deleteArticleLabelNoLocale(article_id: string | number, label_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/labels/{label_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{label_id}", encodeURIComponent(String(label_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/labels — List All Labels */
  async listAllArticleLabels(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/labels";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/labels/{label_id} — Show Label */
  async showLabel(label_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/labels/{label_id}".replaceAll("{label_id}", encodeURIComponent(String(label_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/labels/{label_id} — Delete Label */
  async deleteLabel(label_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/labels/{label_id}".replaceAll("{label_id}", encodeURIComponent(String(label_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Articles — 20 endpoints */
export class ArticlesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/articles — List Articles by Locale */
  async listArticles(locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles".replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id} — Show Article by Locale */
  async showArticle(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/articles/{article_id} — Update Article by Locale */
  async updateArticle(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/articles/{article_id} — Archive Article by Locale */
  async archiveArticle(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/articles/{article_id}/bulk_attachments — Associate Attachments in Bulk to Article by Locale */
  async bulkAttachmentsArticles(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/bulk_attachments".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/articles/{article_id}/source_locale — Update Article Source Locale by Locale */
  async updateArticleSourceLocale(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/source_locale".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/categories/{category_id}/articles — List Articles in Category by Locale */
  async listArticlesByCategoryWithLocale(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}/articles".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/sections/{section_id}/articles — List Articles in Section by Locale */
  async listArticlesBySectionWithLocale(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/articles".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/sections/{section_id}/articles — Create Article */
  async createArticle(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/articles".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles — List Articles */
  async listArticlesNoLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id} — Show Article */
  async showArticleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/articles/{article_id} — Update Article */
  async updateArticleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/{article_id} — Archive Article */
  async archiveArticleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/bulk_attachments — Associate Attachments in Bulk to Article */
  async bulkAttachmentsArticlesNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/bulk_attachments".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/articles/{article_id}/source_locale — Update Article Source Locale */
  async updateArticleSourceLocaleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/source_locale".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id}/articles — List Articles in Category */
  async listArticlesByCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/articles".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/incremental/articles — List Articles Incrementally */
  async listArticlesIncremental(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/incremental/articles";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/articles — List Articles in Section */
  async listArticlesBySectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/articles".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/sections/{section_id}/articles — Create Article in Section */
  async createArticleBySection(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/articles".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/users/{user_id}/articles — List Articles by User */
  async listArticlesByUser(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/articles".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Categories — 12 endpoints */
export class CategoriesApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/categories — List Categories by Locale */
  async listCategories(locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories".replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/categories — Create Category by Locale */
  async createCategory(locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories".replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/categories/{category_id} — Show Category by Locale */
  async showCategory(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/categories/{category_id} — Update Category by Locale */
  async updateCategory(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/categories/{category_id} — Delete Category by Locale */
  async deleteCategory(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/categories/{category_id}/source_locale — Update Category Source Locale by Locale */
  async updateCategorySourceLocale(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}/source_locale".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories — List Categories */
  async listCategoriesNoLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/categories — Create Category */
  async createCategoryNoLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id} — Show Category */
  async showCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/categories/{category_id} — Update Category */
  async updateCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/categories/{category_id} — Delete Category */
  async deleteCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/categories/{category_id}/source_locale — Update Category Source Locale */
  async updateCategorySourceLocaleNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/source_locale".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Content Subscriptions — 26 endpoints */
export class ContentSubscriptionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/community/posts/{post_id}/subscriptions — List Post Subscriptions */
  async listPostSubscriptions(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/subscriptions".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts/{post_id}/subscriptions — Create Post Subscription */
  async createPostSubscription(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/subscriptions".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/posts/{post_id}/subscriptions/{subscription_id} — Show Post Subscription */
  async showPostSubscription(post_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/subscriptions/{subscription_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/community/posts/{post_id}/subscriptions/{subscription_id} — Delete Post Subscription */
  async deletePostSubscription(post_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/subscriptions/{subscription_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/community/topics/{topic_id}/subscriptions — List Topic Subscriptions */
  async listTopicSubscriptions(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/subscriptions".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/topics/{topic_id}/subscriptions — Create Topic Subscription */
  async createTopicSubscription(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/subscriptions".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/topics/{topic_id}/subscriptions/{subscription_id} — Show Topic Subscription */
  async showTopicSubscription(topic_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/community/topics/{topic_id}/subscriptions/{subscription_id} — Update Topic Subscription */
  async updateTopicSubscription(topic_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/community/topics/{topic_id}/subscriptions/{subscription_id} — Delete Topic Subscription */
  async deleteTopicSubscription(topic_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/subscriptions/{subscription_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/subscriptions — List Article Subscriptions by Locale */
  async listArticleSubscriptions(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/articles/{article_id}/subscriptions — Create Article Subscription by Locale */
  async createArticleSubscription(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id} — Show Article Subscription by Locale */
  async showArticleSubscription(locale: string | number, article_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id} — Delete Article Subscription by Locale */
  async deleteArticleSubscription(locale: string | number, article_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/subscriptions/{subscription_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/sections/{section_id}/subscriptions — List Section Subscriptions by Locale */
  async listSectionSubscriptions(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/sections/{section_id}/subscriptions — Create Section Subscription by Locale */
  async createSectionSubscription(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id} — Show Section Subscription by Locale */
  async showSectionSubscription(locale: string | number, section_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id} — Delete Section Subscription by Locale */
  async deleteSectionSubscription(locale: string | number, section_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/subscriptions/{subscription_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/subscriptions — List Article Subscriptions */
  async listArticleSubscriptionsNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/subscriptions".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/subscriptions — Create Article Subscription */
  async createArticleSubscriptionNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/subscriptions".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id} — Show Article Subscription */
  async showArticleSubscriptionNoLocale(article_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id} — Delete Article Subscription */
  async deleteArticleSubscriptionNoLocale(article_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/subscriptions/{subscription_id}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/subscriptions — List Section Subscriptions */
  async listSectionSubscriptionsNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/subscriptions".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/sections/{section_id}/subscriptions — Create Section Subscription */
  async createSectionSubscriptionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/subscriptions".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id} — Show Section Subscription */
  async showSectionSubscriptionNoLocale(section_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id}".replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id} — Delete Section Subscription */
  async deleteSectionSubscriptionNoLocale(section_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/subscriptions/{subscription_id}".replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/users/{user_id}/subscriptions — List Content Subscriptions By User */
  async listContentSubscriptionsByUserId(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/subscriptions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Help Center Search — 6 endpoints */
export class HelpCenterSearchApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/guide/search — Unified Search */
  async unifiedSearch(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/guide/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/embeddable_search — Embeddable Widget Search */
  async embeddableArticleSearch(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/embeddable_search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/search — Search Articles */
  async articleSearch(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/community_posts/search — Search Posts */
  async communityPostSearch(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/community_posts/search";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/deflection/suggestions — List Suggested Articles */
  async listDeflectionSuggestions(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/deflection/suggestions";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /hc/api/v2/articles/featured — List Featured Articles */
  async listFeaturedArticles(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/hc/api/v2/articles/featured";
    return this.http.request("GET", path, options);
  }
}

/** Help Center Sessions — 1 endpoints */
export class HelpCenterSessionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/sessions — Show Help Center Session */
  async showHelpCenterSession(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sessions";
    return this.http.request("GET", path, options);
  }
}

/** Post Comments — 7 endpoints */
export class PostCommentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/community/posts/{post_id}/comments — List Comments */
  async listPostComments(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts/{post_id}/comments — Create Post Comment */
  async createPostComment(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/posts/{post_id}/comments/{post_comment_id} — Show Comment */
  async showPostComment(post_id: string | number, post_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{post_comment_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{post_comment_id}", encodeURIComponent(String(post_comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/community/posts/{post_id}/comments/{post_comment_id} — Update Comment */
  async updatePostComment(post_id: string | number, post_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{post_comment_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{post_comment_id}", encodeURIComponent(String(post_comment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/community/posts/{post_id}/comments/{post_comment_id} — Delete Comment */
  async deletePostComment(post_id: string | number, post_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{post_comment_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{post_comment_id}", encodeURIComponent(String(post_comment_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/community/users/{user_id}/comments — List Post Comments by User */
  async listPostCommentsByUserNoLocale(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/users/{user_id}/comments".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/community/posts/{post_id}/comments/{post_comment_id} — Show Post Comment by Locale */
  async showPostCommentByLocale(locale: string | number, post_id: string | number, post_comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/community/posts/{post_id}/comments/{post_comment_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{post_comment_id}", encodeURIComponent(String(post_comment_id)));
    return this.http.request("GET", path, options);
  }
}

/** Posts — 7 endpoints */
export class PostsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/community/posts — List Posts */
  async listPosts(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts — Create Post */
  async createPost(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/posts/{post_id} — Show Post */
  async showPost(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/community/posts/{post_id} — Update Post */
  async updatePost(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/community/posts/{post_id} — Delete Post */
  async deletePost(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/community/topics/{topic_id}/posts — List Posts in Topic */
  async listPostsByTopicNoLocale(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}/posts".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/community/users/{user_id}/posts — List Posts by User */
  async listPostsByUserNoLocale(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/users/{user_id}/posts".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** Sections — 14 endpoints */
export class SectionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/{locale}/categories/{category_id}/sections — List Sections in Category by Locale */
  async listSectionsByCategoryWithLocale(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}/sections".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/categories/{category_id}/sections — Create Section */
  async createSection(locale: string | number, category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/categories/{category_id}/sections".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/sections — List Sections by Locale */
  async listSections(locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections".replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/sections/{section_id} — Show Section by Locale */
  async showSection(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/sections/{section_id} — Update Section by Locale */
  async updateSection(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/{locale}/sections/{section_id} — Delete Section by Locale */
  async deleteSection(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/{locale}/sections/{section_id}/source_locale — Update Section Source Locale by Locale */
  async updateSectionSourceLocale(locale: string | number, section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/sections/{section_id}/source_locale".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id}/sections — List Sections in Category */
  async listSectionsByCategory(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/sections".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/categories/{category_id}/sections — Create Section in Category */
  async createSectionByCategory(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/sections".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections — List Sections */
  async listSectionsNoLocale(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id} — Show Section */
  async showSectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/sections/{section_id} — Update Section */
  async updateSectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/sections/{section_id} — Delete Section */
  async deleteSectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/sections/{section_id}/source_locale — Update Section Source Locale */
  async updateSectionSourceLocaleNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/source_locale".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("PUT", path, options);
  }
}

/** Service Catalog Items — 3 endpoints */
export class ServiceCatalogItemsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/service_catalog/items — List Service Catalog Items */
  async listAllServiceCatalogItems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/service_catalog/items";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/service_catalog/items/{item_id} — Show Service Catalog Item */
  async showServiceCatalogItem(item_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/service_catalog/items/{item_id}".replaceAll("{item_id}", encodeURIComponent(String(item_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/service_catalog/items/search — Search Service Catalog Items */
  async searchServiceCatalogItems(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/service_catalog/items/search";
    return this.http.request("GET", path, options);
  }
}

/** Topics — 5 endpoints */
export class TopicsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/community/topics — List Topics */
  async listTopics(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/topics — Create Topic */
  async createTopic(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/topics/{topic_id} — Show Topic */
  async showTopic(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/community/topics/{topic_id} — Update Topic */
  async updateTopic(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/community/topics/{topic_id} — Delete Topic */
  async deleteTopic(topic_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/topics/{topic_id}".replaceAll("{topic_id}", encodeURIComponent(String(topic_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Translations — 17 endpoints */
export class TranslationsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/articles/{article_id}/translations — List Translations */
  async listTranslations(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/translations".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/translations — Create Translation */
  async createTranslation(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/translations".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/translations/{locale} — Show Translation */
  async showTranslation(article_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/translations/{locale}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/articles/{article_id}/translations/{locale} — Update Translation */
  async updateTranslation(article_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/translations/{locale}".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/translations/missing — List Missing Translations */
  async listMissingTranslations(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/translations/missing".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id}/translations — List Category Translations */
  async listTranslationsByCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/translations".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/categories/{category_id}/translations — Create Category Translation */
  async createTranslationByCategoryNoLocale(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/translations".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id}/translations/{locale} — Show Category Translation */
  async showTranslationByCategoryNoLocale(category_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/translations/{locale}".replaceAll("{category_id}", encodeURIComponent(String(category_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/categories/{category_id}/translations/{locale} — Update Category Translation */
  async updateTranslationByCategoryNoLocale(category_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/translations/{locale}".replaceAll("{category_id}", encodeURIComponent(String(category_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/categories/{category_id}/translations/missing — List Missing Category Translations */
  async listMissingTranslationsByCategory(category_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/categories/{category_id}/translations/missing".replaceAll("{category_id}", encodeURIComponent(String(category_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/locales — List Enabled Locales and Default Locale */
  async listLocales_2(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/locales";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/translations — List Section Translations */
  async listTranslationsBySectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/translations".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/sections/{section_id}/translations — Create Section Translation */
  async createTranslationBySectionNoLocale(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/translations".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/translations/{locale} — Show Section Translation */
  async showTranslationBySectionNoLocale(section_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/translations/{locale}".replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/sections/{section_id}/translations/{locale} — Update Section Translation */
  async updateTranslationBySectionNoLocale(section_id: string | number, locale: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/translations/{locale}".replaceAll("{section_id}", encodeURIComponent(String(section_id))).replaceAll("{locale}", encodeURIComponent(String(locale)));
    return this.http.request("PUT", path, options);
  }
  /** [READ] GET /api/v2/help_center/sections/{section_id}/translations/missing — List Missing Section Translations */
  async listMissingTranslationsBySection(section_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/sections/{section_id}/translations/missing".replaceAll("{section_id}", encodeURIComponent(String(section_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/translations/{translation_id} — Delete Translation */
  async deleteTranslation(translation_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/translations/{translation_id}".replaceAll("{translation_id}", encodeURIComponent(String(translation_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** User Images — 2 endpoints */
export class UserImagesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/guide/user_images — Create Image Path */
  async createUserImage(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/guide/user_images";
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/guide/user_images/uploads — Create Image Upload URL and Token */
  async requestUserImageUpload(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/guide/user_images/uploads";
    return this.http.request("POST", path, options);
  }
}

/** User Segments — 9 endpoints */
export class UserSegmentsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/user_segments — List User Segments */
  async listUserSegments(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments";
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/user_segments — Create User Segment */
  async createUserSegment(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments";
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/user_segments/{user_segment_id} — Show User Segment */
  async showUserSegment(user_segment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/{user_segment_id}".replaceAll("{user_segment_id}", encodeURIComponent(String(user_segment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] PUT /api/v2/help_center/user_segments/{user_segment_id} — Update User Segment */
  async updateUserSegment(user_segment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/{user_segment_id}".replaceAll("{user_segment_id}", encodeURIComponent(String(user_segment_id)));
    return this.http.request("PUT", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/user_segments/{user_segment_id} — Delete User Segment */
  async deleteUserSegment(user_segment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/{user_segment_id}".replaceAll("{user_segment_id}", encodeURIComponent(String(user_segment_id)));
    return this.http.request("DELETE", path, options);
  }
  /** [READ] GET /api/v2/help_center/user_segments/{user_segment_id}/sections — List Sections with User Segment */
  async listUserSegmentSections(user_segment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/{user_segment_id}/sections".replaceAll("{user_segment_id}", encodeURIComponent(String(user_segment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/user_segments/{user_segment_id}/topics — List Topics with User Segment */
  async listUserSegmentTopics(user_segment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/{user_segment_id}/topics".replaceAll("{user_segment_id}", encodeURIComponent(String(user_segment_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/user_segments/applicable — List Applicable User Segments */
  async listUserSegmentsApplicable(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/user_segments/applicable";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/users/{user_id}/user_segments — List User Segments by User */
  async listUserSegmentsByUser(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/user_segments".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
}

/** User Subscriptions — 3 endpoints */
export class UserSubscriptionsApi {
  constructor(private http: ZendeskHttp) {}
  /** [READ] GET /api/v2/help_center/users/{user_id}/user_subscriptions — List User Subscriptions By User */
  async listUserSubscriptionsByUserId(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/user_subscriptions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/users/{user_id}/user_subscriptions — Create User Subscription */
  async createUserSubscriptionByUserId(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/user_subscriptions".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/users/{user_id}/user_subscriptions/{subscription_id} — Delete User Subscription */
  async deleteUserSubscriptionByUserId(user_id: string | number, subscription_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/user_subscriptions/{subscription_id}".replaceAll("{user_id}", encodeURIComponent(String(user_id))).replaceAll("{subscription_id}", encodeURIComponent(String(subscription_id)));
    return this.http.request("DELETE", path, options);
  }
}

/** Votes — 19 endpoints */
export class VotesApi {
  constructor(private http: ZendeskHttp) {}
  /** [WRITE] POST /api/v2/community/posts/{post_id}/comments/{comment_id}/down — Downvote Post Comment */
  async downvotePostComment(post_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{comment_id}/down".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts/{post_id}/comments/{comment_id}/up — Upvote Post Comment */
  async upvotePostComment(post_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{comment_id}/up".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/posts/{post_id}/comments/{comment_id}/votes — List Post Comment Votes */
  async listPostCommentVotes(post_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/comments/{comment_id}/votes".replaceAll("{post_id}", encodeURIComponent(String(post_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts/{post_id}/down — Downvote Post */
  async downvotePost(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/down".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/community/posts/{post_id}/up — Upvote Post */
  async upvotePost(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/up".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/community/posts/{post_id}/votes — List Post Votes */
  async listPostVotes(post_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/community/posts/{post_id}/votes".replaceAll("{post_id}", encodeURIComponent(String(post_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}/votes — List Article Comment Votes by Locale */
  async listArticleCommentVotesWithLocale(locale: string | number, article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/comments/{comment_id}/votes".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/{locale}/articles/{article_id}/up — Create Vote */
  async createArticleUpVote(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/up".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/{locale}/articles/{article_id}/votes — List Article Votes by Locale */
  async listArticleVotesWithLocale(locale: string | number, article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/{locale}/articles/{article_id}/votes".replaceAll("{locale}", encodeURIComponent(String(locale))).replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/comments/{comment_id}/down — Downvote Article Comment */
  async downvoteArticleCommentNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/down".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/comments/{comment_id}/up — Upvote Article Comment */
  async upvoteArticleCommentNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/up".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/comments/{comment_id}/votes — List Article Comment Votes */
  async listArticleCommentVotesNoLocale(article_id: string | number, comment_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/comments/{comment_id}/votes".replaceAll("{article_id}", encodeURIComponent(String(article_id))).replaceAll("{comment_id}", encodeURIComponent(String(comment_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/down — Downvote Article */
  async downvoteArticleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/down".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [WRITE] POST /api/v2/help_center/articles/{article_id}/up — Upvote Article */
  async upvoteArticleNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/up".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("POST", path, options);
  }
  /** [READ] GET /api/v2/help_center/articles/{article_id}/votes — List Article Votes */
  async listArticleVotesNoLocale(article_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/articles/{article_id}/votes".replaceAll("{article_id}", encodeURIComponent(String(article_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/users/{user_id}/votes — List Votes by User */
  async listUserVotes(user_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/users/{user_id}/votes".replaceAll("{user_id}", encodeURIComponent(String(user_id)));
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/votes — List All Votes */
  async listVotesNoUser(options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/votes";
    return this.http.request("GET", path, options);
  }
  /** [READ] GET /api/v2/help_center/votes/{vote_id} — Show Vote */
  async showVote(vote_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/votes/{vote_id}".replaceAll("{vote_id}", encodeURIComponent(String(vote_id)));
    return this.http.request("GET", path, options);
  }
  /** [WRITE] DELETE /api/v2/help_center/votes/{vote_id} — Delete Vote */
  async deleteVote(vote_id: string | number, options: { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string> } = {}) {
    const path = "/api/v2/help_center/votes/{vote_id}".replaceAll("{vote_id}", encodeURIComponent(String(vote_id)));
    return this.http.request("DELETE", path, options);
  }
}

export class HelpCenterClient {
  readonly applications: ApplicationsApi;
  readonly articleAttachments: ArticleAttachmentsApi;
  readonly articleComments: ArticleCommentsApi;
  readonly articleLabels: ArticleLabelsApi;
  readonly articles: ArticlesApi;
  readonly categories: CategoriesApi;
  readonly contentSubscriptions: ContentSubscriptionsApi;
  readonly helpCenterSearch: HelpCenterSearchApi;
  readonly helpCenterSessions: HelpCenterSessionsApi;
  readonly postComments: PostCommentsApi;
  readonly posts: PostsApi;
  readonly sections: SectionsApi;
  readonly serviceCatalogItems: ServiceCatalogItemsApi;
  readonly topics: TopicsApi;
  readonly translations: TranslationsApi;
  readonly userImages: UserImagesApi;
  readonly userSegments: UserSegmentsApi;
  readonly userSubscriptions: UserSubscriptionsApi;
  readonly votes: VotesApi;
  constructor(http: ZendeskHttp) {
    this.applications = new ApplicationsApi(http);
    this.articleAttachments = new ArticleAttachmentsApi(http);
    this.articleComments = new ArticleCommentsApi(http);
    this.articleLabels = new ArticleLabelsApi(http);
    this.articles = new ArticlesApi(http);
    this.categories = new CategoriesApi(http);
    this.contentSubscriptions = new ContentSubscriptionsApi(http);
    this.helpCenterSearch = new HelpCenterSearchApi(http);
    this.helpCenterSessions = new HelpCenterSessionsApi(http);
    this.postComments = new PostCommentsApi(http);
    this.posts = new PostsApi(http);
    this.sections = new SectionsApi(http);
    this.serviceCatalogItems = new ServiceCatalogItemsApi(http);
    this.topics = new TopicsApi(http);
    this.translations = new TranslationsApi(http);
    this.userImages = new UserImagesApi(http);
    this.userSegments = new UserSegmentsApi(http);
    this.userSubscriptions = new UserSubscriptionsApi(http);
    this.votes = new VotesApi(http);
  }
}
