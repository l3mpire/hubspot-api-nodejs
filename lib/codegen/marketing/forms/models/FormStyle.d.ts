export declare class FormStyle {
    'labelTextSize': string;
    'legalConsentTextColor': string;
    'fontFamily': string;
    'legalConsentTextSize': string;
    'backgroundWidth': string;
    'helpTextSize': string;
    'submitFontColor': string;
    'labelTextColor': string;
    'submitAlignment': FormStyleSubmitAlignmentEnum;
    'submitSize': string;
    'helpTextColor': string;
    'submitColor': string;
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
export declare enum FormStyleSubmitAlignmentEnum {
    Left = "left",
    Right = "right",
    Center = "center"
}
