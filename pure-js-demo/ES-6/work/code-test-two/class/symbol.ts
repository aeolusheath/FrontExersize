// import STRINGUTILS = require ('../utils/string-utils')
var stringUtils = import ('../utils/string-utils')
class Line {
  splitTag: RegExp
  str: string
  type: string // 若是一个陈述语句 则output 不输出值， 或者不识别这一句话 输出 不识别
  constructor (str: string, splitTag: RegExp=/\s+is\s+/) {
    this.str = str
    this.splitTag = splitTag
  }
  splitByTag () {
    return this.str.split(this.splitTag)
  }
  output () {
  }
}

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

//数量
class NotationNumber {
  numSymbols: string // 'pish tegj glob glob'
  notaitionToNumeral: object // {glob: L}
  constructor (numSymbols, notaitionToNumeral) {
    this.numSymbols = numSymbols,
    this.notaitionToNumeral = notaitionToNumeral
  }
  //how much is glob 
  getArabicTotalNumbers () {
    return 100
  }
}

//商品
class Good {
  name: string
  price: number
  constructor (name: string, price: number=0) {
    this.name =  name
    this.price = price
  }
  setPrice (price) {
    this.price = price
  }
  getPrice (total:number, notationNumber: NotationNumber) {
    this.price = total/notationNumber.getArabicTotalNumbers()
  }
}

var good = new Good('silver')
console.log(good, good.price)

//货架的某一条
class GoodItem {
  goods: Good // 便于扩展
  notationNumber: NotationNumber
  totalPrice: number
  constructor (goods: Good, notationNumber: NotationNumber) {
    this.goods = goods
    this.notationNumber = notationNumber
  }
}


//----------------------------------------------------------------------
class Context {
  notationNumbers: NotationNumber[]
}