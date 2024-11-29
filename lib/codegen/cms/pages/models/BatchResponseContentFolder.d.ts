import { ContentFolder } from '../models/ContentFolder';
export declare class BatchResponseContentFolder {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<ContentFolder>;
    'status': BatchResponseContentFolderStatusEnum;
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
export declare enum BatchResponseContentFolderStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
