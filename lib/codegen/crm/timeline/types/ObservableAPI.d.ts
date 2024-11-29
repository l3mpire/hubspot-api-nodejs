import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableEventsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    createWithHttpInfo(timelineEvent: TimelineEvent, _options?: Configuration): Observable<HttpInfo<TimelineEventResponse>>;
    create(timelineEvent: TimelineEvent, _options?: Configuration): Observable<TimelineEventResponse>;
    createBatchWithHttpInfo(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Observable<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>>;
    createBatch(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Observable<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>;
    getByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<HttpInfo<TimelineEventResponse>>;
    getById(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<TimelineEventResponse>;
    getDetailByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<HttpInfo<EventDetail>>;
    getDetailById(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<EventDetail>;
    getRenderByIdWithHttpInfo(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Observable<HttpInfo<string>>;
    getRenderById(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Observable<string>;
}
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor } from "../apis/TemplatesApi";
export declare class ObservableTemplatesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor);
    archiveWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(eventTemplateId: string, appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>>;
    create(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Observable<TimelineEventTemplate>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>>;
    getAll(appId: number, _options?: Configuration): Observable<CollectionResponseTimelineEventTemplateNoPaging>;
    getByIdWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>>;
    getById(eventTemplateId: string, appId: number, _options?: Configuration): Observable<TimelineEventTemplate>;
    updateWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>>;
    update(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Observable<TimelineEventTemplate>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export declare class ObservableTokensApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    archiveWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplateToken>>;
    create(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Observable<TimelineEventTemplateToken>;
    updateWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplateToken>>;
    update(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Observable<TimelineEventTemplateToken>;
}
