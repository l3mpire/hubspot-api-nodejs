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
export interface BasicApiArchiveRequest {
    objectType: string;
    objectId: string;
    toObjectType: string;
    toObjectId: string;
}
export interface BasicApiCreateRequest {
    objectType: string;
    objectId: string;
    toObjectType: string;
    toObjectId: string;
    associationSpec: Array<AssociationSpec>;
}
export interface BasicApiCreateDefaultRequest {
    fromObjectType: string;
    fromObjectId: string;
    toObjectType: string;
    toObjectId: string;
}
export interface BasicApiGetPageRequest {
    objectType: string;
    objectId: string;
    toObjectType: string;
    after?: string;
    limit?: number;
}
export declare class ObjectBasicApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor);
    archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<LabelsBetweenObjectPair>>;
    create(param: BasicApiCreateRequest, options?: Configuration): Promise<LabelsBetweenObjectPair>;
    createDefaultWithHttpInfo(param: BasicApiCreateDefaultRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>>;
    createDefault(param: BasicApiCreateDefaultRequest, options?: Configuration): Promise<BatchResponsePublicDefaultAssociation>;
    getPageWithHttpInfo(param: BasicApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>>;
    getPage(param: BasicApiGetPageRequest, options?: Configuration): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>;
}
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export interface BatchApiArchiveRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive;
}
export interface BatchApiArchiveLabelsRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost;
}
export interface BatchApiCreateRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost;
}
export interface BatchApiCreateDefaultRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost;
}
export interface BatchApiGetPageRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest;
}
export declare class ObjectBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveLabelsWithHttpInfo(param: BatchApiArchiveLabelsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveLabels(param: BatchApiArchiveLabelsRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>>;
    create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>;
    createDefaultWithHttpInfo(param: BatchApiCreateDefaultRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>>;
    createDefault(param: BatchApiCreateDefaultRequest, options?: Configuration): Promise<BatchResponsePublicDefaultAssociation>;
    getPageWithHttpInfo(param: BatchApiGetPageRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>>;
    getPage(param: BatchApiGetPageRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>;
}
import { ReportApiRequestFactory, ReportApiResponseProcessor } from "../apis/ReportApi";
export interface ReportApiRequestRequest {
    userId: number;
}
export declare class ObjectReportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ReportApiRequestFactory, responseProcessor?: ReportApiResponseProcessor);
    requestWithHttpInfo(param: ReportApiRequestRequest, options?: Configuration): Promise<HttpInfo<ReportCreationResponse>>;
    request(param: ReportApiRequestRequest, options?: Configuration): Promise<ReportCreationResponse>;
}
