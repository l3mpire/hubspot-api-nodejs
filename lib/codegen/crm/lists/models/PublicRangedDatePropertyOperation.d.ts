export declare class PublicRangedDatePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'upperBound': number;
    'requiresTimeZoneConversion': boolean;
    'operationType': PublicRangedDatePropertyOperationOperationTypeEnum;
    'lowerBound': number;
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
export declare enum PublicRangedDatePropertyOperationOperationTypeEnum {
    RangedDate = "RANGED_DATE"
}
