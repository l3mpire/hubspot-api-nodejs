import { ForwardPaging } from '../models/ForwardPaging';
import { HubDbTableV3 } from '../models/HubDbTableV3';
export declare class CollectionResponseWithTotalHubDbTableV3ForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<HubDbTableV3>;
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
