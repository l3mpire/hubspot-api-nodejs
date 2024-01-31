/**
 * Posts
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Styles } from '../models/Styles';

export class RowMetaData {
    'cssClass': string;
    'styles': Styles;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cssClass",
            "baseName": "cssClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "styles",
            "baseName": "styles",
            "type": "Styles",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RowMetaData.attributeTypeMap;
    }

    public constructor() {
    }
}

