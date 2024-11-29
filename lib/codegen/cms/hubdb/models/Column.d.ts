import { ForeignId } from '../models/ForeignId';
import { Option } from '../models/Option';
import { SimpleUser } from '../models/SimpleUser';
export declare class Column {
    'createdByUserId'?: number;
    'foreignTableId'?: number;
    'updatedBy'?: SimpleUser;
    'description'?: string;
    'label': string;
    'updatedByUserId'?: number;
    'type': ColumnTypeEnum;
    'optionCount'?: number;
    'foreignIds'?: Array<ForeignId>;
    'createdAt'?: Date;
    'deleted'?: boolean;
    'createdBy'?: SimpleUser;
    'name': string;
    'options'?: Array<Option>;
    'width'?: number;
    'id'?: string;
    'foreignIdsById'?: {
        [key: string]: ForeignId;
    };
    'foreignColumnId'?: number;
    'foreignIdsByName'?: {
        [key: string]: ForeignId;
    };
    'updatedAt'?: Date;
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
export declare enum ColumnTypeEnum {
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
