var readFile = require('./read-file')
var Parser = require('./parser')
var path = require('path')



var filePath = path.join(__dirname, 'test-input.txt')
readFile(filePath, (content)=>{
  var parser = new Parser(content); 
  parser.prepareData()
  parser.analysize()
})