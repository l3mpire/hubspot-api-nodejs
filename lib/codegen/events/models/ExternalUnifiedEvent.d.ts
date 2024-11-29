export declare class ExternalUnifiedEvent {
    'occurredAt': Date;
    'eventType': string;
    'id': string;
    'objectId': string;
    'properties'?: {
        [key: string]: string;
    };
    'objectType': string;
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
