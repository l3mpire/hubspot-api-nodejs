import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor } from "../apis/RecordingSettingsApi";
export declare class ObservableRecordingSettingsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RecordingSettingsApiRequestFactory, responseProcessor?: RecordingSettingsApiResponseProcessor);
    getUrlFormatWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>>;
    getUrlFormat(appId: number, _options?: Configuration): Observable<RecordingSettingsResponse>;
    markAsReadyWithHttpInfo(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Observable<HttpInfo<void>>;
    markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Observable<void>;
    registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>>;
    registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Observable<RecordingSettingsResponse>;
    updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>>;
    updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Observable<RecordingSettingsResponse>;
}
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export declare class ObservableSettingsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>>;
    create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Observable<SettingsResponse>;
    getByIdWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SettingsResponse>>;
    getById(appId: number, _options?: Configuration): Observable<SettingsResponse>;
    updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>>;
    update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Observable<SettingsResponse>;
}
