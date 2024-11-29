import { PublicEventFilterMetadata } from '../models/PublicEventFilterMetadata';
export declare class PublicIntegrationEventFilter {
    'eventTypeId': number;
    'filterLines': Array<PublicEventFilterMetadata>;
    'filterType': PublicIntegrationEventFilterFilterTypeEnum;
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
export declare enum PublicIntegrationEventFilterFilterTypeEnum {
    IntegrationEvent = "INTEGRATION_EVENT"
}
