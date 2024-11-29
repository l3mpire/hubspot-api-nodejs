import { ForwardPaging } from '../models/ForwardPaging';
import { PublicImportError } from '../models/PublicImportError';
export declare class CollectionResponsePublicImportErrorForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<PublicImportError>;
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
