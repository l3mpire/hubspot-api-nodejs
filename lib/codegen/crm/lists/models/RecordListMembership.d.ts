export declare class RecordListMembership {
    'listId': string;
    'listVersion': number;
    'lastAddedTimestamp': Date;
    'firstAddedTimestamp': Date;
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
