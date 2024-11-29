import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';
export declare class PublicAssociationFilterBranch {
    'filterBranchType': PublicAssociationFilterBranchFilterBranchTypeEnum;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'objectTypeId': string;
    'filterBranchOperator': string;
    'associationTypeId': number;
    'associationCategory': string;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;
    'operator': string;
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
export declare enum PublicAssociationFilterBranchFilterBranchTypeEnum {
    Association = "ASSOCIATION"
}
