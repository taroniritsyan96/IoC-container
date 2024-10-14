import { Logger } from './services/logger';

import type { User } from './types';
import {createIoCContainer} from "./ioc";


const renderUsers = async () => {
  const usersService = createIoCContainer().resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  renderUsers();
};

window.onload = () => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
