import { PublicDefaultAssociation } from '../models/PublicDefaultAssociation';
import { StandardError } from '../models/StandardError';
export declare class BatchResponsePublicDefaultAssociation {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<PublicDefaultAssociation>;
    'errors'?: Array<StandardError>;
    'status': BatchResponsePublicDefaultAssociationStatusEnum;
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
export declare enum BatchResponsePublicDefaultAssociationStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
