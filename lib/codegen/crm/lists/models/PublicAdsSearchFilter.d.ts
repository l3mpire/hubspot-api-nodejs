export declare class PublicAdsSearchFilter {
    'searchTerms': Array<string>;
    'entityType': string;
    'adNetwork': string;
    'searchTermType': string;
    'filterType': PublicAdsSearchFilterFilterTypeEnum;
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
export declare enum PublicAdsSearchFilterFilterTypeEnum {
    AdsSearch = "ADS_SEARCH"
}
