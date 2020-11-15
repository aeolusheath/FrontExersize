/**
 * 
 

  We are given a list nums of integers representing a list compressed with run-length encoding.

  Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

  Return the decompressed list.

  

  Example 1:

  Input: nums = [1,2,3,4]
  Output: [2,4,4,4]
  Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
  The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
  At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
  Example 2:

  Input: nums = [1,1,2,3]
  Output: [1,3,3]
  

  Constraints:
    2 <= nums.length <= 100
    nums.length % 2 == 0
    1 <= nums[i] <= 100
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number[]}
 */
// 数组长度为偶数
// 数组长度在【2，100】
// 数组的值在 1 到 100 之间
// 时间复杂度O(n^2) 空间复杂度O(n)
var decompressRLElist = function(nums) {
  if (!nums || nums.length === 0) { return [] }
  let ret = []

  // 方法一 用map去存储出现的次数
  // var map = new Map()
  // for (let i = 0; i < nums.length; i += 2) {
  //   map.set(nums[i], nums[i+1])
  // }
  // TODO

  // 方法二 用数组去存储出现的次数,这样会出现问题，顺序，如果大的数字在前面，那么就会出错， 比如这个 [1,5,2,1]
  // var arr = new Array(101) // 为啥长度是101，因为nums[i]可能是100，100的索引就是101
  // arr.fill(0)
  // for (let i = 0; i < nums.length; i += 2) {
  //   arr[ nums[i+1] ] = nums[i]
  // }
  // 因为存在顺序的问题，所以这个循环是错的 比如这个 [1,5,2,1] , 5在前面，1 在后面
  // for (let j = 0; j < arr.length; j++) {
  //   if (arr[j]!==0) {
  //     for (let k =0; k < arr[j]; k++) {
  //       ret.push(j)
  //     }
  //   }
  // }

  // 方法二的纠错
  for (let i = 0; i < nums.length; i += 2) {
    // method - 1
    // ret.push(...new Array(nums[i]).fill(nums[i+1]))

    // method - 2
    // 这里也可以 直接 走一次while 或者for 循环，将数组push到ret里面去 也是O(n^2)
    let j = 0
    while (j < nums[i]) {
      ret.push(nums[i+1])
      j++
    }
  }
  return ret
}

// console.log(decompressRLElist([1,2,3,4]))
// console.log(decompressRLElist([1,1,2,3]))
console.log(decompressRLElist([1,5,2,1]))
