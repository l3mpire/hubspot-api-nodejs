import { PublicIndexOffset } from '../models/PublicIndexOffset';
import { PublicIndexedTimePointIndexReference } from '../models/PublicIndexedTimePointIndexReference';
export declare class PublicIndexedTimePoint {
    'offset'?: PublicIndexOffset;
    'timezoneSource'?: string;
    'indexReference': PublicIndexedTimePointIndexReference;
    'timeType': PublicIndexedTimePointTimeTypeEnum;
    'zoneId': string;
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
export declare enum PublicIndexedTimePointTimeTypeEnum {
    Indexed = "INDEXED"
}
