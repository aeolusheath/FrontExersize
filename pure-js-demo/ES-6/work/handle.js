import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

var path = require('path')
var fs = require('fs')
const ROMAN_NUM = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}


const ROMAN = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
//rule 
/**
 *  I , X , C , M 可以连续重复三次，但是不能更多。  D L V 不能重复
 *  I 只能被 V 和 X 减， 所以只能出现IV 和 IX ；不能出现: IL IC ID IM 
 *  X 只能被 L 和 C 减， 所以只能出现XL 和 XC ；不能出现: XD XM
 *  C 只能被 D 和 M 减， 所以只能出现CD 和 CM
 *  V L D 不能被减去
 * 
 */

//step 1
console.log(__dirname)
var testInputFile = path.join(__dirname, 'test-input.txt')

fs.readFile(testInputFile, 'utf8', (err, content)=>{
  // console.log(content)
  let rawContent = content
  let lineArr = content.split('\n')
  // console.log(lineArr)
  var unitsMap = {}, //  { glob: 1, prok: 5, pish: 10,tegi: 50 }
    unitsRomen = {}  //  { glob: I, prok: V, pish: X, tegi: L }
    currencyMap = {} //  { silver: 17, gold: 144500, iron: some number }
  lineArr.forEach(item=> {
    // console.log('当前的字符串是:  ' + item)
    let isNotMatched = true
    
    // step 1  获取代表的单位
    // var reg = new RegExp(/^\s*[a-zA-Z]+ is [IVXLCDM]\s*$/) //这里需要在最后加上\s mac可以不加，windows默认最后有一个换行符
    var reg = new RegExp(/^\s*[a-zA-Z]+\s+is\s+[IVXLCDM]\s*$/) //这里需要在最后加上\s mac可以不加，windows默认最后有一个换行符
    
    var fUnits = []
    if(reg.test(item)) {
      isNotMatched = false
      let fKey = item.split(/\s+is\s+/)[0].trim(),
        rNum = item.split(/\s+is\s+/)[1].trim()//加上replace这个是因为在windows上面最后一个默认是\r换行符 不是空格 在mac上是空格；后续： trim可以去掉所有的空白字符
      // console.log(item, fKey, rNum)
      //todo check the rome number
      // if(!Object.keys( ).includes(rNum)){
      // }
      fUnits.push(fKey)
      unitsMap[fKey] = ROMAN_NUM[rNum]
      unitsRomen[fKey] = rNum
    }


    //step 2 计算 货币的单位
    // var regCom = new RegExp('((glob|prok|pish|tegj)\\s+)+((Silver|Gold|Iron)\\s+){1}(is)(\\s+[1-9]\\d*)(\\s+Credits)') //wrong 
    var regCom = new RegExp(/^\s*((glob|prok|pish|tegj)\s+)+((Silver|Gold|Iron)\s+){1}(is)(\s+[1-9]\d*)(\s+Credits\s*)$/)
    
    if(regCom.test(item)) {
      isNotMatched = false
      // console.log(item, 'here---------------------------------')
      let sArr = item.split(/\s+is\s+/) //不能直接用is
      let currenyAndRomensArr = sArr[0].trim().split(/\s+/)
      // console.log(sArr, currenyAndRomensArr)
      let currency = currenyAndRomensArr.pop(), //IRON
      romensArr = currenyAndRomensArr.slice(0, currenyAndRomensArr.length) //['pish pish']
     
      // console.log('当前的货币是: ' +currency, '当前的罗马数字是  ' + romensArr)
      
      let romensNumber = getRomanNum(romensArr, unitsRomen) //将['glob', 'glob'] 转换成 II
      // console.log(romensNumber, '罗马数字')
      let decimals = convertRomanToDecimal(romensNumber)  // 将II 转换成2  将罗马数字转换成十进制数字
      // console.log('转换罗马数字之后的结果是： '+  decimals)

      let totalCredentials =  sArr[1].trim().split(/\s+/)[0] //将 3910 credits 的数字部分过滤出来

      currencyMap[currency] = totalCredentials/decimals 
    }

    //step3 匹配 how much is pish tegj glob glob ?
    var thirdReg = new RegExp(/^\s*how\s+much\s+is\s+((glob|prok|pish|tegj)\s+)+\s*\?\s*$/)
    if(thirdReg.test(item)) {
      isNotMatched = false      
      let romensStr = item.split(/\s+is\s+/)[1].trim()
      //去掉最后的问号
      romensArr = romensStr.replace(/\?|\？/g, '').trim().split(/\s+/)
      // console.log(romensArr, 'romensArrromensArrromensArr')
      
      let decimals = convertRomanToDecimal(getRomanNum(romensArr, unitsRomen))
      console.log( romensStr.replace(/\?|\？/g, '').trim() + ' is ' + decimals)
    }

    //step 4 匹配 how many Credits is glob prok Silver 
    var fouthReg = new RegExp(/^\s*how\s+many\s+Credits\s+is\s+((glob|prok|pish|tegj)\s+)+(Silver|Gold|Iron){1}\s+\s*\?\s*$/)
    if(fouthReg.test(item)) {
      isNotMatched = false      
      // console.log(item.split(/\s+is\s+/)[1])
      let valueArr = item.split(/\s+is\s+/)[1] // get 'glob prok Silver ?'
      // console.log(valueArr, item.split(/\s+is\s+/)[1],' what is this --=========================================')
      let romanStr = valueArr.replace(/\s+(Silver|Gold|Iron){1}\s+\s*\?\s*/, '') //get 'glob prok'
      let romanArr = romanStr.trim().split(/\s+/)
      let decimals = convertRomanToDecimal(getRomanNum(romanArr, unitsRomen)) //get 'glob prok' to 4
      let currency = valueArr.match(/\s+(Silver|Gold|Iron)\s+/)[1]
      // console.log('result---', decimals*currencyMap[currency])
      // console.log(valueArr, 'valueArr----------------------------------------------------')
      // console.log(item.split(/\s+is\s+/)[1].replace(/\s*\?\s*/, '') + ' is ' + decimals*currencyMap[currency] + ' Credits ')
      console.log(valueArr.replace(/\s*\?\s*/, '') + ' is ' + decimals*currencyMap[currency] + ' Credits ')
      
    }

    if(isNotMatched) {
      console.log('I have no idea what you are talking about')
    }
  })
  // console.log(unitsMap)
  // console.log(currencyMap)
  /**
   * 
   * 
   * 
   *  glob is I
      prok is V
      pish is X
      tegj is L
      glob glob Silver is 34 Credits
      glob prok Gold is 57800 Credits
      pish pish Iron is 3910 Credits
      how much is pish tegj glob glob ?
      how many Credits is glob prok Silver ?
      how many Credits is glob prok Silver ?
      how many Credits is glob prok Gold ?
      how many Credits is glob prok Iron ?
      how much wood could a woodchuck chuck if a woodchuck could chuck wood ?
   * 
   * 
   * 
   */


    //step2 
})



