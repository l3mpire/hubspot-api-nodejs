import { ImportTemplate } from '../models/ImportTemplate';
import { PublicImportMetadata } from '../models/PublicImportMetadata';
export declare class PublicImportResponse {
    'importTemplate'?: ImportTemplate;
    'createdAt': Date;
    'metadata': PublicImportMetadata;
    'importRequestJson'?: any;
    'importSource'?: PublicImportResponseImportSourceEnum;
    'importName'?: string;
    'state': PublicImportResponseStateEnum;
    'id': string;
    'optOutImport': boolean;
    'updatedAt': Date;
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
export declare enum PublicImportResponseImportSourceEnum {
    Api = "API",
    CrmUi = "CRM_UI",
    Import = "IMPORT",
    MobileAndroid = "MOBILE_ANDROID",
    MobileIos = "MOBILE_IOS",
    Salesforce = "SALESFORCE"
}
export declare enum PublicImportResponseStateEnum {
    Started = "STARTED",
    Processing = "PROCESSING",
    Done = "DONE",
    Failed = "FAILED",
    Canceled = "CANCELED",
    Deferred = "DEFERRED",
    Reverted = "REVERTED"
}
