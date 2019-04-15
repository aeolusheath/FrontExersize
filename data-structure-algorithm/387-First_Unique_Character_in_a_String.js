/**
 *
 *  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
    Note: You may assume the string contain only lowercase letters.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  let map = new Map()
  for(let i = 0; i < s.length; i++) {
      if (map.get(s[i]) === undefined) {
          map.set(s[i], i)
      } else {
          map.set(s[i], -1)
      }
  }
  for (let key of map.keys()) {
    if(map.get(key)!== -1){
        return map.get(key)
    }
  }
   return -1
}

var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
      const index = s.indexOf(s[i])
      const lastIndex = s.lastIndexOf(s[i])
      if(index === lastIndex)
          return i
  }
    return -1
}

window.val = 1;
var obj = {
  val: 2,
  dbl: function () {
    this.val *= 2;
    val *= 2;
    console.log(val)
    console.log(this.val)
  }
}
obj.dbl()
//2
//4

// 此时，全局变量已经变为2了
var func = obj.dbl;
func()
//4 // 此时this.val 和 val都是指向window.val 2 * 2 * 2 为 8
//4 // 此时this.val 和 val都是指向window.val 2 * 2 * 2 为 8



