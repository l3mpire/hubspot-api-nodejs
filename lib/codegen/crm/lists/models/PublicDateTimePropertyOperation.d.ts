export declare class PublicDateTimePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'requiresTimeZoneConversion': boolean;
    'operationType': PublicDateTimePropertyOperationOperationTypeEnum;
    'operator': string;
    'timestamp': number;
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
export declare enum PublicDateTimePropertyOperationOperationTypeEnum {
    Datetime = "DATETIME"
}
