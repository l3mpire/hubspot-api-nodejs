import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventDefaultResponse {
    'startDateTime'?: Date;
    'customProperties'?: Array<PropertyValue>;
    'eventCancelled'?: boolean;
    'eventOrganizer': string;
    'eventUrl'?: string;
    'eventDescription'?: string;
    'eventName': string;
    'eventType'?: string;
    'eventCompleted'?: boolean;
    'endDateTime'?: Date;
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
