import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { TokenResponseIF } from '../models/TokenResponseIF';
export declare class TokensApiRequestFactory extends BaseAPIRequestFactory {
    create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TokensApiResponseProcessor {
    createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TokenResponseIF>>;
}
