import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';
import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor } from "../apis/BusinessUnitApi";
export declare class PromiseBusinessUnitApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BusinessUnitApiRequestFactory, responseProcessor?: BusinessUnitApiResponseProcessor);
    getByUserIDWithHttpInfo(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>>;
    getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Promise<CollectionResponsePublicBusinessUnitNoPaging>;
}
