import { FieldGroup } from '../models/FieldGroup';
import { FormDisplayOptions } from '../models/FormDisplayOptions';
import { HubSpotFormConfiguration } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions } from '../models/HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions';
export declare class HubSpotFormDefinitionPatchRequest {
    'fieldGroups'?: Array<FieldGroup>;
    'archived'?: boolean;
    'configuration'?: HubSpotFormConfiguration;
    'name'?: string;
    'legalConsentOptions'?: HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions;
    'displayOptions'?: FormDisplayOptions;
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
