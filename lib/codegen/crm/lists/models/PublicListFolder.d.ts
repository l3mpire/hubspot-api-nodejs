export declare class PublicListFolder {
    'createdAt'?: Date;
    'parentFolderId': number;
    'childNodes': Array<PublicListFolder>;
    'name'?: string;
    'id': number;
    'childLists': Array<number>;
    'updatedContentsAt'?: Date;
    'userId'?: number;
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
