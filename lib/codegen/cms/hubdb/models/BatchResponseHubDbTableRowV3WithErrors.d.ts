import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseHubDbTableRowV3WithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<HubDbTableRowV3>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseHubDbTableRowV3WithErrorsStatusEnum;
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
export declare enum BatchResponseHubDbTableRowV3WithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
