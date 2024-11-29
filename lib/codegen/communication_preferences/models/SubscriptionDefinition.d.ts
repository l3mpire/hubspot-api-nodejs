export declare class SubscriptionDefinition {
    'isInternal': boolean;
    'createdAt': Date;
    'isDefault': boolean;
    'communicationMethod'?: string;
    'purpose'?: string;
    'name': string;
    'description': string;
    'id': string;
    'isActive': boolean;
    'businessUnitId'?: number;
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
