"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = void 0;
var getImages = function (zipCode) {
    var imageMapper = new Map();
    imageMapper.set("75019", ["../abc.gif"]);
    return imageMapper.get(zipCode);
};
exports.getImages = getImages;
