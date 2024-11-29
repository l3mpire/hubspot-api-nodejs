export declare class PublicComparativeDatePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'defaultComparisonValue'?: string;
    'operationType': PublicComparativeDatePropertyOperationOperationTypeEnum;
    'comparisonPropertyName': string;
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
export declare enum PublicComparativeDatePropertyOperationOperationTypeEnum {
    ComparativeDate = "COMPARATIVE_DATE"
}
