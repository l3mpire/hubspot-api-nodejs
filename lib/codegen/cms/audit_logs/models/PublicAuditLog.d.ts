export declare class PublicAuditLog {
    'meta'?: any;
    'objectName': string;
    'fullName': string;
    'event': PublicAuditLogEventEnum;
    'userId': string;
    'objectId': string;
    'objectType': PublicAuditLogObjectTypeEnum;
    'timestamp': Date;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum PublicAuditLogEventEnum {
    Created = "CREATED",
    Updated = "UPDATED",
    Published = "PUBLISHED",
    Deleted = "DELETED",
    Unpublished = "UNPUBLISHED",
    Restore = "RESTORE"
}
export declare enum PublicAuditLogObjectTypeEnum {
    Blog = "BLOG",
    BlogPost = "BLOG_POST",
    LandingPage = "LANDING_PAGE",
    WebsitePage = "WEBSITE_PAGE",
    Template = "TEMPLATE",
    Module = "MODULE",
    GlobalModule = "GLOBAL_MODULE",
    ServerlessFunction = "SERVERLESS_FUNCTION",
    Domain = "DOMAIN",
    UrlMapping = "URL_MAPPING",
    Email = "EMAIL",
    ContentSettings = "CONTENT_SETTINGS",
    HubdbTable = "HUBDB_TABLE",
    KnowledgeBaseArticle = "KNOWLEDGE_BASE_ARTICLE",
    KnowledgeBase = "KNOWLEDGE_BASE",
    Theme = "THEME",
    Css = "CSS",
    Js = "JS",
    Cta = "CTA",
    File = "FILE"
}
