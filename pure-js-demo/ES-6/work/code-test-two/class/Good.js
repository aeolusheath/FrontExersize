"use strict";
exports.__esModule = true;
var Price_1 = require("./Price");
var Good = /** @class */ (function () {
    function Good(name, price) {
        this.name = name;
        this.price = price;
    }
    Good.prototype.getPrice = function (price) {
        return this.price;
    };
    Good.prototype.setPrice = function (total, notationNumber, unit) {
        this.price = new Price_1["default"](total / notationNumber.getArabicTotalNumber(), unit);
    };
    return Good;
}());
exports["default"] = Good;
