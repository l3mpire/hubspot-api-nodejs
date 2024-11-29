import { BlogAuthor } from '../models/BlogAuthor';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseBlogAuthorWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: {
        [key: string]: string;
    };
    'results': Array<BlogAuthor>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseBlogAuthorWithErrorsStatusEnum;
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
export declare enum BatchResponseBlogAuthorWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
