const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    img: String,
    price: {type: Number, required: true},
    qty: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;