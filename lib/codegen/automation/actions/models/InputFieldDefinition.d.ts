import { FieldTypeDefinition } from '../models/FieldTypeDefinition';
export declare class InputFieldDefinition {
    'isRequired': boolean;
    'automationFieldType'?: string;
    'typeDefinition': FieldTypeDefinition;
    'supportedValueTypes'?: Array<InputFieldDefinitionSupportedValueTypesEnum>;
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
export declare enum InputFieldDefinitionSupportedValueTypesEnum {
    StaticValue = "STATIC_VALUE",
    ObjectProperty = "OBJECT_PROPERTY",
    FieldData = "FIELD_DATA",
    FetchedObjectProperty = "FETCHED_OBJECT_PROPERTY",
    EnrollmentEventProperty = "ENROLLMENT_EVENT_PROPERTY"
}
