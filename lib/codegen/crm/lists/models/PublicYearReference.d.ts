export declare class PublicYearReference {
    'hour'?: number;
    'month': number;
    'millisecond'?: number;
    'referenceType': PublicYearReferenceReferenceTypeEnum;
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
export declare enum PublicYearReferenceReferenceTypeEnum {
    Year = "YEAR"
}
