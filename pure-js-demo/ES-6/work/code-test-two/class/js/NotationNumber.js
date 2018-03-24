"use strict";
exports.__esModule = true;
var validateRomanNum = require("../../utils/validate-roman-num");
var convertRomanNumToArabicNum = require("../../utils/convert-roman-to-arabic");
var NotationNumber = /** @class */ (function () {
    function NotationNumber(numSymbols, notaionToRomanNumeral) {
        this.getRomanNum = function (arr, obj) {
            var res = '';
            arr.forEach(function (item) { return res += obj[item]; });
            return res;
        };
        this.numSymbols = numSymbols,
            this.notaionToRomanNumeral = notaionToRomanNumeral;
    }
    //how much is glob
    NotationNumber.prototype.getArabicNumber = function () {
        var romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral);
        return convertRomanNumToArabicNum(romanNum);
    };
    //验证这个数字是否是合法的罗马数字
    NotationNumber.prototype.isValidNotationNumber = function () {
        var _this = this;
        // console.log( this.numSymbols, this.notaionToRomanNumeral, 'number 内部------》》》》')
        if (this.numSymbols.some(function (item) { return !Object.keys(_this.notaionToRomanNumeral).includes(item); }))
            return false;
        var romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral);
        return validateRomanNum(romanNum);
    };
    return NotationNumber;
}());
exports["default"] = NotationNumber;
