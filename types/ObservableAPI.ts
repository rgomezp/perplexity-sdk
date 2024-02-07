import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ChatCompletionResponse } from '../models/ChatCompletionResponse';
import { ChatCompletionResponseChoicesInner } from '../models/ChatCompletionResponseChoicesInner';
import { ChatCompletionResponseChoicesInnerDelta } from '../models/ChatCompletionResponseChoicesInnerDelta';
import { ChatCompletionResponseUsage } from '../models/ChatCompletionResponseUsage';
import { ChatCompletionsPostRequest } from '../models/ChatCompletionsPostRequest';
import { ChatCompletionsPostRequestMessagesInner } from '../models/ChatCompletionsPostRequestMessagesInner';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorResponseError } from '../models/ErrorResponseError';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param chatCompletionsPostRequest 
     */
    public chatCompletionsPostWithHttpInfo(chatCompletionsPostRequest?: ChatCompletionsPostRequest, _options?: Configuration): Observable<HttpInfo<ChatCompletionResponse>> {
        const requestContextPromise = this.requestFactory.chatCompletionsPost(chatCompletionsPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.chatCompletionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param chatCompletionsPostRequest 
     */
    public chatCompletionsPost(chatCompletionsPostRequest?: ChatCompletionsPostRequest, _options?: Configuration): Observable<ChatCompletionResponse> {
        return this.chatCompletionsPostWithHttpInfo(chatCompletionsPostRequest, _options).pipe(map((apiResponse: HttpInfo<ChatCompletionResponse>) => apiResponse.data));
    }

}
