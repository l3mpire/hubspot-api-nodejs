import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
export declare class ListCreateRequest {
    'objectTypeId': string;
    'processingType': string;
    'customProperties'?: {
        [key: string]: string;
    };
    'listFolderId'?: number;
    'name': string;
    'filterBranch'?: PublicPropertyAssociationFilterBranchFilterBranchesInner;
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
