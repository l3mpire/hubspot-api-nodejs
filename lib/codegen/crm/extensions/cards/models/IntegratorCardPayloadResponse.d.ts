import { IntegratorObjectResult } from '../models/IntegratorObjectResult';
import { TopLevelActions } from '../models/TopLevelActions';
export declare class IntegratorCardPayloadResponse {
    'responseVersion'?: IntegratorCardPayloadResponseResponseVersionEnum;
    'cardLabel'?: string;
    'allItemsLinkUrl'?: string;
    'totalCount': number;
    'topLevelActions'?: TopLevelActions;
    'sections'?: Array<IntegratorObjectResult>;
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
export declare enum IntegratorCardPayloadResponseResponseVersionEnum {
    V1 = "v1",
    V3 = "v3"
}
