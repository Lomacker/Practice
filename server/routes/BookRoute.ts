import express from 'express';

const router = express.Router();

//const books = require("../../server/controllers/BookController");

router.use(function timeLog(req, res, next) {
    console.log("/books/");
    next();
});

// router.get("/list", books.findAll);
// router.get("/:id", books.findOne);

export default router;
