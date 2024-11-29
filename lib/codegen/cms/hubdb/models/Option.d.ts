import { SimpleUser } from '../models/SimpleUser';
export declare class Option {
    'createdByUserId'?: number;
    'createdAt': Date;
    'updatedBy'?: SimpleUser;
    'createdBy'?: SimpleUser;
    'name': string;
    'id': string;
    'label'?: string;
    'updatedByUserId'?: number;
    'type': string;
    'order': number;
    'updatedAt': Date;
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
