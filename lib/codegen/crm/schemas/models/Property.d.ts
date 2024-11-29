import { Option } from '../models/Option';
import { PropertyModificationMetadata } from '../models/PropertyModificationMetadata';
export declare class Property {
    'hidden'?: boolean;
    'displayOrder'?: number;
    'description': string;
    'showCurrencySymbol'?: boolean;
    'type': string;
    'hubspotDefined'?: boolean;
    'createdAt'?: Date;
    'archived'?: boolean;
    'options': Array<Option>;
    'hasUniqueValue'?: boolean;
    'calculated'?: boolean;
    'externalOptions'?: boolean;
    'updatedAt'?: Date;
    'createdUserId'?: string;
    'modificationMetadata'?: PropertyModificationMetadata;
    'sensitiveDataCategories'?: Array<string>;
    'label': string;
    'formField'?: boolean;
    'dataSensitivity'?: PropertyDataSensitivityEnum;
    'archivedAt'?: Date;
    'groupName': string;
    'referencedObjectType'?: string;
    'name': string;
    'calculationFormula'?: string;
    'fieldType': string;
    'updatedUserId'?: string;
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
export declare enum PropertyDataSensitivityEnum {
    NonSensitive = "non_sensitive",
    Sensitive = "sensitive",
    HighlySensitive = "highly_sensitive"
}
