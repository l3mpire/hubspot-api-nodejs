import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';
export declare class PublicEmailEventFilter {
    'clickUrl'?: string;
    'level': string;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'appId': string;
    'emailId': string;
    'filterType': PublicEmailEventFilterFilterTypeEnum;
    'operator': PublicEmailEventFilterOperatorEnum;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum PublicEmailEventFilterFilterTypeEnum {
    EmailEvent = "EMAIL_EVENT"
}
export declare enum PublicEmailEventFilterOperatorEnum {
    LinkClicked = "LINK_CLICKED",
    MarkedSpam = "MARKED_SPAM",
    Opened = "OPENED",
    OpenedButLinkNotClicked = "OPENED_BUT_LINK_NOT_CLICKED",
    OpenedButNotReplied = "OPENED_BUT_NOT_REPLIED",
    Replied = "REPLIED",
    Unsubscribed = "UNSUBSCRIBED",
    Bounced = "BOUNCED",
    Received = "RECEIVED",
    ReceivedButNotOpened = "RECEIVED_BUT_NOT_OPENED",
    Sent = "SENT",
    SentButLinkNotClicked = "SENT_BUT_LINK_NOT_CLICKED",
    SentButNotReceived = "SENT_BUT_NOT_RECEIVED"
}
