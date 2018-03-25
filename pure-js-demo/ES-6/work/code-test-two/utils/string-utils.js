'use strict'
module.exports = {
	/**
   * 将多余的空格字符转换为1个
   */
	formatStrBlank: (str)=>{
		return str.replace(/\s{2,}/, ' ')    
	},
	/**
   * 按照特定的正则将字符串转换为数组
   */
	splitByRegExp: (str, regExp)=> {
		if(!toString.call(str) === '[object String]') {
			console.warn(`warn: ${str} is not string`)
			return undefined
		}
		return str.split(regExp)    
	},
	/**
   * 按照 is 将字符串分割
   */
	splitByIs: (str)=> {
		return str.split(/\s+is\s+/)
	},
	/**
   * 去掉测试文本的空行 和 以#开头的行数
   */
	formatConent: (content)=> {
		return content.split(/\n/).filter(item=>{
			return !(item.replace(/\s/, '').length=== 0 || item.trim().charAt(0)=== '#')
		})
	},
	/**
   * 对line进行分类
   * @param {sting} line 
   */
	isQuestion: (line)=> {
		let pureStr = line.trim()
		return ['?'].includes(pureStr.charAt(pureStr.length-1))
	}
}