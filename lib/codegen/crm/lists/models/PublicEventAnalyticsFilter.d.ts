import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicEventAnalyticsFilter {
    'eventId': string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicEventAnalyticsFilterFilterTypeEnum;
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
export declare enum PublicEventAnalyticsFilterFilterTypeEnum {
    Event = "EVENT"
}
