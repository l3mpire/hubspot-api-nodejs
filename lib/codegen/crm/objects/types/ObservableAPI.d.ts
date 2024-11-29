import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableBasicApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, objectId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, objectId: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Observable<HttpInfo<SimplePublicObject>>;
    create(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Observable<SimplePublicObject>;
    getByIdWithHttpInfo(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Observable<HttpInfo<SimplePublicObjectWithAssociations>>;
    getById(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Observable<SimplePublicObjectWithAssociations>;
    getPageWithHttpInfo(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>>;
    getPage(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Observable<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>;
    updateWithHttpInfo(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Observable<HttpInfo<SimplePublicObject>>;
    update(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Observable<SimplePublicObject>;
}
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export declare class ObservableBatchApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Observable<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    create(objectType: string, batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    readWithHttpInfo(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    read(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    updateWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Observable<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    update(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>;
    upsertWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: Configuration): Observable<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>>;
    upsert(objectType: string, batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: Configuration): Observable<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>;
}
import { SearchApiRequestFactory, SearchApiResponseProcessor } from "../apis/SearchApi";
export declare class ObservableSearchApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor);
    doSearchWithHttpInfo(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>>;
    doSearch(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Observable<CollectionResponseWithTotalSimplePublicObjectForwardPaging>;
}
