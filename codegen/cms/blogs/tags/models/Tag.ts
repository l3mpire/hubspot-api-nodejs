/**
 * Tags
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
* Model definition for a Tag.
*/
export class Tag {
    /**
    * The timestamp (ISO8601 format) when this Blog Tag was deleted.
    */
    'deletedAt': Date;
    'created': Date;
    /**
    * The name of the tag.
    */
    'name': string;
    /**
    * The explicitly defined ISO 639 language code of the tag.
    */
    'language': TagLanguageEnum;
    /**
    * The unique ID of the Blog Tag.
    */
    'id': string;
    /**
    * ID of the primary tag this object was translated from.
    */
    'translatedFromId': number;
    'updated': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "TagLanguageEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "translatedFromId",
            "baseName": "translatedFromId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TagLanguageEnum = "af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za" ;

