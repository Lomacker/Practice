import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';


// const db = require("../models").default;
// const User = db.users;
// const Op = db.Sequelize.Op;

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
}






// export const findAll = (req, res) => {
//     console.log()
//     User.findAll()
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

//     User.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving User with id=" + id
//             });
//         });
// };