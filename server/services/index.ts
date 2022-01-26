import * as awilix from 'awilix';

import UserService from './UserService';

export interface IServiceContainer {
    UserService: UserService;
}

export default {
    UserService: awilix.asClass(UserService).singleton(),
}