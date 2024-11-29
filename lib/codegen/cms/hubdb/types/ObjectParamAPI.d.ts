import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputHubDbTableRowBatchCloneRequest } from '../models/BatchInputHubDbTableRowBatchCloneRequest';
import { BatchInputHubDbTableRowV3BatchUpdateRequest } from '../models/BatchInputHubDbTableRowV3BatchUpdateRequest';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Request } from '../models/HubDbTableRowV3Request';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Request } from '../models/HubDbTableV3Request';
import { ImportResult } from '../models/ImportResult';
import { UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3 } from '../models/UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3';
import { RowsApiRequestFactory, RowsApiResponseProcessor } from "../apis/RowsApi";
export interface RowsApiCloneDraftTableRowRequest {
    tableIdOrName: string;
    rowId: string;
    name?: string;
}
export interface RowsApiCreateTableRowRequest {
    tableIdOrName: string;
    hubDbTableRowV3Request: HubDbTableRowV3Request;
}
export interface RowsApiGetDraftTableRowByIdRequest {
    tableIdOrName: string;
    rowId: string;
    archived?: boolean;
}
export interface RowsApiGetTableRowRequest {
    tableIdOrName: string;
    rowId: string;
    archived?: boolean;
}
export interface RowsApiGetTableRowsRequest {
    tableIdOrName: string;
    sort?: Array<string>;
    after?: string;
    limit?: number;
    properties?: Array<string>;
    offset?: number;
    archived?: boolean;
}
export interface RowsApiPurgeDraftTableRowRequest {
    tableIdOrName: string;
    rowId: string;
}
export interface RowsApiReadDraftTableRowsRequest {
    tableIdOrName: string;
    sort?: Array<string>;
    after?: string;
    limit?: number;
    properties?: Array<string>;
    offset?: number;
    archived?: boolean;
}
export interface RowsApiReplaceDraftTableRowRequest {
    tableIdOrName: string;
    rowId: string;
    hubDbTableRowV3Request: HubDbTableRowV3Request;
}
export interface RowsApiUpdateDraftTableRowRequest {
    tableIdOrName: string;
    rowId: string;
    hubDbTableRowV3Request: HubDbTableRowV3Request;
}
export declare class ObjectRowsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RowsApiRequestFactory, responseProcessor?: RowsApiResponseProcessor);
    cloneDraftTableRowWithHttpInfo(param: RowsApiCloneDraftTableRowRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    cloneDraftTableRow(param: RowsApiCloneDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3>;
    createTableRowWithHttpInfo(param: RowsApiCreateTableRowRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    createTableRow(param: RowsApiCreateTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3>;
    getDraftTableRowByIdWithHttpInfo(param: RowsApiGetDraftTableRowByIdRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    getDraftTableRowById(param: RowsApiGetDraftTableRowByIdRequest, options?: Configuration): Promise<HubDbTableRowV3>;
    getTableRowWithHttpInfo(param: RowsApiGetTableRowRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    getTableRow(param: RowsApiGetTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3>;
    getTableRowsWithHttpInfo(param: RowsApiGetTableRowsRequest, options?: Configuration): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>>;
    getTableRows(param: RowsApiGetTableRowsRequest, options?: Configuration): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>;
    purgeDraftTableRowWithHttpInfo(param: RowsApiPurgeDraftTableRowRequest, options?: Configuration): Promise<HttpInfo<void>>;
    purgeDraftTableRow(param: RowsApiPurgeDraftTableRowRequest, options?: Configuration): Promise<void>;
    readDraftTableRowsWithHttpInfo(param: RowsApiReadDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>>;
    readDraftTableRows(param: RowsApiReadDraftTableRowsRequest, options?: Configuration): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>;
    replaceDraftTableRowWithHttpInfo(param: RowsApiReplaceDraftTableRowRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    replaceDraftTableRow(param: RowsApiReplaceDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3>;
    updateDraftTableRowWithHttpInfo(param: RowsApiUpdateDraftTableRowRequest, options?: Configuration): Promise<HttpInfo<HubDbTableRowV3>>;
    updateDraftTableRow(param: RowsApiUpdateDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3>;
}
import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor } from "../apis/RowsBatchApi";
export interface RowsBatchApiCloneDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest;
}
export interface RowsBatchApiCreateDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request;
}
export interface RowsBatchApiPurgeDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputString: BatchInputString;
}
export interface RowsBatchApiReadDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputString: BatchInputString;
}
export interface RowsBatchApiReadTableRowsRequest {
    tableIdOrName: string;
    batchInputString: BatchInputString;
}
export interface RowsBatchApiReplaceDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest;
}
export interface RowsBatchApiUpdateDraftTableRowsRequest {
    tableIdOrName: string;
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest;
}
export declare class ObjectRowsBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RowsBatchApiRequestFactory, responseProcessor?: RowsBatchApiResponseProcessor);
    cloneDraftTableRowsWithHttpInfo(param: RowsBatchApiCloneDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3>>;
    cloneDraftTableRows(param: RowsBatchApiCloneDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3>;
    createDraftTableRowsWithHttpInfo(param: RowsBatchApiCreateDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>>;
    createDraftTableRows(param: RowsBatchApiCreateDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    purgeDraftTableRowsWithHttpInfo(param: RowsBatchApiPurgeDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    purgeDraftTableRows(param: RowsBatchApiPurgeDraftTableRowsRequest, options?: Configuration): Promise<void>;
    readDraftTableRowsWithHttpInfo(param: RowsBatchApiReadDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>>;
    readDraftTableRows(param: RowsBatchApiReadDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    readTableRowsWithHttpInfo(param: RowsBatchApiReadTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>>;
    readTableRows(param: RowsBatchApiReadTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    replaceDraftTableRowsWithHttpInfo(param: RowsBatchApiReplaceDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>>;
    replaceDraftTableRows(param: RowsBatchApiReplaceDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    updateDraftTableRowsWithHttpInfo(param: RowsBatchApiUpdateDraftTableRowsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>>;
    updateDraftTableRows(param: RowsBatchApiUpdateDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
}
import { TablesApiRequestFactory, TablesApiResponseProcessor } from "../apis/TablesApi";
export interface TablesApiArchiveTableRequest {
    tableIdOrName: string;
}
export interface TablesApiCloneDraftTableRequest {
    tableIdOrName: string;
    hubDbTableCloneRequest: HubDbTableCloneRequest;
}
export interface TablesApiCreateTableRequest {
    hubDbTableV3Request: HubDbTableV3Request;
}
export interface TablesApiExportDraftTableRequest {
    tableIdOrName: string;
    format?: string;
}
export interface TablesApiExportTableRequest {
    tableIdOrName: string;
    format?: string;
}
export interface TablesApiGetAllDraftTablesRequest {
    sort?: Array<string>;
    after?: string;
    limit?: number;
    createdAt?: Date;
    createdAfter?: Date;
    createdBefore?: Date;
    updatedAt?: Date;
    updatedAfter?: Date;
    updatedBefore?: Date;
    contentType?: string;
    archived?: boolean;
}
export interface TablesApiGetAllTablesRequest {
    sort?: Array<string>;
    after?: string;
    limit?: number;
    createdAt?: Date;
    createdAfter?: Date;
    createdBefore?: Date;
    updatedAt?: Date;
    updatedAfter?: Date;
    updatedBefore?: Date;
    contentType?: string;
    archived?: boolean;
}
export interface TablesApiGetDraftTableDetailsByIdRequest {
    tableIdOrName: string;
    isGetLocalizedSchema?: boolean;
    archived?: boolean;
    includeForeignIds?: boolean;
}
export interface TablesApiGetTableDetailsRequest {
    tableIdOrName: string;
    isGetLocalizedSchema?: boolean;
    archived?: boolean;
    includeForeignIds?: boolean;
}
export interface TablesApiImportDraftTableRequest {
    tableIdOrName: string;
    config?: string;
    file?: HttpFile;
}
export interface TablesApiPublishDraftTableRequest {
    tableIdOrName: string;
    includeForeignIds?: boolean;
}
export interface TablesApiResetDraftTableRequest {
    tableIdOrName: string;
    includeForeignIds?: boolean;
}
export interface TablesApiUnpublishTableRequest {
    tableIdOrName: string;
    includeForeignIds?: boolean;
}
export interface TablesApiUpdateDraftTableRequest {
    tableIdOrName: string;
    hubDbTableV3Request: HubDbTableV3Request;
    isGetLocalizedSchema?: boolean;
    archived?: boolean;
    includeForeignIds?: boolean;
}
export declare class ObjectTablesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TablesApiRequestFactory, responseProcessor?: TablesApiResponseProcessor);
    archiveTableWithHttpInfo(param: TablesApiArchiveTableRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveTable(param: TablesApiArchiveTableRequest, options?: Configuration): Promise<void>;
    cloneDraftTableWithHttpInfo(param: TablesApiCloneDraftTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    cloneDraftTable(param: TablesApiCloneDraftTableRequest, options?: Configuration): Promise<HubDbTableV3>;
    createTableWithHttpInfo(param: TablesApiCreateTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    createTable(param: TablesApiCreateTableRequest, options?: Configuration): Promise<HubDbTableV3>;
    exportDraftTableWithHttpInfo(param: TablesApiExportDraftTableRequest, options?: Configuration): Promise<HttpInfo<HttpFile>>;
    exportDraftTable(param: TablesApiExportDraftTableRequest, options?: Configuration): Promise<HttpFile>;
    exportTableWithHttpInfo(param: TablesApiExportTableRequest, options?: Configuration): Promise<HttpInfo<HttpFile>>;
    exportTable(param: TablesApiExportTableRequest, options?: Configuration): Promise<HttpFile>;
    getAllDraftTablesWithHttpInfo(param?: TablesApiGetAllDraftTablesRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>>;
    getAllDraftTables(param?: TablesApiGetAllDraftTablesRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging>;
    getAllTablesWithHttpInfo(param?: TablesApiGetAllTablesRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>>;
    getAllTables(param?: TablesApiGetAllTablesRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging>;
    getDraftTableDetailsByIdWithHttpInfo(param: TablesApiGetDraftTableDetailsByIdRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    getDraftTableDetailsById(param: TablesApiGetDraftTableDetailsByIdRequest, options?: Configuration): Promise<HubDbTableV3>;
    getTableDetailsWithHttpInfo(param: TablesApiGetTableDetailsRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    getTableDetails(param: TablesApiGetTableDetailsRequest, options?: Configuration): Promise<HubDbTableV3>;
    importDraftTableWithHttpInfo(param: TablesApiImportDraftTableRequest, options?: Configuration): Promise<HttpInfo<ImportResult>>;
    importDraftTable(param: TablesApiImportDraftTableRequest, options?: Configuration): Promise<ImportResult>;
    publishDraftTableWithHttpInfo(param: TablesApiPublishDraftTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    publishDraftTable(param: TablesApiPublishDraftTableRequest, options?: Configuration): Promise<HubDbTableV3>;
    resetDraftTableWithHttpInfo(param: TablesApiResetDraftTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    resetDraftTable(param: TablesApiResetDraftTableRequest, options?: Configuration): Promise<HubDbTableV3>;
    unpublishTableWithHttpInfo(param: TablesApiUnpublishTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    unpublishTable(param: TablesApiUnpublishTableRequest, options?: Configuration): Promise<HubDbTableV3>;
    updateDraftTableWithHttpInfo(param: TablesApiUpdateDraftTableRequest, options?: Configuration): Promise<HttpInfo<HubDbTableV3>>;
    updateDraftTable(param: TablesApiUpdateDraftTableRequest, options?: Configuration): Promise<HubDbTableV3>;
}
