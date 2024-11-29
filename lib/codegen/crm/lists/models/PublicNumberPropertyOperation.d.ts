export declare class PublicNumberPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicNumberPropertyOperationOperationTypeEnum;
    'value': number;
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
export declare enum PublicNumberPropertyOperationOperationTypeEnum {
    Number = "NUMBER"
}
