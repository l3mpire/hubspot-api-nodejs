export declare class MembershipsUpdateResponse {
    'recordIdsRemoved': Array<string>;
    'recordsIdsAdded': Array<string>;
    'recordIdsMissing': Array<string>;
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
