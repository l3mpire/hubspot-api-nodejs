import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { Paging } from '../models/Paging';
export declare class StreamingCollectionResponseWithTotalHubDbTableRowV3 {
    'total': number;
    'paging'?: Paging;
    'type': StreamingCollectionResponseWithTotalHubDbTableRowV3TypeEnum;
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
export declare enum StreamingCollectionResponseWithTotalHubDbTableRowV3TypeEnum {
    Streaming = "STREAMING"
}
