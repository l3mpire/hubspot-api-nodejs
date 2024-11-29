import { PublicInListFilterMetadata } from '../models/PublicInListFilterMetadata';
export declare class PublicInListFilter {
    'listId': string;
    'metadata'?: PublicInListFilterMetadata;
    'filterType': PublicInListFilterFilterTypeEnum;
    'operator': string;
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
export declare enum PublicInListFilterFilterTypeEnum {
    InList = "IN_LIST"
}
