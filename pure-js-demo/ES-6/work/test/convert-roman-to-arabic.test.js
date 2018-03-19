var convertRomanNumToArabicNum = require('../utils/convert-roman-to-arabic')
const ROMAN_NUM_DECIMAL_MAP = require('../const')
var mocha = require('mocha')
var assert = require('assert')

var romanNums = [
  'XVIII',
  'MCMXLIV',
  'XXXIX',
  'MCMIII',
  'LXXXIII',
  'LXXXVI',
  'XCIII',
  'LIV',
  'MCDXCIX'
]
romanNums.forEach(item=>{
  console.log(`${item} is ${convertRomanNumToArabicNum(item, ROMAN_NUM_DECIMAL_MAP)}`)
})


//test convert function 
let romanArabicMap = {
  'XVIII': 18,
  'MCMXLIV': 1944,
  'XXXIX': 39,
  'MCMIII': 1903,
  'LXXXIII': 83,
  'LXXXVI': 86,
  'XCIII': 93,
  'LIV': 54,
  'MCDXCIX': 1499
}
describe('Validate convert roman num to arabic num', ()=>{
  describe(`'method: convertRomanNumToArabicNum, test parameters: ${Object.keys(romanArabicMap)}'`, ()=>{
    it('should return true if all arabic numerals what is converted to are right arabic numerals', ()=>{
      Object.keys(romanArabicMap).every(key=>{
        assert.equal(convertRomanNumToArabicNum(key, ROMAN_NUM_DECIMAL_MAP), romanArabicMap[key]);
      })
    })
  })
})