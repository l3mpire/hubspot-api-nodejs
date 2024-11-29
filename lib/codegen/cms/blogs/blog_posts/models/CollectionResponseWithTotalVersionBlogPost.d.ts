import { Paging } from '../models/Paging';
import { VersionBlogPost } from '../models/VersionBlogPost';
export declare class CollectionResponseWithTotalVersionBlogPost {
    'total': number;
    'paging'?: Paging;
    'results': Array<VersionBlogPost>;
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
