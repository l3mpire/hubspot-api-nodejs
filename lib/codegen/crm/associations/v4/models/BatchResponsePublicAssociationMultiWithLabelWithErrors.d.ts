import { PublicAssociationMultiWithLabel } from '../models/PublicAssociationMultiWithLabel';
import { StandardError } from '../models/StandardError';
export declare class BatchResponsePublicAssociationMultiWithLabelWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<PublicAssociationMultiWithLabel>;
    'errors'?: Array<StandardError>;
    'status': BatchResponsePublicAssociationMultiWithLabelWithErrorsStatusEnum;
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
export declare enum BatchResponsePublicAssociationMultiWithLabelWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
