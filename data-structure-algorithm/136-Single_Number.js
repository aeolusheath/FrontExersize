/**
 *
 *  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    说明：

    你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

    示例 1:

    输入: [2,2,1]
    输出: 1
    示例 2:

    输入: [4,1,2,1,2]
    输出: 4
    *
 */

// use map
var singleNumber = function(nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.delete(nums[i])
    }
  }
  return [...map.keys()][0]
}

// 不用额外的空间------>异或运算

var singleNumber = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] ^ nums[i - 1]
  }
  return nums[nums.length - 1]
}


// 使用位运算符 AND operator & 判断一个数是否是奇数
var isOdd = function (number) {
  // & 运算符 两个都为 1 才为1， 1的二进制 第一位是1
  return number & 1
}

// 使用位运算符 >> 实现除以 2
var divide2 = function (num) {
  return num >> 1
}

// 使用位运算符 << 实现乘以 2
var multify = function (num) {
  return num << 1
}