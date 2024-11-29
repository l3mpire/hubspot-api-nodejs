import { TimelineEventIFrame } from '../models/TimelineEventIFrame';
export declare class TimelineEvent {
    'eventTemplateId': string;
    'extraData'?: any;
    'timelineIFrame'?: TimelineEventIFrame;
    'domain'?: string;
    'tokens': {
        [key: string]: string;
    };
    'id'?: string;
    'utk'?: string;
    'email'?: string;
    'objectId'?: string;
    'timestamp'?: Date;
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
