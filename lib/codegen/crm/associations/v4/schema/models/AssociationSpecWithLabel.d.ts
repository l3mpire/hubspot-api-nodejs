export declare class AssociationSpecWithLabel {
    'typeId': number;
    'label'?: string;
    'category': AssociationSpecWithLabelCategoryEnum;
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
export declare enum AssociationSpecWithLabelCategoryEnum {
    HubspotDefined = "HUBSPOT_DEFINED",
    UserDefined = "USER_DEFINED",
    IntegratorDefined = "INTEGRATOR_DEFINED"
}
