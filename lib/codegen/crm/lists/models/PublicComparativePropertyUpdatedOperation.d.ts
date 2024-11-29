export declare class PublicComparativePropertyUpdatedOperation {
    'includeObjectsWithNoValueSet': boolean;
    'defaultComparisonValue'?: string;
    'operationType': PublicComparativePropertyUpdatedOperationOperationTypeEnum;
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
export declare enum PublicComparativePropertyUpdatedOperationOperationTypeEnum {
    ComparativePropertyUpdated = "COMPARATIVE_PROPERTY_UPDATED"
}
