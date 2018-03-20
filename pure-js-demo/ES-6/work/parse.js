


function Parse(txt) {
  this.gacticToRomanNumeral = null

}


class Question {
  constructor(type, question) {
    this.question = qustion
    this.type = type
    this.regExps = []    
  }
  getAnswer () {
    switch (this.type) {
      case 'TOTAL': {

      }
      break;
      case 'TOTAL-PRICE': {

      }
      break;
    }
  }
  parse () {
    //获取答案
  }
}

class Definition {
  constructor (type, definition) {
    this.definition = definition
    this.type = type
    this.regExps = []
  }
  parse (definition) {
    // 解析是否合法 最后一位是不是罗马数字  转换之后的罗马数字是否合法
  }
  getGalacticToRomanNumeral () {

  }
  getGoodsPrice () {

  }
}

class Line {
  constructor(line) {
    return line.includes('?') ? new Question('type', line) : new Definition('type', line)
  }
}

class Context  {
  constructor (lines) {
    this.questions = this._getQuestions(lines)
    this.definitions = this._getDefinitions(lines)
  }
  _getQuestions = (lines) => {
    return lines.filter(item=>item.includes('?'))
      .map(line=>new Question(line))
  }
  _getDefinitions = (definition) => {
    return lines.filter(item=>!item.includes('?'))
    .map(line=>new Definition(line))
  }
  //get { glob: I, pish: L }
  getGalacticToRomanNumeral () {
    this.definitions.forEach(item=>{
      
    })

  }
  //get { silver: 900 }
  getGoodsPrice () {

  }
}

class ParseEngine {
  constructor(txtContent) {
    this.lineArr = txtContent.split(/\n/)

    this.galacticToRomanNumerl = this._getGalacticToRomanNumeral()
    this.goodsPrice = this._getGoodsPrice()
  }
  _getGalacticToRomanNumeral() {
    //todo get { glob: I, pish: L }
  }
  _getGoodsPrice () {
    //todo get { silver: 900, gold: 300 }
  }
  _getGoods () {
    //todo get ['silver', 'gold']
  }
  _getCommonCurrency () {

  }
  _getAllRegex() {

  }
  handleData () {
    this.lineArr.forEach(item=> {
      if(item.includes('?')||(item.includes('？'))) {
        new Question('type',item).getAnswer()
      }
      else{
        new Definition('type', item).parse()
      }
    })
  }
}



module.exports = Parse