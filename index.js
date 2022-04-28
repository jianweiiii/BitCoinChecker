const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

const currency = require("./currency");
const fiat = require("./fiat");

const caller = require("./caller");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));


// Support POST requests
app.use(express.urlencoded({extended: true})); 
app.use(express.json());     

app.post("/", async (req, res) => {
    const price = await caller(req.body.currency, req.body.fiat);
    const obj = {price: price, currency: req.body.currency, fiat: req.body.fiat};
    res.render("index.ejs", obj);
})


app.get("/", async (req, res) => {
    const price = await caller("BTC", "USD");
    const obj = {price:"", currency: "BTC", fiat: "USD"};
    res.render("index.ejs", obj);
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})