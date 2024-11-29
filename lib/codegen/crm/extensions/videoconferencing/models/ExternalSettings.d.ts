export declare class ExternalSettings {
    'userVerifyUrl'?: string;
    'fetchAccountsUri'?: string;
    'createMeetingUrl': string;
    'updateMeetingUrl'?: string;
    'deleteMeetingUrl'?: string;
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
