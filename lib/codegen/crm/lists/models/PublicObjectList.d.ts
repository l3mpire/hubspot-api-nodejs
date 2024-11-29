import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
export declare class PublicObjectList {
    'processingType': string;
    'objectTypeId': string;
    'updatedById'?: string;
    'filtersUpdatedAt'?: Date;
    'listId': string;
    'createdAt'?: Date;
    'processingStatus': string;
    'deletedAt'?: Date;
    'listVersion': number;
    'size'?: number;
    'name': string;
    'createdById'?: string;
    'filterBranch'?: PublicPropertyAssociationFilterBranchFilterBranchesInner;
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
