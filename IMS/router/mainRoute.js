"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoute = void 0;
var imageTrackerRoute_1 = require("./imageTrackerRoute");
var mainRoute = function (route) {
    (0, imageTrackerRoute_1.imageTrackerRoute)(route);
    return route;
};
exports.mainRoute = mainRoute;
