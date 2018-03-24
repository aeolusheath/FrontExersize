"use strict"
var GoodItemService = require( '../src/service/GoodItemService').default
var Good =require('../src/class/Good').default
var Price=require('../src/class/Price').default


var mocha = require('mocha')
var assert = require('assert')

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
    })


})

