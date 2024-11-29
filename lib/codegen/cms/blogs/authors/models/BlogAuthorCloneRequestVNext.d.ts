import { BlogAuthor } from '../models/BlogAuthor';
export declare class BlogAuthorCloneRequestVNext {
    'language'?: string;
    'id': string;
    'primaryLanguage'?: string;
    'blogAuthor': BlogAuthor;
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
