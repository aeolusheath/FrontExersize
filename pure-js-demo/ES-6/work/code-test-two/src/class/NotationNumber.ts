
import validateRomanNum = require( '../../utils/validate-roman-num' )
import convertRomanNumToArabicNum = require('../../utils/convert-roman-to-arabic')

/**
 * 用来封装 'glob glob' 这种interGalacticGalaxy计数的标记
 */
export default class NotationNumber {
  numSymbols: string[] // ['pish tegj glob glob']
  notaionToRomanNumeral: object // {glob: L}
  constructor (numSymbols, notaionToRomanNumeral) {
    this.numSymbols = numSymbols,
    this.notaionToRomanNumeral = notaionToRomanNumeral
  }

  //将 ['pish', 'tegj', 'glob', 'glob'] 转换成 'pish tegj glob glob'
  getNotations () {
    return this.numSymbols.join(' ')
  }

  //根据特定notations转换成阿拉伯数字
  getArabicNumber () {
    let romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral)
    return convertRomanNumToArabicNum(romanNum)
  }

  //判断 pish tegj glob glob 这种标记法是否合法
  isValidNotationNumber () {
    if(this.numSymbols.some(item=>!Object.keys(this.notaionToRomanNumeral).includes(item)))
      return false    
    let romanNum = this.getRomanNum(this.numSymbols, this.notaionToRomanNumeral)
    return validateRomanNum(romanNum)
  }

  //将 ['pish', 'tegj', 'glob', 'glob']这种格式 转换成 罗马数字 VLII
  getRomanNum = (arr, obj)=> {
    let res = ''
    arr.forEach( item => res+=obj[item] )
    return res
  } 
}
