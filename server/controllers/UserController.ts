import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';

@route('/api/users')
export default class UserContoller extends BaseContext {
    @route('/list')
    @GET()
    getAllUsers(req, res) {
        const { UserModel } = this.di;
        UserModel.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving users."
                });
            });
    }

    @route('/:id')
    @GET()
    getOneUser(req, res) {
        const { UserModel } = this.di;
        const id = req.params.id;
        UserModel.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving User with id=" + id
                });
            });
    }

    @route('/:id/orders')
    @GET()
    getOrdersByUsers(req, res) {
        const { UserModel, OrderModel } = this.di;
        const id = req.params.id;
        UserModel.findByPk(id, {
            include: [
                {
                    model: OrderModel,
                    as: 'orders'
                },
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Error retrieving Product with id=" + id
            });
        });
    }
}