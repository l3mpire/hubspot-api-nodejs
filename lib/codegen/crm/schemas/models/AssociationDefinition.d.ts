export declare class AssociationDefinition {
    'createdAt'?: Date;
    'fromObjectTypeId': string;
    'name'?: string;
    'id': string;
    'toObjectTypeId': string;
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
