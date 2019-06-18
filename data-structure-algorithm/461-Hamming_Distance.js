/**
 *
 The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

  Given two integers x and y, calculate the Hamming distance.

  Note:
  0 ≤ x, y < 231.

  Example:

  Input: x = 1, y = 4

  Output: 2

  Explanation:
  1   (0 0 0 1)
  4   (0 1 0 0)
        ↑   ↑

  The above arrows point to positions where the corresponding bits are different.


 *
 */

// 异或运算
var hammingDistance = function (x, y) {
  // 异或运算 中 剩下 1的个数
  var ret = x ^ y
  var i = 0
  while (ret != 0) {
    i++
    ret = ret & (ret - 1)
  }
  return i
};