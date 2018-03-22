// // import STRINGUTILS = require ('../utils/string-utils')
// import { NotationNumber } from './NotationNumber'
// var stringUtils = import ('../utils/string-utils')
// class Line {
//   splitTag: RegExp
//   str: string
//   type: string // 若是一个陈述语句 则output 不输出值， 或者不识别这一句话 输出 不识别
//   constructor (str: string, splitTag: RegExp=/\s+is\s+/) {
//     this.str = str
//     this.splitTag = splitTag
//   }
//   splitByTag () {
//     return this.str.split(this.splitTag)
//   }
//   output () {
//   }
// }

// //对应关系 不保存对象

// // class Notation  {
// //   galacticNumNotation: string // glob
// //   romanNumNotation: string    // L

// //   constructor (galacticNumNotation: string, romanNumNotation: string) {
// //     this.galacticNumNotation = galacticNumNotation
// //     this.romanNumNotation = romanNumNotation
// //   }
// //   getArabicDecimalNumber () {

// //   }
// // }

// //数量
// // class NotationNumber {
// //   numSymbols: string[] // ['pish tegj glob glob']
// //   notaitionToNumeral: object // {glob: L}
// //   constructor (numSymbols, notaitionToNumeral) {
// //     this.numSymbols = numSymbols,
// //     this.notaitionToNumeral = notaitionToNumeral
// //   }
// //   //how much is glob
// //   getArabicTotalNumber () {
// //     return 100
// //   }
// //   //验证这个数字是否是合法的罗马数字
// //   isValidNotationNumber () {

// //   }
// // }

// // class Price {
// //   num: number
// //   unit: string
// //   constructor(unit:string, num:number=0) {
// //     this.unit = unit
// //     this.num = num 
// //   }
// //   setPrice (num) {
// //     this.num = num
// //   }
// //   getPrice() {
// //     return this.num
// //   }
// // }

// //商品
// class Good {
//   name: string
//   price: Price //单价
//   constructor (name: string, price: Price) {
//     this.name =  name
//     this.price = price
//   }
//   getPrice (price) {
//     return this.price
//   }
//   setPrice (total:number, notationNumber: NotationNumber, unit: string) {
//     var price = new Price(unit, total/notationNumber.getArabicTotalNumber())
//     // this.prices.push(price) 
//   }
// }

// // var good = new Good('silver')

// //货架的某一条
// class GoodItem {
//   good: Good // 便于扩展
//   notationNumber: NotationNumber
//   totalPrice: number
//   constructor (good: Good, notationNumber: NotationNumber) {
//     this.good = good
//     this.notationNumber = notationNumber
//   }
//   isValidGoodItem (unitsArr, goodsInStock) {
//     //totationNumber is
//     if(!this.notationNumber.isValidNotationNumber()) return false
//     if(!unitsArr.includes(this.good.price.unit)) return false
//     if(!goodsInStock.map(item=>item.name).includes(this.good.name)) return false
//   }
//   getTotalPrice () {
//     this.totalPrice = this.good.price.num * this.notationNumber.getArabicTotalNumber()
//     return this.totalPrice
//   }
//   // this.totalPrice/notationNumber
//   getTotalCount () {

//   }
// }


