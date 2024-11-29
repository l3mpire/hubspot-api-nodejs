import { DependentField } from '../models/DependentField';
import { NumberFieldValidation } from '../models/NumberFieldValidation';
export declare class NumberField {
    'objectTypeId': string;
    'hidden': boolean;
    'defaultValue'?: string;
    'name': string;
    'description'?: string;
    'dependentFields': Array<DependentField>;
    'label': string;
    'placeholder'?: string;
    'fieldType': NumberFieldFieldTypeEnum;
    'required': boolean;
    'validation'?: NumberFieldValidation;
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
export declare enum NumberFieldFieldTypeEnum {
    Number = "number"
}
