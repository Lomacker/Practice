import BaseContext from "server/BaseContext";

export default class UserService extends BaseContext {
    public getAllUsers() {
        const { UserModel } = this.di;
        return UserModel.findAll({});
    }

    public getUserById(id: number) {
        const { UserModel } = this.di;
        if (isNaN(id)) {
            return Promise.reject('Is not a number.');
        }
        return UserModel.findByPk(id);
    }
}