"use strict";
exports.__esModule = true;
var NotationNumber_1 = require("./NotationNumber");
var GoodItem_1 = require("./GoodItem");
var Good_1 = require("./Good");
var Price_1 = require("./Price");
var utilMethods = require("../../utils/string-utils");
var formatStrBlank = utilMethods.formatStrBlank, splitByRegExp = utilMethods.splitByRegExp, splitByIs = utilMethods.splitByIs, formatConent = utilMethods.formatConent, isQuestion = utilMethods.isQuestion;
var GoodItemService = /** @class */ (function () {
    function GoodItemService(line, galacticNotationRomanMap, goodsInStock, allUnits) {
        this.galacticNotationRomanMap = galacticNotationRomanMap;
        this.line = line;
        this.allUnits = allUnits;
        this.goodsInStock = goodsInStock;
    }
    GoodItemService.prototype.analyse = function () {
        var strArr = splitByIs(this.line);
        var currencyUnit = strArr[0].replace('how many', '').trim(), notationsAndGoodName = splitByRegExp(strArr[1].replace('?', '').trim(), /\s+/), goodName = notationsAndGoodName.pop(), notaionArr = notationsAndGoodName, notationNumber = new NotationNumber_1["default"](notaionArr, this.galacticNotationRomanMap);
        var goodAvailible = this.goodsInStock.find(function (item) { return item.getName() === goodName; });
        var priceNum = goodAvailible ? goodAvailible.getPrice().getNum() : 0, good = new Good_1["default"](goodName, new Price_1["default"](currencyUnit, priceNum)), goodItem = new GoodItem_1["default"](good, notationNumber);
        var result = '';
        if (goodItem.isValidGoodItem(this.allUnits, this.goodsInStock)) {
            result = notaionArr.join(' ') + ' ' + goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit;
            // console.log(notaionArr.join(' ') + ' '+ goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit)
        }
        else {
            result = 'I have no idea what you are talking about';
            // this._outputWarn(line)
            // console.log('I have no idea what you are talking about')      
        }
        return result;
    };
    return GoodItemService;
}());
exports["default"] = GoodItemService;
