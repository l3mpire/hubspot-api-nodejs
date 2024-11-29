import { Option } from '../models/Option';
export declare class ColumnRequest {
    'foreignTableId'?: number;
    'name': string;
    'options': Array<Option>;
    'id': number;
    'label': string;
    'type': ColumnRequestTypeEnum;
    'foreignColumnId'?: number;
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
export declare enum ColumnRequestTypeEnum {
    Null = "NULL",
    Text = "TEXT",
    Number = "NUMBER",
    Url = "URL",
    Image = "IMAGE",
    Select = "SELECT",
    Multiselect = "MULTISELECT",
    Boolean = "BOOLEAN",
    Location = "LOCATION",
    Date = "DATE",
    Datetime = "DATETIME",
    Currency = "CURRENCY",
    Richtext = "RICHTEXT",
    ForeignId = "FOREIGN_ID",
    Video = "VIDEO",
    Cta = "CTA",
    File = "FILE",
    Json = "JSON",
    Composite = "COMPOSITE",
    Code = "CODE"
}
