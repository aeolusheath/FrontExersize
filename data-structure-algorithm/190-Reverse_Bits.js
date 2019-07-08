/**
 *
 * @param {*} n
 颠倒给定的 32 位无符号整数的二进制位。

 

    示例 1：

    输入: 00000010100101000001111010011100
    输出: 00111001011110000010100101000000
    解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
          因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
    示例 2：

    输入：11111111111111111111111111111101
    输出：10111111111111111111111111111111
    解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
          因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。
     

    提示：

    请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
    在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。
     

    进阶:
    如果多次调用这个函数，你将如何优化你的算法？

 *
 *
 */
// var reverseBits = function (n) {
//   console.log(n.toString(2), "111")
//   let str = n.toString(2)
//   for (let i = 0, j = str.length; i <= j ; i++ , j--) {
//     var temp = str[i]
//     str[i] = str[j]
//     str[j] = temp
//   }
//   return parseInt(str, 10)
// };

// reverseBits(100)


// var reverseBits = function (n) {
//   console.log(n, 'ddd')
//   let str = n + ''
//   console.log(str, "str---->>>>")
//   for (let i = 0, j = str.length; i <= j; i++, j--) {
//     var temp = str[i]
//     str[i] = str[j]
//     str[j] = temp
//   }
//   console.log(str, "??????")
//   return parseInt(str, 2)
// };
// reverseBits(00000010100101000001111010011100)

var reverseBits = function (n) {
  var result = 0
  // n 传入的是一个二进制数字
  for (let i = 0; i < 32; i++) {
    // 取最低位的有效数字
    var temp = (n >> i) & 1
    // 将这个数字左移 一定的位置，但是这个temp 只是单个bit
    temp = temp << (31 - i)
    // 求一次或运算
    result = result | temp
  }
  // 参考： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  // >>> 0 将result转为无符号整数
  return result >>> 0
}


var reverseBits = function (n) {
  // n.toString(2).padStart(32, "0").split('').reverse().join('')
    return parseInt(
        n
            .toString(2)
            .padStart(32, '0')
            .split('')
            .reverse()
            .join(''),
        2,
    );
}


// 杨辉三角
// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
var triangle = function (n) {
  var result = []
  for (let i = 0; i < n; i++) {
    // var item = []
    result[i] = []
    // 这里是 j <= i  而不是 j < i, 因为i
    for (let j = 0; j <= i; j++) {
      if (j == 0 || i == j) {
        result[i][j] = 1
      } else {
        result[i][j] = result[i-1][j-1] + result[i-1][j]
      }
    }
  }
  return result
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

triangle(4)
console.log("--------------\n")

// 打印 99乘法表，9行
function outputMultifyTable() {
  for (let i = 1; i <= 9; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
      str += `${i} * ${j} = ${i * j}  `
    }
    console.log(str)
  }
}

outputMultifyTable()

console.log("----------------ouou------------------")

// 打印 99乘法表，9行
function outputMultifyTable2() {
  for (let i = 9; i >= 1; i--) {
    let str = ""
    for (let j = 1; j <= i; j++) {
      str += `${i} * ${j} = ${i * j}  `
    }
    console.log(str)
  }
}

outputMultifyTable2()
