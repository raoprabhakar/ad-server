"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var mainRoute_1 = require("./IMS/router/mainRoute");
var bodyParser = require("body-parser");
var app = express();
exports.app = app;
var router = express.Router();
var port = 9090;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', (0, mainRoute_1.mainRoute)(router));
app.listen(port, function () {
    console.log(" server is listening on port ".concat(port));
});
