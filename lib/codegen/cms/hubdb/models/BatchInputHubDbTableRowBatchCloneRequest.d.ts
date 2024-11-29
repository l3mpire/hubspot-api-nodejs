import { HubDbTableRowBatchCloneRequest } from '../models/HubDbTableRowBatchCloneRequest';
export declare class BatchInputHubDbTableRowBatchCloneRequest {
    'inputs': Array<HubDbTableRowBatchCloneRequest>;
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
