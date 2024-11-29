import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor } from "../apis/AccessTokensApi";
export declare class ObservableAccessTokensApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AccessTokensApiRequestFactory, responseProcessor?: AccessTokensApiResponseProcessor);
    getWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<AccessTokenInfoResponse>>;
    get(token: string, _options?: Configuration): Observable<AccessTokenInfoResponse>;
}
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor } from "../apis/RefreshTokensApi";
export declare class ObservableRefreshTokensApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RefreshTokensApiRequestFactory, responseProcessor?: RefreshTokensApiResponseProcessor);
    archiveWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(token: string, _options?: Configuration): Observable<void>;
    getWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<RefreshTokenInfoResponse>>;
    get(token: string, _options?: Configuration): Observable<RefreshTokenInfoResponse>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export declare class ObservableTokensApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    createWithHttpInfo(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Observable<HttpInfo<TokenResponseIF>>;
    create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Observable<TokenResponseIF>;
}
