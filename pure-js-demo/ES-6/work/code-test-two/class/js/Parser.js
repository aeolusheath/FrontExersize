"use strict";
exports.__esModule = true;
var utilMethods = require("../../utils/string-utils");
// import ROMAN_ARABIC_MAP = require('../../const/roman-numeral-arabic') // get map roman numerals to arabric
// const ROMAN_NUM_ENUM = Object.keys(ROMAN_ARABIC_MAP) //get all roman notation ['I', 'V', 'X', 'L', 'C', 'D', 'M']
var Good_1 = require("./Good");
var GoodItem_1 = require("./GoodItem");
var NotationNumber_1 = require("./NotationNumber");
var Price_1 = require("./Price");
var formatStrBlank = utilMethods.formatStrBlank, splitByRegExp = utilMethods.splitByRegExp, splitByIs = utilMethods.splitByIs, formatConent = utilMethods.formatConent, isQuestion = utilMethods.isQuestion;
var Parser = /** @class */ (function () {
    function Parser(content, diaplayUnrecognizable) {
        if (diaplayUnrecognizable === void 0) { diaplayUnrecognizable = false; }
        // this.content = content
        this.lines = formatConent(content);
        this.statements = this.lines;
        this.questions = [];
        this.statements = [];
        this.galacticNotationRomanMap = {};
        this.allUnits = [];
        this.goodsInStock = [];
        this.regExpMachines = [];
        this.diaplayUnrecognizable = diaplayUnrecognizable;
        //this.lines format todo 引入帮助方法
    }
    Parser.prototype.parse = function () {
        this._prepareData();
        this._handleLines();
    };
    Parser.prototype._outputWarn = function (line) {
        // console.log(this)
        console.log(this.diaplayUnrecognizable, 'abcccccccccccccccccccccccccccccccccccccc');
        console.log('line    ' + line);
        var result = this.diaplayUnrecognizable ? (line + ' --------> ') : '';
        // result = result + 'I have no idea what you are talking about' 
        console.log('result   ' + result);
    };
    Parser.prototype._handleLines = function () {
        var _this = this;
        this.lines.forEach(function (line) {
            var index = _this.regExpMachines.findIndex(function (item) {
                return item.regExp.test(line);
            });
            // console.log(index)
            if (index === -1) {
                // let result = this.diaplayUnrecognizable ? (line +' --------> ') : ''
                // result += 'I have no idea what you are talking about' 
                // console.log(result)
                _this._outputWarn(line);
            }
            else {
                // console.log(this.regExpMachines[index].type, 'type---------------')
                // this.regExpMachines[index].type!=='statement' && this.regExpMachines[index].handleMethod(line)
                if (_this.regExpMachines[index].type !== 'statement') {
                    var handleFunc = _this.regExpMachines[index].handleMethod.bind(_this, line);
                    handleFunc(line);
                }
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
            // first glob is L
            if (regExp.test(line)) {
                var notation = splitByIs(line)[0]; // get notation represent roman numeral
                galacticNotationRomanMap[notation] = splitByIs(line)[1];
            }
        });
        // console.log(galacticNotationRomanMap, '________-galacticNotationRomanMap')
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
        // console.log(this.regExpMachines, 'hereee')
    };
    Parser.prototype._regExpOfNotationToArabicHandle = function (line) {
        // console.log(this, 'this is what')
        var notationStr = splitByIs(line)[1]; // glob abc ?
        var notationArr = notationStr.split(/\s*\?\s*/)[0].trim().split(/\s+/);
        var notationNumber = new NotationNumber_1["default"](notationArr, this.galacticNotationRomanMap);
        if (notationNumber.isValidNotationNumber()) {
            console.log(notationArr.join(' ') + ' is ' + notationNumber.getArabicNumber());
        }
        else {
            // let result = this.diaplayUnrecognizable ? (line +' --------> ') : ''
            // result += 'I have no idea what you are talking about' 
            // console.log(result)
            this._outputWarn(line);
        }
    };
    Parser.prototype._regExpOfGetTotalPriceHandle = function (line) {
        // console.log(this, 'this2222222222222222')
        var strArr = splitByIs(line);
        var currencyUnit = strArr[0].replace('how many', '').trim(), notationsAndGoodName = splitByRegExp(strArr[1].replace('?', '').trim(), /\s+/), goodName = notationsAndGoodName.pop(), notaionArr = notationsAndGoodName, notationNumber = new NotationNumber_1["default"](notaionArr, this.galacticNotationRomanMap);
        var goodAvailible = this.goodsInStock.find(function (item) { return item.getName() === goodName; });
        var priceNum = goodAvailible ? goodAvailible.getPrice().getNum() : 0, good = new Good_1["default"](goodName, new Price_1["default"](currencyUnit, priceNum)), goodItem = new GoodItem_1["default"](good, notationNumber);
        if (goodItem.isValidGoodItem(this.allUnits, this.goodsInStock)) {
            console.log(notaionArr.join(' ') + ' ' + goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit);
        }
        else {
            // let result = this.diaplayUnrecognizable ? (line +' --------> ') : ''
            // result += 'I have no idea what you are talking about' 
            // console.log(result)
            this._outputWarn(line);
        }
    };
    return Parser;
}());
exports["default"] = Parser;
