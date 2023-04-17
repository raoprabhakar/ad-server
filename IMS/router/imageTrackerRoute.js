"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTrackerRoute = void 0;
var imageTrackerApi_1 = require("../api/imageTrackerApi");
var imageTrackerRoute = function (route) {
    route.get('/ims/v1/image-tracker', imageTrackerApi_1.imageTrackerApi.invoke);
    route.post('/ims/v1/image-tracker', imageTrackerApi_1.imageTrackerApi.invoke);
};
exports.imageTrackerRoute = imageTrackerRoute;
