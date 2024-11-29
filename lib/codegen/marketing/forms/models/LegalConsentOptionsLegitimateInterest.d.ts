export declare class LegalConsentOptionsLegitimateInterest {
    'subscriptionTypeIds': Array<number>;
    'lawfulBasis': LegalConsentOptionsLegitimateInterestLawfulBasisEnum;
    'type': LegalConsentOptionsLegitimateInterestTypeEnum;
    'privacyText': string;
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
export declare enum LegalConsentOptionsLegitimateInterestLawfulBasisEnum {
    Lead = "lead",
    Client = "client",
    Other = "other"
}
export declare enum LegalConsentOptionsLegitimateInterestTypeEnum {
    LegitimateInterest = "legitimate_interest"
}
