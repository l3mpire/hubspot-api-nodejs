export declare class PublicIndexOffset {
    'milliseconds'?: number;
    'hours'?: number;
    'seconds'?: number;
    'months'?: number;
    'weeks'?: number;
    'minutes'?: number;
    'quarters'?: number;
    'days'?: number;
    'years'?: number;
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
