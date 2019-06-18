
/**
 *
  Given an integer, write a function to determine if it is a power of two.

  Example 1:

  Input: 1
  Output: true
  Explanation: 20 = 1
  Example 2:

  Input: 16
  Output: true
  Explanation: 24 = 16
  Example 3:

  Input: 218
  Output: false

  而且要求时间和空间复杂度都为常数 - 可以用循环或者递归，求3的方法一样
 */

/**
 *  100 - 4
 *   11 - 3
 *   10 - 2
 *   01 - 1
 *
 *
 *   1,   2,   4,   16
 *  0001 0010 0100 1000
 *  @param {*} n
 *
 *
 *
 */
// 2的高位只有1个1，低位全部是0

var isPowerOfTwo = function (n) {
  return (n > 0) && !(n & (n - 1))
}

// 知道 n & (n-1)的作用 将n的二进制中最低位为1的改为0
// n = 10100(二进制），则(n-1) = 10011 ==》n&(n-1) = 10000

// 计算一个数字的二进制中1的个数【除了用字符串的遍历】
var getOneCount = function (n) {
  count = 0
  // wrong 有符号整数，n为负数
  // while (n > 0) {
  while(n != 0) {
    count++
    n = n & (n - 1)
  }
}

