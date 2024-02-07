# .DefaultApi

All URIs are relative to *https://api.perplexity.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chatCompletionsPost**](DefaultApi.md#chatCompletionsPost) | **POST** /chat/completions | Generates a model\&#39;s response for the given chat conversation


# **chatCompletionsPost**
> ChatCompletionResponse chatCompletionsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiChatCompletionsPostRequest = {
  // ChatCompletionsPostRequest (optional)
  chatCompletionsPostRequest: {
    model: "pplx-7b-chat",
    messages: [
      {
        role: "role_example",
        content: "content_example",
      },
    ],
    maxTokens: 1,
    temperature: 3.14,
    topP: 3.14,
    topK: 3.14,
    stream: true,
    presencePenalty: 3.14,
    frequencyPenalty: 3.14,
  },
};

apiInstance.chatCompletionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatCompletionsPostRequest** | **ChatCompletionsPostRequest**|  |


### Return type

**ChatCompletionResponse**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


