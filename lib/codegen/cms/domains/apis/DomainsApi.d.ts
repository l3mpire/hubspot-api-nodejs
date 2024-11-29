import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CollectionResponseWithTotalDomainForwardPaging } from '../models/CollectionResponseWithTotalDomainForwardPaging';
import { Domain } from '../models/Domain';
export declare class DomainsApiRequestFactory extends BaseAPIRequestFactory {
    getById(domainId: string, _options?: Configuration): Promise<RequestContext>;
    getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class DomainsApiResponseProcessor {
    getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Domain>>;
    getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalDomainForwardPaging>>;
}
