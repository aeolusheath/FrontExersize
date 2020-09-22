/**
 * 
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


  Example 1:

  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

  Example 2:

  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
 * 
 */

// 二分查找
var search = function(nums, target) {
  if (!nums || nums.length === 0) return null

  let left = 0, right = nums.length - 1;
  // while (left < right) { 这里相等是一个边界条件
  while (left <= right) {
    let mid = Math.trunc((left + right) / 2)
    let val = nums[mid]
    if (target === val) { return mid }
    if (target < val) {
      right = mid - 1
    }
    if (target > val) {
      left = mid + 1
    }
  }
  return -1
}

console.log(search([-1,0,3,5,9,12], 9))