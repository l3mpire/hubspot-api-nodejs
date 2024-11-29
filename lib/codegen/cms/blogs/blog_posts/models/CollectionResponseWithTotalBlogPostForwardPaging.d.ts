import { BlogPost } from '../models/BlogPost';
import { ForwardPaging } from '../models/ForwardPaging';
export declare class CollectionResponseWithTotalBlogPostForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<BlogPost>;
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
