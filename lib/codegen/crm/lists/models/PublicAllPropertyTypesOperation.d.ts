export declare class PublicAllPropertyTypesOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicAllPropertyTypesOperationOperationTypeEnum;
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
export declare enum PublicAllPropertyTypesOperationOperationTypeEnum {
    AllProperty = "ALL_PROPERTY"
}
