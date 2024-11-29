import { EventIdView } from '../models/EventIdView';
export declare class EmailSendStatusView {
    'eventId'?: EventIdView;
    'completedAt'?: Date;
    'statusId': string;
    'sendResult'?: EmailSendStatusViewSendResultEnum;
    'requestedAt'?: Date;
    'startedAt'?: Date;
    'status': EmailSendStatusViewStatusEnum;
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
export declare enum EmailSendStatusViewSendResultEnum {
    Sent = "SENT",
    IdempotentIgnore = "IDEMPOTENT_IGNORE",
    Queued = "QUEUED",
    IdempotentFail = "IDEMPOTENT_FAIL",
    Throttled = "THROTTLED",
    EmailDisabled = "EMAIL_DISABLED",
    PortalSuspended = "PORTAL_SUSPENDED",
    InvalidToAddress = "INVALID_TO_ADDRESS",
    BlockedDomain = "BLOCKED_DOMAIN",
    PreviouslyBounced = "PREVIOUSLY_BOUNCED",
    EmailUnconfirmed = "EMAIL_UNCONFIRMED",
    PreviousSpam = "PREVIOUS_SPAM",
    PreviouslyUnsubscribedMessage = "PREVIOUSLY_UNSUBSCRIBED_MESSAGE",
    PreviouslyUnsubscribedPortal = "PREVIOUSLY_UNSUBSCRIBED_PORTAL",
    InvalidFromAddress = "INVALID_FROM_ADDRESS",
    CampaignCancelled = "CAMPAIGN_CANCELLED",
    ValidationFailed = "VALIDATION_FAILED",
    MtaIgnore = "MTA_IGNORE",
    BlockedAddress = "BLOCKED_ADDRESS",
    PortalOverLimit = "PORTAL_OVER_LIMIT",
    PortalExpired = "PORTAL_EXPIRED",
    PortalMissingMarketingScope = "PORTAL_MISSING_MARKETING_SCOPE",
    MissingTemplateProperties = "MISSING_TEMPLATE_PROPERTIES",
    MissingRequiredParameter = "MISSING_REQUIRED_PARAMETER",
    PortalAuthenticationFailure = "PORTAL_AUTHENTICATION_FAILURE",
    MissingContent = "MISSING_CONTENT",
    CorruptInput = "CORRUPT_INPUT",
    TemplateRenderException = "TEMPLATE_RENDER_EXCEPTION",
    GraymailSuppressed = "GRAYMAIL_SUPPRESSED",
    UnconfiguredSendingDomain = "UNCONFIGURED_SENDING_DOMAIN",
    Undeliverable = "UNDELIVERABLE",
    CancelledAbuse = "CANCELLED_ABUSE",
    QuarantinedAddress = "QUARANTINED_ADDRESS",
    AddressOnlyAcceptedOnProd = "ADDRESS_ONLY_ACCEPTED_ON_PROD",
    PortalNotAuthorizedForApplication = "PORTAL_NOT_AUTHORIZED_FOR_APPLICATION",
    AddressListBombed = "ADDRESS_LIST_BOMBED",
    AddressOptedOut = "ADDRESS_OPTED_OUT",
    RecipientFatigueSuppressed = "RECIPIENT_FATIGUE_SUPPRESSED",
    TooManyRecipients = "TOO_MANY_RECIPIENTS",
    PreviouslyUnsubscribedBrand = "PREVIOUSLY_UNSUBSCRIBED_BRAND",
    NonMarketableContact = "NON_MARKETABLE_CONTACT",
    PreviouslyUnsubscribedBusinessUnit = "PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT",
    GdprDoiEnabled = "GDPR_DOI_ENABLED"
}
export declare enum EmailSendStatusViewStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
