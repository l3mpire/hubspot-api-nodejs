export declare class PublicBoolPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicBoolPropertyOperationOperationTypeEnum;
    'value': boolean;
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
export declare enum PublicBoolPropertyOperationOperationTypeEnum {
    Bool = "BOOL"
}
