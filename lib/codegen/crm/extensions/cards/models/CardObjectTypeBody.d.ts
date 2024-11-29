export declare class CardObjectTypeBody {
    'name': CardObjectTypeBodyNameEnum;
    'propertiesToSend': Array<string>;
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
export declare enum CardObjectTypeBodyNameEnum {
    Contacts = "contacts",
    Deals = "deals",
    Companies = "companies",
    Tickets = "tickets",
    MarketingEvents = "marketing_events"
}
