export * from '../models/ActionConfirmationBody';
export * from '../models/ActionHookActionBody';
export * from '../models/CardActions';
export * from '../models/CardAuditResponse';
export * from '../models/CardCreateRequest';
export * from '../models/CardDisplayBody';
export * from '../models/CardDisplayProperty';
export * from '../models/CardFetchBody';
export * from '../models/CardFetchBodyPatch';
export * from '../models/CardObjectTypeBody';
export * from '../models/CardPatchRequest';
export * from '../models/DisplayOption';
export * from '../models/ErrorDetail';
export * from '../models/IFrameActionBody';
export * from '../models/IntegratorCardPayloadResponse';
export * from '../models/IntegratorObjectResult';
export * from '../models/IntegratorObjectResultActionsInner';
export * from '../models/ModelError';
export * from '../models/ObjectToken';
export * from '../models/PublicCardFetchBody';
export * from '../models/PublicCardListResponse';
export * from '../models/PublicCardResponse';
export * from '../models/TopLevelActions';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
