import { FilterGroup } from '../models/FilterGroup';
export declare class PublicObjectSearchRequest {
    'query'?: string;
    'limit'?: number;
    'after'?: string;
    'sorts'?: Array<string>;
    'properties'?: Array<string>;
    'filterGroups'?: Array<FilterGroup>;
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
