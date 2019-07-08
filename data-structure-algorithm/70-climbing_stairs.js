/**
 *
 *
  You are climbing a stair case. It takes n steps to reach to the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  Note: Given n will be a positive integer.

  Example 1:

  Input: 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps
  Example 2:

  Input: 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step

 *
 */

// 爬楼梯
// 假设 结果是 f(n) 如果最后一步是1 那么有 f(n-1) 如果最后一步走的是2 那么有f(n-2)
// 所有最后的结果是f(n-1) + f(n-2) = f(n)
var climbStairs = function (n) {
  var first = 1
  var second = 2
  var third = null
  if (n <= 2) {
    return n
  }
  i = 2
  while (i < n) {
    third = first + second
    first = second
    second = third
    i++
  }
  return third
}


var climbStairs = function(n) {
    var first = 1
    var second = 2
    var second = null
    if (n <= 2) {
      return n
    }
    var i = 2
    while (i < n) {
      third = first + second
      first = second
      second = third
      i++
    }
  return third
};