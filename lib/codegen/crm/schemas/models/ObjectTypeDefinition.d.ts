import { ObjectTypeDefinitionLabels } from '../models/ObjectTypeDefinitionLabels';
export declare class ObjectTypeDefinition {
    'secondaryDisplayProperties'?: Array<string>;
    'objectTypeId'?: string;
    'description'?: string;
    'fullyQualifiedName'?: string;
    'labels': ObjectTypeDefinitionLabels;
    'archived'?: boolean;
    'createdAt'?: Date;
    'requiredProperties': Array<string>;
    'searchableProperties'?: Array<string>;
    'portalId'?: number;
    'primaryDisplayProperty'?: string;
    'name': string;
    'id': string;
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
