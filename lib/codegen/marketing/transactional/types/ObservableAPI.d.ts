import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
import { PublicSMTPTokensApiRequestFactory, PublicSMTPTokensApiResponseProcessor } from "../apis/PublicSMTPTokensApi";
export declare class ObservablePublicSMTPTokensApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PublicSMTPTokensApiRequestFactory, responseProcessor?: PublicSMTPTokensApiResponseProcessor);
    archiveTokenWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archiveToken(tokenId: string, _options?: Configuration): Observable<void>;
    createTokenWithHttpInfo(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>>;
    createToken(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Observable<SmtpApiTokenView>;
    getTokenByIdWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>>;
    getTokenById(tokenId: string, _options?: Configuration): Observable<SmtpApiTokenView>;
    getTokensPageWithHttpInfo(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>>;
    getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseSmtpApiTokenViewForwardPaging>;
    resetPasswordWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>>;
    resetPassword(tokenId: string, _options?: Configuration): Observable<SmtpApiTokenView>;
}
import { SingleSendApiRequestFactory, SingleSendApiResponseProcessor } from "../apis/SingleSendApi";
export declare class ObservableSingleSendApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SingleSendApiRequestFactory, responseProcessor?: SingleSendApiResponseProcessor);
    sendEmailWithHttpInfo(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Observable<HttpInfo<EmailSendStatusView>>;
    sendEmail(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Observable<EmailSendStatusView>;
}
