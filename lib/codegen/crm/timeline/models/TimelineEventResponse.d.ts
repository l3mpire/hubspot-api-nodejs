import { TimelineEventIFrame } from '../models/TimelineEventIFrame';
export declare class TimelineEventResponse {
    'eventTemplateId': string;
    'createdAt'?: Date;
    'extraData'?: any;
    'timelineIFrame'?: TimelineEventIFrame;
    'domain'?: string;
    'tokens': {
        [key: string]: string;
    };
    'id': string;
    'utk'?: string;
    'email'?: string;
    'objectId'?: string;
    'timestamp'?: Date;
    'objectType': string;
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
