const ROMAN_ARABIC_MAP = require('../const')

/**
 * conver roman num to decimal number : "XXXIX" to 39
 * @param {String} romanNum like "XXXIX"
 * 
 */
 const convertRomanNumToArabicNum = (romanNum) => {
  let totalLength = romanNum.length
  let sum = 0
  for(let i=0; i< totalLength; i++) {
    let first = ROMAN_ARABIC_MAP[romanNum.charAt(i)]||0
    let second = ROMAN_ARABIC_MAP[romanNum.charAt(i+1)]||0
    if(first>=second) {
      sum += first
    }else{
      sum += (second-first)
      i++
    }
  }
  return sum
} 

module.exports = convertRomanNumToArabicNum