"use strict";
exports.__esModule = true;
var GoodItem = /** @class */ (function () {
    function GoodItem(good, notationNumber) {
        this.good = good;
        this.notationNumber = notationNumber;
    }
    GoodItem.prototype.isValidGoodItem = function (unitsArr, goodsInStock) {
        if (!this.notationNumber.isValidNotationNumber())
            return false;
        if (!unitsArr.includes(this.good.price.unit))
            return false;
        if (!goodsInStock.map(function (item) { return item.name; }).includes(this.good.name))
            return false;
    };
    GoodItem.prototype.getTotalPrice = function () {
        this.totalPrice = this.good.price.num * this.notationNumber.getArabicTotalNumber();
        return this.totalPrice;
    };
    GoodItem.prototype.getTotalCount = function () {
    };
    return GoodItem;
}());
exports["default"] = GoodItem;
