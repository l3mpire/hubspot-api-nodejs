export declare class PublicSingleSendEmail {
    'cc'?: Array<string>;
    'sendId'?: string;
    'bcc'?: Array<string>;
    'replyTo'?: Array<string>;
    '_from'?: string;
    'to': string;
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
