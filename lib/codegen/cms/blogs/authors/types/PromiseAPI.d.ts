import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthor } from '../models/BatchResponseBlogAuthor';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { BlogAuthorCloneRequestVNext } from '../models/BlogAuthorCloneRequestVNext';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { BlogAuthorsApiRequestFactory, BlogAuthorsApiResponseProcessor } from "../apis/BlogAuthorsApi";
export declare class PromiseBlogAuthorsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlogAuthorsApiRequestFactory, responseProcessor?: BlogAuthorsApiResponseProcessor);
    archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<void>;
    createWithHttpInfo(blogAuthor: BlogAuthor, _options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    create(blogAuthor: BlogAuthor, _options?: Configuration): Promise<BlogAuthor>;
    createBatchWithHttpInfo(batchInputBlogAuthor: BatchInputBlogAuthor, _options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    createBatch(batchInputBlogAuthor: BatchInputBlogAuthor, _options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    createLangVariation(blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext, _options?: Configuration): Promise<BlogAuthor>;
    detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<BlogAuthor>;
    getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>>;
    getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging>;
    readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<void>;
    updateWithHttpInfo(objectId: string, blogAuthor: BlogAuthor, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    update(objectId: string, blogAuthor: BlogAuthor, archived?: boolean, _options?: Configuration): Promise<BlogAuthor>;
    updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<void>;
}
