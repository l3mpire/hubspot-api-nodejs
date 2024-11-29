import { PublicSurveyMonkeyValueFilterValueComparison } from '../models/PublicSurveyMonkeyValueFilterValueComparison';
export declare class PublicSurveyMonkeyValueFilter {
    'valueComparison': PublicSurveyMonkeyValueFilterValueComparison;
    'surveyId': string;
    'surveyQuestion': string;
    'filterType': PublicSurveyMonkeyValueFilterFilterTypeEnum;
    'surveyAnswerRowId'?: string;
    'surveyAnswerColId'?: string;
    'operator': string;
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
export declare enum PublicSurveyMonkeyValueFilterFilterTypeEnum {
    SurveyMonkeyValue = "SURVEY_MONKEY_VALUE"
}
