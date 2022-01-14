import { Model, DataTypes, BuildOptions, EnumDataType, Sequelize } from 'sequelize';
import  db  from '../db';
import Book from './Books';
import User from './Users';

interface IOrder extends Model{
    id: number;
    user_id: number;
    dateTacking: Date;
    dateReturned: Date;
    createdAt: Date;
    updatedAt: Date;
}

export type OrderType = typeof Model & {
    new (values?: object, options?: BuildOptions): IOrder;
}

const Order = <OrderType>db.define('orders', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },

    user_id: {
        type: DataTypes.INTEGER,
    },

    dateTacking: {
        type: DataTypes.BIGINT,
    },

    dateReturned: {
        type: DataTypes.BIGINT,
    },

    createdAt: {
        type: DataTypes.BIGINT,
    },
  
    updatedAt: {
        type: DataTypes.BIGINT,
    },
});

Order.belongsTo(User, { as: 'user', foreignKey: 'id', onDelete: 'SET NULL' });
Order.hasMany(Book, {as: 'books', sourceKey: 'id', foreignKey: 'order_id', onDelete:'SET NULL'});

export default Order;


