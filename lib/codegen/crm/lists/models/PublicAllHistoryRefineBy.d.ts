export declare class PublicAllHistoryRefineBy {
    'type': PublicAllHistoryRefineByTypeEnum;
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
export declare enum PublicAllHistoryRefineByTypeEnum {
    AllHistory = "ALL_HISTORY"
}
