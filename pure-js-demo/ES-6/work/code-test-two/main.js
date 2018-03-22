var Good = require('./class/js/Good').default
var GoodItem = require('./class/js/GoodItem').default
var NotationNumber = require('./class/js/NotationNumber').default
var Price = require('./class/js/Price').default

var readFile = require('./read-file')
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
  // step 1 get {glob : L, pish: X}
  let galacticNotationRomanMap = getGalacticNotationRomanMap(statements)
  // step 2 get 所有用到的单位，只有合法的语句才会记录； get 所有仓库里面的物品 Good类型Array
  let { allUnits, goodsInStock } = getGoodsInfo(statements, galacticNotationRomanMap)
  // step 3 answer question 问题按照how much 和how many区分是NotationNumber 还是 GoodItem 货架里面的某一条数据记录
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
    // 每一条how many 暂且理解为一个 goodItem 对象的求值【求单价 求总价 求数量（需要扩展）】
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
    //todo 问号 语句没有匹配到的输出 不认识
  })
}