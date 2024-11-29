import { ActionConfirmationBody } from '../models/ActionConfirmationBody';
export declare class IntegratorObjectResultActionsInner {
    'propertyNamesIncluded': Array<string>;
    'confirmation'?: ActionConfirmationBody;
    'label'?: string;
    'type': IntegratorObjectResultActionsInnerTypeEnum;
    'httpMethod': IntegratorObjectResultActionsInnerHttpMethodEnum;
    'url': string;
    'width': number;
    'height': number;
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
export declare enum IntegratorObjectResultActionsInnerTypeEnum {
    ActionHook = "ACTION_HOOK",
    Iframe = "IFRAME"
}
export declare enum IntegratorObjectResultActionsInnerHttpMethodEnum {
    Connect = "CONNECT",
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Options = "OPTIONS",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
    Trace = "TRACE"
}
