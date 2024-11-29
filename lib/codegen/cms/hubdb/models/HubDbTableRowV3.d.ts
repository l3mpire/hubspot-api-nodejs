export declare class HubDbTableRowV3 {
    'path'?: string;
    'createdAt'?: Date;
    'childTableId'?: string;
    'publishedAt'?: Date;
    'values': {
        [key: string]: any;
    };
    'name'?: string;
    'id'?: string;
    'updatedAt'?: Date;
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
