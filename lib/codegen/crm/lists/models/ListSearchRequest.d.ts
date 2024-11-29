export declare class ListSearchRequest {
    'listIds'?: Array<string>;
    'offset'?: number;
    'query'?: string;
    'count'?: number;
    'processingTypes'?: Array<string>;
    'additionalProperties'?: Array<string>;
    'sort'?: string;
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
