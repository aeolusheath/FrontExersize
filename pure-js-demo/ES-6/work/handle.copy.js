var path = require('path')
var fs = require('fs')
const ROMAN_ARABIC_MAP = require('./const') // get map roman numerals to arabric 
const ROMAN_NUM_ENUM = Object.keys(ROMAN_ARABIC_MAP) //get all roman notation ['I', 'V', 'X', 'L', 'C', 'D', 'M']
var convertRomanNumToArabicNum = require('./utils/convert-roman-to-arabic')
var validateRomanNum  = require( './utils/validate-roman-num' )





var filePath = path.join(__dirname, 'test-input.txt')

function readFile(filePath, callback){
  fs.readFile(filePath, 'utf8', (err, content)=>{
    if(err) return console.error('读取文件出错')
    callback(content)
  })
}


readFile(filePath, (content)=>{
  // Contenxt.parse(content)
  var parser = new Parser(content);
  parser.prepareData()
  parser.analysize()
})

function Parser (content) {
    
    this.lines = content.split(/\n/)
    this.galacticNotationsToRoman = {} //{glob: I}
    this.allGalaticNotations = []//[glob, pish]
    this.goodsPrice = {} //{silver: 100}
    this.allGoods = [] //[silver]
    /**
     * {
     *  regExp: ''
     *  validateMethod: ''
     *  errorMsg: ''
     * }
     */
    this.prepareData = ()=> {
      this.galacticNotationsToRoman = this._getGalacticNotationsToRoman() //{glob: I}
      this.allGalaticNotations = this._getAllGalacticNotations() //[glob, pish]
      this.goodsPrice = this._getGoodsPrice() //{silver: 100}
      this.allGoods = this._getAllGoods()
    }
    this.analysize = () => {
      this.lines.forEach(item=>{
        this._handleNotationSwitch(item)
        this._handlePriceDeclare(item)
        this._handleTotalNumber(item)
        this._handleGoodsTotalPrice(item)
      })
    }
    this._getAllGoods = () =>{
      return Object.keys(this.goodsPrice)
    }
    this._validateIsRomanNumeralNotation = (item) => {
      let romanNumNotation = splitByIs(item)[1].trim()
      // jacu is P appears, but p is not a standard roman numeral notation
      if(!ROMAN_NUM_ENUM.includes(romanNumNotation)) {
        return console.log(`${item} --------> \'${romanNumNotation}\' is not valid roman numeral notation `)
      }
    }
    this._getGalacticNotationsToRoman = ()=> {
      let regExp = RegExp(/^\s*[a-zA-Z]+\s+is\s+[A-Za-z]\s*$/)
      let galacticNotationsToRoman = {}
      this.lines.filter(item=>regExp.test(item)).forEach(item=>{
        let intergalacticNotation = splitByIs(item)[0].trim(),
        romanNumNotation = splitByIs(item)[1].trim()
        // // jacu is P appears, but p is not a standard roman numeral notation
        if(!ROMAN_NUM_ENUM.includes(romanNumNotation)) {
          // return console.log(`${item} --------> \'${romanNumNotation}\' is not valid roman numeral notation `)
          return 
        }
        galacticNotationsToRoman[intergalacticNotation] = romanNumNotation
      })
      return galacticNotationsToRoman
      // this.allGalaticNotations = Object.keys(galacticNotationsToRoman)
    }
    this._getAllGalacticNotations= ()=> {
      return Object.keys(this.galacticNotationsToRoman)
    }
    this._validateIsRomanNumeralNotation2 = (item)=> {
      let sArr = splitByIs(item) 
      let numberAndGoods = splitByRegExp(sArr[0].trim(), /\s+/)
      let good = numberAndGoods.pop(), //IRON
        romansArr = numberAndGoods.slice(0, numberAndGoods.length), //['pish pish']
        romanNumber = getRomanNum(romansArr, this.galacticNotationsToRoman) //convert ['glob', 'glob'] to II
      if(!validateRomanNum(romanNumber)) {
        return console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
      }
    }
    this._getGoodsPrice = ()=> {
      let regStr = `\^\\s*`  
      regStr += `((${this.allGalaticNotations.join('|')})\\s+)+` // intergalactic numer symbol
      regStr += `[a-zA-Z-_]+\\s+` // match good name
      regStr += `is\\s+`  // is 
      regStr += `[1-9]\\d*\\s+` // total 
      regStr += `Credits\\s*` // currency
      regStr += `\$`
  
      let goodsPrice = {}
      this.lines.filter(item=>new RegExp(regStr).test(item)).forEach(item=>{
        let sArr = splitByIs(item) 
        let numberAndGoods = splitByRegExp(sArr[0].trim(), /\s+/)
        let good = numberAndGoods.pop(), //IRON
          romansArr = numberAndGoods.slice(0, numberAndGoods.length), //['pish pish']
          romanNumber = getRomanNum(romansArr, this.galacticNotationsToRoman) //convert ['glob', 'glob'] to II
        if(!validateRomanNum(romanNumber)) {
          // return console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
          return
        }
        let decimals = convertRomanToDecimal(romanNumber)  // conver II to 2
        let totalCredentials = splitByRegExp(sArr[1].trim(), /\s+/)[0] // get total number
        goodsPrice[good] = totalCredentials/decimals 
      })
      return goodsPrice
    }
    this._handleNotationSwitch = (item) => {
      let regExp = RegExp(/^\s*[a-zA-Z]+\s+is\s+[A-Za-z]\s*$/)
      if(regExp.test(item)) {
        let romanNumNotation = splitByIs(item)[1].trim()
        // // jacu is P appears, but p is not a standard roman numeral notation
        if(!ROMAN_NUM_ENUM.includes(romanNumNotation)) {
          return console.log(`${item} --------> \'${romanNumNotation}\' is not valid roman numeral notation `)
        }
      }
    }
    this._handlePriceDeclare = (item) => {
      // console.log(this.allGalaticNotations, 'ddd')
      let regStr = `\^\\s*`  
      regStr += `((${this.allGalaticNotations.join('|')})\\s+)+` // intergalactic numer symbol
      regStr += `[a-zA-Z-_]+\\s+` // match good name
      regStr += `is\\s+`  // is 
      regStr += `[1-9]\\d*\\s+` // total 
      regStr += `Credits\\s*` // currency
      regStr += `\$`
      if(new RegExp(regStr).test(item)) {
        let sArr = splitByIs(item) 
        let numberAndGoods = splitByRegExp(sArr[0].trim(), /\s+/)

        // console.log(numberAndGoods, 'nddddddddddddddd')
        let romansArr = numberAndGoods.slice(0, numberAndGoods.length-1) //['pish pish']
        let  romanNumber = getRomanNum(romansArr, this.galacticNotationsToRoman) //convert ['glob', 'glob'] to II
          // console.log(romansArr, this.galacticNotationsToRoman, 'dddd')
        // console.log(romanNumber, 'romanNumberromanNumberromanNumber')
        if(!validateRomanNum(romanNumber)) {
          return console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
        }
      }
    }
    this._handleTotalNumber = (item)=> {
      let regThird = `\^\\s*`  
      regThird += `how\\s+much\\s+is\\s+` // how much is 
      regThird += `((${this.allGalaticNotations.join('|')})\\s+)+` // pish tegj glob glob
      regThird += `\\?\\s*`  // is 
      regThird += `\$`
      if(new RegExp(regThird).test(item)) {
        let romansStr = splitByIs(item)[1].trim(),
        romansArr = romansStr.replace(/\?|\？/g, '').trim().split(/\s+/), //去掉最后的问号
        romanNumber = getRomanNum(romansArr, this.galacticNotationsToRoman)
        //todo check roman numeral is valid or not
        if(!validateRomanNum(romanNumber)) {
          return console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
        }
        let decimals = convertRomanToDecimal(romanNumber)
        console.log(romansStr.replace(/\?|\？/g, '').trim() + ' is ' + decimals)
      }
    }
    this._handleGoodsTotalPrice = (item)=> {
      let regFouth = `\^\\s*`  
      regFouth += `how\\s+many\\s+Credits\\s+is\\s+` // how many Credits is
      regFouth += `((${this.allGalaticNotations.join('|')})\\s+)+` // pish tegj glob glob
      regFouth += `(${this.allGoods.join('|')})\\s*\\?\\s*`  // Silver?
      regFouth += `\$` 
      // console.log(this.allGoods, 'allGoods')
      // var fouthReg = new RegExp(/^\s*how\s+many\s+Credits\s+is\s+((glob|prok|pish|tegj)\s+)+[Silver|Gold|Iron]\s*\?\s*$/)
      if(new RegExp(regFouth).test(item)) {
        isNotMatched = false      
        let valueArr = splitByIs(item)[1].replace(/\?/, '') // get 'glob prok Silver '
        // console.log(valueArr,`\\s+(${this.allGoods.join('|')})\\s*`, 'dd')
        let romanStr = valueArr.replace(new RegExp(`\\s+(${this.allGoods.join('|')})\\s*`), '') //get 'glob prok'
        let romanArr = splitByRegExp(romanStr.trim(), /\s+/) // get ['glob', 'prok']
        let romanNumber = getRomanNum(romanArr, this.galacticNotationsToRoman)
        // console.log(valueArr, romanStr, romanArr, romanNumber)
        if(!validateRomanNum(romanNumber)) {
          return console.log(`${item} --------> ${romanNumber} which is result of converting ${romanArr.join(' ')} is not a valid roman numeral `)        
        }
        let decimals = convertRomanToDecimal(romanNumber) //convert 'glob prok' to 4
        let good = valueArr.match(`\\s+(${this.allGoods.join('|')})\\s*`)[1]
        console.log(valueArr.replace(/\s*\?\s*/, '') + 'is ' + decimals*this.goodsPrice[good] + ' Credits ')
      }
    }
    this._getQuestions = (lines) => {
      return 
        lines.filter(item=>item.includes('?'))
        .map(line=>new Question(line))
    }
    this._getDefinitions = (definition)=> {
      return 
      lines.filter(item=>!item.includes('?'))
      .map(line=>new Definition(line))
    }    
  
 
}




