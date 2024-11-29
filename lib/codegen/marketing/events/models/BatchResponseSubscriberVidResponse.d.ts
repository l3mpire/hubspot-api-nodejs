import { StandardError } from '../models/StandardError';
import { SubscriberVidResponse } from '../models/SubscriberVidResponse';
export declare class BatchResponseSubscriberVidResponse {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<SubscriberVidResponse>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseSubscriberVidResponseStatusEnum;
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
export declare enum BatchResponseSubscriberVidResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
