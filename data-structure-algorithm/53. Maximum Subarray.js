/**
 * 
  
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

  

  Example 1:

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  Example 2:

  Input: nums = [1]
  Output: 1
  Example 3:

  Input: nums = [0]
  Output: 0
  Example 4:

  Input: nums = [-1]
  Output: -1
  Example 5:

  Input: nums = [-2147483647]
  Output: -2147483647
  

  Constraints:

  1 <= nums.length <= 2 * 104
  -231 <= nums[i] <= 231 - 1

 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法，求出所有的子数组
// 时间复杂度O(n^2)
var maxSubArray = function(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let len = nums.length
  for (let i = 0; i < len; i++) {
    // 找到所有子数组
    let subSum = 0;
    for (let j = i; j < len; j++) {
      subSum += nums[j]
      if (subSum >= max) {
        max = subSum
      }
    }
  }
  return max
};



var maxSubArray = function(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0
  for (let i = 0; i < len; i++) {
    // if (sum + nums[i] < nums[i]) {
    //   sum  = nums[i]
    // } else {
    //   sum += nums[i]
    // }
    sum = Math.max(sum + nums[i], nums[i])
    max = Math.max(max, sum)
  }
  return max
};


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([-1]))