//step 1
// var testInputFile = path.join(__dirname, 'test-input.txt')

// fs.readFile(testInputFile, 'utf8', (err, content)=>{
//   let rawContent = content
//   let lineArr = splitByRegExp(content, /\n/)
//   // var unitsRomen = getInterGalaticNotationToRoman(lineArr), // get { glob: I, prok: V, pish: X, tegj: L },

//   var unitsRomen = {}, // { glob: I, prok: V, pish: X, tegj: L }
//     allGalaticNotations = [], // get ['glob', 'prok', 'pish', 'tegj']
//     // goodsPrice= getGoodPrice(lineArr, allGalaticNotations, unitsRomen) //  { silver: 17, gold: 144500, iron: 195.5 }
//     goodsPrice = {} // { silver: 17, gold: 144500, iron: 195.5 }
    


//   lineArr.forEach(item=> {
//     let isNotMatched = true
    
//     // step 1  |  prok is V
//     var reg = new RegExp(/^\s*[a-zA-Z]+\s+is\s+[A-Za-z]\s*$/)
//     if(reg.test(item)) {
//       isNotMatched = false
//       let intergalacticNotation = splitByIs(item)[0].trim(),
//         romanNumNotation = splitByIs(item)[1].trim()
//       // jacu is P appears, but p is not a standard roman numeral notation
//       if(!ROMAN_NUM_ENUM.includes(romanNumNotation)) {
//         return console.log(`${item} --------> \'${romanNumNotation}\' is not valid roman numeral notation `)
//       }
//       unitsRomen[intergalacticNotation] = romanNumNotation
//     }



