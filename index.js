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

app.get('/carrerafter12th', function (req, res) {
    res.render("./carrer.ejs");
});

app.get('/carrer-courses', function (req, res) {
    res.render("./carrer-courses.ejs");
});

app.get('/gim-course', function (req, res) {
    res.render("./gim-course.ejs");
});

app.get('/contact-us', function (req, res) {
    res.render("./contact.ejs");
});

app.get('/about-us', function (req, res) {
    res.render("./about.ejs");
});
app.listen(port);