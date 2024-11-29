export declare class PublicWeekReference {
    'dayOfWeek': PublicWeekReferenceDayOfWeekEnum;
    'hour'?: number;
    'millisecond'?: number;
    'referenceType': PublicWeekReferenceReferenceTypeEnum;
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
export declare enum PublicWeekReferenceDayOfWeekEnum {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
export declare enum PublicWeekReferenceReferenceTypeEnum {
    Week = "WEEK"
}
