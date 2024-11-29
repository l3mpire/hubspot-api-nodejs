export declare class PublicQuarterReference {
    'hour'?: number;
    'month': number;
    'millisecond'?: number;
    'referenceType': PublicQuarterReferenceReferenceTypeEnum;
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
export declare enum PublicQuarterReferenceReferenceTypeEnum {
    Quarter = "QUARTER"
}
