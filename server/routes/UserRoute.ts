import express from "express";

const router = express.Router();

const users = require("../../server/controllers/UserController");

router.use(function timeLog(req, res, next){
    console.log("/users/");
    next();
});

router.get("/list", users.findAll);
router.get("/:id", users.findOne);

export default router;