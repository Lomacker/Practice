import { route, GET, POST } from 'awilix-express';

import BaseContext from '../BaseContext';

@route('/api/books')
export default class UserContoller extends BaseContext {
    @route('/list')
    @GET()
    getAllBooks(req, res) {
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

    @route('/:id')
    @GET()
    getOneBook(req, res) {
        const { BookModel } = this.di;
        const id = req.params.id;
        BookModel.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving User with id=" + id
                });
            })
    }

}
