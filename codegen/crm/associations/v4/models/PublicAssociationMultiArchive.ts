/**
 * CRM Associations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicObjectId } from '../models/PublicObjectId';

export class PublicAssociationMultiArchive {
    '_from': PublicObjectId;
    'to': Array<PublicObjectId>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_from",
            "baseName": "from",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<PublicObjectId>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationMultiArchive.attributeTypeMap;
    }

    public constructor() {
    }
}

