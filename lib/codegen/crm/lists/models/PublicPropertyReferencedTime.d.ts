export declare class PublicPropertyReferencedTime {
    'timezoneSource'?: string;
    'property': string;
    'timeType': PublicPropertyReferencedTimeTimeTypeEnum;
    'zoneId': string;
    'referenceType': string;
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
export declare enum PublicPropertyReferencedTimeTimeTypeEnum {
    PropertyReferenced = "PROPERTY_REFERENCED"
}
