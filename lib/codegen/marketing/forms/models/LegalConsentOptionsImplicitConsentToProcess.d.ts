import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';
export declare class LegalConsentOptionsImplicitConsentToProcess {
    'communicationsCheckboxes': Array<LegalConsentCheckbox>;
    'communicationConsentText'?: string;
    'type': LegalConsentOptionsImplicitConsentToProcessTypeEnum;
    'privacyText': string;
    'consentToProcessText'?: string;
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
export declare enum LegalConsentOptionsImplicitConsentToProcessTypeEnum {
    ImplicitConsentToProcess = "implicit_consent_to_process"
}
