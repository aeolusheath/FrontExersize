/**
 * 
 * 
 *  You are given an array of strings words and a string chars.

    A string is good if it can be formed by characters from chars (each character can only be used once).

    Return the sum of lengths of all good strings in words.

    

    Example 1:

    Input: words = ["cat","bt","hat","tree"], chars = "atach" a c t h
    Output: 6
    Explanation: 
    The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
    Example 2:

    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
    Output: 10
    Explanation: 
    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.


    Note:

    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    All strings contain lowercase English letters only.
 * 
 * 
 */

 /**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let sum = 0
    const isGoodWord = (word, charts) => {
      let map = new Map()
      for (let i of word) {
        if (map.has(i)) {
          map.set(i, map.get(i) + 1)
        } else {
          map.set(i, 1)
        }
      }

      for (let j of charts) {
        if (map.has(j)) {
          // let item = map.get(j) - 1
          map.set(j, map.get(j) - 1)
        }
      }
      let values = [...map.values()]
      return !values.some(item => item > 0)
    }    
    for (let word of words) {
      if (isGoodWord(word, chars)) {
        sum = sum + word.length
      }
    }
    return sum
};


// 2020-11-27
var countCharacters = function(words, chars) {
  let map = {}
  for (let char of chars) {
    map[char] = map[char] ? ++map[char] : 1
  }
  let ret = 0
  for (let word of words) {
    let innerMap = {...map} // bad，but have no other idea
    let flag = true
    for (let i = 0; i < word.length; i++) {
      // 超过了次数
      // if (innerMap[word[i]] === 0) {
      //   console.log('112222', word[i], word)
      //   flag = false
      //   break
      // }
      // 存在chars里面没有的字符
      if (innerMap[word[i]] === undefined || innerMap[word[i]] === 0) {
        flag = false
        break
      } else {
        innerMap[word[i]]--
      }
    }
    if (flag) {
      ret+= word.length
    }
  }
  return ret
}

console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))
console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
