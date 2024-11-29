import { DependentField } from '../models/DependentField';
import { PhoneFieldValidation } from '../models/PhoneFieldValidation';
export declare class PhoneField {
    'objectTypeId': string;
    'hidden': boolean;
    'defaultValue'?: string;
    'useCountryCodeSelect': boolean;
    'name': string;
    'description'?: string;
    'dependentFields': Array<DependentField>;
    'label': string;
    'placeholder'?: string;
    'fieldType': PhoneFieldFieldTypeEnum;
    'required': boolean;
    'validation': PhoneFieldValidation;
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
export declare enum PhoneFieldFieldTypeEnum {
    Phone = "phone"
}
