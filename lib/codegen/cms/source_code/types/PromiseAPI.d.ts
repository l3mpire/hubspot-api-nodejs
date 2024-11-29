import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';
import { ContentApiRequestFactory, ContentApiResponseProcessor } from "../apis/ContentApi";
export declare class PromiseContentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContentApiRequestFactory, responseProcessor?: ContentApiResponseProcessor);
    archiveWithHttpInfo(environment: string, path: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(environment: string, path: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>>;
    create(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<AssetFileMetadata>;
    createOrUpdateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>>;
    createOrUpdate(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<AssetFileMetadata>;
    downloadWithHttpInfo(environment: string, path: string, _options?: Configuration): Promise<HttpInfo<void>>;
    download(environment: string, path: string, _options?: Configuration): Promise<void>;
}
import { ExtractApiRequestFactory, ExtractApiResponseProcessor } from "../apis/ExtractApi";
export declare class PromiseExtractApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor);
    doAsyncWithHttpInfo(fileExtractRequest: FileExtractRequest, _options?: Configuration): Promise<HttpInfo<TaskLocator>>;
    doAsync(fileExtractRequest: FileExtractRequest, _options?: Configuration): Promise<TaskLocator>;
    getAsyncStatusWithHttpInfo(taskId: number, _options?: Configuration): Promise<HttpInfo<ActionResponse>>;
    getAsyncStatus(taskId: number, _options?: Configuration): Promise<ActionResponse>;
}
import { MetadataApiRequestFactory, MetadataApiResponseProcessor } from "../apis/MetadataApi";
export declare class PromiseMetadataApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor);
    getWithHttpInfo(environment: string, path: string, properties?: string, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>>;
    get(environment: string, path: string, properties?: string, _options?: Configuration): Promise<AssetFileMetadata>;
}
import { ValidationApiRequestFactory, ValidationApiResponseProcessor } from "../apis/ValidationApi";
export declare class PromiseValidationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ValidationApiRequestFactory, responseProcessor?: ValidationApiResponseProcessor);
    doValidateWithHttpInfo(path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>>;
    doValidate(path: string, file?: HttpFile, _options?: Configuration): Promise<void>;
}
