import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
export declare class RecordingSettingsApiRequestFactory extends BaseAPIRequestFactory {
    getUrlFormat(appId: number, _options?: Configuration): Promise<RequestContext>;
    markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Promise<RequestContext>;
    registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<RequestContext>;
    updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RecordingSettingsApiResponseProcessor {
    getUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse>>;
    markAsReadyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    registerUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse>>;
    updateUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse>>;
}
