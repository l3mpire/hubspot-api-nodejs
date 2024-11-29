export declare class ParticipationProperties {
    'occurredAt': number;
    'attendancePercentage'?: string;
    'attendanceState': ParticipationPropertiesAttendanceStateEnum;
    'attendanceDurationSeconds'?: number;
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
export declare enum ParticipationPropertiesAttendanceStateEnum {
    Registered = "REGISTERED",
    Attended = "ATTENDED",
    Cancelled = "CANCELLED",
    Empty = "EMPTY",
    NoShow = "NO_SHOW"
}
