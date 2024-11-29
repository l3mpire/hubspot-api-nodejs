export declare class PublicRollingPropertyUpdatedOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicRollingPropertyUpdatedOperationOperationTypeEnum;
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
export declare enum PublicRollingPropertyUpdatedOperationOperationTypeEnum {
    RollingPropertyUpdated = "ROLLING_PROPERTY_UPDATED"
}
