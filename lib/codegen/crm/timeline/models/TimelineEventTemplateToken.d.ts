import { TimelineEventTemplateTokenOption } from '../models/TimelineEventTemplateTokenOption';
export declare class TimelineEventTemplateToken {
    'createdAt'?: Date;
    'options'?: Array<TimelineEventTemplateTokenOption>;
    'name': string;
    'label': string;
    'objectPropertyName'?: string;
    'type': TimelineEventTemplateTokenTypeEnum;
    'updatedAt'?: Date;
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
export declare enum TimelineEventTemplateTokenTypeEnum {
    Date = "date",
    Enumeration = "enumeration",
    Number = "number",
    String = "string"
}
