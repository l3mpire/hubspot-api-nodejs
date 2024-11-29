import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';
import { RolesApiRequestFactory, RolesApiResponseProcessor } from "../apis/RolesApi";
export declare class ObservableRolesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    getAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>>;
    getAll(_options?: Configuration): Observable<CollectionResponsePublicPermissionSetNoPaging>;
}
import { TeamsApiRequestFactory, TeamsApiResponseProcessor } from "../apis/TeamsApi";
export declare class ObservableTeamsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor);
    getAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CollectionResponsePublicTeamNoPaging>>;
    getAll(_options?: Configuration): Observable<CollectionResponsePublicTeamNoPaging>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    archiveWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<HttpInfo<void>>;
    archive(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<void>;
    createWithHttpInfo(userProvisionRequest: UserProvisionRequest, _options?: Configuration): Observable<HttpInfo<PublicUser>>;
    create(userProvisionRequest: UserProvisionRequest, _options?: Configuration): Observable<PublicUser>;
    getByIdWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<HttpInfo<PublicUser>>;
    getById(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<PublicUser>;
    getPageWithHttpInfo(limit?: number, after?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicUserForwardPaging>>;
    getPage(limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponsePublicUserForwardPaging>;
    replaceWithHttpInfo(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<HttpInfo<PublicUser>>;
    replace(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: Configuration): Observable<PublicUser>;
}
