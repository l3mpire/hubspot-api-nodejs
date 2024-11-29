import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicFormSubmissionFilter {
    'formId'?: string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicFormSubmissionFilterFilterTypeEnum;
    'operator': PublicFormSubmissionFilterOperatorEnum;
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
export declare enum PublicFormSubmissionFilterFilterTypeEnum {
    FormSubmission = "FORM_SUBMISSION"
}
export declare enum PublicFormSubmissionFilterOperatorEnum {
    FilledOut = "FILLED_OUT",
    NotFilledOut = "NOT_FILLED_OUT"
}
