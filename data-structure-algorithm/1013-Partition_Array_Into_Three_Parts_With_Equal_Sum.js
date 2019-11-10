/**
 * 
 * 
  Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

  Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

  

  Example 1:

  Input: [0,2,1,-6,6,-7,9,1,2,0,1]
  Output: true
  Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
  Example 2:

  Input: [0,2,1,-6,6,7,9,-1,2,0,1]
  Output: false
  Example 3:

  Input: [3,3,6,5,-2,2,5,1,-9,4]
  Output: true
  Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 * 
 * 
 * 
 */


 /**
 * @param {number[]} A
 * @return {boolean}
 */
// 3个值 相等，和的1/3 可以求出来


// 正确代码一
var canThreePartsEqualSum = function(A) {
  let total = A.reduce((sum, item)=>sum+item, 0)
  if (total % 3 != 0) return false
  let equalValue = total/3
  console.log(equalValue, 'ddd')
  
  let remain = equalValue;
  let count = 0
  for (let i = 0, j = A.length; i < j; i++) {
    remain = remain - A[i]
    if (remain == 0) {
      console.log(i, j , count)
      count++
      // 错误解法1的代码
      // if (count === 3 && i == j - 1) {
      //   return true
      // }
      remain = equalValue
    }
  }
  return count === 3
  // 错误解法1的代码
  // return false
};

canThreePartsEqualSum([12, -4,16,  -5,9,-3,3,8,  3])


// 正确代码二
var canThreePartsEqualSum2 = function(A) {
  let total = A.reduce((sum, item) => sum+item, 0)
  if (total % 3 != 0) return false
  let equalValue = total/3

  let s = 0 
  let count = 0

  for (let i = 0, j = A.length; i < j; i++) {
    s += A[i]
    if (s == equalValue) {
      s = 0
      count++
    }
  }
  return count === 3
}