var express = require("express");
var methodOverride = require("method-override");
var bparser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
