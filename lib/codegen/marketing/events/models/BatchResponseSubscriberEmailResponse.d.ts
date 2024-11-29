import { StandardError } from '../models/StandardError';
import { SubscriberEmailResponse } from '../models/SubscriberEmailResponse';
export declare class BatchResponseSubscriberEmailResponse {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<SubscriberEmailResponse>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseSubscriberEmailResponseStatusEnum;
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
export declare enum BatchResponseSubscriberEmailResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
