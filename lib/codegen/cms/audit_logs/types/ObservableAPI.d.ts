import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor } from "../apis/AuditLogsApi";
export declare class ObservableAuditLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor);
    getPageWithHttpInfo(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAuditLog>>;
    getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Observable<CollectionResponsePublicAuditLog>;
}
