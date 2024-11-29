import { ActionConfirmationBody } from '../models/ActionConfirmationBody';
export declare class ActionHookActionBody {
    'propertyNamesIncluded': Array<string>;
    'confirmation'?: ActionConfirmationBody;
    'label'?: string;
    'type': ActionHookActionBodyTypeEnum;
    'httpMethod': ActionHookActionBodyHttpMethodEnum;
    'url': string;
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
export declare enum ActionHookActionBodyTypeEnum {
    ActionHook = "ACTION_HOOK"
}
export declare enum ActionHookActionBodyHttpMethodEnum {
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
