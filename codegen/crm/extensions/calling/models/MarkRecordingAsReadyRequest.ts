/**
 * CRM Calling Extensions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class MarkRecordingAsReadyRequest {
    'engagementId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "engagementId",
            "baseName": "engagementId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return MarkRecordingAsReadyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
