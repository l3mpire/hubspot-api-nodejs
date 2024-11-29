import { ForwardPaging } from '../models/ForwardPaging';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
export declare class CollectionResponseSmtpApiTokenViewForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<SmtpApiTokenView>;
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
