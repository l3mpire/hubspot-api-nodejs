export declare class PublicConstantFilter {
    'shouldAccept': boolean;
    'source'?: string;
    'filterType': PublicConstantFilterFilterTypeEnum;
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
export declare enum PublicConstantFilterFilterTypeEnum {
    Constant = "CONSTANT"
}
