export declare class UrlMapping {
    'isTrailingSlashOptional': boolean;
    'redirectStyle': number;
    'isMatchQueryString': boolean;
    'created'?: Date;
    'isMatchFullUrl': boolean;
    'destination': string;
    'isOnlyAfterNotFound': boolean;
    'isPattern': boolean;
    'precedence': number;
    'routePrefix': string;
    'isProtocolAgnostic': boolean;
    'id': string;
    'updated'?: Date;
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
