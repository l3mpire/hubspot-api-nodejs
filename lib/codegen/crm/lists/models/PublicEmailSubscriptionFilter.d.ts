export declare class PublicEmailSubscriptionFilter {
    'subscriptionType'?: string;
    'subscriptionIds': Array<string>;
    'filterType': PublicEmailSubscriptionFilterFilterTypeEnum;
    'acceptedStatuses': Array<string>;
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
export declare enum PublicEmailSubscriptionFilterFilterTypeEnum {
    EmailSubscription = "EMAIL_SUBSCRIPTION"
}
