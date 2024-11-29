import { BlogPost } from '../models/BlogPost';
import { VersionUser } from '../models/VersionUser';
export declare class VersionBlogPost {
    'id': string;
    'user': VersionUser;
    'object': BlogPost;
    'updatedAt': Date;
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
