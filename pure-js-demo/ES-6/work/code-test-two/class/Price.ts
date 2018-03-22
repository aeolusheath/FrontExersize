export default class Price {
  num: number
  unit: string
  constructor(num:number=0, unit:string) {
    this.unit = unit
    this.num = num 
  }
  setPrice (num) {
    this.num = num
  }
  getPrice() {
    return this.num
  }
  toString() {
    return `num is ${this.num}, unit is ${this.unit}`
  }
}