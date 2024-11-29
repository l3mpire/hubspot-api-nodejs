import { MarketingEventExternalUniqueIdentifier } from '../models/MarketingEventExternalUniqueIdentifier';
export declare class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging {
    'results': Array<MarketingEventExternalUniqueIdentifier>;
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
