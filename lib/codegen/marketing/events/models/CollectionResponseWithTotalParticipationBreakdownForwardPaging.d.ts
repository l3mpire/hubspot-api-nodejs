import { ForwardPaging } from '../models/ForwardPaging';
import { ParticipationBreakdown } from '../models/ParticipationBreakdown';
export declare class CollectionResponseWithTotalParticipationBreakdownForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<ParticipationBreakdown>;
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
