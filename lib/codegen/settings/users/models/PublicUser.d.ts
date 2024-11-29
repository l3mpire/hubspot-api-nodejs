export declare class PublicUser {
    'firstName'?: string;
    'lastName'?: string;
    'primaryTeamId'?: string;
    'roleIds'?: Array<string>;
    'sendWelcomeEmail'?: boolean;
    'roleId'?: string;
    'secondaryTeamIds'?: Array<string>;
    'id': string;
    'superAdmin'?: boolean;
    'email': string;
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
