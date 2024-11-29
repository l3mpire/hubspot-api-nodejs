import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';
import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor } from "../apis/BusinessUnitApi";
export declare class ObservableBusinessUnitApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BusinessUnitApiRequestFactory, responseProcessor?: BusinessUnitApiResponseProcessor);
    getByUserIDWithHttpInfo(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>>;
    getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Observable<CollectionResponsePublicBusinessUnitNoPaging>;
}
