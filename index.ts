import { createConfiguration } from "./configuration"
import { PromiseDefaultApi as DefaultApi } from './types/PromiseAPI';

const getConfig = (apiKey: string) => {
  return createConfiguration({
    authMethods: {
      BearerAuth: {
        'tokenProvider': {
          getToken: async () => {
            return apiKey || '';
          }
        }
      }
    }
  });
}

const getApiInstance = (apiKey: string) => {
  const configuration = getConfig(apiKey);
  return new DefaultApi(configuration);
};

interface IConfig {
  apiKey: string;
}

export default class Perplexity {
  private instance: DefaultApi;

  constructor(config: IConfig) {
    this.instance = getApiInstance(config.apiKey);
  }

  public client(): DefaultApi {
    return this.instance;
  }
}

export * from "./http/http";
export * from "./auth/auth";
export * from "./models/all";
export { createConfiguration } from "./configuration"
export { Configuration } from "./configuration"
export * from "./apis/exception";
export * from "./servers";
export { RequiredError } from "./apis/baseapi";

export { PromiseMiddleware as Middleware } from './middleware';
export { PromiseDefaultApi as DefaultApi } from './types/PromiseAPI';
