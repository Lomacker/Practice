import * as awilix from 'awilix';
import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize';

import coreConfig from '../config';
import serviceContainer, { IServiceContainer } from './services/index';
import modelContainer, { IModelContainer } from './models';

export interface IContextContainer extends IModelContainer, IServiceContainer {
    config: any;
    db: Sequelize;
}

const container = awilix.createContainer<IContextContainer>({
    injectionMode: awilix.InjectionMode.PROXY,
});

const createDB = (ctx: IContextContainer) => {
    return new Sequelize(
        ctx.config.db.database,
        ctx.config.db.username,
        ctx.config.db.password,
        {
            host: ctx.config.db.host,
            dialect: ctx.config.db.dialect,
            dialectModule: mysql2,
        }
    );
}

container.register({
    ...modelContainer,
    ...serviceContainer,
    config: awilix.asValue(coreConfig),
    db: awilix.asFunction(createDB).singleton(),
});

export default container;
