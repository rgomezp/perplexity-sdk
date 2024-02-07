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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiChatCompletionsPostRequest {
    /**
     * 
     * @type ChatCompletionsPostRequest
     * @memberof DefaultApichatCompletionsPost
     */
    chatCompletionsPostRequest?: ChatCompletionsPostRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param param the request object
     */
    public chatCompletionsPostWithHttpInfo(param: DefaultApiChatCompletionsPostRequest = {}, options?: Configuration): Promise<HttpInfo<ChatCompletionResponse>> {
        return this.api.chatCompletionsPostWithHttpInfo(param.chatCompletionsPostRequest,  options).toPromise();
    }

    /**
     * Generates a model\'s response for the given chat conversation
     * @param param the request object
     */
    public chatCompletionsPost(param: DefaultApiChatCompletionsPostRequest = {}, options?: Configuration): Promise<ChatCompletionResponse> {
        return this.api.chatCompletionsPost(param.chatCompletionsPostRequest,  options).toPromise();
    }

}
