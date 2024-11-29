import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventPublicDefaultResponse {
    'eventOrganizer': string;
    'eventUrl'?: string;
    'eventType'?: string;
    'eventCompleted'?: boolean;
    'endDateTime'?: Date;
    'createdAt': Date;
    'startDateTime'?: Date;
    'customProperties'?: Array<PropertyValue>;
    'eventCancelled'?: boolean;
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
