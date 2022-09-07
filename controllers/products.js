const express = require("express");
const productRouter = express.Router();
const Product = require("../models/product.js");
const productSeed = require("../models/productSeed.js");

//ROUTES
//ProductSeed
productRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (error, allBooks) => {});
    Product.create(productSeed,
        (error, data) => {
            res.redirect('/mongoose-store');
        }
    );
});

//I
productRouter.get("/", (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render("index.ejs", {
            products: allProducts,
        });
    });
});

//N
productRouter.get("/new", (req, res) => {
    res.render("new.ejs");
});

//D
productRouter.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        res.redirect("/mongoose-store");
    });
});

//U
productRouter.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        },
        (err, foundProduct) => {
            res.redirect("/mongoose-store");
    });
});
//BUY??????
productRouter.put("/:id/buy", (req, res) => {
    //console.log(req.body.qty)
    Product.findByIdAndUpdate(req.params.id,
        {
            new: true,
        },
        (err, foundProduct) => {
            // console.log(foundProduct.qty)
            foundProduct.qty = foundProduct.qty -1;
            console.log(foundProduct.qty)
            // foundProduct.save();
            res.redirect(`/mongoose-store/${req.params.id}`);
        });
});

//C
productRouter.post("/", (req, res) => {
    Product.create(req.body, (err, newProduct) => {
        res.redirect("/mongoose-store");
    });
});

//E
productRouter.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render("edit.ejs", {
            product: foundProduct,
        });
    });
});

//S
productRouter.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render("show.ejs", {
            product: foundProduct,
            productQty: foundProduct.qty,
        });
    });
});

module.exports = productRouter;