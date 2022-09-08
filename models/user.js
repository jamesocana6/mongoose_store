const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {type: String},
    shopping_cart: {type: Array},
});

const User = mongoose.model("User", userSchema);

module.exports = User;