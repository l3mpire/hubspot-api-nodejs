export declare class TokenResponseIF {
    'accessToken': string;
    'refreshToken': string;
    'idToken'?: string;
    'tokenType': string;
    'expiresIn': number;
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
