import Price from './Price'
import NotationNumber from './NotationNumber'

/**
 * 封装商品类，基本属性name 和 价格 Price对象
 */
export default class Good {
  name: string
  price: Price
  constructor (name: string, price: Price) {
    this.name =  name
    this.price = price
  }
  getName () {
    return this.name
  }
  getPrice () {
    return this.price
  }
  setPrice (total: number, notationNumber: NotationNumber, unit: string) {
    this.price = new Price(unit, total/notationNumber.getArabicNumber())
  }
}