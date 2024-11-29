export declare class SimplePublicObjectBatchInputUpsert {
    'idProperty'?: string;
    'objectWriteTraceId'?: string;
    'id': string;
    'properties': {
        [key: string]: string;
    };
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
