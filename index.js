const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4} = require('uuid');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "css")));
app.engine('ejs', ejsMate);

app.get('/', function (req, res) {
    res.redirect("/home");
});

app.get('/home', function (req, res) {
    res.render("index.ejs");
});

app.get('/login', function (req, res) {
    res.render("./login.ejs");
});
    

app.listen(port);