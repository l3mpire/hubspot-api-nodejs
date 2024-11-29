import { Page } from '../models/Page';
import { StandardError } from '../models/StandardError';
export declare class BatchResponsePageWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<Page>;
    'errors'?: Array<StandardError>;
    'status': BatchResponsePageWithErrorsStatusEnum;
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
export declare enum BatchResponsePageWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
