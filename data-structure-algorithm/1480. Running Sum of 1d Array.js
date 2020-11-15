/**
 * 
  1480. Running Sum of 1d Array

    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

    Return the running sum of nums.

    

    Example 1:

    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
    Example 2:

    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
    Example 3:

    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var runningSum = function(nums) {
  if (!nums || nums.length === 0) return nums
  // temp 存储前面的累加和
  let temp = 0, len = nums.length
  for (let i = 0; i < len; i++) {
    let origin = nums[i] // 先存储到一个临时变量里面 [不然会一直叠加] 易错点
    nums[i] = nums[i] + temp
    temp = origin + temp
  }
  return nums
};

// 有更简洁的办法
// 时间复杂度O(n) 空间复杂度O(1)
var runningSum = function(nums) {
  if (!nums || nums.length === 0) return nums
  let len = nums.length
  for (let i = 1; i < len; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
};

console.log(runningSum([1,2,3,4]))

