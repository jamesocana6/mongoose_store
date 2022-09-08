const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");

userRouter.get("/", (req, res) => {
    res.render("userShow.ejs");
});

module.exports = userRouter;