export declare class PublicNumOccurrencesRefineBy {
    'maxOccurrences'?: number;
    'type': PublicNumOccurrencesRefineByTypeEnum;
    'minOccurrences'?: number;
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
export declare enum PublicNumOccurrencesRefineByTypeEnum {
    NumOccurrences = "NUM_OCCURRENCES"
}
