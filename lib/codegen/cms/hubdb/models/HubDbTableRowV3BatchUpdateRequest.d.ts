export declare class HubDbTableRowV3BatchUpdateRequest {
    'path'?: string;
    'childTableId'?: number;
    'values': {
        [key: string]: any;
    };
    'name'?: string;
    'id': string;
    'displayIndex'?: number;
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
