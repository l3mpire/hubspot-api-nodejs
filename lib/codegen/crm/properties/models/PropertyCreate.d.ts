import { OptionInput } from '../models/OptionInput';
export declare class PropertyCreate {
    'hidden'?: boolean;
    'displayOrder'?: number;
    'description'?: string;
    'label': string;
    'type': PropertyCreateTypeEnum;
    'formField'?: boolean;
    'groupName': string;
    'referencedObjectType'?: string;
    'name': string;
    'options'?: Array<OptionInput>;
    'calculationFormula'?: string;
    'hasUniqueValue'?: boolean;
    'fieldType': PropertyCreateFieldTypeEnum;
    'externalOptions'?: boolean;
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
export declare enum PropertyCreateTypeEnum {
    String = "string",
    Number = "number",
    Date = "date",
    Datetime = "datetime",
    Enumeration = "enumeration",
    Bool = "bool"
}
export declare enum PropertyCreateFieldTypeEnum {
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
