import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';

@route('/api/books')
export default class UserContoller extends BaseContext {
    @route('/list')
    @GET()
    getAllUsers(req, res) {
        const { BookModel } = this.di;
        BookModel.findAll()
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
