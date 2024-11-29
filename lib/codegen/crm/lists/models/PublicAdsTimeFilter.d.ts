import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicAdsTimeFilter {
    'pruningRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicAdsTimeFilterFilterTypeEnum;
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
export declare enum PublicAdsTimeFilterFilterTypeEnum {
    AdsTime = "ADS_TIME"
}
