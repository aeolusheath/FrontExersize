import Good from './Good'
import NotationNumber from './NotationNumber'

/**
 * 封装一个商品库存条目[商品 - 数量 - 总价 ] 对象
 */
export default class GoodItem {
  good: Good
  notationNumber: NotationNumber
  totalPrice: number
  constructor (good: Good, notationNumber: NotationNumber) {
    this.good = good
    this.notationNumber = notationNumber
  }

  /**
   * 判断商品条目是否合法 数字标记[数字] -货币计量单位 - 货物是否在货架上
   * @param {array} unitsArr Credits这种单位组成的数组[可能用户用了多种计量单位]
   * @param {array}goodsInStock 货架上（陈述语句里面出现过）的商品
   */
  isValidGoodItem (unitsArr, goodsInStock) {
    if(this.notationNumber.isValidNotationNumber()
        && unitsArr.includes(this.good.price.unit)
        && goodsInStock.map(item=>item.name).includes(this.good.name))
      return true
    return false
  }

  //获取该商品条目的总价格
  getTotalPrice () {
    this.totalPrice = this.good.price.num * this.notationNumber.getArabicNumber()
    return this.totalPrice
  }
}