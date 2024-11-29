import { PublicTimePointOperationTimePoint } from '../models/PublicTimePointOperationTimePoint';
export declare class PublicTimePointOperation {
    'endpointBehavior'?: string;
    'includeObjectsWithNoValueSet': boolean;
    'propertyParser'?: string;
    'operationType': PublicTimePointOperationOperationTypeEnum;
    'timePoint': PublicTimePointOperationTimePoint;
    'type': string;
    'operator': string;
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
export declare enum PublicTimePointOperationOperationTypeEnum {
    TimePoint = "TIME_POINT"
}
