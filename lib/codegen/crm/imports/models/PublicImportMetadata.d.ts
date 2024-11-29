import { PublicObjectListRecord } from '../models/PublicObjectListRecord';
export declare class PublicImportMetadata {
    'counters': {
        [key: string]: number;
    };
    'fileIds': Array<string>;
    'objectLists': Array<PublicObjectListRecord>;
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