//     // step 2 计算 物品的单价的单位  |   glob prok Gold is 57800 Credits
//     allGalaticNotations = Object.keys(unitsRomen)
//     // var regCom = new RegExp(/^\s*((glob|prok|pish|tegj)\s+)+((Silver|Gold|Iron)\s+){1}(is)\s+([1-9]\d*)(\s+Credits\s*)$/)    
//     let regStr = `\^\\s*`  
//     regStr += `((${allGalaticNotations.join('|')})\\s+)+` // intergalactic numer symbol
//     regStr += `[a-zA-Z-_]+\\s+` // match good name
//     regStr += `is\\s+`  // is 
//     regStr += `[1-9]\\d*\\s+` // total 
//     regStr += `Credits\\s*` // currency
//     regStr += `\$`
    
//     if(new RegExp(regStr).test(item)) {
//       isNotMatched = false
//       let sArr = splitByIs(item) 
//       let numberAndGoods = splitByRegExp(sArr[0].trim(), /\s+/)
//       let good = numberAndGoods.pop(), //IRON
//         romansArr = numberAndGoods.slice(0, numberAndGoods.length), //['pish pish']
//         romanNumber = getRomanNum(romansArr, unitsRomen) //convert ['glob', 'glob'] to II
//       if(!validateRomanNum(romanNumber)) {
//         console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
//       }
//       let decimals = convertRomanToDecimal(romanNumber)  // conver II to 2
//       let totalCredentials =  splitByRegExp(sArr[1].trim(), /\s+/)[0] // get total number
//       goodsPrice[good] = totalCredentials/decimals 
//     }

