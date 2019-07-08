/**

 Given an integer, write a function to determine if it is a power of three.

  Example 1:

  Input: 27
  Output: true
  Example 2:

  Input: 0
  Output: false
  Example 3:

  Input: 9
  Output: true
  Example 4:

  Input: 45
  Output: false
  Follow up:
  Could you do it without using any loop / recursion?
 *
 *
 */
// 递归 很烂
var isPowerOfThree = function(n) {
    if (n == 0) {
        return false
    }
    if (n == 1) {
        return true
    }
    let remain = n / 3
    if(remain == 1  && (n % 3 == 0)) {
        return true
    } else {
        return isPowerOfThree(remain)
    }
};

// 循环 比递归好
var isPowerOfThree = function (n) {
  if (n == 0) {
    return false
  }
  // 加上这个会比上面很慢很多
  if (n == 1) {
    return true
  }
  while (n % 3 == 0) {
    n = n / 3
  }
  return n == 1
};


// 循环 比递归好 【做了一次优化】
var isPowerOfThree = function (n) {
  if (n == 0) {
    return false
  }
  while (n % 3 == 0) {
    n = n / 3
  }
  return n == 1
}

// 数学方法 很cool 没有使用 循环或者递归
// log3N = log10 N / log 10 3
// 我们只需要判断 log3N 是不是0 即可
var isPowerOfThree = function (n) {
  var ret = Math.log10(n) / Math.log10(3)
  return ret - Math.floor(ret) === 0
}