/**
 * Authors
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
* Model definition for a Blog Author.
*/
export class BlogAuthor {
    /**
    * URL to the website of the Blog Author.
    */
    'website': string;
    /**
    * The full name of the Blog Author to be displayed.
    */
    'displayName': string;
    'created': Date;
    /**
    * URL to the Blog Author\'s Facebook page.
    */
    'facebook': string;
    'fullName': string;
    /**
    * A short biography of the blog author.
    */
    'bio': string;
    /**
    * The explicitly defined ISO 639 language code of the blog author.
    */
    'language': BlogAuthorLanguageEnum;
    /**
    * URL to the blog author\'s LinkedIn page.
    */
    'linkedin': string;
    /**
    * URL to the blog author\'s avatar, if supplying a custom one.
    */
    'avatar': string;
    /**
    * ID of the primary blog author this object was translated from.
    */
    'translatedFromId': number;
    /**
    * URL or username of the Twitter account associated with the Blog Author. This will be normalized into the Twitter url for said user.
    */
    'twitter': string;
    /**
    * The timestamp (ISO8601 format) when this Blog Author was deleted.
    */
    'deletedAt': Date;
    'name': string;
    /**
    * The unique ID of the Blog Author.
    */
    'id': string;
    'updated': Date;
    /**
    * Email address of the Blog Author.
    */
    'email': string;
    'slug': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "facebook",
            "baseName": "facebook",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "bio",
            "baseName": "bio",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "BlogAuthorLanguageEnum",
            "format": ""
        },
        {
            "name": "linkedin",
            "baseName": "linkedin",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
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
            "name": "twitter",
            "baseName": "twitter",
            "type": "string",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlogAuthor.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BlogAuthorLanguageEnum {
    Af = 'af',
    AfNa = 'af-na',
    AfZa = 'af-za',
    Agq = 'agq',
    AgqCm = 'agq-cm',
    Ak = 'ak',
    AkGh = 'ak-gh',
    Am = 'am',
    AmEt = 'am-et',
    Ar = 'ar',
    Ar001 = 'ar-001',
    ArAe = 'ar-ae',
    ArBh = 'ar-bh',
    ArDj = 'ar-dj',
    ArDz = 'ar-dz',
    ArEg = 'ar-eg',
    ArEh = 'ar-eh',
    ArEr = 'ar-er',
    ArIl = 'ar-il',
    ArIq = 'ar-iq',
    ArJo = 'ar-jo',
    ArKm = 'ar-km',
    ArKw = 'ar-kw',
    ArLb = 'ar-lb',
    ArLy = 'ar-ly',
    ArMa = 'ar-ma',
    ArMr = 'ar-mr',
    ArOm = 'ar-om',
    ArPs = 'ar-ps',
    ArQa = 'ar-qa',
    ArSa = 'ar-sa',
    ArSd = 'ar-sd',
    ArSo = 'ar-so',
    ArSs = 'ar-ss',
    ArSy = 'ar-sy',
    ArTd = 'ar-td',
    ArTn = 'ar-tn',
    ArYe = 'ar-ye',
    As = 'as',
    AsIn = 'as-in',
    Asa = 'asa',
    AsaTz = 'asa-tz',
    Ast = 'ast',
    AstEs = 'ast-es',
    Az = 'az',
    AzAz = 'az-az',
    Bas = 'bas',
    BasCm = 'bas-cm',
    Be = 'be',
    BeBy = 'be-by',
    Bem = 'bem',
    BemZm = 'bem-zm',
    Bez = 'bez',
    BezTz = 'bez-tz',
    Bg = 'bg',
    BgBg = 'bg-bg',
    Bm = 'bm',
    BmMl = 'bm-ml',
    Bn = 'bn',
    BnBd = 'bn-bd',
    BnIn = 'bn-in',
    Bo = 'bo',
    BoCn = 'bo-cn',
    BoIn = 'bo-in',
    Br = 'br',
    BrFr = 'br-fr',
    Brx = 'brx',
    BrxIn = 'brx-in',
    Bs = 'bs',
    BsBa = 'bs-ba',
    Ca = 'ca',
    CaAd = 'ca-ad',
    CaEs = 'ca-es',
    CaFr = 'ca-fr',
    CaIt = 'ca-it',
    Ccp = 'ccp',
    CcpBd = 'ccp-bd',
    CcpIn = 'ccp-in',
    Ce = 'ce',
    CeRu = 'ce-ru',
    Ceb = 'ceb',
    CebPh = 'ceb-ph',
    Cgg = 'cgg',
    CggUg = 'cgg-ug',
    Chr = 'chr',
    ChrUs = 'chr-us',
    Ckb = 'ckb',
    CkbIq = 'ckb-iq',
    CkbIr = 'ckb-ir',
    Cs = 'cs',
    CsCz = 'cs-cz',
    Cu = 'cu',
    CuRu = 'cu-ru',
    Cy = 'cy',
    CyGb = 'cy-gb',
    Da = 'da',
    DaDk = 'da-dk',
    DaGl = 'da-gl',
    Dav = 'dav',
    DavKe = 'dav-ke',
    De = 'de',
    DeAt = 'de-at',
    DeBe = 'de-be',
    DeCh = 'de-ch',
    DeDe = 'de-de',
    DeGr = 'de-gr',
    DeIt = 'de-it',
    DeLi = 'de-li',
    DeLu = 'de-lu',
    Dje = 'dje',
    DjeNe = 'dje-ne',
    Doi = 'doi',
    DoiIn = 'doi-in',
    Dsb = 'dsb',
    DsbDe = 'dsb-de',
    Dua = 'dua',
    DuaCm = 'dua-cm',
    Dyo = 'dyo',
    DyoSn = 'dyo-sn',
    Dz = 'dz',
    DzBt = 'dz-bt',
    Ebu = 'ebu',
    EbuKe = 'ebu-ke',
    Ee = 'ee',
    EeGh = 'ee-gh',
    EeTg = 'ee-tg',
    El = 'el',
    ElCy = 'el-cy',
    ElGr = 'el-gr',
    En = 'en',
    En001 = 'en-001',
    En150 = 'en-150',
    EnAe = 'en-ae',
    EnAg = 'en-ag',
    EnAi = 'en-ai',
    EnAs = 'en-as',
    EnAt = 'en-at',
    EnAu = 'en-au',
    EnBb = 'en-bb',
    EnBe = 'en-be',
    EnBi = 'en-bi',
    EnBm = 'en-bm',
    EnBs = 'en-bs',
    EnBw = 'en-bw',
    EnBz = 'en-bz',
    EnCa = 'en-ca',
    EnCc = 'en-cc',
    EnCh = 'en-ch',
    EnCk = 'en-ck',
    EnCm = 'en-cm',
    EnCn = 'en-cn',
    EnCx = 'en-cx',
    EnCy = 'en-cy',
    EnDe = 'en-de',
    EnDg = 'en-dg',
    EnDk = 'en-dk',
    EnDm = 'en-dm',
    EnEr = 'en-er',
    EnFi = 'en-fi',
    EnFj = 'en-fj',
    EnFk = 'en-fk',
    EnFm = 'en-fm',
    EnGb = 'en-gb',
    EnGd = 'en-gd',
    EnGg = 'en-gg',
    EnGh = 'en-gh',
    EnGi = 'en-gi',
    EnGm = 'en-gm',
    EnGu = 'en-gu',
    EnGy = 'en-gy',
    EnHk = 'en-hk',
    EnIe = 'en-ie',
    EnIl = 'en-il',
    EnIm = 'en-im',
    EnIn = 'en-in',
    EnIo = 'en-io',
    EnJe = 'en-je',
    EnJm = 'en-jm',
    EnKe = 'en-ke',
    EnKi = 'en-ki',
    EnKn = 'en-kn',
    EnKy = 'en-ky',
    EnLc = 'en-lc',
    EnLr = 'en-lr',
    EnLs = 'en-ls',
    EnLu = 'en-lu',
    EnMg = 'en-mg',
    EnMh = 'en-mh',
    EnMo = 'en-mo',
    EnMp = 'en-mp',
    EnMs = 'en-ms',
    EnMt = 'en-mt',
    EnMu = 'en-mu',
    EnMw = 'en-mw',
    EnMx = 'en-mx',
    EnMy = 'en-my',
    EnNa = 'en-na',
    EnNf = 'en-nf',
    EnNg = 'en-ng',
    EnNl = 'en-nl',
    EnNr = 'en-nr',
    EnNu = 'en-nu',
    EnNz = 'en-nz',
    EnPg = 'en-pg',
    EnPh = 'en-ph',
    EnPk = 'en-pk',
    EnPn = 'en-pn',
    EnPr = 'en-pr',
    EnPw = 'en-pw',
    EnRw = 'en-rw',
    EnSb = 'en-sb',
    EnSc = 'en-sc',
    EnSd = 'en-sd',
    EnSe = 'en-se',
    EnSg = 'en-sg',
    EnSh = 'en-sh',
    EnSi = 'en-si',
    EnSl = 'en-sl',
    EnSs = 'en-ss',
    EnSx = 'en-sx',
    EnSz = 'en-sz',
    EnTc = 'en-tc',
    EnTk = 'en-tk',
    EnTo = 'en-to',
    EnTt = 'en-tt',
    EnTv = 'en-tv',
    EnTz = 'en-tz',
    EnUg = 'en-ug',
    EnUm = 'en-um',
    EnUs = 'en-us',
    EnVc = 'en-vc',
    EnVg = 'en-vg',
    EnVi = 'en-vi',
    EnVu = 'en-vu',
    EnWs = 'en-ws',
    EnZa = 'en-za',
    EnZm = 'en-zm',
    EnZw = 'en-zw',
    Eo = 'eo',
    Eo001 = 'eo-001',
    Es = 'es',
    Es419 = 'es-419',
    EsAr = 'es-ar',
    EsBo = 'es-bo',
    EsBr = 'es-br',
    EsBz = 'es-bz',
    EsCl = 'es-cl',
    EsCo = 'es-co',
    EsCr = 'es-cr',
    EsCu = 'es-cu',
    EsDo = 'es-do',
    EsEa = 'es-ea',
    EsEc = 'es-ec',
    EsEs = 'es-es',
    EsGq = 'es-gq',
    EsGt = 'es-gt',
    EsHn = 'es-hn',
    EsIc = 'es-ic',
    EsMx = 'es-mx',
    EsNi = 'es-ni',
    EsPa = 'es-pa',
    EsPe = 'es-pe',
    EsPh = 'es-ph',
    EsPr = 'es-pr',
    EsPy = 'es-py',
    EsSv = 'es-sv',
    EsUs = 'es-us',
    EsUy = 'es-uy',
    EsVe = 'es-ve',
    Et = 'et',
    EtEe = 'et-ee',
    Eu = 'eu',
    EuEs = 'eu-es',
    Ewo = 'ewo',
    EwoCm = 'ewo-cm',
    Fa = 'fa',
    FaAf = 'fa-af',
    FaIr = 'fa-ir',
    Ff = 'ff',
    FfBf = 'ff-bf',
    FfCm = 'ff-cm',
    FfGh = 'ff-gh',
    FfGm = 'ff-gm',
    FfGn = 'ff-gn',
    FfGw = 'ff-gw',
    FfLr = 'ff-lr',
    FfMr = 'ff-mr',
    FfNe = 'ff-ne',
    FfNg = 'ff-ng',
    FfSl = 'ff-sl',
    FfSn = 'ff-sn',
    Fi = 'fi',
    FiFi = 'fi-fi',
    Fil = 'fil',
    FilPh = 'fil-ph',
    Fo = 'fo',
    FoDk = 'fo-dk',
    FoFo = 'fo-fo',
    Fr = 'fr',
    FrBe = 'fr-be',
    FrBf = 'fr-bf',
    FrBi = 'fr-bi',
    FrBj = 'fr-bj',
    FrBl = 'fr-bl',
    FrCa = 'fr-ca',
    FrCd = 'fr-cd',
    FrCf = 'fr-cf',
    FrCg = 'fr-cg',
    FrCh = 'fr-ch',
    FrCi = 'fr-ci',
    FrCm = 'fr-cm',
    FrDj = 'fr-dj',
    FrDz = 'fr-dz',
    FrFr = 'fr-fr',
    FrGa = 'fr-ga',
    FrGf = 'fr-gf',
    FrGn = 'fr-gn',
    FrGp = 'fr-gp',
    FrGq = 'fr-gq',
    FrHt = 'fr-ht',
    FrKm = 'fr-km',
    FrLu = 'fr-lu',
    FrMa = 'fr-ma',
    FrMc = 'fr-mc',
    FrMf = 'fr-mf',
    FrMg = 'fr-mg',
    FrMl = 'fr-ml',
    FrMq = 'fr-mq',
    FrMr = 'fr-mr',
    FrMu = 'fr-mu',
    FrNc = 'fr-nc',
    FrNe = 'fr-ne',
    FrPf = 'fr-pf',
    FrPm = 'fr-pm',
    FrRe = 'fr-re',
    FrRw = 'fr-rw',
    FrSc = 'fr-sc',
    FrSn = 'fr-sn',
    FrSy = 'fr-sy',
    FrTd = 'fr-td',
    FrTg = 'fr-tg',
    FrTn = 'fr-tn',
    FrVu = 'fr-vu',
    FrWf = 'fr-wf',
    FrYt = 'fr-yt',
    Fur = 'fur',
    FurIt = 'fur-it',
    Fy = 'fy',
    FyNl = 'fy-nl',
    Ga = 'ga',
    GaGb = 'ga-gb',
    GaIe = 'ga-ie',
    Gd = 'gd',
    GdGb = 'gd-gb',
    Gl = 'gl',
    GlEs = 'gl-es',
    Gsw = 'gsw',
    GswCh = 'gsw-ch',
    GswFr = 'gsw-fr',
    GswLi = 'gsw-li',
    Gu = 'gu',
    GuIn = 'gu-in',
    Guz = 'guz',
    GuzKe = 'guz-ke',
    Gv = 'gv',
    GvIm = 'gv-im',
    Ha = 'ha',
    HaGh = 'ha-gh',
    HaNe = 'ha-ne',
    HaNg = 'ha-ng',
    Haw = 'haw',
    HawUs = 'haw-us',
    He = 'he',
    Hi = 'hi',
    HiIn = 'hi-in',
    Hr = 'hr',
    HrBa = 'hr-ba',
    HrHr = 'hr-hr',
    Hsb = 'hsb',
    HsbDe = 'hsb-de',
    Hu = 'hu',
    HuHu = 'hu-hu',
    Hy = 'hy',
    HyAm = 'hy-am',
    Ia = 'ia',
    Ia001 = 'ia-001',
    Id = 'id',
    Ig = 'ig',
    IgNg = 'ig-ng',
    Ii = 'ii',
    IiCn = 'ii-cn',
    IdId = 'id-id',
    Is = 'is',
    IsIs = 'is-is',
    It = 'it',
    ItCh = 'it-ch',
    ItIt = 'it-it',
    ItSm = 'it-sm',
    ItVa = 'it-va',
    HeIl = 'he-il',
    Ja = 'ja',
    JaJp = 'ja-jp',
    Jgo = 'jgo',
    JgoCm = 'jgo-cm',
    Yi = 'yi',
    Yi001 = 'yi-001',
    Jmc = 'jmc',
    JmcTz = 'jmc-tz',
    Jv = 'jv',
    JvId = 'jv-id',
    Ka = 'ka',
    KaGe = 'ka-ge',
    Kab = 'kab',
    KabDz = 'kab-dz',
    Kam = 'kam',
    KamKe = 'kam-ke',
    Kde = 'kde',
    KdeTz = 'kde-tz',
    Kea = 'kea',
    KeaCv = 'kea-cv',
    Khq = 'khq',
    KhqMl = 'khq-ml',
    Ki = 'ki',
    KiKe = 'ki-ke',
    Kk = 'kk',
    KkKz = 'kk-kz',
    Kkj = 'kkj',
    KkjCm = 'kkj-cm',
    Kl = 'kl',
    KlGl = 'kl-gl',
    Kln = 'kln',
    KlnKe = 'kln-ke',
    Km = 'km',
    KmKh = 'km-kh',
    Kn = 'kn',
    KnIn = 'kn-in',
    Ko = 'ko',
    KoKp = 'ko-kp',
    KoKr = 'ko-kr',
    Kok = 'kok',
    KokIn = 'kok-in',
    Ks = 'ks',
    KsIn = 'ks-in',
    Ksb = 'ksb',
    KsbTz = 'ksb-tz',
    Ksf = 'ksf',
    KsfCm = 'ksf-cm',
    Ksh = 'ksh',
    KshDe = 'ksh-de',
    Kw = 'kw',
    KwGb = 'kw-gb',
    Ku = 'ku',
    KuTr = 'ku-tr',
    Ky = 'ky',
    KyKg = 'ky-kg',
    Lag = 'lag',
    LagTz = 'lag-tz',
    Lb = 'lb',
    LbLu = 'lb-lu',
    Lg = 'lg',
    LgUg = 'lg-ug',
    Lkt = 'lkt',
    LktUs = 'lkt-us',
    Ln = 'ln',
    LnAo = 'ln-ao',
    LnCd = 'ln-cd',
    LnCf = 'ln-cf',
    LnCg = 'ln-cg',
    Lo = 'lo',
    LoLa = 'lo-la',
    Lrc = 'lrc',
    LrcIq = 'lrc-iq',
    LrcIr = 'lrc-ir',
    Lt = 'lt',
    LtLt = 'lt-lt',
    Lu = 'lu',
    LuCd = 'lu-cd',
    Luo = 'luo',
    LuoKe = 'luo-ke',
    Luy = 'luy',
    LuyKe = 'luy-ke',
    Lv = 'lv',
    LvLv = 'lv-lv',
    Mai = 'mai',
    MaiIn = 'mai-in',
    Mas = 'mas',
    MasKe = 'mas-ke',
    MasTz = 'mas-tz',
    Mer = 'mer',
    MerKe = 'mer-ke',
    Mfe = 'mfe',
    MfeMu = 'mfe-mu',
    Mg = 'mg',
    MgMg = 'mg-mg',
    Mgh = 'mgh',
    MghMz = 'mgh-mz',
    Mgo = 'mgo',
    MgoCm = 'mgo-cm',
    Mi = 'mi',
    MiNz = 'mi-nz',
    Mk = 'mk',
    MkMk = 'mk-mk',
    Ml = 'ml',
    MlIn = 'ml-in',
    Mn = 'mn',
    MnMn = 'mn-mn',
    Mni = 'mni',
    MniIn = 'mni-in',
    Mr = 'mr',
    MrIn = 'mr-in',
    Ms = 'ms',
    MsBn = 'ms-bn',
    MsId = 'ms-id',
    MsMy = 'ms-my',
    MsSg = 'ms-sg',
    Mt = 'mt',
    MtMt = 'mt-mt',
    Mua = 'mua',
    MuaCm = 'mua-cm',
    My = 'my',
    MyMm = 'my-mm',
    Mzn = 'mzn',
    MznIr = 'mzn-ir',
    Naq = 'naq',
    NaqNa = 'naq-na',
    Nb = 'nb',
    NbNo = 'nb-no',
    NbSj = 'nb-sj',
    Nd = 'nd',
    NdZw = 'nd-zw',
    Nds = 'nds',
    NdsDe = 'nds-de',
    NdsNl = 'nds-nl',
    Ne = 'ne',
    NeIn = 'ne-in',
    NeNp = 'ne-np',
    Nl = 'nl',
    NlAw = 'nl-aw',
    NlBe = 'nl-be',
    NlCh = 'nl-ch',
    NlBq = 'nl-bq',
    NlCw = 'nl-cw',
    NlLu = 'nl-lu',
    NlNl = 'nl-nl',
    NlSr = 'nl-sr',
    NlSx = 'nl-sx',
    Nmg = 'nmg',
    NmgCm = 'nmg-cm',
    Nn = 'nn',
    NnNo = 'nn-no',
    Nnh = 'nnh',
    NnhCm = 'nnh-cm',
    No = 'no',
    NoNo = 'no-no',
    Nus = 'nus',
    NusSs = 'nus-ss',
    Nyn = 'nyn',
    NynUg = 'nyn-ug',
    Om = 'om',
    OmEt = 'om-et',
    OmKe = 'om-ke',
    Or = 'or',
    OrIn = 'or-in',
    Os = 'os',
    OsGe = 'os-ge',
    OsRu = 'os-ru',
    Pa = 'pa',
    PaIn = 'pa-in',
    PaPk = 'pa-pk',
    Pcm = 'pcm',
    PcmNg = 'pcm-ng',
    Pl = 'pl',
    PlPl = 'pl-pl',
    Prg = 'prg',
    Prg001 = 'prg-001',
    Ps = 'ps',
    PsAf = 'ps-af',
    PsPk = 'ps-pk',
    Pt = 'pt',
    PtAo = 'pt-ao',
    PtBr = 'pt-br',
    PtCh = 'pt-ch',
    PtCv = 'pt-cv',
    PtGq = 'pt-gq',
    PtGw = 'pt-gw',
    PtLu = 'pt-lu',
    PtMo = 'pt-mo',
    PtMz = 'pt-mz',
    PtPt = 'pt-pt',
    PtSt = 'pt-st',
    PtTl = 'pt-tl',
    Qu = 'qu',
    QuBo = 'qu-bo',
    QuEc = 'qu-ec',
    QuPe = 'qu-pe',
    Rm = 'rm',
    RmCh = 'rm-ch',
    Rn = 'rn',
    RnBi = 'rn-bi',
    Ro = 'ro',
    RoMd = 'ro-md',
    RoRo = 'ro-ro',
    Rof = 'rof',
    RofTz = 'rof-tz',
    Ru = 'ru',
    RuBy = 'ru-by',
    RuKg = 'ru-kg',
    RuKz = 'ru-kz',
    RuMd = 'ru-md',
    RuRu = 'ru-ru',
    RuUa = 'ru-ua',
    Rw = 'rw',
    RwRw = 'rw-rw',
    Rwk = 'rwk',
    RwkTz = 'rwk-tz',
    Sa = 'sa',
    SaIn = 'sa-in',
    Sah = 'sah',
    SahRu = 'sah-ru',
    Saq = 'saq',
    SaqKe = 'saq-ke',
    Sat = 'sat',
    SatIn = 'sat-in',
    Sbp = 'sbp',
    SbpTz = 'sbp-tz',
    Sd = 'sd',
    SdIn = 'sd-in',
    SdPk = 'sd-pk',
    Se = 'se',
    SeFi = 'se-fi',
    SeNo = 'se-no',
    SeSe = 'se-se',
    Seh = 'seh',
    SehMz = 'seh-mz',
    Ses = 'ses',
    SesMl = 'ses-ml',
    Sg = 'sg',
    SgCf = 'sg-cf',
    Shi = 'shi',
    ShiMa = 'shi-ma',
    Si = 'si',
    SiLk = 'si-lk',
    Sk = 'sk',
    SkSk = 'sk-sk',
    Sl = 'sl',
    SlSi = 'sl-si',
    Smn = 'smn',
    SmnFi = 'smn-fi',
    Sn = 'sn',
    SnZw = 'sn-zw',
    So = 'so',
    SoDj = 'so-dj',
    SoEt = 'so-et',
    SoKe = 'so-ke',
    SoSo = 'so-so',
    Sq = 'sq',
    SqAl = 'sq-al',
    SqMk = 'sq-mk',
    SqXk = 'sq-xk',
    Sr = 'sr',
    SrBa = 'sr-ba',
    SrCs = 'sr-cs',
    SrMe = 'sr-me',
    SrRs = 'sr-rs',
    SrXk = 'sr-xk',
    Su = 'su',
    SuId = 'su-id',
    Sv = 'sv',
    SvAx = 'sv-ax',
    SvFi = 'sv-fi',
    SvSe = 'sv-se',
    Sw = 'sw',
    SwCd = 'sw-cd',
    SwKe = 'sw-ke',
    SwTz = 'sw-tz',
    SwUg = 'sw-ug',
    Sy = 'sy',
    Ta = 'ta',
    TaIn = 'ta-in',
    TaLk = 'ta-lk',
    TaMy = 'ta-my',
    TaSg = 'ta-sg',
    Te = 'te',
    TeIn = 'te-in',
    Teo = 'teo',
    TeoKe = 'teo-ke',
    TeoUg = 'teo-ug',
    Tg = 'tg',
    TgTj = 'tg-tj',
    Th = 'th',
    ThTh = 'th-th',
    Ti = 'ti',
    TiEr = 'ti-er',
    TiEt = 'ti-et',
    Tk = 'tk',
    TkTm = 'tk-tm',
    Tl = 'tl',
    To = 'to',
    ToTo = 'to-to',
    Tr = 'tr',
    TrCy = 'tr-cy',
    TrTr = 'tr-tr',
    Tt = 'tt',
    TtRu = 'tt-ru',
    Twq = 'twq',
    TwqNe = 'twq-ne',
    Tzm = 'tzm',
    TzmMa = 'tzm-ma',
    Ug = 'ug',
    UgCn = 'ug-cn',
    Uk = 'uk',
    UkUa = 'uk-ua',
    Ur = 'ur',
    UrIn = 'ur-in',
    UrPk = 'ur-pk',
    Uz = 'uz',
    UzAf = 'uz-af',
    UzUz = 'uz-uz',
    Vai = 'vai',
    VaiLr = 'vai-lr',
    Vi = 'vi',
    ViVn = 'vi-vn',
    Vo = 'vo',
    Vo001 = 'vo-001',
    Vun = 'vun',
    VunTz = 'vun-tz',
    Wae = 'wae',
    WaeCh = 'wae-ch',
    Wo = 'wo',
    WoSn = 'wo-sn',
    Xh = 'xh',
    XhZa = 'xh-za',
    Xog = 'xog',
    XogUg = 'xog-ug',
    Yav = 'yav',
    YavCm = 'yav-cm',
    Yo = 'yo',
    YoBj = 'yo-bj',
    YoNg = 'yo-ng',
    Yue = 'yue',
    YueCn = 'yue-cn',
    YueHk = 'yue-hk',
    Zgh = 'zgh',
    ZghMa = 'zgh-ma',
    Zh = 'zh',
    ZhCn = 'zh-cn',
    ZhHk = 'zh-hk',
    ZhMo = 'zh-mo',
    ZhSg = 'zh-sg',
    ZhTw = 'zh-tw',
    ZhHans = 'zh-hans',
    ZhHant = 'zh-hant',
    Zu = 'zu',
    ZuZa = 'zu-za'
}

