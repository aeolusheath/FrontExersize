module.exports = {
  formatStrBlank: (str)=>{
    return str.replace(/\s{2,}/, ' ')    
  },
  splitByRegExp: (str, regExp)=> {
    if(!toString.call(str) === '[object String]') {
      console.warn(`warn: ${str} is not string`)
      return undefined
    }
    return str.split(regExp)    
  },
  splitByIs: (str)=> {
    return str.split(/\s+is\s+/)
  },
  formatConent :(content)=> {
    return content.split(/\n/).filter(item=>{
      return !(item.replace(/\s/, '').length=== 0 || item.trim().charAt(0)=== '#')
    })
  },
  getRomanNum: (arr, obj)=> {
    let res = ''
    arr.forEach( item => res+=obj[item] )
    return res
  }  
}