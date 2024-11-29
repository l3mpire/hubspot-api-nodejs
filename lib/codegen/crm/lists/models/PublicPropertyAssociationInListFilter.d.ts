import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicPropertyAssociationInListFilter {
    'listId': string;
    'coalescingRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'propertyWithObjectId': string;
    'filterType': PublicPropertyAssociationInListFilterFilterTypeEnum;
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
export declare enum PublicPropertyAssociationInListFilterFilterTypeEnum {
    PropertyAssociation = "PROPERTY_ASSOCIATION"
}
