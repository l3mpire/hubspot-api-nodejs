import { PublicSurveyMonkeyValueFilterValueComparison } from '../models/PublicSurveyMonkeyValueFilterValueComparison';
export declare class PublicEventFilterMetadata {
    'property': string;
    'operation': PublicSurveyMonkeyValueFilterValueComparison;
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
