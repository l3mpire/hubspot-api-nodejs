import { DependentField } from '../models/DependentField';
export declare class MultiLineTextField {
    'objectTypeId': string;
    'hidden': boolean;
    'defaultValue'?: string;
    'name': string;
    'description'?: string;
    'dependentFields': Array<DependentField>;
    'label': string;
    'placeholder'?: string;
    'fieldType': MultiLineTextFieldFieldTypeEnum;
    'required': boolean;
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
export declare enum MultiLineTextFieldFieldTypeEnum {
    MultiLineText = "multi_line_text"
}
