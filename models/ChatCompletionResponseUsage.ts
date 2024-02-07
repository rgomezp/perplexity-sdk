/**
 * Perplexity AI Chat Completions API
 * API for generating a model\'s response for the given chat conversation
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ChatCompletionResponseUsage {
    'promptTokens'?: number;
    'completionTokens'?: number;
    'totalTokens'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "promptTokens",
            "baseName": "prompt_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "completionTokens",
            "baseName": "completion_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalTokens",
            "baseName": "total_tokens",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChatCompletionResponseUsage.attributeTypeMap;
    }

    public constructor() {
    }
}

