const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    img: {type: String},
    price: {type: Number, required: true},
    qty: {type: Number, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;