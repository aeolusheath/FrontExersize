// import STRINGUTILS = require ('../utils/string-utils')
var stringUtils = Promise.resolve().then(function () { return require('../utils/string-utils'); });
var Line = /** @class */ (function () {
    function Line(str, splitTag) {
        if (splitTag === void 0) { splitTag = /\s+is\s+/; }
        this.str = str;
        this.splitTag = splitTag;
    }
    Line.prototype.splitByTag = function () {
        return this.str.split(this.splitTag);
    };
    Line.prototype.output = function () {
    };
    return Line;
}());
//对应关系 不保存对象
// class Notation  {
//   galacticNumNotation: string // glob
//   romanNumNotation: string    // L
//   constructor (galacticNumNotation: string, romanNumNotation: string) {
//     this.galacticNumNotation = galacticNumNotation
//     this.romanNumNotation = romanNumNotation
//   }
//   getArabicDecimalNumber () {
//   }
// }
var NotationNumber = /** @class */ (function () {
    function NotationNumber(numSymbols) {
        this.numSymbols = numSymbols;
    }
    //switch it to roman and
    NotationNumber.prototype.getArabicTotalNumbers = function () {
    };
    return NotationNumber;
}());
var Good = /** @class */ (function () {
    function Good(name, price) {
        if (price === void 0) { price = 0; }
        this.name = name;
        this.price = price;
    }
    Good.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Good;
}());
var good = new Good('silver');
console.log(good, good.price);
var GoodItem = /** @class */ (function () {
    function GoodItem(goods, notationNumber) {
        this.goods = goods;
        this.notationNumber = notationNumber;
    }
    return GoodItem;
}());
//----------------------------------------------------------------------
var Context = /** @class */ (function () {
    function Context() {
    }
    return Context;
}());
