import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';

@route('/api/orders')
export default class UserContoller extends BaseContext {
    @route('/list')
    @GET()
    getAllOrders(req, res) {
        const { OrderModel } = this.di;
        OrderModel.findAll()
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
    getOneOrder(req, res) {
        const { OrderModel } = this.di;
        const id = req.params.id;
        OrderModel.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving User with id=" + id
                });
            });
    }
}