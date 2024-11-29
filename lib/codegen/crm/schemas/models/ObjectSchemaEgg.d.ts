import { ObjectTypeDefinitionLabels } from '../models/ObjectTypeDefinitionLabels';
import { ObjectTypePropertyCreate } from '../models/ObjectTypePropertyCreate';
export declare class ObjectSchemaEgg {
    'secondaryDisplayProperties'?: Array<string>;
    'requiredProperties': Array<string>;
    'searchableProperties'?: Array<string>;
    'primaryDisplayProperty'?: string;
    'name': string;
    'description'?: string;
    'associatedObjects': Array<string>;
    'properties': Array<ObjectTypePropertyCreate>;
    'labels': ObjectTypeDefinitionLabels;
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
