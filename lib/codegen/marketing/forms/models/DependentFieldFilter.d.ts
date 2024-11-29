export declare class DependentFieldFilter {
    'rangeStart': string;
    'values': Array<string>;
    'value': string;
    'operator': DependentFieldFilterOperatorEnum;
    'rangeEnd': string;
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
export declare enum DependentFieldFilterOperatorEnum {
    Eq = "eq",
    Neq = "neq",
    Contains = "contains",
    DoesntContain = "doesnt_contain",
    StrStartsWith = "str_starts_with",
    StrEndsWith = "str_ends_with",
    Lt = "lt",
    Lte = "lte",
    Gt = "gt",
    Gte = "gte",
    Between = "between",
    NotBetween = "not_between",
    WithinTimeReverse = "within_time_reverse",
    WithinTime = "within_time",
    SetAny = "set_any",
    SetNotAny = "set_not_any",
    SetAll = "set_all",
    SetNotAll = "set_not_all",
    SetEq = "set_eq",
    SetNeq = "set_neq",
    IsNotEmpty = "is_not_empty"
}
