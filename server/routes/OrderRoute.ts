import express from 'express';

const router = express.Router();

//const orders = require("../../server/controllers/OrderController");

router.use(function timeLog(req, res, next) {
    console.log("/orders/");
    next();
});

// router.get("/list", orders.findAll);
// router.get("/:id", orders.findOne);

export default router;