export declare class PublicEnumerationPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'values': Array<string>;
    'operationType': PublicEnumerationPropertyOperationOperationTypeEnum;
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
export declare enum PublicEnumerationPropertyOperationOperationTypeEnum {
    Enumeration = "ENUMERATION"
}
