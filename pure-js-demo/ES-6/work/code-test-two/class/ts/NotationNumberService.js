"use strict";
exports.__esModule = true;
var NotationNumber_1 = require("./NotationNumber");
var utilMethods = require("../../utils/string-utils");
var formatStrBlank = utilMethods.formatStrBlank, splitByRegExp = utilMethods.splitByRegExp, splitByIs = utilMethods.splitByIs, formatConent = utilMethods.formatConent, isQuestion = utilMethods.isQuestion;
var NotationNumberService = /** @class */ (function () {
    function NotationNumberService(line, galacticNotationRomanMap) {
        var notationStr = splitByIs(line)[1]; // glob abc ?
        var notationArr = notationStr.split(/\s*\?\s*/)[0].trim().split(/\s+/);
        this.notationNumber = new NotationNumber_1["default"](notationArr, galacticNotationRomanMap);
    }
    NotationNumberService.prototype.analyse = function () {
        var result;
        if (this.notationNumber.isValidNotationNumber()) {
            result = this.notationNumber.getNotations() + ' is ' + this.notationNumber.getArabicNumber();
            // console.log(this.notationNumber.getNotations() + ' is ' + this.notationNumber.getArabicNumber())
        }
        else {
            // let result = this.diaplayUnrecognizable ? (line +' --------> ') : ''
            // result += 'I have no idea what you are talking about' 
            // console.log(result)
            // this._outputWarn(line)      
            result = 'I have no idea what you are talking about';
            // console.log('I have no idea what you are talking about')
        }
        return result;
    };
    return NotationNumberService;
}());
exports["default"] = NotationNumberService;
