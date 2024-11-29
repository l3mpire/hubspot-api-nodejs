import { ContentSearchResult } from '../models/ContentSearchResult';
export declare class PublicSearchResults {
    'total': number;
    'searchTerm'?: string;
    'offset': number;
    'limit': number;
    'page': number;
    'results': Array<ContentSearchResult>;
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
