export declare class Filter {
    'highValue'?: string;
    'propertyName': string;
    'values'?: Array<string>;
    'value'?: string;
    'operator': FilterOperatorEnum;
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
export declare enum FilterOperatorEnum {
    Eq = "EQ",
    Neq = "NEQ",
    Lt = "LT",
    Lte = "LTE",
    Gt = "GT",
    Gte = "GTE",
    Between = "BETWEEN",
    In = "IN",
    NotIn = "NOT_IN",
    HasProperty = "HAS_PROPERTY",
    NotHasProperty = "NOT_HAS_PROPERTY",
    ContainsToken = "CONTAINS_TOKEN",
    NotContainsToken = "NOT_CONTAINS_TOKEN"
}
