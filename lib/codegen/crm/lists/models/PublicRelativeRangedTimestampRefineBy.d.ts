import { PublicTimeOffset } from '../models/PublicTimeOffset';
export declare class PublicRelativeRangedTimestampRefineBy {
    'upperBoundOffset': PublicTimeOffset;
    'rangeType': string;
    'lowerBoundOffset': PublicTimeOffset;
    'type': PublicRelativeRangedTimestampRefineByTypeEnum;
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
export declare enum PublicRelativeRangedTimestampRefineByTypeEnum {
    RelativeRanged = "RELATIVE_RANGED"
}
