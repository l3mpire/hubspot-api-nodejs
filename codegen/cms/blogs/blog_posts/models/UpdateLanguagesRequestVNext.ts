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


/**
* Request object for updating languages within a multi-language group.
*/
export class UpdateLanguagesRequestVNext {
    /**
    * Map of object IDs to associated languages of object in the multi-language group.
    */
    'languages': { [key: string]: string; };
    /**
    * ID of the primary object in the multi-language group.
    */
    'primaryId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "languages",
            "baseName": "languages",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "primaryId",
            "baseName": "primaryId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateLanguagesRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

