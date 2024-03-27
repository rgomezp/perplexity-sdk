<h1 align="center">Welcome to Perplexity.ai SDK 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/perplexity-sdk" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/perplexity-sdk.svg">
  </a>
  <a href="https://github.com/PerplexityAI/perplexity-sdk#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/PerplexityAI/perplexity-sdk/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> The Perplexity.ai SDK is a powerful tool for integrating advanced AI capabilities into your applications. With a simple and intuitive API, you can leverage the power of Perplexity's AI models for chat completions, instructions, and more.

* 🏠 [Homepage](https://perplexity.ai)
* 🖤 [npm](https://www.npmjs.com/package/perplexity-sdk)

## Overview
This Unofficial SDK is designed to provide developers with easy access to Perplexity's powerful AI models. It simplifies the process of sending requests and handling responses from various models including pplx-7b-chat, pplx-70b-chat, pplx-7b-online, pplx-70b-online, and others. The SDK is highly versatile, catering to a wide range of AI-driven applications.

Typescript supported.

## Supported Models:
| Model                   | Context Length | Model Type      |
|-------------------------|----------------|-----------------|
| `codellama-34b-instruct`  | 16384          | Chat Completion |
| `codellama-70b-instruct`  | 16384          | Chat Completion |
| `llama-2-70b-chat`        | 4096           | Chat Completion |
| `mistral-7b-instruct`     | 4096           | Chat Completion |
| `mixtral-8x7b-instruct`   | 4096           | Chat Completion |
| `pplx-7b-chat`            | 8192           | Chat Completion |
| `pplx-70b-chat`           | 4096           | Chat Completion |
| `pplx-7b-online`          | 4096           | Chat Completion |
| `pplx-70b-online`         | 4096           | Chat Completion |

---

## Install
You can easily install the Perplexity.ai SDK via npm or yarn.

```sh
# npm
npm install perplexity-sdk

# yarn
yarn add perplexity-sdk
```

## Configuration
To use the SDK, you need to configure it with your API key. Here's a simple setup:

```ts
import Perplexity from 'perplexity-sdk';

const config = {
  apiKey: process.env.PERPLEXITY_API_KEY || '<YOUR_API_KEY>'
};

const perplexity = new Perplexity(config).client();
```

## Usage
Here's how you can use the SDK to send a request to Perplexity's AI models:

```ts
import { ChatCompletionsPostRequestModelEnum } from 'perplexity-sdk';

const result = await perplexity.chatCompletionsPost({
  model: ChatCompletionsPostRequestModelEnum.Mistral7bInstruct,
  messages: [{
    "role": "user",
    "content": "Your prompt here"
  }],
});

console.log(result);
```

### Versioning
Make sure to keep your SDK version updated to leverage new features and improvements. The current version can be found on the npm page.

## API
Visit [Perplexity Labs' Official API Reference](https://docs.perplexity.ai/reference/post_chat_completions).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/PerplexityAI/perplexity-sdk/issues).

## Show your support

Give a ⭐️ if this project helped you!

## Donate

Bitcoin: bc1qhp9havdzfzqr9mzdc3257txmegrpryhx3kdpyz

Strike: rodrigo

## 📝 License

This project is [MIT](https://github.com/PerplexityAI/perplexity-sdk/blob/main/LICENSE) licensed.
