export declare class PublicRollingDateRangePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'requiresTimeZoneConversion': boolean;
    'operationType': PublicRollingDateRangePropertyOperationOperationTypeEnum;
    'numberOfDays': number;
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
export declare enum PublicRollingDateRangePropertyOperationOperationTypeEnum {
    RollingDateRange = "ROLLING_DATE_RANGE"
}
