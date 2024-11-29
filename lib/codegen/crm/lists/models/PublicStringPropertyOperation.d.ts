export declare class PublicStringPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicStringPropertyOperationOperationTypeEnum;
    'value': string;
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
export declare enum PublicStringPropertyOperationOperationTypeEnum {
    String = "STRING"
}
