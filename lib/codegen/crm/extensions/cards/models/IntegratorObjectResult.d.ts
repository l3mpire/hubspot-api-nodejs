import { IntegratorObjectResultActionsInner } from '../models/IntegratorObjectResultActionsInner';
import { ObjectToken } from '../models/ObjectToken';
export declare class IntegratorObjectResult {
    'linkUrl'?: string;
    'tokens': Array<ObjectToken>;
    'id': string;
    'title': string;
    'actions': Array<IntegratorObjectResultActionsInner>;
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
