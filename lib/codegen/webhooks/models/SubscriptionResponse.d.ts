export declare class SubscriptionResponse {
    'createdAt': Date;
    'objectTypeId'?: string;
    'propertyName'?: string;
    'active': boolean;
    'eventType': SubscriptionResponseEventTypeEnum;
    'id': string;
    'updatedAt'?: Date;
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
export declare enum SubscriptionResponseEventTypeEnum {
    ContactPropertyChange = "contact.propertyChange",
    CompanyPropertyChange = "company.propertyChange",
    DealPropertyChange = "deal.propertyChange",
    TicketPropertyChange = "ticket.propertyChange",
    ProductPropertyChange = "product.propertyChange",
    LineItemPropertyChange = "line_item.propertyChange",
    ContactCreation = "contact.creation",
    ContactDeletion = "contact.deletion",
    ContactPrivacyDeletion = "contact.privacyDeletion",
    CompanyCreation = "company.creation",
    CompanyDeletion = "company.deletion",
    DealCreation = "deal.creation",
    DealDeletion = "deal.deletion",
    TicketCreation = "ticket.creation",
    TicketDeletion = "ticket.deletion",
    ProductCreation = "product.creation",
    ProductDeletion = "product.deletion",
    LineItemCreation = "line_item.creation",
    LineItemDeletion = "line_item.deletion",
    ConversationCreation = "conversation.creation",
    ConversationDeletion = "conversation.deletion",
    ConversationNewMessage = "conversation.newMessage",
    ConversationPrivacyDeletion = "conversation.privacyDeletion",
    ConversationPropertyChange = "conversation.propertyChange",
    ContactMerge = "contact.merge",
    CompanyMerge = "company.merge",
    DealMerge = "deal.merge",
    TicketMerge = "ticket.merge",
    ProductMerge = "product.merge",
    LineItemMerge = "line_item.merge",
    ContactRestore = "contact.restore",
    CompanyRestore = "company.restore",
    DealRestore = "deal.restore",
    TicketRestore = "ticket.restore",
    ProductRestore = "product.restore",
    LineItemRestore = "line_item.restore",
    ContactAssociationChange = "contact.associationChange",
    CompanyAssociationChange = "company.associationChange",
    DealAssociationChange = "deal.associationChange",
    TicketAssociationChange = "ticket.associationChange",
    LineItemAssociationChange = "line_item.associationChange",
    ObjectPropertyChange = "object.propertyChange",
    ObjectCreation = "object.creation",
    ObjectDeletion = "object.deletion",
    ObjectMerge = "object.merge",
    ObjectRestore = "object.restore",
    ObjectAssociationChange = "object.associationChange"
}
