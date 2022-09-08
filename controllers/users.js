const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");

//ROUTES

//I
userRouter.get("/", (req, res) => {
    res.render("userIndex.ejs");
});

//N
userRouter.get("/new", (req, res) => {
    res.render("userNew.ejs");
});

//D

//U
userRouter.post("/", (req, res) => {
    User.create(req.body, (err, createdUser) => {
        res.redirect("/mongoose-store");
    });
});

//C

//E

//S




module.exports = userRouter;