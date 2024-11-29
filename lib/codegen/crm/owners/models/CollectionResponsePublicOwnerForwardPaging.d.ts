import { ForwardPaging } from '../models/ForwardPaging';
import { PublicOwner } from '../models/PublicOwner';
export declare class CollectionResponsePublicOwnerForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<PublicOwner>;
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
