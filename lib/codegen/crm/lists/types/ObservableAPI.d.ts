import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ApiCollectionResponseJoinTimeAndRecordId } from '../models/ApiCollectionResponseJoinTimeAndRecordId';
import { ApiCollectionResponseRecordListMembershipNoPaging } from '../models/ApiCollectionResponseRecordListMembershipNoPaging';
import { ListCreateRequest } from '../models/ListCreateRequest';
import { ListCreateResponse } from '../models/ListCreateResponse';
import { ListFetchResponse } from '../models/ListFetchResponse';
import { ListFilterUpdateRequest } from '../models/ListFilterUpdateRequest';
import { ListFolderCreateRequest } from '../models/ListFolderCreateRequest';
import { ListFolderCreateResponse } from '../models/ListFolderCreateResponse';
import { ListFolderFetchResponse } from '../models/ListFolderFetchResponse';
import { ListMoveRequest } from '../models/ListMoveRequest';
import { ListSearchRequest } from '../models/ListSearchRequest';
import { ListSearchResponse } from '../models/ListSearchResponse';
import { ListUpdateResponse } from '../models/ListUpdateResponse';
import { ListsByIdResponse } from '../models/ListsByIdResponse';
import { MembershipChangeRequest } from '../models/MembershipChangeRequest';
import { MembershipsUpdateResponse } from '../models/MembershipsUpdateResponse';
import { PublicBatchMigrationMapping } from '../models/PublicBatchMigrationMapping';
import { PublicMigrationMapping } from '../models/PublicMigrationMapping';
import { FoldersApiRequestFactory, FoldersApiResponseProcessor } from "../apis/FoldersApi";
export declare class ObservableFoldersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor);
    createWithHttpInfo(listFolderCreateRequest: ListFolderCreateRequest, _options?: Configuration): Observable<HttpInfo<ListFolderCreateResponse>>;
    create(listFolderCreateRequest: ListFolderCreateRequest, _options?: Configuration): Observable<ListFolderCreateResponse>;
    getAllWithHttpInfo(folderId?: string, _options?: Configuration): Observable<HttpInfo<ListFolderFetchResponse>>;
    getAll(folderId?: string, _options?: Configuration): Observable<ListFolderFetchResponse>;
    moveWithHttpInfo(folderId: string, newParentFolderId: string, _options?: Configuration): Observable<HttpInfo<ListFolderFetchResponse>>;
    move(folderId: string, newParentFolderId: string, _options?: Configuration): Observable<ListFolderFetchResponse>;
    moveListWithHttpInfo(listMoveRequest: ListMoveRequest, _options?: Configuration): Observable<HttpInfo<void>>;
    moveList(listMoveRequest: ListMoveRequest, _options?: Configuration): Observable<void>;
    removeWithHttpInfo(folderId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    remove(folderId: string, _options?: Configuration): Observable<void>;
    renameWithHttpInfo(folderId: string, newFolderName?: string, _options?: Configuration): Observable<HttpInfo<ListFolderFetchResponse>>;
    rename(folderId: string, newFolderName?: string, _options?: Configuration): Observable<ListFolderFetchResponse>;
}
import { ListsApiRequestFactory, ListsApiResponseProcessor } from "../apis/ListsApi";
export declare class ObservableListsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ListsApiRequestFactory, responseProcessor?: ListsApiResponseProcessor);
    createWithHttpInfo(listCreateRequest: ListCreateRequest, _options?: Configuration): Observable<HttpInfo<ListCreateResponse>>;
    create(listCreateRequest: ListCreateRequest, _options?: Configuration): Observable<ListCreateResponse>;
    doSearchWithHttpInfo(listSearchRequest: ListSearchRequest, _options?: Configuration): Observable<HttpInfo<ListSearchResponse>>;
    doSearch(listSearchRequest: ListSearchRequest, _options?: Configuration): Observable<ListSearchResponse>;
    getAllWithHttpInfo(listIds?: Array<string>, includeFilters?: boolean, _options?: Configuration): Observable<HttpInfo<ListsByIdResponse>>;
    getAll(listIds?: Array<string>, includeFilters?: boolean, _options?: Configuration): Observable<ListsByIdResponse>;
    getByIdWithHttpInfo(listId: string, includeFilters?: boolean, _options?: Configuration): Observable<HttpInfo<ListFetchResponse>>;
    getById(listId: string, includeFilters?: boolean, _options?: Configuration): Observable<ListFetchResponse>;
    getByNameWithHttpInfo(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: Configuration): Observable<HttpInfo<ListFetchResponse>>;
    getByName(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: Configuration): Observable<ListFetchResponse>;
    removeWithHttpInfo(listId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    remove(listId: string, _options?: Configuration): Observable<void>;
    restoreWithHttpInfo(listId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    restore(listId: string, _options?: Configuration): Observable<void>;
    updateListFiltersWithHttpInfo(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: Configuration): Observable<HttpInfo<ListUpdateResponse>>;
    updateListFilters(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: Configuration): Observable<ListUpdateResponse>;
    updateNameWithHttpInfo(listId: string, listName?: string, includeFilters?: boolean, _options?: Configuration): Observable<HttpInfo<ListUpdateResponse>>;
    updateName(listId: string, listName?: string, includeFilters?: boolean, _options?: Configuration): Observable<ListUpdateResponse>;
}
import { MappingApiRequestFactory, MappingApiResponseProcessor } from "../apis/MappingApi";
export declare class ObservableMappingApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MappingApiRequestFactory, responseProcessor?: MappingApiResponseProcessor);
    translateLegacyListIdToListIdWithHttpInfo(legacyListId?: string, _options?: Configuration): Observable<HttpInfo<PublicMigrationMapping>>;
    translateLegacyListIdToListId(legacyListId?: string, _options?: Configuration): Observable<PublicMigrationMapping>;
    translateLegacyListIdToListIdBatchWithHttpInfo(requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<PublicBatchMigrationMapping>>;
    translateLegacyListIdToListIdBatch(requestBody: Array<string>, _options?: Configuration): Observable<PublicBatchMigrationMapping>;
}
import { MembershipsApiRequestFactory, MembershipsApiResponseProcessor } from "../apis/MembershipsApi";
export declare class ObservableMembershipsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MembershipsApiRequestFactory, responseProcessor?: MembershipsApiResponseProcessor);
    addWithHttpInfo(listId: string, requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<MembershipsUpdateResponse>>;
    add(listId: string, requestBody: Array<string>, _options?: Configuration): Observable<MembershipsUpdateResponse>;
    addAllFromListWithHttpInfo(listId: string, sourceListId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    addAllFromList(listId: string, sourceListId: string, _options?: Configuration): Observable<void>;
    addAndRemoveWithHttpInfo(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: Configuration): Observable<HttpInfo<MembershipsUpdateResponse>>;
    addAndRemove(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: Configuration): Observable<MembershipsUpdateResponse>;
    getListsWithHttpInfo(objectTypeId: string, recordId: string, _options?: Configuration): Observable<HttpInfo<ApiCollectionResponseRecordListMembershipNoPaging>>;
    getLists(objectTypeId: string, recordId: string, _options?: Configuration): Observable<ApiCollectionResponseRecordListMembershipNoPaging>;
    getPageWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>>;
    getPage(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<ApiCollectionResponseJoinTimeAndRecordId>;
    getPageOrderedByAddedToListDateWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>>;
    getPageOrderedByAddedToListDate(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<ApiCollectionResponseJoinTimeAndRecordId>;
    removeWithHttpInfo(listId: string, requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<MembershipsUpdateResponse>>;
    remove(listId: string, requestBody: Array<string>, _options?: Configuration): Observable<MembershipsUpdateResponse>;
    removeAllWithHttpInfo(listId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    removeAll(listId: string, _options?: Configuration): Observable<void>;
}
