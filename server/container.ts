import awilix from 'awilix';
import mysql2 from 'mysql2';

import { Sequelize } from 'sequelize';
import { IModelContainer } from './models';

export interface IContextContainer extends IModelContainer {
    config: any;
    db: Sequelize;
}

const container = awilix.createContainer<IContextContainer>(
    {
        injectionMode: awilix.InjectionMode.PROXY,
    }
);

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

export default container;
