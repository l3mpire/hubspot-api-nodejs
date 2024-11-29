import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseMarketingEventPublicDefaultResponse {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<MarketingEventPublicDefaultResponse>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseMarketingEventPublicDefaultResponseStatusEnum;
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
export declare enum BatchResponseMarketingEventPublicDefaultResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
