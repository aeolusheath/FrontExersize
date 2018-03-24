import NotationNumber from '../class/NotationNumber'
import  utilMethods = require('../../utils/string-utils')
let { splitByIs } = utilMethods

/**
 * 处理interGalactic number notations 的服务方法
 */
export default class NotationNumberService {
  line: string
  notationNumber: NotationNumber

  constructor(line, galacticNotationRomanMap) {
    let notationStr = splitByIs(line)[1] // glob abc ?
    let notationArr = notationStr.split(/\s*\?\s*/)[0].trim().split(/\s+/)
    this.notationNumber = new NotationNumber(notationArr, galacticNotationRomanMap)
  }

  //获取表示的总数
  analyse() {
    let result 
    if (this.notationNumber.isValidNotationNumber()) {
      result = this.notationNumber.getNotations() + ' is ' + this.notationNumber.getArabicNumber()
    }
    else {    
      result = 'I have no idea what you are talking about'
    }
    return result
  }
}