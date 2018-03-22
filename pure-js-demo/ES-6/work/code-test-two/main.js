var Good = require('./class/Good').default
var GoodItem = require('./class/GoodItem').default
var NotationNumber = require('./class/NotationNumber').default
var Price = require('./class/Price').default

var readFile = require('./read-file')
var Parser = require('./parser')
var path = require('path')

var utilMethods = require('./utils/string-utils')
let { formatStrBlank, splitByRegExp, splitByIs, formatConent } = utilMethods

const ROMAN_ARABIC_MAP = require('./const/roman-numeral-arabic') // get map roman numerals to arabric
const ROMAN_NUM_ENUM = Object.keys(ROMAN_ARABIC_MAP) //get all roman notation ['I', 'V', 'X', 'L', 'C', 'D', 'M']

var filePath = path.join(__dirname, 'test-input.py')

function isQuestion(line) {
  let pureStr = line.trim()
  return ['?'].includes(pureStr.charAt(pureStr.length-1))
}



readFile(filePath, (content)=>{
  lines = formatConent(content)
  let statements = lines.filter(item=>!isQuestion(item))
  let questions = lines.filter(item=>isQuestion(item))
  //得到准备数据 Good【名字，单价】
  //step 1 get {glob : L, pish: X}
  let galacticNotationRomanMap = getGalacticNotationRomanMap(statements)
  let { allUnits, goodsInStock } = getGoodsInfo(statements, galacticNotationRomanMap)
  //step3 answer question
  handleQuestion(questions, galacticNotationRomanMap, allUnits, goodsInStock);
})



function getGalacticNotationRomanMap(statements) {
  let galacticNotationRomanMap = {}
  statements.forEach(item => {
    let line = item.trim();
    // first glob is L
    let regExp = new RegExp(/^\s*[a-zA-Z_-]+\s+is\s+[IVXLCDM]\s*$/);
    if (regExp.test(line)) {
      let notation = splitByIs(line)[0]; // get notation represent roman numeral
      galacticNotationRomanMap[notation] = splitByIs(line)[1];
    }
  })
  return galacticNotationRomanMap
}

function getGoodsInfo(statements, galacticNotationRomanMap) {
  let obj = {
    allUnits: [],
    goodsInStock: []
  }
  statements.forEach(item => {
    let line = item.trim();
    let regStr = `\^\\s*`;
    regStr += `((${Object.keys(galacticNotationRomanMap).join('|')})\\s+)+`; // glob glob glob
    regStr += `[a-zA-Z-_]+\\s+`; // silver
    regStr += `is\\s+`; // is 
    regStr += `[1-9]\\d*\\s+`; // 999 
    regStr += `[a-zA-Z-_]+\\s*`; // Credits
    regStr += `\$`;
    if (new RegExp(regStr).test(line)) {
      let arrItem = splitByIs(line)
      // glob glob Silver
      let numberNotationsAndGoodName = splitByRegExp(arrItem[0], /\s+/) // [glob glob Silver]
      let goodName = numberNotationsAndGoodName.pop()
      notationNumber = new NotationNumber(numberNotationsAndGoodName, galacticNotationRomanMap)
      if (!notationNumber.isValidNotationNumber()) return //不是合法的数字
      let totalPriceAndCurrency = splitByRegExp(arrItem[1], /\s+/)
      let totalPrice = totalPriceAndCurrency[0], currencyUnit = totalPriceAndCurrency[1]
      if(!obj.allUnits.includes(currencyUnit)) obj.allUnits.push(currencyUnit)
      let good = new Good(goodName)
      good.setPrice(totalPrice, notationNumber, currencyUnit)
      obj.goodsInStock.push(good)
    }
  })
  return obj
}

function handleQuestion(questions, galacticNotationRomanMap, allUnits, goodsInStock) {
  questions.forEach(item => {
    let line = item.trim();
    //构造 NotationNumber对象。。。 然后调用 getArabicTotalNumbers方法
    let regExp = /^\s*how\s+much\s+is\s+([a-zA-Z_-]+\s*)+\?\s*$/
    if (regExp.test(line)) {
      let notationStr = splitByIs(line)[1] // glob abc ?
      let notationArr = notationStr.split(/\s*\?\s*/)[0].trim().split(/\s+/)
      let notationNumber = new NotationNumber(notationArr, galacticNotationRomanMap)
      if (notationNumber.isValidNotationNumber()) {
        console.log(notationArr.join(' ') + ' is ' + notationNumber.getArabicNumber())
      }
      else {
        console.log('I have no idea what you are talking about')
      }
    }
    let regExp2 = /^\s*how\s+many\s+([a-zA-Z-_]+\s+)is\s+([a-zA-Z_-]+\s*)+\?\s*$/;
    if (regExp2.test(line)) {
      let strArr = splitByIs(line);
      let currencyUnit = strArr[0].replace('how many', '').trim(),
        notationsAndGoodName = splitByRegExp(strArr[1].replace('?', '').trim(), /\s+/),
        goodName = notationsAndGoodName.pop(),
        notaionArr = notationsAndGoodName,
        notationNumber = new NotationNumber(notaionArr, galacticNotationRomanMap)
      let goodAvailible = goodsInStock.find(item=>item.getName() === goodName)
      let priceNum = goodAvailible ? goodAvailible.getPrice().getNum(): 0
        good = new Good(goodName, new Price(currencyUnit, priceNum)),
        goodItem = new GoodItem(good, notationNumber)
      if (goodItem.isValidGoodItem(allUnits, goodsInStock)) {
        console.log(notaionArr.join(' ') + ' '+ goodName + ' is ' + goodItem.getTotalPrice() + ' ' + currencyUnit)
      }else {
        console.log('I have no idea what you are talking about')        
      }
    }
  })
}