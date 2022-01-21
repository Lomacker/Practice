import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';
// const db = require("../models").default;
// const Order = db.orders;
// const Op = db.Sequelize.Op;

// export const findAll = (req, res) => {
//     Order.findAll()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
// };

// export const findOne = (req, res) => {
//     const id = req.params.id;

//     Order.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving User with id=" + id
//             });
//         });
// };

@route('/api/orders')
export default class UserContoller extends BaseContext {
    @route('/list')
    @GET()
    getAllUsers(req, res) {
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
}
