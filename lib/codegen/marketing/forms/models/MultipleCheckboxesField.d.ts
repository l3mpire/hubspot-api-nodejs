import { DependentField } from '../models/DependentField';
import { EnumeratedFieldOption } from '../models/EnumeratedFieldOption';
export declare class MultipleCheckboxesField {
    'objectTypeId': string;
    'hidden': boolean;
    'name': string;
    'options': Array<EnumeratedFieldOption>;
    'description'?: string;
    'defaultValues': Array<string>;
    'dependentFields': Array<DependentField>;
    'label': string;
    'fieldType': MultipleCheckboxesFieldFieldTypeEnum;
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
export declare enum MultipleCheckboxesFieldFieldTypeEnum {
    MultipleCheckboxes = "multiple_checkboxes"
}
