/**
 * 
 * 
  
  Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

  Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

  

  Example 1:

  Input: nums = [1,2,2,3,1]
  Output: 2
  Explanation: 
  The input array has a degree of 2 because both elements 1 and 2 appear twice.
  Of the subarrays that have the same degree:
  [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
  The shortest length is 2. So return 2.
  Example 2:

  Input: nums = [1,2,2,3,1,4,2]
  Output: 6
  Explanation: 
  The degree is 3 because the element 2 is repeated 3 times.
  So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
  

  Constraints:

  nums.length will be between 1 and 50,000.
  nums[i] will be an integer between 0 and 49,999.
 * 
 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
// 毫无思路
// 我只想到了 求出频率最大的次数，以及出现频率最大次数的数字
// 
var findShortestSubArray = function(nums) {
    var left = {}, right = {}, count ={}
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
      let cur = nums[i]
      if (left[cur] == undefined) { left[cur] = i } // left map只会执行一次，right每一次都会更新
      count[cur] = count[cur] == undefined ? 1 : (count[cur] + 1)
      maxCount = Math.max(maxCount, count[cur])
      right[cur] = i
    }
    
    // 找到了最大的frequency 是 maxCount
    // 找到所有frequency是这个值的元素，然后找到他包含他们的数组的长度
    // 遍历 count对象
    // 找到出现 maxCount 的元素，然后比较各个最小数组的最小值
    let min = Number.POSITIVE_INFINITY
    for (num of Object.keys(count)) {
      if (count[num] === maxCount) {
        let len = right[num] - left[num] + 1
        if (len  <= min) {
          min = len
        }
       }
    }
    return min
};

findShortestSubArray([1,2,2,3,1,4,2])