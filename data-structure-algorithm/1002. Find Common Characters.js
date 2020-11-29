/**
 * 
  
  Given an array A of strings made only from lowercase letters, 
  return a list of all characters that show up in all strings within the list (including duplicates).
  For example, if a character occurs 3 times in all strings but not 4 times, 
  you need to include that character three times in the final answer.
  You may return the answer in any order.


  Example 1:
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]
  Example 2:

  Input: ["cool","lock","cook"]
  Output: ["c","o"]
  
  Note:

  1 <= A.length <= 100
  1 <= A[i].length <= 100
  A[i][j] is a lowercase letter

 * 
 * 
 * 
 */

 /**
 * @param {string[]} A
 * @return {string[]}
 */
// 求交集实际上就是求最小的相同的部分，请注意，【最小的】
var commonChars = function(A) {
  // 也可以用MAP来操作26个字母
  var cnt = new Array(26).fill(Number.POSITIVE_INFINITY)
  var res = []
  for (let str of A) {
    let cnt1 = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      cnt1[str.codePointAt(i) - 97]++
    }

    // 实际上是求最小值，用map也可以求出最小值
    for (let j = 0; j < 26; j++) {
      cnt[j] = Math.min(cnt[j], cnt1[j])
    }
  }
  for (let i = 0; i < 26; i++) {
    // 一个字母出现多次
    for (let j = 0; j < cnt[i]; j++) {
      res.push(String.fromCodePoint(97 + i))
    }
  }
  return res
}

console.log(commonChars(["bella","label","roller"]))