//     //step3 匹配 how much is pish tegj glob glob ?
//     // var thirdReg = new RegExp(/^\s*how\s+much\s+is\s+((glob|prok|pish|tegj)\s+)+\s*\?\s*$/)
//     let regThird = `\^\\s*`  
//     regThird += `how\\s+much\\s+is\\s+` // how much is 
//     regThird += `((${allGalaticNotations.join('|')})\\s+)+` // pish tegj glob glob
//     regThird += `\\?\\s*`  // is 
//     regThird += `\$`
//     if(new RegExp(regThird).test(item)) {
//       isNotMatched = false      
//       let romansStr = splitByIs(item)[1].trim(),
//       romansArr = romansStr.replace(/\?|\？/g, '').trim().split(/\s+/), //去掉最后的问号
//       romanNumber = getRomanNum(romansArr, unitsRomen)
      
//       //todo check roman numeral is valid or not 
//       if(!validateRomanNum(romanNumber)) {
//         return console.log(`${item} --------> ${romanNumber} which is result of converting ${romansArr.join(' ')} is not a valid roman numeral `)
//       }
//       let decimals = convertRomanToDecimal(romanNumber)
//       console.log( romansStr.replace(/\?|\？/g, '').trim() + ' is ' + decimals)
//     }

//     //step 4 匹配 how many Credits is glob prok Silver ？
//     let regFouth = `\^\\s*`  
//     regFouth += `how\\s+many\\s+Credits\\s+is\\s+` // how many Credits is
//     regFouth += `((${allGalaticNotations.join('|')})\\s+)+` // pish tegj glob glob
//     regFouth += `(${Object.keys(goodsPrice).join('|')})\\s*\\?\\s*`  // Silver?
//     regFouth += `\$` 
//     // console.log(regFouth, 'dddddddd')
//     // var fouthReg = new RegExp(/^\s*how\s+many\s+Credits\s+is\s+((glob|prok|pish|tegj)\s+)+[Silver|Gold|Iron]\s*\?\s*$/)
//     if(new RegExp(regFouth).test(item)) {
//       isNotMatched = false      
//       let valueArr = splitByIs(item)[1].replace(/\?/, '') // get 'glob prok Silver '
//       let romanStr = valueArr.replace(`\\s+(${Object.keys(goodsPrice).join('|')})\\s*\\?\\s*`, '') //get 'glob prok'
//       let romanArr = splitByRegExp(romanStr.trim(), /\s+/) // get ['glob', 'prok']
//       //todo check roman numeral is valid or not       
//       let decimals = convertRomanToDecimal(getRomanNum(romanArr, unitsRomen)) //convert 'glob prok' to 4
//       let good = valueArr.match(`\\s+(${Object.keys(goodsPrice).join('|')})\\s*`)[1]
//       console.log(valueArr.replace(/\s*\?\s*/, '') + ' is ' + decimals*goodsPrice[good] + ' Credits ')
      
