export declare class ObjectToken {
    'dataType'?: ObjectTokenDataTypeEnum;
    'name'?: string;
    'label'?: string;
    'value': string;
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
export declare enum ObjectTokenDataTypeEnum {
    Boolean = "BOOLEAN",
    Currency = "CURRENCY",
    Date = "DATE",
    Datetime = "DATETIME",
    Email = "EMAIL",
    Link = "LINK",
    Numeric = "NUMERIC",
    String = "STRING",
    Status = "STATUS"
}
