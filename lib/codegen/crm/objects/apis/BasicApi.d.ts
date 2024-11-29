import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
export declare class BasicApiRequestFactory extends BaseAPIRequestFactory {
    archive(objectType: string, objectId: string, _options?: Configuration): Promise<RequestContext>;
    create(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<RequestContext>;
    getById(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<RequestContext>;
    getPage(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<RequestContext>;
    update(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class BasicApiResponseProcessor {
    archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SimplePublicObject>>;
    getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SimplePublicObjectWithAssociations>>;
    getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>>;
    updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SimplePublicObject>>;
}
