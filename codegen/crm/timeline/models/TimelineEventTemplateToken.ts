/**
 * Timeline
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimelineEventTemplateTokenOption } from '../models/TimelineEventTemplateTokenOption';

/**
* State of the token definition.
*/
export class TimelineEventTemplateToken {
    /**
    * The date and time that the Event Template Token was created, as an ISO 8601 timestamp. Will be null if the template was created before Feb 18th, 2020.
    */
    'createdAt'?: Date;
    /**
    * If type is `enumeration`, we should have a list of options to choose from.
    */
    'options'?: Array<TimelineEventTemplateTokenOption>;
    /**
    * The name of the token referenced in the templates. This must be unique for the specific template. It may only contain alphanumeric characters, periods, dashes, or underscores (. - _).
    */
    'name': string;
    /**
    * Used for list segmentation and reporting.
    */
    'label': string;
    /**
    * The name of the CRM object property. This will populate the CRM object property associated with the event. With enough of these, you can fully build CRM objects via the Timeline API.
    */
    'objectPropertyName'?: string;
    /**
    * The data type of the token. You can currently choose from [string, number, date, enumeration].
    */
    'type': TimelineEventTemplateTokenTypeEnum;
    /**
    * The date and time that the Event Template Token was last updated, as an ISO 8601 timestamp. Will be null if the template was created before Feb 18th, 2020.
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<TimelineEventTemplateTokenOption>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectPropertyName",
            "baseName": "objectPropertyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TimelineEventTemplateTokenTypeEnum",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventTemplateToken.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TimelineEventTemplateTokenTypeEnum {
    Date = 'date',
    Enumeration = 'enumeration',
    Number = 'number',
    String = 'string'
}

