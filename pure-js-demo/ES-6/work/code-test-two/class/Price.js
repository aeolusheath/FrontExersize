"use strict";
exports.__esModule = true;
var Price = /** @class */ (function () {
    function Price(num, unit) {
        if (num === void 0) { num = 0; }
        this.unit = unit;
        this.num = num;
    }
    Price.prototype.setPrice = function (num) {
        this.num = num;
    };
    Price.prototype.getPrice = function () {
        return this.num;
    };
    Price.prototype.toString = function () {
        return "num is " + this.num + ", unit is " + this.unit;
    };
    return Price;
}());
exports["default"] = Price;
