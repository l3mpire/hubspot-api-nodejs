/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicEventAnalyticsFilterCoalescingRefineBy } from '../models/PublicEventAnalyticsFilterCoalescingRefineBy';

export class PublicNumAssociationsFilter {
    'filterType': PublicNumAssociationsFilterFilterTypeEnum;
    'associationTypeId': number;
    'associationCategory': string;
    'coalescingRefineBy': PublicEventAnalyticsFilterCoalescingRefineBy;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicNumAssociationsFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "associationTypeId",
            "baseName": "associationTypeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "associationCategory",
            "baseName": "associationCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicNumAssociationsFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicNumAssociationsFilterFilterTypeEnum {
    NumAssociations = 'NUM_ASSOCIATIONS'
}

