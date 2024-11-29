import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';
export declare class PublicUnifiedEventsFilterBranch {
    'filterBranchType': PublicUnifiedEventsFilterBranchFilterBranchTypeEnum;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'eventTypeId': string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterBranchOperator': string;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;
    'operator': PublicUnifiedEventsFilterBranchOperatorEnum;
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
export declare enum PublicUnifiedEventsFilterBranchFilterBranchTypeEnum {
    UnifiedEvents = "UNIFIED_EVENTS"
}
export declare enum PublicUnifiedEventsFilterBranchOperatorEnum {
    Completed = "HAS_COMPLETED",
    NotCompleted = "HAS_NOT_COMPLETED"
}
