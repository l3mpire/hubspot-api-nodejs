export declare class RefreshTokenInfoResponse {
    'hubId': number;
    'userId': number;
    'scopes': Array<string>;
    'tokenType': string;
    'user'?: string;
    'hubDomain'?: string;
    'clientId': string;
    'token': string;
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
