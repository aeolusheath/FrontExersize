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
  console.log(lineArr)
  var unitsMap = {},
    unitsRomen = {}
  lineArr.forEach(item=> {
    // if(item.match('/^[a-zA-Z]+ is [IVXLCDM]$/')){
    //   console.log(item)
    // }
    // step 1  获取代表的单位
    var reg = new RegExp(/^[a-zA-Z]+ is [IVXLCDM]$/)
    var fUnits = []
    if(reg.test(item)) {
      let fKey = item.split(' is ')[0].trim(),
        rNum = item.split(' is ')[1].trim()
      // console.log(item, fKey, rNum)
      //todo check the rome number
      // if(!Object.keys( ).includes(rNum)){
      // }
      fUnits.push(fKey)
      unitsMap[fKey] = ROMAN_NUM[rNum]
      unitsRomen[fKey] = rNum
    }


    //step 2 计算 货币的单位
    var regCom = new RegExp('((glob|prok|pish|tegj)\\s+)+((Silver|Gold|Iron)\\s+){1}(is)(\\s+[1-9]\\d+)(\\s+Credits)')
    if(regCom.test(item)) {
      console.log(item)
     
    }
  })
  console.log(unitsMap)
    //step2 
})

//todo 获取数据 和 获取货币 的数据区分开
/**
 * 
 * @param {string} str 'glob glob Silver'
 * @param {object} obj {glob: I, prok: V}
 * return II
 */
function GetRomenNumber(str, obj) {
  let arr = str.split(/\s+/)
  let currency = arr.pop(),
    romenNums = 0
  let res = ''
  arr.forEach(item=>{
    res+=obj[item]
  })
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

function getDecimalNumber(romenNumber) {
  console.log('in here---->>>1111')
  let arr = romenNumber.split('') //get XXXI
  // auxiliary method get XX XI
  let earr = []
  for(let i=arr.length-1; i >=0; i-=2) {
    earr.push(arr[i]+ (arr[i-1]||''))
  }
  console.log('in here---->>>22222', earr)
  // return earr
  var sum = 0
  earr.forEach((item, index)=> {
    let first = item.charAt(0)
    let second = item.charAt(1)
    if(ROMAN_NUM[first]<ROMAN_NUM[second]) {
      sum += (ROMAN_NUM[second]- ROMAN_NUM[first])
      console.log('当前遍历' + index, sum, ROMAN_NUM[second]- ROMAN_NUM[first]) 
    }
    else {
      sum += (ROMAN_NUM[first] + ROMAN_NUM[second]||0)
      console.log('当前遍历' + index, sum, ROMAN_NUM[first] + ROMAN_NUM[second]||0)
    }
  })
  console.log(sum, 'result')
  return sum
}
getDecimalNumber('MCMIII')
getDecimalNumber('MCMXLIV')
function getDecimalNumber2 (romen) {
  let totalLength = romen.length
  let sum = 0
  for(let i=0; i< totalLength; i++) {
    let first = romen.charAt(i) 
    let second = romen.charAt(i+1)
    console.log(i, ROMAN_NUM[first], ROMAN_NUM[second], 'process')
    if (ROMAN_NUM[first] >= ROMAN_NUM[second]) {
      sum+=ROMAN_NUM[first]
    }
    else {
      sum += ROMAN_NUM[second] - ROMAN_NUM[first]
      i++
    }
  }
  console.log('方法二', sum)
  return sum
}
getDecimalNumber2('MCMIII')
getDecimalNumber2('MCMXLIV')

//check is valid Romen Number
function isValidRomen(romenNumber) {
  
}