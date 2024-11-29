import { OptionInput } from '../models/OptionInput';
export declare class ObjectTypePropertyCreate {
    'hidden'?: boolean;
    'optionSortStrategy'?: ObjectTypePropertyCreateOptionSortStrategyEnum;
    'displayOrder'?: number;
    'description'?: string;
    'showCurrencySymbol'?: boolean;
    'label': string;
    'type': ObjectTypePropertyCreateTypeEnum;
    'formField'?: boolean;
    'groupName'?: string;
    'referencedObjectType'?: string;
    'textDisplayHint'?: ObjectTypePropertyCreateTextDisplayHintEnum;
    'name': string;
    'options'?: Array<OptionInput>;
    'searchableInGlobalSearch'?: boolean;
    'numberDisplayHint'?: ObjectTypePropertyCreateNumberDisplayHintEnum;
    'hasUniqueValue'?: boolean;
    'fieldType': string;
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
export declare enum ObjectTypePropertyCreateOptionSortStrategyEnum {
    DisplayOrder = "DISPLAY_ORDER",
    Alphabetical = "ALPHABETICAL"
}
export declare enum ObjectTypePropertyCreateTypeEnum {
    String = "string",
    Number = "number",
    Date = "date",
    Datetime = "datetime",
    Enumeration = "enumeration",
    Bool = "bool"
}
export declare enum ObjectTypePropertyCreateTextDisplayHintEnum {
    UnformattedSingleLine = "unformatted_single_line",
    MultiLine = "multi_line",
    Email = "email",
    PhoneNumber = "phone_number",
    DomainName = "domain_name",
    IpAddress = "ip_address",
    PhysicalAddress = "physical_address",
    PostalCode = "postal_code"
}
export declare enum ObjectTypePropertyCreateNumberDisplayHintEnum {
    Unformatted = "unformatted",
    Formatted = "formatted",
    Currency = "currency",
    Percentage = "percentage",
    Duration = "duration",
    Probability = "probability"
}
