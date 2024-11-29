import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputPropertyCreate } from '../models/BatchInputPropertyCreate';
import { BatchInputPropertyName } from '../models/BatchInputPropertyName';
import { BatchReadInputPropertyName } from '../models/BatchReadInputPropertyName';
import { BatchResponseProperty } from '../models/BatchResponseProperty';
import { BatchResponsePropertyWithErrors } from '../models/BatchResponsePropertyWithErrors';
import { CollectionResponsePropertyGroupNoPaging } from '../models/CollectionResponsePropertyGroupNoPaging';
import { CollectionResponsePropertyNoPaging } from '../models/CollectionResponsePropertyNoPaging';
import { Property } from '../models/Property';
import { PropertyCreate } from '../models/PropertyCreate';
import { PropertyGroup } from '../models/PropertyGroup';
import { PropertyGroupCreate } from '../models/PropertyGroupCreate';
import { PropertyGroupUpdate } from '../models/PropertyGroupUpdate';
import { PropertyUpdate } from '../models/PropertyUpdate';
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export declare class PromiseBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    create(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors>;
    readWithHttpInfo(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    read(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors>;
}
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export declare class PromiseCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, propertyName: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, propertyName: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<HttpInfo<Property>>;
    create(objectType: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<Property>;
    getAllWithHttpInfo(objectType: string, archived?: boolean, properties?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyNoPaging>>;
    getAll(objectType: string, archived?: boolean, properties?: string, _options?: Configuration): Promise<CollectionResponsePropertyNoPaging>;
    getByNameWithHttpInfo(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: Configuration): Promise<HttpInfo<Property>>;
    getByName(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: Configuration): Promise<Property>;
    updateWithHttpInfo(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<HttpInfo<Property>>;
    update(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<Property>;
}
import { GroupsApiRequestFactory, GroupsApiResponseProcessor } from "../apis/GroupsApi";
export declare class PromiseGroupsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, groupName: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, groupName: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    create(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: Configuration): Promise<PropertyGroup>;
    getAllWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyGroupNoPaging>>;
    getAll(objectType: string, _options?: Configuration): Promise<CollectionResponsePropertyGroupNoPaging>;
    getByNameWithHttpInfo(objectType: string, groupName: string, _options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    getByName(objectType: string, groupName: string, _options?: Configuration): Promise<PropertyGroup>;
    updateWithHttpInfo(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    update(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: Configuration): Promise<PropertyGroup>;
}
