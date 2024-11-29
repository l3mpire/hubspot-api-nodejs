import { PublicTimePointOperationTimePoint } from '../models/PublicTimePointOperationTimePoint';
export declare class PublicRangedTimeOperation {
    'upperBoundEndpointBehavior'?: string;
    'includeObjectsWithNoValueSet': boolean;
    'upperBoundTimePoint': PublicTimePointOperationTimePoint;
    'propertyParser'?: string;
    'operationType': string;
    'type': PublicRangedTimeOperationTypeEnum;
    'lowerBoundEndpointBehavior'?: string;
    'operator': string;
    'lowerBoundTimePoint': PublicTimePointOperationTimePoint;
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
export declare enum PublicRangedTimeOperationTypeEnum {
    TimeRanged = "TIME_RANGED"
}
