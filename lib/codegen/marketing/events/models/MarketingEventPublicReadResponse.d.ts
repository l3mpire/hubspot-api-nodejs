import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventPublicReadResponse {
    'registrants': number;
    'eventOrganizer': string;
    'eventUrl'?: string;
    'attendees': number;
    'eventType'?: string;
    'eventCompleted'?: boolean;
    'endDateTime'?: Date;
    'noShows': number;
    'cancellations': number;
    'createdAt': Date;
    'startDateTime'?: Date;
    'customProperties'?: Array<PropertyValue>;
    'eventCancelled'?: boolean;
    'externalEventId': string;
    'eventDescription'?: string;
    'eventName': string;
    'id': string;
    'updatedAt': Date;
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
