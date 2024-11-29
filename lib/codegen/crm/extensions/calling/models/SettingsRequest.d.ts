export declare class SettingsRequest {
    'supportsCustomObjects'?: boolean;
    'isReady'?: boolean;
    'name': string;
    'width'?: number;
    'supportsInboundCalling': boolean;
    'url': string;
    'height'?: number;
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
