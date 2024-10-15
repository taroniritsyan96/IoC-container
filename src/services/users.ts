import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
import {ioc} from "../ioc";
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  static $inject = ['http']
  constructor(http: HTTP) {
    this.apiConfig = ioc.resolve('config');
    this.http = http;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
