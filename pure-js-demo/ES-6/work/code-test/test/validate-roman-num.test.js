var validateRomanNum  = require( '../utils/validate-roman-num' )
const ROMAN_ARABIC_MAP = require('../const')
var mocha = require('mocha')
var assert = require('assert')


// const testArr = ['IXC', 'IVC', 'XVIII', 'MCMXLIV', 'XXXIX', 'MCMIII', 'LXXXIII', 'LXXXVI', 'XXXXX', 'XCIII', 'IDM', 'LIV', 'VID', 'MCDXCIX']
const testArr = ['IXC', 'IVC', 'MCDXCIX','MCMXLIV']

testArr.forEach(element => {
  console.log(element+ ' is valid roman number :    ' + validateRomanNum(element, ROMAN_ARABIC_MAP))
});


// test invalid roman
let notValidtestArr = [ 
  'IVC',
  'XXXXX',
  'IDM',
  'VID',
  'IXC'  
]
describe('Validate Roman Numeral is not valid', ()=>{
  describe(`'method: validateRomanNum, test parameters: ${notValidtestArr}'`, ()=>{
    it('should return false if all items in arr are not valid roman numeral', ()=>{
      notValidtestArr.every(item=>{
        assert.equal(validateRomanNum(item, ROMAN_ARABIC_MAP), false);
      })
    })
  })
})


// test valid roman
let validtestArr =  [
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
describe('Validate Roman Numeral is valid', ()=>{
  describe(`'method: validateRomanNum, test parameters: ${validtestArr}'`, ()=>{
    it('should return true when all items in arr are valid roman numeral', ()=>{
        validtestArr.every(item=>{
          assert.equal(validateRomanNum(item, ROMAN_ARABIC_MAP), true);
        })
    })
  })
})