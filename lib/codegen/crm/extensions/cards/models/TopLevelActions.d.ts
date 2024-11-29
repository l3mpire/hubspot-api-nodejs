import { IFrameActionBody } from '../models/IFrameActionBody';
import { IntegratorObjectResultActionsInner } from '../models/IntegratorObjectResultActionsInner';
export declare class TopLevelActions {
    'secondary': Array<IntegratorObjectResultActionsInner>;
    'settings'?: IFrameActionBody;
    'primary'?: IntegratorObjectResultActionsInner;
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
