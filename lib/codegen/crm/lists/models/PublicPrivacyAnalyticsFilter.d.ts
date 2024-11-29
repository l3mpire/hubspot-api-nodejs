export declare class PublicPrivacyAnalyticsFilter {
    'privacyName': string;
    'filterType': PublicPrivacyAnalyticsFilterFilterTypeEnum;
    'operator': string;
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
export declare enum PublicPrivacyAnalyticsFilterFilterTypeEnum {
    Privacy = "PRIVACY"
}
