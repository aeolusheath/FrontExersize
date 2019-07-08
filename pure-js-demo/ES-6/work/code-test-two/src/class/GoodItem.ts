import Good from './Good'
import NotationNumber from './NotationNumber'
export default class GoodItem {
  good: Good
  notationNumber: NotationNumber
  totalPrice: number
  constructor (good: Good, notationNumber: NotationNumber) {
    this.good = good
    this.notationNumber = notationNumber
  }
  isValidGoodItem (unitsArr, goodsInStock) {
    if(!this.notationNumber.isValidNotationNumber()) return false
    if(!unitsArr.includes(this.good.price.unit)) return false
    if(!goodsInStock.map(item=>item.name).includes(this.good.name)) return false
    return true
  }
  getTotalPrice () {
    this.totalPrice = this.good.price.num * this.notationNumber.getArabicNumber()
    return this.totalPrice
  }
  getTotalCount () {
  }
  getGood () {
    return this.good
  }
}