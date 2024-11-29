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
export interface RecordingSettingsApiGetUrlFormatRequest {
    appId: number;
}
export interface RecordingSettingsApiMarkAsReadyRequest {
    markRecordingAsReadyRequest: MarkRecordingAsReadyRequest;
}
export interface RecordingSettingsApiRegisterUrlFormatRequest {
    appId: number;
    recordingSettingsRequest: RecordingSettingsRequest;
}
export interface RecordingSettingsApiUpdateUrlFormatRequest {
    appId: number;
    recordingSettingsPatchRequest: RecordingSettingsPatchRequest;
}
export declare class ObjectRecordingSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RecordingSettingsApiRequestFactory, responseProcessor?: RecordingSettingsApiResponseProcessor);
    getUrlFormatWithHttpInfo(param: RecordingSettingsApiGetUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    getUrlFormat(param: RecordingSettingsApiGetUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse>;
    markAsReadyWithHttpInfo(param: RecordingSettingsApiMarkAsReadyRequest, options?: Configuration): Promise<HttpInfo<void>>;
    markAsReady(param: RecordingSettingsApiMarkAsReadyRequest, options?: Configuration): Promise<void>;
    registerUrlFormatWithHttpInfo(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    registerUrlFormat(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse>;
    updateUrlFormatWithHttpInfo(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>>;
    updateUrlFormat(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse>;
}
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export interface SettingsApiArchiveRequest {
    appId: number;
}
export interface SettingsApiCreateRequest {
    appId: number;
    settingsRequest: SettingsRequest;
}
export interface SettingsApiGetByIdRequest {
    appId: number;
}
export interface SettingsApiUpdateRequest {
    appId: number;
    settingsPatchRequest: SettingsPatchRequest;
}
export declare class ObjectSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(param: SettingsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: SettingsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: SettingsApiCreateRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    create(param: SettingsApiCreateRequest, options?: Configuration): Promise<SettingsResponse>;
    getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<SettingsResponse>;
    updateWithHttpInfo(param: SettingsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    update(param: SettingsApiUpdateRequest, options?: Configuration): Promise<SettingsResponse>;
}
