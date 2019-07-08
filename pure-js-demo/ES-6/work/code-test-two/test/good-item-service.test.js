var GoodItemService = require( '../src/service/GoodItemService').default
var Good =require('../src/class/Good').default
var Price=require('../src/class/Price').default
var GoodItem = require('../src/class/GoodItem').default
var NotationNumber = require('../src/class/NotationNumber').default

// import GoodItemService from '../class/ts/GoodItemService'

var mocha = require('mocha')
var assert = require('assert')

var obj = {
  'pish': 'X',
  'tegj': 'L',
  'glob': 'I',
  'prok': 'V',
  'hnga': 'C',
  'mpor': 'D',
  'atre': 'M'
}

describe('Validate GoodItemService', ()=>{
    describe('method: analyse', ()=> {
      it('should return true if goodItemService compute the right total price', ()=>{
        let line = 'how many Credits is glob prok Silver ?'
        let galacticNotationRomanMap = {'glob': 'L', 'prok': 'V'}
        let goodInStock = [new Good('Silver', new Price('Credits', 20))]
        let currencyUnits = ['Credits'],
          goodItemService= new GoodItemService(line, galacticNotationRomanMap,goodInStock, currencyUnits)
        assert.equal(goodItemService.analyse(), 'glob prok Silver is 1100 Credits')
      })
      it('should be unrecognizable with wrong unit', ()=>{
        let line = 'how many abc is glob prok Silver ?'
        let galacticNotationRomanMap = {'glob': 'L', 'prok': 'V'}
        let goodInStock = [new Good('Silver', new Price('Credits', 20))]
        let currencyUnits = ['Credits'],
          goodItemService= new GoodItemService(line, galacticNotationRomanMap,goodInStock, currencyUnits)
          assert.equal(goodItemService.analyse(), 'I have no idea what you are talking about')
      })
      it('should be unrecognizable with wrong good', ()=>{
        let line = 'how many abc is glob prok Silver ?'
        let galacticNotationRomanMap = {'glob': 'L', 'prok': 'V'}
        let goodInStock = [new Good('Iron', new Price('Credits', 20)), new Good('Gold', new Price('Credits', 30))]
        let currencyUnits = ['Credits'],
          goodItemService= new GoodItemService(line, galacticNotationRomanMap,goodInStock, currencyUnits)
          assert.equal(goodItemService.analyse(), 'I have no idea what you are talking about')
      })
      it('should output hnga mpor Silver is 1200 Credits', ()=>{
        let line = 'how many Credits is hnga mpor Silver ?'
        let galacticNotationRomanMap = obj
        let goodInStock = [new Good('Iron', new Price('Credits', 20)), new Good('Silver', new Price('Credits', 30))]
        let currencyUnits = ['Credits'],
          goodItemService= new GoodItemService(line, galacticNotationRomanMap,goodInStock, currencyUnits)
          assert.equal(goodItemService.analyse(), 'hnga mpor Silver is 12000 Credits')        
      })
      it('should output: glob Gold is xx Silver', ()=>{
        let line = 'how many Silver is glob Gold ?'
        let galacticNotationRomanMap = obj
        let goodInStock = [new Good('Gold', new Price('Credits', 14450)), new Good('Silver', new Price('Credits', 17))]
        let currencyUnits = ['Credits'],
          silver = new GoodItem(goodInStock[1], new NotationNumber(['glob'], obj)),
          gold = new GoodItem(goodInStock[0], new NotationNumber(['glob'], obj)),
          goodItemService= new GoodItemService(line, galacticNotationRomanMap,goodInStock, currencyUnits)
         assert.equal(goodItemService.calculateCounts(silver, gold), 'glob Gold is 850 Silver')
      })
    })


})

