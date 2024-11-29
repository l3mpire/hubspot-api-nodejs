import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
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
export declare class PromisePipelineAuditsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineAuditsApiRequestFactory, responseProcessor?: PipelineAuditsApiResponseProcessor);
    getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(objectType: string, pipelineId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor } from "../apis/PipelineStageAuditsApi";
export declare class PromisePipelineStageAuditsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineStageAuditsApiRequestFactory, responseProcessor?: PipelineStageAuditsApiResponseProcessor);
    getAuditWithHttpInfo(objectType: string, stageId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(objectType: string, stageId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor } from "../apis/PipelineStagesApi";
export declare class PromisePipelineStagesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineStagesApiRequestFactory, responseProcessor?: PipelineStagesApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    create(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<PipelineStage>;
    getAllWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>>;
    getAll(objectType: string, pipelineId: string, _options?: Configuration): Promise<CollectionResponsePipelineStageNoPaging>;
    getByIdWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    getById(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<PipelineStage>;
    replaceWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    replace(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<PipelineStage>;
    updateWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    update(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Promise<PipelineStage>;
}
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor } from "../apis/PipelinesApi";
export declare class PromisePipelinesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Promise<HttpInfo<Pipeline>>;
    create(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Promise<Pipeline>;
    getAllWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineNoPaging>>;
    getAll(objectType: string, _options?: Configuration): Promise<CollectionResponsePipelineNoPaging>;
    getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<Pipeline>>;
    getById(objectType: string, pipelineId: string, _options?: Configuration): Promise<Pipeline>;
    replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<Pipeline>>;
    replace(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline>;
    updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<Pipeline>>;
    update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline>;
}