//     }

//     if(isNotMatched) {
//       console.log(`${item} --------> I have no idea what you are talking about`)
//     }
//   })

// })


/**
 * step 1
 * 计算获取:
 * (银河系的) 计量符号 和 罗马数字之间的关系 { glob : I, prok: V, pish: X, tegi: J } 
 * @param {Array} lineArr 
 */
function getInterGalaticNotationToRoman (lineArr) {
  var reg = new RegExp(/^\s*[a-zA-Z]+\s+is\s+[IVXLCDM]\s*$/)
  let unitsToRomen = {}
  lineArr.filter(item=>reg.test(item))
    .forEach(line=>{
      isNotMatched = false
      let intergalacticNotation = splitByIs(line)[0].trim(),
        romanNumNotation = splitByIs(line)[1].trim()

      // jacu is P appears, but p is not a standard roman numeral notation
      if(!ROMAN_NUM_ENUM.includes(romanNumNotation)) {
        console.log(romanNumNotation, ROMAN_NUM_ENUM)
        return console.log(`${line}  | oops, ${romanNumNotation} is not valid roman numeral notation `)
      }
      unitsToRomen[intergalacticNotation] = romanNumNotation
    })
  return unitsToRomen
}


/**
 * step 2
 * 
 */
function getGoodPrice(lineArr, galacticNotations, unitsRomen) {
  // 获取商品的单价，但是必须要保证前面（银河系的）数字符号能够转换成合法的罗马数字
  // get goods price via galacticNotations(ths symbol must be converted to valid roman numerals)
  
  // var regCom = new RegExp(/^\s*((glob|prok|pish|tegj)\s+)+((Silver|Gold|Iron)\s+){1}(is)\s+([1-9]\d*)(\s+Credits\s*)$/)
  // four parts in this regExp
  // galactic numeral symbol  +  good name  +  is  + total + currency
  let regStr = `\^\\s*`  
  regStr += `((${galacticNotations.join('|')})\\s+)+` // intergalactic numer symbol
  regStr += `[a-zA-Z-_]+\\s+` // match good name
  regStr += `is\\s+`  // is 
  regStr += `[1-9]\\d*\\s+` // total 
  regStr += `Credits\\s*` // currency
  regStr += `\$`
  // var regCom = new RegExp('\^\\s*((glob|prok|pish|tegj)\\s+)+(([a-zA-Z-_])\\s+){1}(is)\\s+([1-9]\\d*)(\\s+Credits\\s*)\$')
  var regRex = new RegExp(regStr)
  let goodsPrice = {}
  lineArr.filter(item=>regRex.test(item)).forEach(item=>{
    let total = splitByRegExp(splitByIs(item)[1].trim(), /\s+/)[0]
    let numberAndGood = splitByRegExp(splitByIs(item)[0].trim(), /\s+/) 
    let goodName = numberAndGood[1] //Silver
    let romansArr = numberAndGood.slice(0, numberAndGood.length-1)
    romansNumerals = getRomanNum(romansArr, unitsRomen)
    if(!validateRomanNum(romansNumerals)) {
      return console.log('不合法的罗马数字', item)
    }
    let arabicNumber = convertRomanNumToArabicNum(romansNumerals)
    goodsPrice[goodName] = total/arabicNumber
  })
  return goodsPrice
}




/**
 * split str by /\s+is\s+/
 * @param {String} str str which will be splited by /\s+is\s+/
 * @return {Array} 
 */
function splitByIs(str) {
  return splitByRegExp(str, /\s+is\s+/)
}




