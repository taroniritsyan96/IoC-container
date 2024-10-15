import IoCContainer from 'ioc-lite';
import {Users} from "../services/users";
import {Logger} from "../services/logger";
import {HTTP} from "../services/http";
import {ApiConfig} from "../types";

type IoCResources = {
  config: ApiConfig,
  logger: typeof Logger,
  http: typeof HTTP,
  users: typeof Users
}



export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();
  // you can register some resources right now below...
  ioc.registerClass('users', Users);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  return ioc;
};

export const ioc = createIoCContainer();