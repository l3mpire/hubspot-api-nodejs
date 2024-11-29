export declare class PublicNowReference {
    'hour'?: number;
    'millisecond'?: number;
    'referenceType': PublicNowReferenceReferenceTypeEnum;
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
export declare enum PublicNowReferenceReferenceTypeEnum {
    Now = "NOW"
}
