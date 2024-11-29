export declare class Option {
    'hidden': boolean;
    'displayOrder': number;
    'doubleData': number;
    'description': string;
    'readOnly': boolean;
    'label': string;
    'value': string;
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
