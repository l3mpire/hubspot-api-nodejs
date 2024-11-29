import { ThrottlingSettings } from '../models/ThrottlingSettings';
export declare class SettingsResponse {
    'createdAt': Date;
    'throttling': ThrottlingSettings;
    'targetUrl': string;
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
