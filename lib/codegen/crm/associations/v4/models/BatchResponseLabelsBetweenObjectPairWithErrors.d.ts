import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseLabelsBetweenObjectPairWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<LabelsBetweenObjectPair>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseLabelsBetweenObjectPairWithErrorsStatusEnum;
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
export declare enum BatchResponseLabelsBetweenObjectPairWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
