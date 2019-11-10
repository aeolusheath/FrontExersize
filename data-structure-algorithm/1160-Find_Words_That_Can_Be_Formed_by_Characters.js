/**
 * 
 * 
 *  You are given an array of strings words and a string chars.

    A string is good if it can be formed by characters from chars (each character can only be used once).

    Return the sum of lengths of all good strings in words.

    

    Example 1:

    Input: words = ["cat","bt","hat","tree"], chars = "atach"
    Output: 6
    Explanation: 
    The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
    Example 2:

    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
    Output: 10
    Explanation: 
    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
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