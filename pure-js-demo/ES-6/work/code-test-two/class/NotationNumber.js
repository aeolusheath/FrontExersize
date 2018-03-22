"use strict";
exports.__esModule = true;
var validateRomanNum = require("../utils/validate-roman-num");
var convertRomanNumToArabicNum = require("../utils/convert-roman-to-arabic");
var NotationNumber = /** @class */ (function () {
    function NotationNumber(numSymbols, notaitionToNumeral) {
        this.getRomanNum = function (arr, obj) {
            var res = '';
            arr.forEach(function (item) { return res += obj[item]; });
            return res;
        };
        this.numSymbols = numSymbols,
            this.notaitionToNumeral = notaitionToNumeral;
    }
    //how much is glob
    NotationNumber.prototype.getArabicNumber = function () {
        var romanNum = this.getRomanNum(this.numSymbols, this.notaitionToNumeral);
        return convertRomanNumToArabicNum(romanNum);
    };
    //验证这个数字是否是合法的罗马数字
    NotationNumber.prototype.isValidNotationNumber = function () {
        var romanNum = this.getRomanNum(this.numSymbols, this.notaitionToNumeral);
        return validateRomanNum(romanNum);
    };
    return NotationNumber;
}());
exports["default"] = NotationNumber;
