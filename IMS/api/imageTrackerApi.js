"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTrackerApi = void 0;
var ImageTrackerService_1 = require("../service/ImageTrackerService");
var ImageTrackerApi = /** @class */ (function () {
    function ImageTrackerApi() {
        this.invoke = function (req, res) {
            var result = ImageTrackerService_1.imageTrackerService.invoke(req);
            res.send(result);
        };
    }
    return ImageTrackerApi;
}());
exports.imageTrackerApi = new ImageTrackerApi();
