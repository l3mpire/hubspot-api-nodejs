export declare class PipelineStage {
    'createdAt': Date;
    'archivedAt'?: Date;
    'archived': boolean;
    'metadata': {
        [key: string]: string;
    };
    'displayOrder': number;
    'writePermissions'?: PipelineStageWritePermissionsEnum;
    'label': string;
    'id': string;
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
export declare enum PipelineStageWritePermissionsEnum {
    CrmPermissionsEnforcement = "CRM_PERMISSIONS_ENFORCEMENT",
    ReadOnly = "READ_ONLY",
    InternalOnly = "INTERNAL_ONLY"
}
