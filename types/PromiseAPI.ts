import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChatCompletionResponse } from '../models/ChatCompletionResponse';
import { ChatCompletionResponseChoicesInner } from '../models/ChatCompletionResponseChoicesInner';
import { ChatCompletionResponseChoicesInnerDelta } from '../models/ChatCompletionResponseChoicesInnerDelta';
import { ChatCompletionResponseUsage } from '../models/ChatCompletionResponseUsage';
import { ChatCompletionsPostRequest } from '../models/ChatCompletionsPostRequest';
import { ChatCompletionsPostRequestMessagesInner } from '../models/ChatCompletionsPostRequestMessagesInner';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorResponseError } from '../models/ErrorResponseError';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param chatCompletionsPostRequest 
     */
    public chatCompletionsPostWithHttpInfo(chatCompletionsPostRequest?: ChatCompletionsPostRequest, _options?: Configuration): Promise<HttpInfo<ChatCompletionResponse>> {
        const result = this.api.chatCompletionsPostWithHttpInfo(chatCompletionsPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param chatCompletionsPostRequest 
     */
    public chatCompletionsPost(chatCompletionsPostRequest?: ChatCompletionsPostRequest, _options?: Configuration): Promise<ChatCompletionResponse> {
        const result = this.api.chatCompletionsPost(chatCompletionsPostRequest, _options);
        return result.toPromise();
    }


}



