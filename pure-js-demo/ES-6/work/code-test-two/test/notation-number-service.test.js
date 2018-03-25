'use strict'
var mocha = require('mocha')
var assert = require('assert')
var NotationNumberService = require('../src/service/NotationNumberService').default
var obj = {
  'pish': 'X',
  'tegj': 'L',
  'glob': 'I',
  'prok': 'V'
}

describe('Validate NotationNumberService', ()=>{
    describe('method: analyse', ()=> {
      it('should return right arabic number with valid roman numerals: XLIV.', ()=>{
        let line = 'how much is pish tegj glob glob ?'
        let notationNumberService = new NotationNumberService(line, obj)
        assert.equal(notationNumberService.analyse(), 'pish tegj glob glob is 42')
      })
      

      it(`should return not unrecognizable because the invalid roman nummeral: XXXX`, ()=>{
        let line = 'how much is pish pish pish pish ?'
        let notationNumberService = new NotationNumberService(line, obj)
        assert.equal(notationNumberService.analyse(), 'I have no idea what you are talking about')
      })
     

      it(`should return not unrecognizable because the invalid roman nummeral: IVX`, ()=>{
        let line = 'how much is glob prok pish ?'
        let notationNumberService = new NotationNumberService(line, obj)
        assert.equal(notationNumberService.analyse(), 'I have no idea what you are talking about')
      })

    })


})