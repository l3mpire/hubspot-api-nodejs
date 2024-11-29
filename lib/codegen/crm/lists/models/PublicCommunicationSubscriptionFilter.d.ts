export declare class PublicCommunicationSubscriptionFilter {
    'subscriptionType': string;
    'subscriptionIds': Array<string>;
    'channel': string;
    'acceptedOptStates': Array<string>;
    'filterType': PublicCommunicationSubscriptionFilterFilterTypeEnum;
    'businessUnitId'?: string;
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
export declare enum PublicCommunicationSubscriptionFilterFilterTypeEnum {
    CommunicationSubscription = "COMMUNICATION_SUBSCRIPTION"
}
