import { IndexedField } from '../models/IndexedField';
export declare class IndexedData {
    'id': string;
    'type': IndexedDataTypeEnum;
    'fields': {
        [key: string]: IndexedField;
    };
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
export declare enum IndexedDataTypeEnum {
    LandingPage = "LANDING_PAGE",
    BlogPost = "BLOG_POST",
    SitePage = "SITE_PAGE",
    KnowledgeArticle = "KNOWLEDGE_ARTICLE",
    ListingPage = "LISTING_PAGE"
}
