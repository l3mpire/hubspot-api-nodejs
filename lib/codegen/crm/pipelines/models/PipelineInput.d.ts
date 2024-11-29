import { PipelineStageInput } from '../models/PipelineStageInput';
export declare class PipelineInput {
    'displayOrder': number;
    'stages': Array<PipelineStageInput>;
    'label': string;
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
