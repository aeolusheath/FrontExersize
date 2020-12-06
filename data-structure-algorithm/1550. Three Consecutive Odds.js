/**
 * 
 
  Given an integer array arr, return true if there are three consecutive odd numbers in the array. 
  Otherwise, return false.
  

  Example 1:

  Input: arr = [2,6,4,1]
  Output: false
  Explanation: There are no three consecutive odds.
  Example 2:

  Input: arr = [1,2,34,3,4,5,7,23,12]
  Output: true
  Explanation: [5,7,23] are three consecutive odds.
  

  Constraints:

  1 <= arr.length <= 1000
  1 <= arr[i] <= 1000

 * 
 * 
 * 
 */

 /**
 * @param {number[]} arr
 * @return {boolean}
 */
// 单次遍历即可
// 时间复杂度O(n) 空间复杂度O(1)
var threeConsecutiveOdds = function(arr) {
    let num = 0, len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] & 1 ) {
        num++
      } else {
        num = 0
      }
      if (num === 3) break
    }
    return num === 3
};
console.log(threeConsecutiveOdds([2,6,4,1]))
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))