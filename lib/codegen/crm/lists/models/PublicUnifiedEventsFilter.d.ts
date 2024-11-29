import { PublicEventFilterMetadata } from '../models/PublicEventFilterMetadata';
import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicUnifiedEventsFilter {
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'eventTypeId'?: string;
    'filterLines': Array<PublicEventFilterMetadata>;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicUnifiedEventsFilterFilterTypeEnum;
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
export declare enum PublicUnifiedEventsFilterFilterTypeEnum {
    UnifiedEvents = "UNIFIED_EVENTS"
}
