import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
export declare class BatchResponseHubDbTableRowV3 {
    'completedAt'?: Date;
    'requestedAt'?: Date;
    'startedAt'?: Date;
    'links'?: {
        [key: string]: string;
    };
    'results'?: Array<HubDbTableRowV3>;
    'status'?: BatchResponseHubDbTableRowV3StatusEnum;
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
export declare enum BatchResponseHubDbTableRowV3StatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
