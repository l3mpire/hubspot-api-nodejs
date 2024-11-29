export declare class SettingsResponse {
    'createdAt': Date;
    'supportsCustomObjects': boolean;
    'isReady': boolean;
    'name': string;
    'width': number;
    'supportsInboundCalling': boolean;
    'url': string;
    'height': number;
    'updatedAt': Date;
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
