import { FieldGroup } from '../models/FieldGroup';
import { FormDisplayOptions } from '../models/FormDisplayOptions';
import { HubSpotFormConfiguration } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinitionAllOfLegalConsentOptions } from '../models/HubSpotFormDefinitionAllOfLegalConsentOptions';
export declare class FormDefinitionBase {
    'formType': FormDefinitionBaseFormTypeEnum;
    'id': string;
    'name': string;
    'createdAt': Date;
    'updatedAt': Date;
    'archived': boolean;
    'archivedAt'?: Date;
    'fieldGroups': Array<FieldGroup>;
    'configuration': HubSpotFormConfiguration;
    'displayOptions': FormDisplayOptions;
    'legalConsentOptions': HubSpotFormDefinitionAllOfLegalConsentOptions;
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
export declare enum FormDefinitionBaseFormTypeEnum {
    Hubspot = "hubspot"
}
