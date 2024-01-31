/**
 * CRM Timeline
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TimelineEventIFrame {
    /**
    * The text displaying the link that will display the iframe.
    */
    'linkLabel': string;
    /**
    * The label of the modal window that displays the iframe contents.
    */
    'headerLabel': string;
    /**
    * The width of the modal window in pixels.
    */
    'width': number;
    /**
    * The URI of the iframe contents.
    */
    'url': string;
    /**
    * The height of the modal window in pixels.
    */
    'height': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "linkLabel",
            "baseName": "linkLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "headerLabel",
            "baseName": "headerLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventIFrame.attributeTypeMap;
    }

    public constructor() {
    }
}

