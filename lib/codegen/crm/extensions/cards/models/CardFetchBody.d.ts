import { CardObjectTypeBody } from '../models/CardObjectTypeBody';
export declare class CardFetchBody {
    'serverlessFunction'?: string;
    'cardType'?: CardFetchBodyCardTypeEnum;
    'objectTypes': Array<CardObjectTypeBody>;
    'targetUrl': string;
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
export declare enum CardFetchBodyCardTypeEnum {
    External = "EXTERNAL",
    Serverless = "SERVERLESS"
}
