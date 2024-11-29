export declare class PublicSubscriptionStatus {
    'brandId'?: number;
    'name': string;
    'description': string;
    'legalBasis'?: PublicSubscriptionStatusLegalBasisEnum;
    'preferenceGroupName'?: string;
    'id': string;
    'legalBasisExplanation'?: string;
    'status': PublicSubscriptionStatusStatusEnum;
    'sourceOfStatus': PublicSubscriptionStatusSourceOfStatusEnum;
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
export declare enum PublicSubscriptionStatusLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL",
    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT",
    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT",
    ConsentWithNotice = "CONSENT_WITH_NOTICE",
    NonGdpr = "NON_GDPR",
    ProcessAndStore = "PROCESS_AND_STORE",
    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}
export declare enum PublicSubscriptionStatusStatusEnum {
    Subscribed = "SUBSCRIBED",
    NotSubscribed = "NOT_SUBSCRIBED"
}
export declare enum PublicSubscriptionStatusSourceOfStatusEnum {
    PortalWideStatus = "PORTAL_WIDE_STATUS",
    BrandWideStatus = "BRAND_WIDE_STATUS",
    SubscriptionStatus = "SUBSCRIPTION_STATUS"
}
