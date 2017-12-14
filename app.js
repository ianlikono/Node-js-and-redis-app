const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const methodOveride = require("method-override");
const redis = require("redis");

//Redis Client

let client = redis.createClient();

client.on("connect", function() {
  console.log("connected to redis...");
});

const port = 3000;

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOveride("_method"));

app.get("/", function(req, res, next) {
  res.render("searchusers");
});

app.post("/user/search", function(req, res, next) {
  let id = req.body.id;
});

app.listen(port, function() {
  console.log("Server Startrd On Port " + port);
});
