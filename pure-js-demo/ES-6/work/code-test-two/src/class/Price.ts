/**
 * 单价不能只是数字，可能和货币计量单位有关系，故封装一个对象
 * unit 表示特定的计量单位，当前测试文件可用的是 Credits
 */
export default class Price {
  num: number
  unit: string
  constructor(unit: string, num: number=0) {
    this.unit = unit
    this.num = num 
  }
  setNum (num) {
    this.num = num
  }
  getNum() {
    return this.num
  }
  toString() {
    return `num is ${this.num}, unit is ${this.unit}`
  }
}