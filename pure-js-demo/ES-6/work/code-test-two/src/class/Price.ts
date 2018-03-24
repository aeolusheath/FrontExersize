export default class Price {
  num: number
  unit: string
  constructor(unit:string, num:number=0,) {
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