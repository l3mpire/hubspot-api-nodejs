import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicAssociationInListFilter {
    'listId': string;
    'coalescingRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'toObjectType'?: string;
    'associationTypeId': number;
    'associationCategory': string;
    'filterType': PublicAssociationInListFilterFilterTypeEnum;
    'toObjectTypeId'?: string;
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
export declare enum PublicAssociationInListFilterFilterTypeEnum {
    Association = "ASSOCIATION"
}
