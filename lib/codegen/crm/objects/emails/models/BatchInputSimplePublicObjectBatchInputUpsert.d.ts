import { SimplePublicObjectBatchInputUpsert } from '../models/SimplePublicObjectBatchInputUpsert';
export declare class BatchInputSimplePublicObjectBatchInputUpsert {
    'inputs': Array<SimplePublicObjectBatchInputUpsert>;
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
