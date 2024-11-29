import { ForwardPaging } from '../models/ForwardPaging';
import { Tag } from '../models/Tag';
export declare class CollectionResponseWithTotalTagForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<Tag>;
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
