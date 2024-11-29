import { PublicTimeOffset } from '../models/PublicTimeOffset';
export declare class PublicRelativeComparativeTimestampRefineBy {
    'comparison': string;
    'timeOffset': PublicTimeOffset;
    'type': PublicRelativeComparativeTimestampRefineByTypeEnum;
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
export declare enum PublicRelativeComparativeTimestampRefineByTypeEnum {
    RelativeComparative = "RELATIVE_COMPARATIVE"
}
