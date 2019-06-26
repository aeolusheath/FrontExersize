/**
 *
  Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:

  Input: 123
  Output: 321

  Example 2:

  Input: -123
  Output: -321
  Example 3:

  Input: 120
  Output: 21
  Note:
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


 *
 */


var reverse = function (x) {
  let isPositive = x >= 0
  let str = x + '',
    reverseStr = str.split('').reverse().join('')
  let res
  if (isPositive) {
    res = parseInt(reverseStr)
    // return (res > 2 ** 31 - 1 || res < -(2 ** 31)) ? 0 : res
    return (res > 2 ** 31 - 1) ? 0 : res
  } else {
    reverseStr = reverseStr.substr(0, reverseStr.length - 1)
    res = -parseInt(reverseStr)
    return ( res < -(2 ** 31)) ? 0 : res
  }
};


/**
 *
 * 123 % 10 = 3
 * 123 / 10 = 12
 *
 * 12 % 10 = 2
 *
 * 12/ 10 = 1
 *
 * s = 3 * 10
 *
 */
var reverse = function (n) {
  console.log(n , "current")
  var s = 0, m = Math.pow(2, 31)
  while (n != 0) {
    var remain = n % 10
    //n = Math.floor(n / 10) // 错误代码，应该用trunc，负数的情况 floor明显是错的，当然可以通过判断使用ceil 和 floor 但是明显不如trunc来的简单
    n = Math.trunc(n / 10)
    // s = remain * 10 + remain // 错误代码 remain 没有保存值
    // s = n * 10 + remain // 错误代码
    s = s * 10 + remain
    if (s > m || s < -(m - 1)) {
      return 0
    }
    console.log(n, s, "result-----")
  }
  console.log(s)
  return s
}


// var reverseTest = function (n) {
//   var s = 0, m = Math.pow(2, 31)
//   while (n != 0) {
//     let remain = n % 10
//     n = Math.trunc(n / 10)
//     s = s * 10 + remain
//   }
// }