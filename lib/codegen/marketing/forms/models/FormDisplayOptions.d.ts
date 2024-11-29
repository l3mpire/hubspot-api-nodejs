import { FormStyle } from '../models/FormStyle';
export declare class FormDisplayOptions {
    'renderRawHtml': boolean;
    'cssClass'?: string;
    'theme': FormDisplayOptionsThemeEnum;
    'submitButtonText': string;
    'style': FormStyle;
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
export declare enum FormDisplayOptionsThemeEnum {
    DefaultStyle = "default_style",
    Canvas = "canvas",
    Linear = "linear",
    Round = "round",
    Sharp = "sharp",
    Legacy = "legacy"
}
