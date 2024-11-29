import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';
export declare class PublicPropertyAssociationFilterBranch {
    'filterBranchType': PublicPropertyAssociationFilterBranchFilterBranchTypeEnum;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'objectTypeId': string;
    'filterBranchOperator': string;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;
    'propertyWithObjectId': string;
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
export declare enum PublicPropertyAssociationFilterBranchFilterBranchTypeEnum {
    PropertyAssociation = "PROPERTY_ASSOCIATION"
}
