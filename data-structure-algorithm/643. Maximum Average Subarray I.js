/**
 * 
  
  Given an array consisting of n integers, 
  
  find the contiguous subarray of given length k that has the maximum average value. 
  
  And you need to output the maximum average value.

  Example 1:

  Input: [1,12,-5,-6,50,3], k = 4
  Output: 12.75
  Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
  

  Note:

  1 <= k <= n <= 30,000.
  Elements of the given array will be in the range [-10,000, 10,000].

 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力法
// 找到所有的子数组，然后求平均值
var findMaxAverage = function(nums, k) {
    let sums = [nums[0]]
    
    // 错误
    // let max = Number.NEGATIVE_INFINITY
    let max = sums/1
    for (let i = 1; i < nums.length; i++) {
      sums[i] = nums[i] + sums[i-1] 
    }
    for (let i = 0; i + k < nums.length; i++) {
      let avg = (sums[i + k] - sums[i]) / k
      max = Math.max(avg, max)
    }
    return max
}

//