/**
 * extract simply method to split str 
 * @param {String} str 
 * @param {String or RegRex obj} regExp 
 * @return {Array}
 */
function splitByRegExp(str, regExp) {
  if(!toString.call(str) === '[object String]') {
    console.warn(`warn: ${str} is not string`)
    return undefined
  }
  return str.split(regExp)
}


/**
 * todo 引入到utils 里面去
 * get roman number 'IV' by array ['glob','glob']
 * @param {arry} arry ['glob','glob']
 * @param {object} obj {glob: I, prok: V}
 * @return {String} example: "IV"
 */
function getRomanNum(arr, obj) {
  let res = ''
  arr.forEach( item => res+=obj[item] )
  return res
}


/**
 * Parse Roman to Decimal : CMXLIV to 994
 * @param {String} roman 
 */
function convertRomanToDecimal (romen) {
  let totalLength = romen.length
  let sum = 0
  for(let i=0; i< totalLength; i++) {
    let first = ROMAN_ARABIC_MAP[romen.charAt(i)]||0
    let second = ROMAN_ARABIC_MAP[romen.charAt(i+1)]||0
    if(first>=second) {
      sum += first
    }else{
      sum += (second-first)
      i++
    }
  }
  // console.log('方法二', sum)
  return sum
}




/**
 * //todo Check is valid roman number
 * @param {String} romanNum
 * 
 * I  1
 * V  5 -不能减
 * X  10
 * L  50 -不能减
 * C  100
 * D  500 -不能减
 * M  1000
 * 
 * wiki:https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * stackoverflow: https://stackoverflow.com/questions/267399/how-do-you-match-only-valid-roman-numerals-with-a-regular-expression
 * 
 * The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more. (They may appear four times if the third and fourth are separated by a smaller value, such as XXXIX.) "D", "L", and "V" can never be repeated.
 * "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted.
 * Only one small-value symbol may be subtracted from any large-value symbol.
 * A number written in [16]Arabic numerals can be broken into digits. For example, 1903 is composed of 1, 9, 0, and 3. To write the Roman numeral, each of the non-zero digits should be treated separately. Inthe above example, 1,000 = M, 900 = CM, and 3 = III. Therefore, 1903 = MCMIII.
 *
 *  I , X , C , M 可以连续重复三次，但是不能更多。  D L V 不能重复
 *  I 只能被 V 和 X 减， 所以只能出现IV 和 IX ；不能出现: IL ID ID IM 
 *  X 只能被 L 和 C 减， 所以只能出现XL 和 XC ；不能出现: XD XM
 *  C 只能被 D 和 M 减， 所以只能出现CD 和 CM
 *  V L D 不能被减去 不能出现VX VL VC VD VM   LC LD LM  DM 
 */

// 写单元测试
function isValidRomanNum(romanNum) {
  let isValidRomanNum = true
  let regFirst = /([IXCM])\1{3,}|([DLV])\2{1,}/
  if(regFirst.test(romanNum)) return false
  let regSecond = /IL|IC|ID|IM|XD|XM|VX|VL|VC|VD|VM|LC|LC|LM|DM/             //参考IVL  IVX   MVX 1045 是不对的 应该分解为1000+ 40+5 MXLV
  if(regSecond.test(romanNum)) return false

  //但是要处理特殊情况 IVX roman number 分解成十进制 必须是分解之后的数字 A+B+C+D  A>=B>=C>=D  A B C D 有可能是单个罗马数字 有可能是通过减法运算而来的
  let pre = 0 
  for(let i=0; i<romanNum.length; i++) {
    let first = ROMAN_ARABIC_MAP[romanNum.charAt(i)]||0
    let second = ROMAN_ARABIC_MAP[romanNum.charAt(i+1)]||0
    if(pre!=0 &&pre<first && isValidRomanNum) {
      isValidRomanNum = false
    }
    if(first>=second) {
      pre = first
      sum += first
    }else{
      pre = second-first
      sum += (second-first)
      i++
    }
  }
  return isValidRomanNum
}