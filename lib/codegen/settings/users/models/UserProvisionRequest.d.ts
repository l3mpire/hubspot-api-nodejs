export declare class UserProvisionRequest {
    'firstName'?: string;
    'lastName'?: string;
    'primaryTeamId'?: string;
    'sendWelcomeEmail'?: boolean;
    'roleId'?: string;
    'secondaryTeamIds'?: Array<string>;
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
