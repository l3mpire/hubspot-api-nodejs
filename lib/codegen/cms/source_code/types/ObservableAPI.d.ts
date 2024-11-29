import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';
import { ContentApiRequestFactory, ContentApiResponseProcessor } from "../apis/ContentApi";
export declare class ObservableContentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ContentApiRequestFactory, responseProcessor?: ContentApiResponseProcessor);
    archiveWithHttpInfo(environment: string, path: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(environment: string, path: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>>;
    create(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<AssetFileMetadata>;
    createOrUpdateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>>;
    createOrUpdate(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<AssetFileMetadata>;
    downloadWithHttpInfo(environment: string, path: string, _options?: Configuration): Observable<HttpInfo<void>>;
    download(environment: string, path: string, _options?: Configuration): Observable<void>;
}
import { ExtractApiRequestFactory, ExtractApiResponseProcessor } from "../apis/ExtractApi";
export declare class ObservableExtractApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor);
    doAsyncWithHttpInfo(fileExtractRequest: FileExtractRequest, _options?: Configuration): Observable<HttpInfo<TaskLocator>>;
    doAsync(fileExtractRequest: FileExtractRequest, _options?: Configuration): Observable<TaskLocator>;
    getAsyncStatusWithHttpInfo(taskId: number, _options?: Configuration): Observable<HttpInfo<ActionResponse>>;
    getAsyncStatus(taskId: number, _options?: Configuration): Observable<ActionResponse>;
}
import { MetadataApiRequestFactory, MetadataApiResponseProcessor } from "../apis/MetadataApi";
export declare class ObservableMetadataApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor);
    getWithHttpInfo(environment: string, path: string, properties?: string, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>>;
    get(environment: string, path: string, properties?: string, _options?: Configuration): Observable<AssetFileMetadata>;
}
import { ValidationApiRequestFactory, ValidationApiResponseProcessor } from "../apis/ValidationApi";
export declare class ObservableValidationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ValidationApiRequestFactory, responseProcessor?: ValidationApiResponseProcessor);
    doValidateWithHttpInfo(path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>>;
    doValidate(path: string, file?: HttpFile, _options?: Configuration): Observable<void>;
}
