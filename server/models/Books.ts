import { Model, DataTypes, BuildOptions, EnumDataType, Sequelize } from 'sequelize';
import  db  from '../db';
import Order from './Orders';

interface IBook extends Model{
    id: number;
    order_id: number;
    bookName: string;
    author: string;
    yearPublishing: Date;
    image: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export type BookType = typeof Model & {
    new (values?: object, options?: BuildOptions): IBook;
}

const Book = <BookType>db.define('books', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },

    order_id: {
        type: DataTypes.INTEGER,
    },

    bookName: {
        type: DataTypes.STRING(45),
    },

    author: {
        type: DataTypes.STRING(90),
    },

    yearPublishing: {
        type: DataTypes.BIGINT,
    },

    image: {
        type: DataTypes.STRING(300),
    },

    status: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: 'IN_STOCK'
    },

    createdAt: {
        type: DataTypes.BIGINT,
    },
  
    updatedAt: {
        type: DataTypes.BIGINT,
    },
});
// Book.belongsTo(Order, {as: 'books', foreignKey: 'id', onDelete:'SET NULL' });

export default Book;