import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor } from "../apis/RecordingSettingsApi";
export declare class PromiseRecordingSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RecordingSettingsApiRequestFactory, responseProcessor?: RecordingSettingsApiResponseProcessor);
    getUrlFormatWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    getUrlFormat(appId: number, _options?: Configuration): Promise<RecordingSettingsResponse>;
    markAsReadyWithHttpInfo(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Promise<HttpInfo<void>>;
    markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Promise<void>;
    registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<RecordingSettingsResponse>;
    updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<RecordingSettingsResponse>;
}
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export declare class PromiseSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(appId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<SettingsResponse>;
    getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    getById(appId: number, _options?: Configuration): Promise<SettingsResponse>;
    updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<SettingsResponse>;
}
