import { Model, DataTypes, BuildOptions, EnumDataType, Sequelize } from 'sequelize';
import  db  from '../db';
import Order from "./Orders";

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
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'READER'
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.BIGINT,
      },
  
    updatedAt: {
        type: DataTypes.BIGINT,
    },
});

User.belongsTo(Order);

User.initModels = () => {
    User.hasMany(Order, { as: 'orders', foreignKey: 'user_id', onDelete: 'SET NULL' });
  }

export default User;