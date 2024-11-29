import { DependentFieldDependentField } from '../models/DependentFieldDependentField';
export declare class FieldGroup {
    'groupType': FieldGroupGroupTypeEnum;
    'richTextType': FieldGroupRichTextTypeEnum;
    'richText'?: string;
    'fields': Array<DependentFieldDependentField>;
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
export declare enum FieldGroupGroupTypeEnum {
    DefaultGroup = "default_group",
    Progressive = "progressive",
    Queued = "queued"
}
export declare enum FieldGroupRichTextTypeEnum {
    Text = "text",
    Image = "image"
}
