import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';
import { PipelineAuditsApiRequestFactory, PipelineAuditsApiResponseProcessor } from "../apis/PipelineAuditsApi";
export declare class ObservablePipelineAuditsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PipelineAuditsApiRequestFactory, responseProcessor?: PipelineAuditsApiResponseProcessor);
    getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(objectType: string, pipelineId: string, _options?: Configuration): Observable<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor } from "../apis/PipelineStageAuditsApi";
export declare class ObservablePipelineStageAuditsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PipelineStageAuditsApiRequestFactory, responseProcessor?: PipelineStageAuditsApiResponseProcessor);
    getAuditWithHttpInfo(objectType: string, stageId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(objectType: string, stageId: string, _options?: Configuration): Observable<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor } from "../apis/PipelineStagesApi";
export declare class ObservablePipelineStagesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PipelineStagesApiRequestFactory, responseProcessor?: PipelineStagesApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>>;
    create(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<PipelineStage>;
    getAllWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePipelineStageNoPaging>>;
    getAll(objectType: string, pipelineId: string, _options?: Configuration): Observable<CollectionResponsePipelineStageNoPaging>;
    getByIdWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<HttpInfo<PipelineStage>>;
    getById(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<PipelineStage>;
    replaceWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>>;
    replace(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<PipelineStage>;
    updateWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>>;
    update(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Observable<PipelineStage>;
}
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor } from "../apis/PipelinesApi";
export declare class ObservablePipelinesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Observable<HttpInfo<Pipeline>>;
    create(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Observable<Pipeline>;
    getAllWithHttpInfo(objectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePipelineNoPaging>>;
    getAll(objectType: string, _options?: Configuration): Observable<CollectionResponsePipelineNoPaging>;
    getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<Pipeline>>;
    getById(objectType: string, pipelineId: string, _options?: Configuration): Observable<Pipeline>;
    replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<Pipeline>>;
    replace(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<Pipeline>;
    updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<Pipeline>>;
    update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<Pipeline>;
}
