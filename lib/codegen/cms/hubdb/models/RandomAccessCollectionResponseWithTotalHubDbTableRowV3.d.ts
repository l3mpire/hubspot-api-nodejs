import { BoundedPaging } from '../models/BoundedPaging';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
export declare class RandomAccessCollectionResponseWithTotalHubDbTableRowV3 {
    'total': number;
    'paging'?: BoundedPaging;
    'type': RandomAccessCollectionResponseWithTotalHubDbTableRowV3TypeEnum;
    'results': Array<HubDbTableRowV3>;
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
export declare enum RandomAccessCollectionResponseWithTotalHubDbTableRowV3TypeEnum {
    RandomAccess = "RANDOM_ACCESS"
}
