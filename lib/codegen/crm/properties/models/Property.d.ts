import { Option } from '../models/Option';
import { PropertyModificationMetadata } from '../models/PropertyModificationMetadata';
export declare class Property {
    'createdUserId'?: string;
    'hidden'?: boolean;
    'modificationMetadata'?: PropertyModificationMetadata;
    'displayOrder'?: number;
    'description': string;
    'showCurrencySymbol'?: boolean;
    'label': string;
    'type': string;
    'hubspotDefined'?: boolean;
    'formField'?: boolean;
    'createdAt'?: Date;
    'archivedAt'?: Date;
    'archived'?: boolean;
    'groupName': string;
    'referencedObjectType'?: string;
    'name': string;
    'options': Array<Option>;
    'calculationFormula'?: string;
    'hasUniqueValue'?: boolean;
    'fieldType': string;
    'updatedUserId'?: string;
    'calculated'?: boolean;
    'externalOptions'?: boolean;
    'updatedAt'?: Date;
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
