import { SimplePublicObject } from '../models/SimplePublicObject';
export declare class BatchResponseSimplePublicObject {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<SimplePublicObject>;
    'status': BatchResponseSimplePublicObjectStatusEnum;
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
export declare enum BatchResponseSimplePublicObjectStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
