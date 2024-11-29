export declare class PublicSetOccurrencesRefineBy {
    'type': PublicSetOccurrencesRefineByTypeEnum;
    'setType': string;
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
export declare enum PublicSetOccurrencesRefineByTypeEnum {
    SetOccurrences = "SET_OCCURRENCES"
}