/**
 * Get Roman Number 'IV' by Array ['glob','glob']
 * @param {arry} arry ['glob','glob']
 * @param {object} obj {glob: I, prok: V}
 * return II
 */
function getRomanNum(arr, obj) {
  let res = ''
  arr.forEach( item => res+=obj[item] )
  return res
/*  
 *  I 1
 *  V 5
 *  X 10
 *  L 50
 *  C 100
 *  D 500
 *  M 1000
 * 
 *  I , X , C , M 可以连续重复三次，但是不能更多。  D L V 不能重复
 *  I 只能被 V 和 X 减， 所以只能出现IV 和 IX ；不能出现: IL IC ID IM 
 *  X 只能被 L 和 C 减， 所以只能出现XL 和 XC ；不能出现: XD XM
 *  C 只能被 D 和 M 减， 所以只能出现CD 和 CM
 *  V L D 不能被减去 不能出现XV LV CV DV MV   CL DL ML  MD
 */

}


/**
 * Parse Roman to Decimal : CMXLIV to 994
 * @param {String} roman 
 */
function convertRomanToDecimal (romen) {
  let totalLength = romen.length
  let sum = 0
  for(let i=0; i< totalLength; i++) {
    let first = ROMAN_NUM[romen.charAt(i)]||0
    let second = ROMAN_NUM[romen.charAt(i+1)]||0
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
convertRomanToDecimal('MCMIII')
convertRomanToDecimal('MCMXLIV')



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
    let first = ROMAN_NUM[romanNum.charAt(i)]||0
    let second = ROMAN_NUM[romanNum.charAt(i+1)]||0
    if(pre<first && isValidRomanNum) {
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