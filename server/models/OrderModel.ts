import { Model, DataTypes, BuildOptions } from 'sequelize';

import { IContextContainer } from '../container';

interface IOrder extends Model {
    id: number;
    user_id: number;
    dateTacking: Date;
    dateReturned: Date;
    createdAt: Date;
    updatedAt: Date;
}

export type OrderType = typeof Model & {
    new(values?: object, options?: BuildOptions): IOrder;
    initModels(): void;
}

export default (ctx: IContextContainer) => {
    const Order = <OrderType>ctx.db.define('orders', {
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

    // Order.initModels = () => {
    //     Order.hasMany(ctx.Book, { as: 'books', sourceKey: 'id', foreignKey: 'order_id', onDelete: 'SET NULL' });
    // }
    return Order;
}

//Order.belongsTo(User, {});
// Book.belongsTo(Order, {as: 'books', foreignKey: 'id', onDelete:'SET NULL' });
