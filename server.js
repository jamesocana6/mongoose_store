const express = require("express");
const { redirect } = require("express/lib/response");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const productController = require("./controllers/products.js");

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
});

// MIDDLEWARE 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use("/mongoose-store", productController);

// ROUTES
app.get("/", (req, res) => {
    res.redirect("/mongoose-store");
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => {
    console.log("We have connected!");
});