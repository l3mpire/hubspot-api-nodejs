import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';
export declare class PublicNotAllFilterBranch {
    'filterBranchType': PublicNotAllFilterBranchFilterBranchTypeEnum;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'filterBranchOperator': string;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;
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
export declare enum PublicNotAllFilterBranchFilterBranchTypeEnum {
    NotAll = "NOT_ALL"
}
