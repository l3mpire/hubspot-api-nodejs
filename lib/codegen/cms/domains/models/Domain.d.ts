export declare class Domain {
    'isUsedForLandingPage': boolean;
    'primaryBlogPost'?: boolean;
    'primaryKnowledge'?: boolean;
    'created'?: Date;
    'secondaryToDomain'?: string;
    'manuallyMarkedAsResolving'?: boolean;
    'isUsedForKnowledge': boolean;
    'isUsedForBlogPost': boolean;
    'isUsedForSitePage': boolean;
    'isResolving': boolean;
    'isSslEnabled'?: boolean;
    'isUsedForEmail': boolean;
    'domain': string;
    'primarySitePage'?: boolean;
    'primaryLandingPage'?: boolean;
    'id': string;
    'correctCname'?: string;
    'isSslOnly'?: boolean;
    'updated'?: Date;
    'primaryEmail'?: boolean;
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
