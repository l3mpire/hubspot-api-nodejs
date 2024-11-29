import { ParticipationAssociations } from '../models/ParticipationAssociations';
import { ParticipationProperties } from '../models/ParticipationProperties';
export declare class ParticipationBreakdown {
    'associations': ParticipationAssociations;
    'createdAt': Date;
    'id': string;
    'properties': ParticipationProperties;
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
