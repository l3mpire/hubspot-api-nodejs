export declare class PublicObjectListSearchResult {
    'processingType': string;
    'objectTypeId': string;
    'updatedById'?: string;
    'filtersUpdatedAt'?: Date;
    'listId': string;
    'createdAt'?: Date;
    'processingStatus': string;
    'deletedAt'?: Date;
    'listVersion': number;
    'name': string;
    'additionalProperties': {
        [key: string]: string;
    };
    'createdById'?: string;
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
