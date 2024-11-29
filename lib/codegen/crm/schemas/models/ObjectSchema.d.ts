import { AssociationDefinition } from '../models/AssociationDefinition';
import { ObjectTypeDefinitionLabels } from '../models/ObjectTypeDefinitionLabels';
import { Property } from '../models/Property';
export declare class ObjectSchema {
    'associations': Array<AssociationDefinition>;
    'secondaryDisplayProperties'?: Array<string>;
    'createdByUserId'?: number;
    'objectTypeId'?: string;
    'description'?: string;
    'updatedByUserId'?: number;
    'fullyQualifiedName'?: string;
    'labels': ObjectTypeDefinitionLabels;
    'archived'?: boolean;
    'createdAt'?: Date;
    'requiredProperties': Array<string>;
    'searchableProperties'?: Array<string>;
    'primaryDisplayProperty'?: string;
    'name': string;
    'id': string;
    'properties': Array<Property>;
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
