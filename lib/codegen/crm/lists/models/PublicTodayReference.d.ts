export declare class PublicTodayReference {
    'hour'?: number;
    'millisecond'?: number;
    'referenceType': PublicTodayReferenceReferenceTypeEnum;
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
export declare enum PublicTodayReferenceReferenceTypeEnum {
    Today = "TODAY"
}
