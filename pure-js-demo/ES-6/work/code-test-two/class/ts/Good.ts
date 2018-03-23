import Price from './Price'
import NotationNumber from './NotationNumber'
export default class Good {
  name: string
  price: Price //价格 和 单位
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
  setPrice (total:number, notationNumber: NotationNumber, unit: string) {
    this.price = new Price(unit, total/notationNumber.getArabicNumber())
  }
}