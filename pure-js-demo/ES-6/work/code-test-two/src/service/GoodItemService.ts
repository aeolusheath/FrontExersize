import NotationNumber from '../class/NotationNumber'
import GoodItem from '../class/GoodItem'
import Good from '../class/Good'
import Price from '../class/Price'
import utilMethods = require('../../utils/string-utils')
let { formatStrBlank, splitByRegExp, splitByIs, formatConent, isQuestion } = utilMethods
export default class GoodItemService {
  line: string
  galacticNotationRomanMap: object
  goodsInStock: Good[]
  allUnits: string[]
  constructor(line, galacticNotationRomanMap, goodsInStock, allUnits) {
    this.galacticNotationRomanMap = galacticNotationRomanMap
    this.line = line
    this.allUnits = allUnits
    this.goodsInStock = goodsInStock
  }
  analyse () {
    let strArr = splitByIs(this.line);
    let currencyUnit = strArr[0].replace('how many', '').trim(),
      notationsAndGoodName = splitByRegExp(strArr[1].replace('?', '').trim(), /\s+/),
      goodName = notationsAndGoodName.pop(),
      notaionArr = notationsAndGoodName,
      notationNumber = new NotationNumber(notaionArr, this.galacticNotationRomanMap)
    let goodAvailible = this.goodsInStock.find(item=>item.getName() === goodName)
    let priceNum = goodAvailible ? goodAvailible.getPrice().getNum(): 0,
      good = new Good(goodName, new Price(currencyUnit, priceNum)),
      goodItem = new GoodItem(good, notationNumber)
    let result = ''
    if (goodItem.isValidGoodItem(this.allUnits, this.goodsInStock)) {
      result = notaionArr.join(' ') + ' '+ goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit
      // console.log(notaionArr.join(' ') + ' '+ goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit)
    }else {
      result = 'I have no idea what you are talking about'
      // this._outputWarn(line)
      // console.log('I have no idea what you are talking about')      
    }
    return result
  }
}