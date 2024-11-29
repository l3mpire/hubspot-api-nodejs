import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';
import { RolesApiRequestFactory, RolesApiResponseProcessor } from "../apis/RolesApi";
export declare class PromiseRolesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    getAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>>;
    getAll(_options?: Configuration): Promise<CollectionResponsePublicPermissionSetNoPaging>;
}
import { TeamsApiRequestFactory, TeamsApiResponseProcessor } from "../apis/TeamsApi";
export declare class PromiseTeamsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor);
    getAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CollectionResponsePublicTeamNoPaging>>;
    getAll(_options?: Configuration): Promise<CollectionResponsePublicTeamNoPaging>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    archiveWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<HttpInfo<void>>;
    archive(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<void>;
    createWithHttpInfo(userProvisionRequest: UserProvisionRequest, _options?: Configuration): Promise<HttpInfo<PublicUser>>;
    create(userProvisionRequest: UserProvisionRequest, _options?: Configuration): Promise<PublicUser>;
    getByIdWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<HttpInfo<PublicUser>>;
    getById(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<PublicUser>;
    getPageWithHttpInfo(limit?: number, after?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicUserForwardPaging>>;
    getPage(limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponsePublicUserForwardPaging>;
    replaceWithHttpInfo(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<HttpInfo<PublicUser>>;
    replace(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Promise<PublicUser>;
}
