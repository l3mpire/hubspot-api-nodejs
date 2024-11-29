import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInputForCreate } from '../models/BatchInputSimplePublicObjectInputForCreate';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
export declare class BatchApiRequestFactory extends BaseAPIRequestFactory {
    archive(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<RequestContext>;
    create(objectType: string, batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<RequestContext>;
    read(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<RequestContext>;
    update(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<RequestContext>;
    upsert(objectType: string, batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: Configuration): Promise<RequestContext>;
}
export declare class BatchApiResponseProcessor {
    archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    readWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>>;
    upsertWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>>;
}
