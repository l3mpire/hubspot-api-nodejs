export declare class PublicSurveyMonkeyFilter {
    'surveyId': string;
    'filterType': PublicSurveyMonkeyFilterFilterTypeEnum;
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
export declare enum PublicSurveyMonkeyFilterFilterTypeEnum {
    SurveyMonkey = "SURVEY_MONKEY"
}
