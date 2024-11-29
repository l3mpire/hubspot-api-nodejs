export declare class IFrameActionBody {
    'propertyNamesIncluded': Array<string>;
    'width': number;
    'label'?: string;
    'type': IFrameActionBodyTypeEnum;
    'url': string;
    'height': number;
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
export declare enum IFrameActionBodyTypeEnum {
    Iframe = "IFRAME"
}
