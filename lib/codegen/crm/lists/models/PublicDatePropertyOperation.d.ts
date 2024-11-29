export declare class PublicDatePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'month': string;
    'year': number;
    'operationType': PublicDatePropertyOperationOperationTypeEnum;
    'day': number;
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
export declare enum PublicDatePropertyOperationOperationTypeEnum {
    Date = "DATE"
}
