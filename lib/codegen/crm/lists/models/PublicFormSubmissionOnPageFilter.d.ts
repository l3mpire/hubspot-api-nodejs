import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicFormSubmissionOnPageFilter {
    'formId'?: string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicFormSubmissionOnPageFilterFilterTypeEnum;
    'pageId': string;
    'operator': PublicFormSubmissionOnPageFilterOperatorEnum;
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
export declare enum PublicFormSubmissionOnPageFilterFilterTypeEnum {
    FormSubmissionOnPage = "FORM_SUBMISSION_ON_PAGE"
}
export declare enum PublicFormSubmissionOnPageFilterOperatorEnum {
    FilledOut = "FILLED_OUT",
    NotFilledOut = "NOT_FILLED_OUT"
}
