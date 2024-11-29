import { ObjectTypeDefinitionLabels } from '../models/ObjectTypeDefinitionLabels';
export declare class ObjectTypeDefinitionPatch {
    'secondaryDisplayProperties'?: Array<string>;
    'requiredProperties'?: Array<string>;
    'searchableProperties'?: Array<string>;
    'clearDescription'?: boolean;
    'primaryDisplayProperty'?: string;
    'description'?: string;
    'restorable'?: boolean;
    'labels'?: ObjectTypeDefinitionLabels;
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
