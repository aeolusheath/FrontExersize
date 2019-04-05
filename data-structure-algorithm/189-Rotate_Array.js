/**
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

  示例 1:

  输入: [1,2,3,4,5,6,7] 和 k = 3
  输出: [5,6,7,1,2,3,4]
  解释:
  向右旋转 1 步: [7,1,2,3,4,5,6]
  向右旋转 2 步: [6,7,1,2,3,4,5]
  向右旋转 3 步: [5,6,7,1,2,3,4]
  示例 2:

  输入: [-1,-100,3,99] 和 k = 2
  输出: [3,99,-1,-100]
  解释:
  向右旋转 1 步: [99,-1,-100,3]
  向右旋转 2 步: [3,99,-1,-100]
  说明:

  尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
  要求使用空间复杂度为 O(1) 的原地算法。
 *
 */


// 方法1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const index = nums.length - k
  // 这一步在leetcode 没有通过
  return nums.slice(index).concat(nums.slice(0, index))
};

// 错误
// var rotate = function (nums, k) {
//   let temp = null
//   for (let i = 0; i < k; i++) {
//     // 交换 nums.length - k  与  k
//     console.log(i, nums.length - 1 - i)
//     temp = nums[i]
//     nums[i] = nums[nums.length -1 - i]
//     nums[nums.length - 1 - i] = temp
//   }
//   return nums
// }



// 分割线

// 循环了 3次
// [1, 2, 3, 4] ==>

// temp = 4

// 交换temp 与 nums[0]
// temp = 1

// 交换temp 与 nums[1]
// temp = 2

// 交换temp 与 nums[2]
// temp = 3

// 交换temp 与 nums[3]

// 方法2
var rotate = function (nums, k) {
  while (k !== 0) {
    k--
    let temp = nums[nums.length - 1]
    for (let i = 0; i < nums.length; i++) {
      temp = temp + nums[i]
      nums[i] = temp - nums[i]
      temp = temp - nums[i]
    }
  }
  return nums.slice(0)
}

// 方法3
// 交换值，有问题，为啥，因为 ( i + k ) % length 肯定会出现重复的数字，会覆盖
var rotateWrongThree = function (nums, k) {
  // const copyNums = nums.slice(0)
  // 交换的坐标
  // nums[i] 与 nums[(i + k) % length]
  // [1, 2, 3, 4] 1
  let temp = null
  for (let i = 0; i < nums.length; i++) {
    const index = (i + k) % nums.length
    temp = nums[i]
    nums[i] = nums[index]
    nums[index] = temp
    console.log(i, index)
  }
}

// 所以要用数组存储索引
//   [1,2,3,4]
// [1,2,3,4]
var rotate = function (nums, k) {
  const cpNums = nums.slice(0)
  for (let i = 0; i < nums.length; i++) {
    const index = (i + k) % nums.length
    nums[index] = nums[i]
    console.log(i, index)
  }
}

rotateWrongThree([1, 2, 3, 4, 5, 6, 7], 3)
console.log('-------------分割--------------')
rotate([1, 2, 3, 4, 5, 6, 7], 3)


// 方法4 ，每一次都将最后的元素挪到最前面
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    const popItem = nums.pop()
    nums.unshift(popItem)
  }
}

// 方法5 直接用splice操作，slice浅复制不会修改原来的数组
var rotate = function (nums, k) {
  const index = nums.length - k
  nums.unshift(...nums.splice(index))
}

rotate3([1,2,3,4,5,6,7],3)

// 方法6 直接全部用splice方法
var rotate = function (nums, k) {
  const index = nums.length - k
  return nums.splice(0, 0, ...nums.splice(index))
}

// 方法7 旋转子数组, 其实应该对k进行一次判断 是否大于nums.length
var rotate = function (nums, k) {
  if (!nums || nums.length === 0 || k % nums.length === 0)
    return nums
  // 如果 nums 长度为7 k为3， 那么turns = 3，但是中间的值应该是 7 - 3
  const turns = k % nums.length
  const middle = nums.length - turns
  var reverseArr = function (subNums, start, end) {
    let temp = null
    while (start <= end) {
      temp = subNums[start]
      subNums[start] = subNums[end]
      subNums[end] = temp
      start++
      end--
    }
  }
  reverseArr(nums, 0, middle - 1)
  reverseArr(nums, middle - 1, nums.length - 1)
  reverseArr(nums, 0, nums.length - 1)
}

 //fun(1)(2)(3)(6)
var fun = function (m1) {
  return function (m2) {
    return function (m3) {
      return function (m4) {
        return m1 * m2 * m3 * m4
      }
    }
  }
}
