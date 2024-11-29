export declare class UrlMappingCreateRequestBody {
    'isTrailingSlashOptional'?: boolean;
    'isMatchQueryString'?: boolean;
    'redirectStyle': number;
    'routePrefix': string;
    'isMatchFullUrl'?: boolean;
    'isProtocolAgnostic'?: boolean;
    'destination': string;
    'isOnlyAfterNotFound'?: boolean;
    'isPattern'?: boolean;
    'precedence'?: number;
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
