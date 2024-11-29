export declare class PublicAbsoluteComparativeTimestampRefineBy {
    'comparison': string;
    'type': PublicAbsoluteComparativeTimestampRefineByTypeEnum;
    'timestamp': number;
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
export declare enum PublicAbsoluteComparativeTimestampRefineByTypeEnum {
    AbsoluteComparative = "ABSOLUTE_COMPARATIVE"
}
