export declare class MarketingEventAssociation {
    'externalAccountId'?: string;
    'marketingEventId': string;
    'externalEventId'?: string;
    'name': string;
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
