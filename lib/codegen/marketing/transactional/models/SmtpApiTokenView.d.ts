export declare class SmtpApiTokenView {
    'createdAt': Date;
    'password'?: string;
    'createdBy': string;
    'createContact': boolean;
    'id': string;
    'emailCampaignId': string;
    'campaignName': string;
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
