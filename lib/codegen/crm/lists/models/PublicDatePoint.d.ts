export declare class PublicDatePoint {
    'month': number;
    'hour'?: number;
    'year': number;
    'timezoneSource'?: string;
    'millisecond'?: number;
    'timeType': PublicDatePointTimeTypeEnum;
    'zoneId': string;
    'day': number;
    'minute'?: number;
    'second'?: number;
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
export declare enum PublicDatePointTimeTypeEnum {
    Date = "DATE"
}
