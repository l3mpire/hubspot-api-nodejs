import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
import { PublicSMTPTokensApiRequestFactory, PublicSMTPTokensApiResponseProcessor } from "../apis/PublicSMTPTokensApi";
export declare class PromisePublicSMTPTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PublicSMTPTokensApiRequestFactory, responseProcessor?: PublicSMTPTokensApiResponseProcessor);
    archiveTokenWithHttpInfo(tokenId: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archiveToken(tokenId: string, _options?: Configuration): Promise<void>;
    createTokenWithHttpInfo(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Promise<HttpInfo<SmtpApiTokenView>>;
    createToken(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Promise<SmtpApiTokenView>;
    getTokenByIdWithHttpInfo(tokenId: string, _options?: Configuration): Promise<HttpInfo<SmtpApiTokenView>>;
    getTokenById(tokenId: string, _options?: Configuration): Promise<SmtpApiTokenView>;
    getTokensPageWithHttpInfo(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>>;
    getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseSmtpApiTokenViewForwardPaging>;
    resetPasswordWithHttpInfo(tokenId: string, _options?: Configuration): Promise<HttpInfo<SmtpApiTokenView>>;
    resetPassword(tokenId: string, _options?: Configuration): Promise<SmtpApiTokenView>;
}
import { SingleSendApiRequestFactory, SingleSendApiResponseProcessor } from "../apis/SingleSendApi";
export declare class PromiseSingleSendApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SingleSendApiRequestFactory, responseProcessor?: SingleSendApiResponseProcessor);
    sendEmailWithHttpInfo(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Promise<HttpInfo<EmailSendStatusView>>;
    sendEmail(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Promise<EmailSendStatusView>;
}
