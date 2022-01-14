import { Model, DataTypes, BuildOptions, EnumDataType, Sequelize } from 'sequelize';
import  db  from '../db';
import Order from './Orders';

interface IUser extends Model{
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string; 
    createdAt: Date;
    updatedAt: Date;
}

export type UserType = typeof Model & {
    new (values?: object, options?: BuildOptions): IUser;
}

const User = <UserType>db.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },

    firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: 'READER'
    },

    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.BIGINT,
      },
  
    updatedAt: {
        type: DataTypes.BIGINT,
    },
});

User.hasMany(Order, { as: 'orders', sourceKey: 'id', foreignKey: 'user_id', onDelete: 'SET NULL' });

export default User;