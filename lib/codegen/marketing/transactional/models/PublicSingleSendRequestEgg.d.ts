import { PublicSingleSendEmail } from '../models/PublicSingleSendEmail';
export declare class PublicSingleSendRequestEgg {
    'customProperties'?: {
        [key: string]: any;
    };
    'emailId': number;
    'message': PublicSingleSendEmail;
    'contactProperties'?: {
        [key: string]: string;
    };
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
