import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor } from "../apis/AuditLogsApi";
export interface AuditLogsApiGetPageRequest {
    userId?: Array<string>;
    eventType?: Array<string>;
    objectType?: Array<string>;
    objectId?: Array<string>;
    after?: string;
    before?: string;
    limit?: number;
    sort?: Array<string>;
}
export declare class ObjectAuditLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor);
    getPageWithHttpInfo(param?: AuditLogsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditLog>>;
    getPage(param?: AuditLogsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicAuditLog>;
}
