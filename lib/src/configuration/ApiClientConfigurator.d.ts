import { IRequestContext } from '../services/IRequestContext';
import IConfiguration from './IConfiguration';
type MiddlewarePreBase<RequestContextType extends IRequestContext> = (context: RequestContextType) => RequestContextType;
type MiddlewarePostBase<ResponseContextType> = (context: ResponseContextType) => ResponseContextType;
export default interface IMiddlewareConfiguration<RequestContextType extends IRequestContext, ResponseContextType> extends IConfiguration {
    middleware?: Array<{
        pre: MiddlewarePreBase<RequestContextType> | undefined;
        post: MiddlewarePostBase<ResponseContextType> | undefined;
    }>;
}
export declare class ApiClientConfigurator {
    static getParams<RequestContextType extends IRequestContext, ResponseContextType, ObservableRequestContextType, ObservableResponseContextType, ServerConfiguration>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, serverConfigurationClass: new (url: string, variableConfiguration: {
        [key: string]: string;
    }) => ServerConfiguration, observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType, observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType): {
        middleware: {
            pre(context: RequestContextType): ObservableRequestContextType;
            post(context: ResponseContextType): ObservableResponseContextType;
        }[];
        authMethods: {};
    };
    static getUserAgent(): string;
    protected static getAuthMethods<RequestContextType extends IRequestContext, ResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>): {};
    protected static getBaseServer<ServerConfiguration, RequestContextType extends IRequestContext, ResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, serverConfigurationClass: new (url: string, variableConfiguration: {
        [key: string]: string;
    }) => ServerConfiguration): {
        baseServer: ServerConfiguration;
    } | {
        baseServer?: undefined;
    };
    protected static getMiddleware<RequestContextType extends IRequestContext, ResponseContextType, ObservableRequestContextType, ObservableResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType, observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType): {
        pre(context: RequestContextType): ObservableRequestContextType;
        post(context: ResponseContextType): ObservableResponseContextType;
    }[];
    protected static getCustomMiddleware<RequestContextType extends IRequestContext, ResponseContextType, ObservableRequestContextType, ObservableResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType, observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType): {
        pre: (context: RequestContextType) => ObservableRequestContextType;
        post: (context: ResponseContextType) => ObservableResponseContextType;
    }[];
    protected static getHeaderMiddleware<RequestContextType extends IRequestContext, ResponseContextType, ObservableRequestContextType, ObservableResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType, observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType): {
        pre(context: RequestContextType): ObservableRequestContextType;
        post(context: ResponseContextType): ObservableResponseContextType;
    };
    protected static getHttpAgentMiddleware<RequestContextType extends IRequestContext, ResponseContextType, ObservableRequestContextType, ObservableResponseContextType>(config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>, observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType, observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType): {
        pre(context: RequestContextType): ObservableRequestContextType;
        post(context: ResponseContextType): ObservableResponseContextType;
    };
}
export {};
