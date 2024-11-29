export declare class FormPostSubmitAction {
    'type': FormPostSubmitActionTypeEnum;
    'value': string;
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
export declare enum FormPostSubmitActionTypeEnum {
    ThankYou = "thank_you",
    RedirectUrl = "redirect_url"
}
