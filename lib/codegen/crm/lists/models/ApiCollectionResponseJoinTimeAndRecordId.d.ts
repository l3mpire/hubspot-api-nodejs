import { JoinTimeAndRecordId } from '../models/JoinTimeAndRecordId';
import { Paging } from '../models/Paging';
export declare class ApiCollectionResponseJoinTimeAndRecordId {
    'total'?: number;
    'paging'?: Paging;
    'results': Array<JoinTimeAndRecordId>;
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
