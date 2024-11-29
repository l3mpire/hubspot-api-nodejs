import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInputForCreate } from '../models/BatchInputSimplePublicObjectInputForCreate';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
import { BasicApiRequestFactory, BasicApiResponseProcessor } from "../apis/BasicApi";
export interface BasicApiArchiveRequest {
    noteId: string;
}
export interface BasicApiCreateRequest {
    simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate;
}
export interface BasicApiGetByIdRequest {
    noteId: string;
    properties?: Array<string>;
    propertiesWithHistory?: Array<string>;
    associations?: Array<string>;
    archived?: boolean;
    idProperty?: string;
}
export interface BasicApiGetPageRequest {
    limit?: number;
    after?: string;
    properties?: Array<string>;
    propertiesWithHistory?: Array<string>;
    associations?: Array<string>;
    archived?: boolean;
}
export interface BasicApiUpdateRequest {
    noteId: string;
    simplePublicObjectInput: SimplePublicObjectInput;
    idProperty?: string;
}
export declare class ObjectBasicApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor);
    archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObject>>;
    create(param: BasicApiCreateRequest, options?: Configuration): Promise<SimplePublicObject>;
    getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObjectWithAssociations>>;
    getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations>;
    getPageWithHttpInfo(param?: BasicApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>>;
    getPage(param?: BasicApiGetPageRequest, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>;
    updateWithHttpInfo(param: BasicApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObject>>;
    update(param: BasicApiUpdateRequest, options?: Configuration): Promise<SimplePublicObject>;
}
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export interface BatchApiArchiveRequest {
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId;
}
export interface BatchApiCreateRequest {
    batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate;
}
export interface BatchApiReadRequest {
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId;
    archived?: boolean;
}
export interface BatchApiUpdateRequest {
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput;
}
export interface BatchApiUpsertRequest {
    batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert;
}
export declare class ObjectBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    updateWithHttpInfo(param: BatchApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    update(param: BatchApiUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    upsertWithHttpInfo(param: BatchApiUpsertRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>>;
    upsert(param: BatchApiUpsertRequest, options?: Configuration): Promise<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>;
}
import { SearchApiRequestFactory, SearchApiResponseProcessor } from "../apis/SearchApi";
export interface SearchApiDoSearchRequest {
    publicObjectSearchRequest: PublicObjectSearchRequest;
}
export declare class ObjectSearchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor);
    doSearchWithHttpInfo(param: SearchApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>>;
    doSearch(param: SearchApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging>;
}
