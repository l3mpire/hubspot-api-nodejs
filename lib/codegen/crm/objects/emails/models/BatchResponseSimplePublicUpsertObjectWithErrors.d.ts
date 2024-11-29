import { SimplePublicUpsertObject } from '../models/SimplePublicUpsertObject';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseSimplePublicUpsertObjectWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<SimplePublicUpsertObject>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseSimplePublicUpsertObjectWithErrorsStatusEnum;
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
export declare enum BatchResponseSimplePublicUpsertObjectWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
