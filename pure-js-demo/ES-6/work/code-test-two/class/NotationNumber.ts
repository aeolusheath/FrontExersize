
import validateRomanNum = require( '../utils/validate-roman-num' )
import convertRomanNumToArabicNum = require('../utils/convert-roman-to-arabic')
export default class NotationNumber {
  numSymbols: string[] // ['pish tegj glob glob']
  notaitionToNumeral: object // {glob: L}
  constructor (numSymbols, notaitionToNumeral) {
    this.numSymbols = numSymbols,
    this.notaitionToNumeral = notaitionToNumeral
  }
  //how much is glob
  getArabicNumber () {
    let romanNum = this.getRomanNum(this.numSymbols, this.notaitionToNumeral)
    return convertRomanNumToArabicNum(romanNum)
  }
  //验证这个数字是否是合法的罗马数字
  isValidNotationNumber () {
    console.log(this.numSymbols, 'this.numSymbolsthis.numSymbols')
    let romanNum = this.getRomanNum(this.numSymbols, this.notaitionToNumeral)
    return validateRomanNum(romanNum)
  }
  getRomanNum = (arr, obj)=> {
    let res = ''
    arr.forEach( item => res+=obj[item] )
    return res
  } 
}
