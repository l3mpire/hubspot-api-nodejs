export declare class PublicAbsoluteRangedTimestampRefineBy {
    'rangeType': string;
    'upperTimestamp': number;
    'lowerTimestamp': number;
    'type': PublicAbsoluteRangedTimestampRefineByTypeEnum;
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
export declare enum PublicAbsoluteRangedTimestampRefineByTypeEnum {
    AbsoluteRanged = "ABSOLUTE_RANGED"
}
