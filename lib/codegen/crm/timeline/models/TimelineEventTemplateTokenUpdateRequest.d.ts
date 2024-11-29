import { TimelineEventTemplateTokenOption } from '../models/TimelineEventTemplateTokenOption';
export declare class TimelineEventTemplateTokenUpdateRequest {
    'options'?: Array<TimelineEventTemplateTokenOption>;
    'label': string;
    'objectPropertyName'?: string;
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
