export declare class PropertyModificationMetadata {
    'readOnlyOptions'?: boolean;
    'readOnlyValue': boolean;
    'readOnlyDefinition': boolean;
    'archivable': boolean;
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
