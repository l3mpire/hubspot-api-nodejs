import { Domain } from '../models/Domain';
import { ForwardPaging } from '../models/ForwardPaging';
export declare class CollectionResponseWithTotalDomainForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<Domain>;
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
