
import validateRomanNum = require( '../../utils/validate-roman-num' )
import convertRomanNumToArabicNum = require('../../utils/convert-roman-to-arabic')
export default class NotationNumber {
  numSymbols: string[] // ['pish tegj glob glob']
  notaionToRomanNumeral: object // {glob: L}
  constructor (numSymbols, notaionToRomanNumeral) {
    this.numSymbols = numSymbols,
    this.notaionToRomanNumeral = notaionToRomanNumeral
  }
  //how much is glob
  getArabicNumber () {
    let romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral)
    return convertRomanNumToArabicNum(romanNum)
  }
  //验证这个数字是否是合法的罗马数字
  isValidNotationNumber () {
    // console.log( this.numSymbols, this.notaionToRomanNumeral, 'number 内部------》》》》')
    if(this.numSymbols.some(item=>!Object.keys(this.notaionToRomanNumeral).includes(item)))
      return false    
    let romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral)
    return validateRomanNum(romanNum)
  }
  getRomanNum = (arr, obj)=> {
    let res = ''
    arr.forEach( item => res+=obj[item] )
    return res
  } 
}