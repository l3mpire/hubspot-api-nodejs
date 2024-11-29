import { RecordListMembership } from '../models/RecordListMembership';
export declare class ApiCollectionResponseRecordListMembershipNoPaging {
    'total'?: number;
    'results': Array<RecordListMembership>;
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
