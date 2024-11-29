export declare class PublicMonthReference {
    'hour'?: number;
    'millisecond'?: number;
    'referenceType': PublicMonthReferenceReferenceTypeEnum;
    'day': number;
    'minute'?: number;
    'second'?: number;
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
export declare enum PublicMonthReferenceReferenceTypeEnum {
    Month = "MONTH"
}
