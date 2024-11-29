import { PipelineStage } from '../models/PipelineStage';
export declare class Pipeline {
    'createdAt': Date;
    'archivedAt'?: Date;
    'archived': boolean;
    'displayOrder': number;
    'stages': Array<PipelineStage>;
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
