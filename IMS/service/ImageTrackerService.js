"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTrackerService = void 0;
var mapUtil_1 = require("../util/mapUtil");
var ImageTrackerService = /** @class */ (function () {
    function ImageTrackerService() {
        this.invoke = function (req) {
            var zipCode = req.body.zipCode;
            return (0, mapUtil_1.getImages)(zipCode);
        };
    }
    return ImageTrackerService;
}());
exports.imageTrackerService = new ImageTrackerService();
