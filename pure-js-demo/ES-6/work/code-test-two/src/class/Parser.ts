"use strict"
import Good from './Good'
import GoodItem  from './GoodItem'
import NotationNumber from './NotationNumber'
import Price from './Price'
import GoodItemService from '../service/GoodItemService'
import NotationNumberService from '../service/NotationNumberService'

import utilMethods = require('../../utils/string-utils')
let { splitByRegExp, splitByIs, formatConent, isQuestion } = utilMethods

export default class Parser {
  lines: string[]
  statements: string[]
  questions: string[]
  galacticNotationRomanMap: object //{glob : L, pish: X}
  allUnits: string[] //记录合法的单位
  goodsInStock: Good[] //模拟货架
  regExpMachines: any[] //保存正则与处理器的映射，如果需要自定可以操纵这个对象
  constructor (content){
    this.lines = formatConent(content)
    this.statements = this.lines
    this.questions = []
    this.statements = []
    this.galacticNotationRomanMap = {}
    this.allUnits = []
    this.goodsInStock = []
    this.regExpMachines = []
  }
  parse () {
    this._prepareData()
    this._handleLines()
  }
  addNewRegExpHandle (obj:object) {
    this.regExpMachines.push(obj)
  }
  _outputWarn () {
    console.log('I have no idea what you are talking about')
  }
  _handleLines () {
    this.lines.forEach(line=>{
      let index = this.regExpMachines.findIndex(item=>{
       return item.regExp.test(line)
      })
      if(index === -1) {
        this._outputWarn()
      }
      if(index !== -1 && this.regExpMachines[index].type!=='statement' ) {
        let handleFunc = this.regExpMachines[index].handleMethod.bind(this, line)
        handleFunc(line)
      }
    })
  }
  _prepareData () {
    this._getGalacticNotationRomanMap()
    this._getGoodsInfo()
    this._addDefaultRegExpHandles()
  }
  _getGalacticNotationRomanMap () {
    let galacticNotationRomanMap = {}
    let regExp = new RegExp(/^\s*[a-zA-Z_-]+\s+is\s+[IVXLCDM]\s*$/)
    this.regExpMachines.push({regExp: regExp, type: 'statement'})    
    this.lines.filter(item=>!isQuestion(item)).forEach(item => {
      let line = item.trim()
      if (regExp.test(line)) {
        let notation = splitByIs(line)[0]
        galacticNotationRomanMap[notation] = splitByIs(line)[1]
      }
    })
    this.galacticNotationRomanMap = galacticNotationRomanMap
  }
  _getGoodsInfo () {
    let allUnits = [],
      goodsInStock= []
    let regStr = `\^\\s*`
    regStr += `((${Object.keys(this.galacticNotationRomanMap).join('|')})\\s+)+` // glob glob glob
    regStr += `[a-zA-Z-_]+\\s+` // silver
    regStr += `is\\s+` // is 
    regStr += `[1-9]\\d*\\s+` // 999 
    regStr += `[a-zA-Z-_]+\\s*` // Credits
    regStr += `\$`
    this.regExpMachines.push({ regExp: new RegExp(regStr), type: 'statement' })      
    this.lines.filter(item=>!isQuestion(item)).forEach(item => {
      let line = item.trim()
      if (new RegExp(regStr).test(line)) {
        let arrItem = splitByIs(line)
        // glob glob Silver
        let numberNotationsAndGoodName = splitByRegExp(arrItem[0], /\s+/) // [glob glob Silver]
        let goodName = numberNotationsAndGoodName.pop(),
          notationNumber = new NotationNumber(numberNotationsAndGoodName, this.galacticNotationRomanMap)
        if (!notationNumber.isValidNotationNumber()) return //not valid

        let totalPriceAndCurrency = splitByRegExp(arrItem[1], /\s+/)
        let totalPrice = totalPriceAndCurrency[0],
          currencyUnit = totalPriceAndCurrency[1]
        if(!allUnits.includes(currencyUnit)) allUnits.push(currencyUnit)
        let good = new Good(goodName, null)
        good.setPrice(totalPrice, notationNumber, currencyUnit)
        goodsInStock.push(good)
      }
    })
    this.allUnits = allUnits
    this.goodsInStock = goodsInStock
  }
  _addDefaultRegExpHandles () {
    let regExpObj = {
      regExpOfNotationToArabic: /^\s*how\s+much\s+is\s+([a-zA-Z_-]+\s*)+\?\s*$/,
      regExpOfGetTotalPrice: /^\s*how\s+many\s+([a-zA-Z-_]+\s+)is\s+([a-zA-Z_-]+\s*)+\?\s*$/
    }
    for(let key in regExpObj) {
      this.regExpMachines.push({
        regExp: regExpObj[key],
        type: 'question',
        handleMethod: this[`_${key}Handle`]
      })
    }
  }
  _regExpOfNotationToArabicHandle (line) {
    var notationNumberService = new NotationNumberService(line, this.galacticNotationRomanMap)
    console.log(notationNumberService.analyse())
  }
  _regExpOfGetTotalPriceHandle(line) {
    var goodItemService = new GoodItemService(line, this.galacticNotationRomanMap, this.goodsInStock, this.allUnits)
    console.log(goodItemService.analyse())
  }
}