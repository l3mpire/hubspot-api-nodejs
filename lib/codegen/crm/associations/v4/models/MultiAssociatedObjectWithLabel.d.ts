import { AssociationSpecWithLabel } from '../models/AssociationSpecWithLabel';
export declare class MultiAssociatedObjectWithLabel {
    'associationTypes': Array<AssociationSpecWithLabel>;
    'toObjectId': string;
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
