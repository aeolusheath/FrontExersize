"use strict";
exports.__esModule = true;
var Price_1 = require("./Price");
var Good = /** @class */ (function () {
    function Good(name, price) {
        this.name = name;
        this.price = price;
    }
    Good.prototype.getName = function () {
        return this.name;
    };
    Good.prototype.getPrice = function () {
        return this.price;
    };
    Good.prototype.setPrice = function (total, notationNumber, unit) {
        this.price = new Price_1["default"](unit, total / notationNumber.getArabicNumber());
    };
    return Good;
}());
exports["default"] = Good;
