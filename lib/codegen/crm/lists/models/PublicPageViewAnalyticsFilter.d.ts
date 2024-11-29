import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicPageViewAnalyticsFilter {
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'enableTracking'?: boolean;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pageUrl': string;
    'filterType': PublicPageViewAnalyticsFilterFilterTypeEnum;
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
export declare enum PublicPageViewAnalyticsFilterFilterTypeEnum {
    PageView = "PAGE_VIEW"
}
