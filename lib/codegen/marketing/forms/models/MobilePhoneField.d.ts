import { DependentField } from '../models/DependentField';
import { PhoneFieldValidation } from '../models/PhoneFieldValidation';
export declare class MobilePhoneField {
    'objectTypeId': string;
    'hidden': boolean;
    'defaultValue'?: string;
    'name': string;
    'description'?: string;
    'dependentFields': Array<DependentField>;
    'label': string;
    'placeholder'?: string;
    'fieldType': MobilePhoneFieldFieldTypeEnum;
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
export declare enum MobilePhoneFieldFieldTypeEnum {
    MobilePhone = "mobile_phone"
}
