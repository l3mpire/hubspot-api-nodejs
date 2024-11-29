import { ColumnRequest } from '../models/ColumnRequest';
export declare class HubDbTableV3Request {
    'dynamicMetaTags'?: {
        [key: string]: number;
    };
    'allowPublicApiAccess'?: boolean;
    'useForPages'?: boolean;
    'columns'?: Array<ColumnRequest>;
    'name': string;
    'enableChildTablePages'?: boolean;
    'label': string;
    'allowChildTables'?: boolean;
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
