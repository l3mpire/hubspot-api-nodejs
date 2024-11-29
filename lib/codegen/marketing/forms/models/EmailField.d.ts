import { DependentField } from '../models/DependentField';
import { EmailFieldValidation } from '../models/EmailFieldValidation';
export declare class EmailField {
    'objectTypeId': string;
    'hidden': boolean;
    'defaultValue'?: string;
    'name': string;
    'description'?: string;
    'dependentFields': Array<DependentField>;
    'label': string;
    'placeholder'?: string;
    'fieldType': EmailFieldFieldTypeEnum;
    'required': boolean;
    'validation': EmailFieldValidation;
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
export declare enum EmailFieldFieldTypeEnum {
    Email = "email"
}
