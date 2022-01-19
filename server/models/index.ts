import { Sequelize } from 'sequelize';
import mysql2 from "mysql2";
import config from '../../config';

function createSequelize() {
    return new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        {
            host: config.db.host,
            dialect: config.db.dialect,
            dialectModule: mysql2,
        }
    );
    
}

const sequelize = createSequelize();

const db: any = {};

db['Sequelize'] = Sequelize;
db['sequelize'] = sequelize;

db['users'] = require('./Users').default(sequelize, Sequelize);
db['orders'] = require('./Orders').default(sequelize, Sequelize);
db['books']= require("./Books").default(sequelize, Sequelize);

export default db;