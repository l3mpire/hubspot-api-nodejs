import { AssociationSpec } from '../models/AssociationSpec';
import { PublicObjectId } from '../models/PublicObjectId';
export declare class PublicAssociationsForObject {
    'types'?: Array<AssociationSpec>;
    'to'?: PublicObjectId;
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
