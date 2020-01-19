/**
 * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 */


 /**
 * @param {string} S
 * @return {string}
 */
// method 1   做了一次优化
var reverseOnlyLetters = function(S) {
    /**
     *  
     * 查看结果： 
     *  "Qedo1ct-eeLg=ntse-T!".match(/[A-Z]/i)
     *  "Qedo1ct-eeLg=ntse-T!".match(/[A-Z]/gi)
     * 
     */

    // 正则匹配
    let allLetters = S.match(/[A-Z]/gi)
    if (!allLetters) return S
    const reg = new RegExp(/[A-Z]/i)
    let i = allLetters.length - 1
    // BAD
    // S = S.split('')
    let res = ''
    for (let j = 0; j < S.length; j++) {
      if (reg.test(S[j])) {
        // BAD
        // S[j] = allLetters[i]
        // i--
        res += allLetters[i--]
      } else {
        res += S[j]
      }
    }
    // BAD
    // return S.join('')
    return res
};

reverseOnlyLetters("ab-cd")

// method 2   STACK
var reverseOnlyLetters = function(S) { 
  let stack = []
  let reg = new RegExp(/[A-Z]/i)
  const isLetter = (Char) => {
    return reg.test(Char)
  }
  for (let i = 0 ; i < S.length; i++) {
    if (isLetter(S[i])) {
      stack.unshift(S[i]) // 压入栈
    }
  }
  let str = ''
  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i]))
      str += stack.shift()
    else 
      str += S[i]
  }
  return str
}