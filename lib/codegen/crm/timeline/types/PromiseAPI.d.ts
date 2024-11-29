import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputTimelineEvent } from '../models/BatchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from '../models/BatchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from '../models/BatchResponseTimelineEventResponseWithErrors';
import { CollectionResponseTimelineEventTemplateNoPaging } from '../models/CollectionResponseTimelineEventTemplateNoPaging';
import { EventDetail } from '../models/EventDetail';
import { TimelineEvent } from '../models/TimelineEvent';
import { TimelineEventResponse } from '../models/TimelineEventResponse';
import { TimelineEventTemplate } from '../models/TimelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from '../models/TimelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';
import { TimelineEventTemplateTokenUpdateRequest } from '../models/TimelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from '../models/TimelineEventTemplateUpdateRequest';
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export declare class PromiseEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    createWithHttpInfo(timelineEvent: TimelineEvent, _options?: Configuration): Promise<HttpInfo<TimelineEventResponse>>;
    create(timelineEvent: TimelineEvent, _options?: Configuration): Promise<TimelineEventResponse>;
    createBatchWithHttpInfo(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Promise<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>>;
    createBatch(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Promise<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>;
    getByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<HttpInfo<TimelineEventResponse>>;
    getById(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<TimelineEventResponse>;
    getDetailByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<HttpInfo<EventDetail>>;
    getDetailById(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<EventDetail>;
    getRenderByIdWithHttpInfo(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Promise<HttpInfo<string>>;
    getRenderById(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Promise<string>;
}
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor } from "../apis/TemplatesApi";
export declare class PromiseTemplatesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor);
    archiveWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(eventTemplateId: string, appId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    create(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Promise<TimelineEventTemplate>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>>;
    getAll(appId: number, _options?: Configuration): Promise<CollectionResponseTimelineEventTemplateNoPaging>;
    getByIdWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    getById(eventTemplateId: string, appId: number, _options?: Configuration): Promise<TimelineEventTemplate>;
    updateWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    update(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Promise<TimelineEventTemplate>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export declare class PromiseTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    archiveWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>>;
    create(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Promise<TimelineEventTemplateToken>;
    updateWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>>;
    update(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Promise<TimelineEventTemplateToken>;
}
