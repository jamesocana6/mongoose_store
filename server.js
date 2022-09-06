const express = require("express");
const { redirect } = require("express/lib/response");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
// const Log = require("./models/log.js");

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
});

// MIDDLEWARE 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
    res.redirect("/mongoose-store");
});

//I
app.get("/mongoose-store", (req, res) => {
    res.send("index.ejs");
});

//N
app.get("/mongoose-store/new", (req, res) => {
    res.send("new.ejs");
});

//D

//U

//C
app.post("/mongoose-store", (req, res) => {
    res.send("create!");
});

//E

//S
app.get("/mongoose-store/:id", (req, res) => {
    res.send("show.ejs");
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