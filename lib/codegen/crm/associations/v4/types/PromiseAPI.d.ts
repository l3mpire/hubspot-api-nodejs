import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AssociationSpec } from '../models/AssociationSpec';
import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { ReportCreationResponse } from '../models/ReportCreationResponse';
import { BasicApiRequestFactory, BasicApiResponseProcessor } from "../apis/BasicApi";
export declare class PromiseBasicApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<HttpInfo<LabelsBetweenObjectPair>>;
    create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<LabelsBetweenObjectPair>;
    createDefaultWithHttpInfo(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>>;
    createDefault(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<BatchResponsePublicDefaultAssociation>;
    getPageWithHttpInfo(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>>;
    getPage(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>;
}
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export declare class PromiseBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Promise<void>;
    archiveLabelsWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<HttpInfo<void>>;
    archiveLabels(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<void>;
    createWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>>;
    create(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>;
    createDefaultWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>>;
    createDefault(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Promise<BatchResponsePublicDefaultAssociation>;
    getPageWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>>;
    getPage(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>;
}
import { ReportApiRequestFactory, ReportApiResponseProcessor } from "../apis/ReportApi";
export declare class PromiseReportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ReportApiRequestFactory, responseProcessor?: ReportApiResponseProcessor);
    requestWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<ReportCreationResponse>>;
    request(userId: number, _options?: Configuration): Promise<ReportCreationResponse>;
}
