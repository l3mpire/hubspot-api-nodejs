import { PublicAssociationMultiWithLabel } from '../models/PublicAssociationMultiWithLabel';
export declare class BatchResponsePublicAssociationMultiWithLabel {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<PublicAssociationMultiWithLabel>;
    'status': BatchResponsePublicAssociationMultiWithLabelStatusEnum;
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
export declare enum BatchResponsePublicAssociationMultiWithLabelStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
