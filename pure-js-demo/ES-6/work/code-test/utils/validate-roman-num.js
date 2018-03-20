const ROMAN_ARABIC_MAP = require('../const/roman-numeral-arabic')

/**
 * //todo Check is valid roman number
 * @param {String} romanNum
 * @param {Object} romanArabicMap
 * I  1
 * V  5 -不能减
 * X  10
 * L  50 -不能减
 * C  100
 * D  500 -不能减
 * M  1000
 * 
 * wiki:https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * stackoverflow: https://stackoverflow.com/questions/267399/how-do-you-match-only-valid-roman-numerals-with-a-regular-expression
 * 
 * The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more. (They may appear four times if the third and fourth are separated by a smaller value, such as XXXIX.) "D", "L", and "V" can never be repeated.
 * "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted.
 * Only one small-value symbol may be subtracted from any large-value symbol.
 * A number written in [16]Arabic numerals can be broken into digits. For example, 1903 is composed of 1, 9, 0, and 3. To write the Roman numeral, each of the non-zero digits should be treated separately. Inthe above example, 1,000 = M, 900 = CM, and 3 = III. Therefore, 1903 = MCMIII.
 *
 *  I , X , C , M 可以连续重复三次，但是不能更多。  D L V 不能重复
 *  I 只能被 V 和 X 减， 所以只能出现IV 和 IX ；不能出现: IL ID ID IM 
 *  X 只能被 L 和 C 减， 所以只能出现XL 和 XC ；不能出现: XD XM
 *  C 只能被 D 和 M 减， 所以只能出现CD 和 CM
 *  V L D 不能被减去 不能出现VX VL VC VD VM   LC LD LM  DM 
 */
const validateRomanNum = (romanNum) =>{
  let regFirst = /([IXCM])\1{3,}|([DLV])\2{1,}/
  if(regFirst.test(romanNum)) return false
  let regSecond = /IL|IC|ID|IM|XD|XM|VX|VL|VC|VD|VM|LC|LC|LM|DM/             //参考IVL  IVX   MVX 1045 是不对的 应该分解为1000+ 40+5 MXLV
  if(regSecond.test(romanNum)) return false

  // special condition: IXC .etc
  // roman number 分解成十进制 必须是分解之后的数字 A+B+C+D  A>=B>=C>=D  A B C D 有可能是单个罗马数字 有可能是通过减法运算而来的
  let isValidRomanNum = true
  let pre = 0,
    sum = 0
  for(let i=0; i<romanNum.length; i++) {
    let first = ROMAN_ARABIC_MAP[romanNum.charAt(i)]||0
    let second = ROMAN_ARABIC_MAP[romanNum.charAt(i+1)]||0
    if(pre!=0 && pre<first && isValidRomanNum) {
      isValidRomanNum = false
    }
    if(first>=second) {
      pre = first
      sum += first
    }else{
      pre = second-first
      sum += (second-first)
      i++
    }
  }
  return isValidRomanNum
}

validateRomanNum('MCMXLIV', {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
})

module.exports = validateRomanNum