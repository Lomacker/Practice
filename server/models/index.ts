import mysql2 from 'mysql2';
import config from '../../config';

import { asFunction } from 'awilix';
import { Sequelize } from 'sequelize';
import { IContextContainer } from '../container';

import UserModel, { UserType } from './UserModel';
import OrderModel, { OrderType } from './OrderModel';
import BookModel, { BookType } from './BookModel';

export interface IModelContainer {
    initModels: () => void;
    UserModel: UserType;
    OrderModel: OrderType;
    BookModel: BookType;
}

const initModels = (ctx: IContextContainer) => {
    const { UserModel, OrderModel, BookModel } = ctx;
    return () => {
        UserModel.initModels();
        OrderModel.initModels();
        BookModel.initModels();
    }
}

export default {
    initModels: asFunction(initModels).singleton(),
    UserModel: asFunction(UserModel).singleton(),
    OrderModel: asFunction(OrderModel).singleton(),
    BookModel: asFunction(BookModel).singleton(),
}