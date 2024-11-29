import { FieldGroup } from '../models/FieldGroup';
import { FormDisplayOptions } from '../models/FormDisplayOptions';
import { HubSpotFormConfiguration } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions } from '../models/HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions';
export declare class HubSpotFormDefinitionCreateRequest {
    'formType': HubSpotFormDefinitionCreateRequestFormTypeEnum;
    'name': string;
    'createdAt': Date;
    'updatedAt': Date;
    'archived': boolean;
    'archivedAt'?: Date;
    'fieldGroups': Array<FieldGroup>;
    'configuration': HubSpotFormConfiguration;
    'displayOptions': FormDisplayOptions;
    'legalConsentOptions': HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions;
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
export declare enum HubSpotFormDefinitionCreateRequestFormTypeEnum {
    Hubspot = "hubspot"
}
