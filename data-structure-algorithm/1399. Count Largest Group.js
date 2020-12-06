/**
 * 
 
 Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

  Return how many groups have the largest size.

  

  Example 1:

  Input: n = 13
  Output: 4
  Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
  [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
  Example 2:

  Input: n = 2
  Output: 2
  Explanation: There are 2 groups [1], [2] of size 1.
  Example 3:

  Input: n = 15
  Output: 6
  Example 4:

  Input: n = 24
  Output: 5
  

  Constraints:

  1 <= n <= 10^4

 * 
 * 
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let arr = new Array(10002).fill(0)
  let max = Number.NEGATIVE_INFINITY
  for (let i = n; i >= 1; i--) {
    let digitsSum = getSumOfDigts(i)
    arr[digitsSum]++
    if (arr[digitsSum] >= max) {
      max = arr[digitsSum]
    }
  }
  // 现在max是出现数字最多的组
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += (arr[i] === max ? 1 : 0)
  }
  return total
};

// 取得个位上得数字和
const getSumOfDigts = (num) => {
  let total = 0
  let str = ''
  while(num) {
    if (num % 10 !== 0) {
      total += num % 10
      str += num % 10
    } 
    // else {
    //   // total += num / 10
    //   str += num % 10
    // }
    num = Math.floor(num / 10)
  }
  // console.log(total)
  return total
  // return str
}
// console.log(getSumOfDigts(9870))
// console.log(getSumOfDigts(5))
// console.log(getSumOfDigts(14))
// console.log(getSumOfDigts(122))



console.log(13, countLargestGroup(13))
console.log(24, countLargestGroup(24))
console.log(15, countLargestGroup(15))

console.log(2, countLargestGroup(2))

