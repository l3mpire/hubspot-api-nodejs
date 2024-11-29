import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
export declare class BatchResponseLabelsBetweenObjectPair {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<LabelsBetweenObjectPair>;
    'status': BatchResponseLabelsBetweenObjectPairStatusEnum;
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
export declare enum BatchResponseLabelsBetweenObjectPairStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
