export declare class PropertyValue {
    'sourceId': string;
    'selectedByUser': boolean;
    'sourceLabel': string;
    'source': PropertyValueSourceEnum;
    'updatedByUserId'?: number;
    'persistenceTimestamp'?: number;
    'sourceMetadata': string;
    'dataSensitivity': PropertyValueDataSensitivityEnum;
    'sourceVid': Array<number>;
    'unit': string;
    'requestId': string;
    'isEncrypted': boolean;
    'name': string;
    'useTimestampAsPersistenceTimestamp'?: boolean;
    'value': string;
    'selectedByUserTimestamp': number;
    'timestamp': number;
    'isLargeValue'?: boolean;
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
export declare enum PropertyValueSourceEnum {
    Unknown = "UNKNOWN",
    Import = "IMPORT",
    Api = "API",
    Form = "FORM",
    Analytics = "ANALYTICS",
    Migration = "MIGRATION",
    Salesforce = "SALESFORCE",
    Integration = "INTEGRATION",
    ContactsWeb = "CONTACTS_WEB",
    WalIncremental = "WAL_INCREMENTAL",
    Task = "TASK",
    Email = "EMAIL",
    Workflows = "WORKFLOWS",
    Calculated = "CALCULATED",
    Social = "SOCIAL",
    BatchUpdate = "BATCH_UPDATE",
    Signals = "SIGNALS",
    Biden = "BIDEN",
    Default = "DEFAULT",
    Companies = "COMPANIES",
    Deals = "DEALS",
    Assists = "ASSISTS",
    Presentations = "PRESENTATIONS",
    Tally = "TALLY",
    Sidekick = "SIDEKICK",
    CrmUi = "CRM_UI",
    MergeContacts = "MERGE_CONTACTS",
    PortalUserAssociator = "PORTAL_USER_ASSOCIATOR",
    IntegrationsPlatform = "INTEGRATIONS_PLATFORM",
    BccToCrm = "BCC_TO_CRM",
    ForwardToCrm = "FORWARD_TO_CRM",
    Engagements = "ENGAGEMENTS",
    Sales = "SALES",
    Heisenberg = "HEISENBERG",
    Leadin = "LEADIN",
    GmailIntegration = "GMAIL_INTEGRATION",
    Academy = "ACADEMY",
    SalesMessages = "SALES_MESSAGES",
    AvatarsService = "AVATARS_SERVICE",
    MergeCompanies = "MERGE_COMPANIES",
    Sequences = "SEQUENCES",
    CompanyFamilies = "COMPANY_FAMILIES",
    MobileIos = "MOBILE_IOS",
    MobileAndroid = "MOBILE_ANDROID",
    Contacts = "CONTACTS",
    Associations = "ASSOCIATIONS",
    Extension = "EXTENSION",
    Success = "SUCCESS",
    Bot = "BOT",
    IntegrationsSync = "INTEGRATIONS_SYNC",
    AutomationPlatform = "AUTOMATION_PLATFORM",
    Conversations = "CONVERSATIONS",
    EmailIntegration = "EMAIL_INTEGRATION",
    ContentMembership = "CONTENT_MEMBERSHIP",
    Quotes = "QUOTES",
    BetAssignment = "BET_ASSIGNMENT",
    Quotas = "QUOTAS",
    BetCrmConnector = "BET_CRM_CONNECTOR",
    Meetings = "MEETINGS",
    MergeObjects = "MERGE_OBJECTS",
    RecyclingBin = "RECYCLING_BIN",
    Ads = "ADS",
    AiGroup = "AI_GROUP",
    Communicator = "COMMUNICATOR",
    Settings = "SETTINGS",
    PropertySettings = "PROPERTY_SETTINGS",
    PipelineSettings = "PIPELINE_SETTINGS",
    CompanyInsights = "COMPANY_INSIGHTS",
    BehavioralEvents = "BEHAVIORAL_EVENTS",
    Payments = "PAYMENTS",
    Goals = "GOALS",
    PortalObjectSync = "PORTAL_OBJECT_SYNC",
    Approvals = "APPROVALS",
    FileManager = "FILE_MANAGER",
    Marketplace = "MARKETPLACE",
    InternalProcessing = "INTERNAL_PROCESSING",
    Forecasting = "FORECASTING",
    SlackIntegration = "SLACK_INTEGRATION",
    CrmUiBulkAction = "CRM_UI_BULK_ACTION",
    WorkflowContactDeleteAction = "WORKFLOW_CONTACT_DELETE_ACTION",
    AcceptanceTest = "ACCEPTANCE_TEST",
    Playbooks = "PLAYBOOKS",
    Chatspot = "CHATSPOT",
    FlywheelProductDataSync = "FLYWHEEL_PRODUCT_DATA_SYNC",
    HelpDesk = "HELP_DESK",
    Billing = "BILLING",
    DataEnrichment = "DATA_ENRICHMENT",
    AutomationJourney = "AUTOMATION_JOURNEY",
    Microapps = "MICROAPPS",
    Intent = "INTENT",
    ProspectingAgent = "PROSPECTING_AGENT"
}
export declare enum PropertyValueDataSensitivityEnum {
    None = "none",
    Standard = "standard",
    High = "high"
}
