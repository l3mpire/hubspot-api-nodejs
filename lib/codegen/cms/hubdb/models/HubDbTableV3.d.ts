import { Column } from '../models/Column';
import { SimpleUser } from '../models/SimpleUser';
export declare class HubDbTableV3 {
    'dynamicMetaTags'?: {
        [key: string]: number;
    };
    'updatedBy'?: SimpleUser;
    'allowPublicApiAccess'?: boolean;
    'useForPages'?: boolean;
    'publishedAt'?: Date;
    'columns'?: Array<Column>;
    'label': string;
    'published'?: boolean;
    'columnCount'?: number;
    'allowChildTables'?: boolean;
    'createdAt'?: Date;
    'deleted'?: boolean;
    'createdBy'?: SimpleUser;
    'name': string;
    'enableChildTablePages'?: boolean;
    'id'?: string;
    'rowCount'?: number;
    'isOrderedManually'?: boolean;
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
