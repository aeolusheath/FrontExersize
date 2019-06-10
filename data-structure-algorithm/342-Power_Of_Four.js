// 循环 除4 除到最后为1
var isPowerOfFour_1 = function (n) {
  if (n == 0) {
    return false
  }
  // n >= 4的情况
  while (n % 4 == 0) {
    n = n / 4
  }
  return n == 1
}

// 通过数学方法来
// log4 N = log 10 N / log 10 4
// 如果是整数 那么是的
var isPowerOfFour_2 = function (n) {
  var ret = Math.log10(n) / Math.log10(4)
  return (ret - Math.floor(ret)) == 0
}


// 位运算
// 先判断是2的次幂，然后 (n - 1) % 3 == 1

var isPowerOfFour_3 = function (n) {
  if (n <= 0) {
    return false
  }
  return n && !(n & n-1) && ((n - 1) % 3 === 0)
}


// 位运算
/**
 * 4的幂，那么1 必然出现在奇数位置1,3,5,7,9且肯定只有1个1。
 * 那么这个数与 0x55555555 (1在所有的奇数位) 求与(&)操作 肯定等于 自己
 *
 * 0x55555555     1010101010101010101010101010101
 * 1    01
 * 4    100
 * 16   10000
 * 64   1000000
 * 256  100000000
 */

var isPowerOfFour_4 = function (n) {
  if (n <= 0) {
    return false
  }
  return !(n & (n-1)) && (n & 0x55555555) == num
}

// 位运算
/**
 * 4的幂，那么1 必然出现在奇数位置1,3,5,7,9且肯定只有1个1。
 * 那么这个数与 0xaaaaaaaa (1在所有偶数位) 求与(&)操作 肯定等于 0
 *
 */
var isPowerOfFour_5 = function (n) {
  if (n <= 0) {
    return false
  }
  return !(n & (n-1)) && (n & 0xaaaaaaaa) == 0
}


var isPowerOfFour_6 = function (n) {
  return n % 3 == 1
}

