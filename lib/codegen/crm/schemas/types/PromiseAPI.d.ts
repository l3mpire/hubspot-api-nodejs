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
export declare class PromiseCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(objectType: string, archived?: boolean, _options?: Configuration): Promise<void>;
    archiveAssociationWithHttpInfo(objectType: string, associationIdentifier: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archiveAssociation(objectType: string, associationIdentifier: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Promise<HttpInfo<ObjectSchema>>;
    create(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Promise<ObjectSchema>;
    createAssociationWithHttpInfo(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Promise<HttpInfo<AssociationDefinition>>;
    createAssociation(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Promise<AssociationDefinition>;
    getAllWithHttpInfo(archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>>;
    getAll(archived?: boolean, _options?: Configuration): Promise<CollectionResponseObjectSchemaNoPaging>;
    getByIdWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<ObjectSchema>>;
    getById(objectType: string, _options?: Configuration): Promise<ObjectSchema>;
    updateWithHttpInfo(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Promise<HttpInfo<ObjectTypeDefinition>>;
    update(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Promise<ObjectTypeDefinition>;
}
