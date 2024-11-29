export declare class PublicFiscalYearReference {
    'hour'?: number;
    'month': number;
    'millisecond'?: number;
    'referenceType': PublicFiscalYearReferenceReferenceTypeEnum;
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
export declare enum PublicFiscalYearReferenceReferenceTypeEnum {
    FiscalYear = "FISCAL_YEAR"
}
