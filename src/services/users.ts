import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  static $inject = ['config','http']
  constructor(config: ApiConfig, http: HTTP) {
    this.apiConfig = config;
    this.http = http;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
