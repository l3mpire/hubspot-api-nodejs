export declare class PublicRangedNumberPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'upperBound': number;
    'operationType': PublicRangedNumberPropertyOperationOperationTypeEnum;
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
export declare enum PublicRangedNumberPropertyOperationOperationTypeEnum {
    NumberRanged = "NUMBER_RANGED"
}
