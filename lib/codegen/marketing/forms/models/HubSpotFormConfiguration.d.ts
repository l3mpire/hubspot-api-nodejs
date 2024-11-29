import { FormPostSubmitAction } from '../models/FormPostSubmitAction';
import { LifecycleStage } from '../models/LifecycleStage';
export declare class HubSpotFormConfiguration {
    'createNewContactForNewEmail': boolean;
    'editable': boolean;
    'allowLinkToResetKnownValues': boolean;
    'lifecycleStages'?: Array<LifecycleStage>;
    'postSubmitAction': FormPostSubmitAction;
    'language': HubSpotFormConfigurationLanguageEnum;
    'prePopulateKnownValues': boolean;
    'cloneable': boolean;
    'notifyContactOwner': boolean;
    'recaptchaEnabled': boolean;
    'archivable': boolean;
    'notifyRecipients': Array<string>;
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
export declare enum HubSpotFormConfigurationLanguageEnum {
    Af = "af",
    ArEg = "ar-eg",
    Bg = "bg",
    Bn = "bn",
    CaEs = "ca-es",
    Cs = "cs",
    Da = "da",
    De = "de",
    El = "el",
    En = "en",
    Es = "es",
    EsMx = "es-mx",
    Fi = "fi",
    Fr = "fr",
    FrCa = "fr-ca",
    HeIl = "he-il",
    Hr = "hr",
    Hu = "hu",
    Id = "id",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Lt = "lt",
    Ms = "ms",
    Nl = "nl",
    NoNo = "no-no",
    Pl = "pl",
    Pt = "pt",
    PtBr = "pt-br",
    Ro = "ro",
    Ru = "ru",
    Sk = "sk",
    Sl = "sl",
    Sv = "sv",
    Th = "th",
    Tl = "tl",
    Tr = "tr",
    Uk = "uk",
    Vi = "vi",
    ZhCn = "zh-cn",
    ZhHk = "zh-hk",
    ZhTw = "zh-tw"
}
