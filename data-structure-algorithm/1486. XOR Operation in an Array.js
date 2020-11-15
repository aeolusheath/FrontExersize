/**
 * 
 
  Given an integer n and an integer start.

  Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

  Return the bitwise XOR of all elements of nums.

  

  Example 1:

  Input: n = 5, start = 0
  Output: 8
  Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
  Where "^" corresponds to bitwise XOR operator.
  Example 2:

  Input: n = 4, start = 3
  Output: 8
  Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
  Example 3:

  Input: n = 1, start = 7
  Output: 7
  Example 4:

  Input: n = 10, start = 5
  Output: 2
  

  Constraints:

  1 <= n <= 1000
  0 <= start <= 1000
  n == nums.length

 * 
 * 
 * 
 */

 /**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let i = 0
  let pre = start  
  let total = pre
  // 这里的判定条件，循环少一次，因为新增的次数是间隔不是数字总数
  while (i < n - 1) {
    pre = pre + 2
    total = total ^ pre // 先求和，在累加
    console.log(pre, 'pppp')
    i++
  }
  return total
};
console.log(xorOperation(4, 3))


// 求1 + 2 + ....n
var acumulate = function(n) {
  // 常规做法
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  // 优雅做法
  let t = 0;
  let j = 1
  while (j <= n) {
    t += (j++)
  }
  return t
}