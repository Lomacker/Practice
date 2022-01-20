import mysql2 from 'mysql2';
import config from '../../config';

import { asFunction } from 'awilix';
import { Sequelize } from 'sequelize';
import { IContextContainer } from '../container';

import User, { UserType } from './UserModel';
import Order, { OrderType } from './OrderModel';
import Book, { BookType } from './BookModel';

export interface IModelContainer {
    initModels: () => void;
    User: UserType;
    Order: OrderType;
    Book: BookType;
}

const initModels = (ctx: IContextContainer) => {
    const { User, Order, Book } = ctx;
    return () => {
        User.initModels();
        Order.initModels();
        Book.initModels();
    }
}

export default {
    initModels: asFunction(initModels).singleton(),
    User: asFunction(User).singleton(),
    Order: asFunction(Order).singleton(),
    Book: asFunction(Book).singleton(),
}



// const db: any = {};

// db['Sequelize'] = Sequelize;
// db['sequelize'] = sequelize;

// db['users'] = require('./Users').default(sequelize, Sequelize);
// db['orders'] = require('./Orders').default(sequelize, Sequelize);
// db['books'] = require("./Books").default(sequelize, Sequelize);

// export default db;