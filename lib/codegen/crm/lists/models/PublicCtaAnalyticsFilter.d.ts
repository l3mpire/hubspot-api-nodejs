import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicCtaAnalyticsFilter {
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicCtaAnalyticsFilterFilterTypeEnum;
    'ctaName': string;
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
export declare enum PublicCtaAnalyticsFilterFilterTypeEnum {
    Cta = "CTA"
}
