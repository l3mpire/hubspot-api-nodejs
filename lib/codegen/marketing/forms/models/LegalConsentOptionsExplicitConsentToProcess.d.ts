import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';
export declare class LegalConsentOptionsExplicitConsentToProcess {
    'communicationsCheckboxes': Array<LegalConsentCheckbox>;
    'communicationConsentText'?: string;
    'consentToProcessCheckboxLabel'?: string;
    'consentToProcessFooterText'?: string;
    'type': LegalConsentOptionsExplicitConsentToProcessTypeEnum;
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
export declare enum LegalConsentOptionsExplicitConsentToProcessTypeEnum {
    ExplicitConsentToProcess = "explicit_consent_to_process"
}
