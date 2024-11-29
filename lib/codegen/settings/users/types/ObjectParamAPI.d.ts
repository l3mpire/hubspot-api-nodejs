import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';
import { RolesApiRequestFactory, RolesApiResponseProcessor } from "../apis/RolesApi";
export interface RolesApiGetAllRequest {
}
export declare class ObjectRolesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    getAllWithHttpInfo(param?: RolesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>>;
    getAll(param?: RolesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicPermissionSetNoPaging>;
}
import { TeamsApiRequestFactory, TeamsApiResponseProcessor } from "../apis/TeamsApi";
export interface TeamsApiGetAllRequest {
}
export declare class ObjectTeamsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor);
    getAllWithHttpInfo(param?: TeamsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicTeamNoPaging>>;
    getAll(param?: TeamsApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicTeamNoPaging>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiArchiveRequest {
    userId: string;
    idProperty?: 'USER_ID' | 'EMAIL';
}
export interface UsersApiCreateRequest {
    userProvisionRequest: UserProvisionRequest;
}
export interface UsersApiGetByIdRequest {
    userId: string;
    idProperty?: 'USER_ID' | 'EMAIL';
}
export interface UsersApiGetPageRequest {
    limit?: number;
    after?: string;
}
export interface UsersApiReplaceRequest {
    userId: string;
    publicUserUpdate: PublicUserUpdate;
    idProperty?: 'USER_ID' | 'EMAIL';
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    archiveWithHttpInfo(param: UsersApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: UsersApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: UsersApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicUser>>;
    create(param: UsersApiCreateRequest, options?: Configuration): Promise<PublicUser>;
    getByIdWithHttpInfo(param: UsersApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicUser>>;
    getById(param: UsersApiGetByIdRequest, options?: Configuration): Promise<PublicUser>;
    getPageWithHttpInfo(param?: UsersApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicUserForwardPaging>>;
    getPage(param?: UsersApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicUserForwardPaging>;
    replaceWithHttpInfo(param: UsersApiReplaceRequest, options?: Configuration): Promise<HttpInfo<PublicUser>>;
    replace(param: UsersApiReplaceRequest, options?: Configuration): Promise<PublicUser>;
}
