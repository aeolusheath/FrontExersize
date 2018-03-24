"use strict";
exports.__esModule = true;
var Good_1 = require("./Good");
var NotationNumber_1 = require("./NotationNumber");
var GoodItemService_1 = require("./GoodItemService");
var NotationNumberService_1 = require("./NotationNumberService");
var utilMethods = require("../../utils/string-utils");
var formatStrBlank = utilMethods.formatStrBlank, splitByRegExp = utilMethods.splitByRegExp, splitByIs = utilMethods.splitByIs, formatConent = utilMethods.formatConent, isQuestion = utilMethods.isQuestion;
var Parser = /** @class */ (function () {
    function Parser(content) {
        // this.content = content
        this.lines = formatConent(content);
        this.statements = this.lines;
        this.questions = [];
        this.statements = [];
        this.galacticNotationRomanMap = {};
        this.allUnits = [];
        this.goodsInStock = [];
        this.regExpMachines = [];
    }
    Parser.prototype.parse = function () {
        this._prepareData();
        this._handleLines();
    };
    Parser.prototype.addNewRegExpHandle = function (obj) {
        this.regExpMachines.push(obj);
    };
    Parser.prototype._outputWarn = function () {
        console.log('I have no idea what you are talking about');
    };
    Parser.prototype._handleLines = function () {
        var _this = this;
        this.lines.forEach(function (line) {
            var index = _this.regExpMachines.findIndex(function (item) {
                return item.regExp.test(line);
            });
            if (index === -1) {
                _this._outputWarn();
            }
            if (index !== -1 && _this.regExpMachines[index].type !== 'statement') {
                var handleFunc = _this.regExpMachines[index].handleMethod.bind(_this, line);
                handleFunc(line);
            }
        });
    };
    Parser.prototype._prepareData = function () {
        this._getGalacticNotationRomanMap();
        this._getGoodsInfo();
        this._addDefaultRegExpHandles();
    };
    Parser.prototype._getGalacticNotationRomanMap = function () {
        var galacticNotationRomanMap = {};
        var regExp = new RegExp(/^\s*[a-zA-Z_-]+\s+is\s+[IVXLCDM]\s*$/);
        this.regExpMachines.push({ regExp: regExp, type: 'statement' });
        this.lines.filter(function (item) { return !isQuestion(item); }).forEach(function (item) {
            var line = item.trim();
            if (regExp.test(line)) {
                var notation = splitByIs(line)[0]; // get notation represent roman numeral
                galacticNotationRomanMap[notation] = splitByIs(line)[1];
            }
        });
        this.galacticNotationRomanMap = galacticNotationRomanMap;
    };
    Parser.prototype._getGoodsInfo = function () {
        var _this = this;
        var allUnits = [], goodsInStock = [];
        var regStr = "^\\s*";
        regStr += "((" + Object.keys(this.galacticNotationRomanMap).join('|') + ")\\s+)+"; // glob glob glob
        regStr += "[a-zA-Z-_]+\\s+"; // silver
        regStr += "is\\s+"; // is 
        regStr += "[1-9]\\d*\\s+"; // 999 
        regStr += "[a-zA-Z-_]+\\s*"; // Credits
        regStr += "$";
        this.regExpMachines.push({ regExp: new RegExp(regStr), type: 'statement' });
        this.lines.filter(function (item) { return !isQuestion(item); }).forEach(function (item) {
            var line = item.trim();
            if (new RegExp(regStr).test(line)) {
                var arrItem = splitByIs(line);
                // glob glob Silver
                var numberNotationsAndGoodName = splitByRegExp(arrItem[0], /\s+/); // [glob glob Silver]
                var goodName = numberNotationsAndGoodName.pop(), notationNumber = new NotationNumber_1["default"](numberNotationsAndGoodName, _this.galacticNotationRomanMap);
                if (!notationNumber.isValidNotationNumber())
                    return; //不是合法的数字
                var totalPriceAndCurrency = splitByRegExp(arrItem[1], /\s+/);
                var totalPrice = totalPriceAndCurrency[0], currencyUnit = totalPriceAndCurrency[1];
                if (!allUnits.includes(currencyUnit))
                    allUnits.push(currencyUnit);
                var good = new Good_1["default"](goodName, null);
                good.setPrice(totalPrice, notationNumber, currencyUnit);
                goodsInStock.push(good);
            }
        });
        this.allUnits = allUnits;
        this.goodsInStock = goodsInStock;
    };
    Parser.prototype._addDefaultRegExpHandles = function () {
        var regExpObj = {
            regExpOfNotationToArabic: /^\s*how\s+much\s+is\s+([a-zA-Z_-]+\s*)+\?\s*$/,
            regExpOfGetTotalPrice: /^\s*how\s+many\s+([a-zA-Z-_]+\s+)is\s+([a-zA-Z_-]+\s*)+\?\s*$/
        };
        for (var key in regExpObj) {
            this.regExpMachines.push({
                regExp: regExpObj[key],
                type: 'question',
                handleMethod: this["_" + key + "Handle"]
            });
        }
    };
    Parser.prototype._regExpOfNotationToArabicHandle = function (line) {
        var notationNumberService = new NotationNumberService_1["default"](line, this.galacticNotationRomanMap);
        console.log(notationNumberService.analyse());
    };
    Parser.prototype._regExpOfGetTotalPriceHandle = function (line) {
        var goodItemService = new GoodItemService_1["default"](line, this.galacticNotationRomanMap, this.goodsInStock, this.allUnits);
        console.log(goodItemService.analyse());
    };
    return Parser;
}());
exports["default"] = Parser;
