'use strict'
const ROMAN_ARABIC_MAP = require('../const/roman-numeral-arabic')

/**
 * 
 * @param {String} romanNum
 * @param {Object} romanArabicMap
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
	let regSecond = /IL|IC|ID|IM|XD|XM|VX|VL|VC|VD|VM|LC|LC|LM|DM/  //参考IVL IVX MVX 1045
	if(regSecond.test(romanNum)) return false

	// special condition: IXC .etc
	// roman number 分解成十进制 必须是分解之后的数字 A+B+C+D  A>=B>=C>=D  A B C D 有可能是单个罗马数字 有可能是通过减法运算而来的
	let isValidRomanNum = true
	let pre = 0
	for(let i=0; i<romanNum.length; i++) {
		let first = ROMAN_ARABIC_MAP[romanNum.charAt(i)]||0
		let second = ROMAN_ARABIC_MAP[romanNum.charAt(i+1)]||0
		if(pre!=0 && pre<first && isValidRomanNum) {
			isValidRomanNum = false
		}
		if(first>=second) {
			pre = first
		}else{
			pre = second-first
			i++
		}
	}
	return isValidRomanNum
}

module.exports = validateRomanNum