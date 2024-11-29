import { OptionInput } from '../models/OptionInput';
export declare class PropertyUpdate {
    'groupName'?: string;
    'hidden'?: boolean;
    'options'?: Array<OptionInput>;
    'displayOrder'?: number;
    'description'?: string;
    'calculationFormula'?: string;
    'label'?: string;
    'type'?: PropertyUpdateTypeEnum;
    'fieldType'?: PropertyUpdateFieldTypeEnum;
    'formField'?: boolean;
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
export declare enum PropertyUpdateTypeEnum {
    String = "string",
    Number = "number",
    Date = "date",
    Datetime = "datetime",
    Enumeration = "enumeration",
    Bool = "bool"
}
export declare enum PropertyUpdateFieldTypeEnum {
    Textarea = "textarea",
    Text = "text",
    Date = "date",
    File = "file",
    Number = "number",
    Select = "select",
    Radio = "radio",
    Checkbox = "checkbox",
    Booleancheckbox = "booleancheckbox",
    CalculationEquation = "calculation_equation"
}
