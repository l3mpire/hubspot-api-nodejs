export declare class AccessTokenInfoResponse {
    'hubId': number;
    'userId': number;
    'scopes': Array<string>;
    'tokenType': string;
    'user'?: string;
    'hubDomain'?: string;
    'appId': number;
    'expiresIn': number;
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
