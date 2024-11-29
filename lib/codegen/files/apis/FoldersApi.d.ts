import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
import { FolderUpdateTaskLocator } from '../models/FolderUpdateTaskLocator';
export declare class FoldersApiRequestFactory extends BaseAPIRequestFactory {
    archive(folderId: string, _options?: Configuration): Promise<RequestContext>;
    archiveByPath(folderPath: string, _options?: Configuration): Promise<RequestContext>;
    checkUpdateStatus(taskId: string, _options?: Configuration): Promise<RequestContext>;
    create(folderInput: FolderInput, _options?: Configuration): Promise<RequestContext>;
    doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, _options?: Configuration): Promise<RequestContext>;
    getById(folderId: string, properties?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getByPath(folderPath: string, properties?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateProperties(folderUpdateInput: FolderUpdateInput, _options?: Configuration): Promise<RequestContext>;
}
export declare class FoldersApiResponseProcessor {
    archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    archiveByPathWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    checkUpdateStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FolderActionResponse>>;
    createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder>>;
    doSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseFolder>>;
    getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder>>;
    getByPathWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder>>;
    updatePropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FolderUpdateTaskLocator>>;
}
