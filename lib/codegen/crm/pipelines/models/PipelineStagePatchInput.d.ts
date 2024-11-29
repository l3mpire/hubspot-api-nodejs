export declare class PipelineStagePatchInput {
    'archived'?: boolean;
    'metadata': {
        [key: string]: string;
    };
    'displayOrder'?: number;
    'label'?: string;
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
