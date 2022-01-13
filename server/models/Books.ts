import { Model, DataTypes, BuildOptions, EnumDataType, Sequelize } from 'sequelize';
import  db  from '../db';

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
        type: DataTypes.STRING,
    },

    author: {
        type: DataTypes.STRING,
    },

    yearPublishing: {
        type: DataTypes.BIGINT,
    },

    image: {
        type: DataTypes.STRING,
    },

    status: {
        type: DataTypes.STRING,
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

export default Book;