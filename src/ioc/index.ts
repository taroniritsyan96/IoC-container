import IoCContainer from 'ioc-lite';
import {Users} from "../services/users";
import {Logger} from "../services/logger";
import {HTTP} from "../services/http";
import {ApiConfig} from "../types";
const initiateApiConfig = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;
  return config.api;
}

type IoCResources = {
  config: ApiConfig,
  logger: typeof Logger,
  http: typeof HTTP,
  users: typeof Users
}

export const apiConfig: ApiConfig = initiateApiConfig();
export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();
  // you can register some resources right now below...
  ioc.registerClass('users', Users);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.register('config', apiConfig)
  return ioc;
};

