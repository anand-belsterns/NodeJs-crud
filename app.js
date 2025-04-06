var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./user/UserController");

console.log("UserController ----------->>", UserController);

app.use("/users", UserController);

module.exports = app;
