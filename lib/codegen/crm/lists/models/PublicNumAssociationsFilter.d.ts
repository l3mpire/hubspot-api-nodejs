import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicNumAssociationsFilter {
    'coalescingRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'associationTypeId': number;
    'associationCategory': string;
    'filterType': PublicNumAssociationsFilterFilterTypeEnum;
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
export declare enum PublicNumAssociationsFilterFilterTypeEnum {
    NumAssociations = "NUM_ASSOCIATIONS"
}
