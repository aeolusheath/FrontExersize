/**
 *
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:

  Input: "A man, a plan, a canal: Panama"
  Output: true
  Example 2:

  Input: "race a car"
  Output: false
 */


// Tag:  双指针


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLocaleLowerCase().replace(/([^a-z^0-9])/g,"")
    for(let i = 0, j = s.length-1; i < s.length, j >= i; i++, j--) {
        if(s[i] !== s[j])
            return false
    }
    return true

};