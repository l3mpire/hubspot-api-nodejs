import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
export declare class AuditLogsApiRequestFactory extends BaseAPIRequestFactory {
    getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuditLogsApiResponseProcessor {
    getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicAuditLog>>;
}
