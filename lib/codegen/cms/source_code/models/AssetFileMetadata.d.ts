export declare class AssetFileMetadata {
    'createdAt': number;
    'archivedAt'?: number;
    'folder': boolean;
    'children'?: Array<string>;
    'name': string;
    'id': string;
    'hash'?: string;
    'updatedAt': number;
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
