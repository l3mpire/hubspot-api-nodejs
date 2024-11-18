/**
 * Goal Targets
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FilterGroup } from '../models/FilterGroup';

export class PublicObjectSearchRequest {
    'query'?: string;
    'limit'?: number;
    'after'?: string;
    'sorts'?: Array<{ 'field': string, 'direction': 'ASCENDING' | 'DESCENDING' }>;;
    'properties'?: Array<string>;
    'filterGroups'?: Array<FilterGroup>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "after",
            "baseName": "after",
            "type": "string",
            "format": ""
        },
        {
            "name": "sorts",
            "baseName": "sorts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "filterGroups",
            "baseName": "filterGroups",
            "type": "Array<FilterGroup>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicObjectSearchRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

