'use strict'
var validateRomanNum  = require( '../utils/validate-roman-num' )
var mocha = require('mocha')
var assert = require('assert')



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
        assert.equal(validateRomanNum(item), false);
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
          assert.equal(validateRomanNum(item), true);
        })
    })
  })
})