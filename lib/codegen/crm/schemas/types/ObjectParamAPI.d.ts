import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export interface CoreApiArchiveRequest {
    objectType: string;
    archived?: boolean;
}
export interface CoreApiArchiveAssociationRequest {
    objectType: string;
    associationIdentifier: string;
}
export interface CoreApiCreateRequest {
    objectSchemaEgg: ObjectSchemaEgg;
}
export interface CoreApiCreateAssociationRequest {
    objectType: string;
    associationDefinitionEgg: AssociationDefinitionEgg;
}
export interface CoreApiGetAllRequest {
    archived?: boolean;
}
export interface CoreApiGetByIdRequest {
    objectType: string;
}
export interface CoreApiUpdateRequest {
    objectType: string;
    objectTypeDefinitionPatch: ObjectTypeDefinitionPatch;
}
export declare class ObjectCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    archiveWithHttpInfo(param: CoreApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: CoreApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveAssociationWithHttpInfo(param: CoreApiArchiveAssociationRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveAssociation(param: CoreApiArchiveAssociationRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: CoreApiCreateRequest, options?: Configuration): Promise<HttpInfo<ObjectSchema>>;
    create(param: CoreApiCreateRequest, options?: Configuration): Promise<ObjectSchema>;
    createAssociationWithHttpInfo(param: CoreApiCreateAssociationRequest, options?: Configuration): Promise<HttpInfo<AssociationDefinition>>;
    createAssociation(param: CoreApiCreateAssociationRequest, options?: Configuration): Promise<AssociationDefinition>;
    getAllWithHttpInfo(param?: CoreApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>>;
    getAll(param?: CoreApiGetAllRequest, options?: Configuration): Promise<CollectionResponseObjectSchemaNoPaging>;
    getByIdWithHttpInfo(param: CoreApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<ObjectSchema>>;
    getById(param: CoreApiGetByIdRequest, options?: Configuration): Promise<ObjectSchema>;
    updateWithHttpInfo(param: CoreApiUpdateRequest, options?: Configuration): Promise<HttpInfo<ObjectTypeDefinition>>;
    update(param: CoreApiUpdateRequest, options?: Configuration): Promise<ObjectTypeDefinition>;
}
