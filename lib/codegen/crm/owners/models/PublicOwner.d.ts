import { PublicTeam } from '../models/PublicTeam';
export declare class PublicOwner {
    'firstName'?: string;
    'lastName'?: string;
    'createdAt': Date;
    'archived': boolean;
    'teams'?: Array<PublicTeam>;
    'id': string;
    'userIdIncludingInactive'?: number;
    'type': PublicOwnerTypeEnum;
    'userId'?: number;
    'email'?: string;
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
export declare enum PublicOwnerTypeEnum {
    Person = "PERSON",
    Queue = "QUEUE"
}
