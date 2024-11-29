export declare class HubDbTableCloneRequest {
    'newName'?: string;
    'isHubspotDefined': boolean;
    'newLabel'?: string;
    'copyRows': boolean;
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
