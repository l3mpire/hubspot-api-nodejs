export declare class PublicCalendarDatePropertyOperation {
    'useFiscalYear'?: boolean;
    'fiscalYearStart'?: PublicCalendarDatePropertyOperationFiscalYearStartEnum;
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicCalendarDatePropertyOperationOperationTypeEnum;
    'timeUnitCount'?: number;
    'operator': string;
    'timeUnit': string;
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
export declare enum PublicCalendarDatePropertyOperationFiscalYearStartEnum {
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER"
}
export declare enum PublicCalendarDatePropertyOperationOperationTypeEnum {
    CalendarDate = "CALENDAR_DATE"
}
