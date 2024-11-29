import { ContactAssociation } from '../models/ContactAssociation';
import { MarketingEventAssociation } from '../models/MarketingEventAssociation';
export declare class ParticipationAssociations {
    'marketingEvent': MarketingEventAssociation;
    'contact': ContactAssociation;
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
