"use strict";
exports.__esModule = true;
var Price = /** @class */ (function () {
    function Price(unit, num) {
        if (num === void 0) { num = 0; }
        this.unit = unit;
        this.num = num;
    }
    Price.prototype.setNum = function (num) {
        this.num = num;
    };
    Price.prototype.getNum = function () {
        return this.num;
    };
    Price.prototype.toString = function () {
        return "num is " + this.num + ", unit is " + this.unit;
    };
    return Price;
}());
exports["default"] = Price;
