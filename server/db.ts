import { Sequelize } from 'sequelize';
import mysql2 from "mysql2";
import config from '../config';

function createDB() {
    return new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        {
            dialect: config.db.dialect,
            dialectModule: mysql2,
        }
    );
    
}

const db = createDB();

export default db;