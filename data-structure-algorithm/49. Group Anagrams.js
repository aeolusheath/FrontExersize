/**
 * 
  
 Given an array of strings, group anagrams together.

  Example:

  Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
  Output:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
  Note:

  All inputs will be in lowercase.
  The order of your output does not matter.
 
 * 
 * 
 */


 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let m = new Map()
  for (k = 0, p = strs.length; k < p; k++) {
    // 对每一个排序， 然后使用hashtable
    let cur = strs[k]
    cur = cur.split('').sort().join('')
    
    if (m.has(cur)) {
      let arr = m.get(cur)
      arr.push(strs[k])
      m.set(cur, arr)
    } else {
      m.set(cur, [strs[k]])
    }
  }
  return [...m.values()]    
};



// 第二种解法，是按照字母的顺序来作为map的key
var groupAnagrams = (strs) => {
  let map = new Map()
  for (let item of strs) {
    let arr = Array.from({length: 26}).fill(0)
    for (let c of item) {
      if (primes[c] != undefined) {
        arr[primes[c]] = arr[primes[c]] + 1
      }
    }
    // 此时arr数组，特定位置的数量就表示字母出现的次数
    let str = arr.join('#')
    if (map.has(str)) {
      let arr = map.get(str)
      arr.push(item)
      map.set(str, arr)
    } else {
      map.set(str, [item])
    }
  }
  return [...map.values()]

}
let primes = {'a': 0, 
              'b': 1, 
              'c': 2, 
              'd': 3, 
              'e': 4, 
              'f': 5,
              'g': 6,
              'h': 7,
              'i': 8,
              'j': 9,
              'k': 10,
              'l': 11,
              'm': 12,
              'n': 13,
              'o': 14,
              'p': 15,
              'q': 16,
              'r': 17,
              's': 18, 
              't': 19,
              'u': 20,
              'v': 21,
              'w': 22,
              'x': 23,
              'y': 24,
              'z': 25
              }
