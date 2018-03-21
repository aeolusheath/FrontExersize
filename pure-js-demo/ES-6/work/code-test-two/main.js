var readFile = require('./read-file')
var Parser = require('./parser')
var path = require('path')

var utilMethods = require('./utils/string-utils')
let { formatStrBlank, splitByRegExp, splitByIs, formatConent } = utilMethods

const ROMAN_ARABIC_MAP = require('./const/roman-numeral-arabic') // get map roman numerals to arabric
const ROMAN_NUM_ENUM = Object.keys(ROMAN_ARABIC_MAP) //get all roman notation ['I', 'V', 'X', 'L', 'C', 'D', 'M']

var filePath = path.join(__dirname, 'test-input.txt')
readFile(filePath, (content)=>{
  // var parser = new Parser(content); 
  // parser.prepareData()
  // parser.analysize()
  let lines = content.split(/\n/)
  let statements = lines.filter(item=>{
    let pureStr = item.trim()
    return ['?', '？'].includes(pureStr.charAt(pureStr.length-1))
  })
  let questions = lines.filter(item=>{
    let pureStr = item.trim()
    return !['?', '？'].includes(pureStr.charAt(pureStr.length-1))
  })
  //得到准备数据 Good【名字，单价】
  let galacticNotationRomanMap = {}   
  statements.forEach(item=>{
    let line = item.trim()
    // first glob is L
    let regExp = new RegExp(/^\s*[a-zA-Z]+\s+is\s+[IVXLCDM]\s*$/)
    if(regExp.test(line)) {
      let notation = splitByIs(line)[0] // get notation represent roman numeral
      galacticNotationRomanMap[notation] = splitByIs(line)[1]
    }
  })

  statements.forEach(item=> {
    let line = item.trim()
    let regStr = `\^\\s*`  
    regStr += `((${Object.keys(galacticNotationRomanMap).join('|')})\\s+)+` // glob glob glob
    regStr += `[a-zA-Z-_]+\\s+` // silver
    regStr += `is\\s+`  // is 
    regStr += `[1-9]\\d*\\s+` // 999 
    regStr += `Credits\\s*` // Credits
    regStr += `\$`
    if(new RegExp(regStr).test(line)) {
        
    }
  })



})