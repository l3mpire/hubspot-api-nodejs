import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor } from "../apis/AuditLogsApi";
export declare class PromiseAuditLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor);
    getPageWithHttpInfo(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditLog>>;
    getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<CollectionResponsePublicAuditLog>;
}
