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

  // 递归方式
var search = function(nums, target, leftIndex, rightIndex ) {
   if (!nums || nums.length === 0) { return -1 }
   let left = 0, right = (nums.length - 1);
   if (leftIndex !== undefined) { left = leftIndex }
   if (rightIndex !== undefined) { right = rightIndex }
   let mid = Math.trunc((left + right) / 2)
   let val = nums[mid]
   // 边界条件
   if (left > right) { return -1 }
   if (val === target) return mid
   if (target > val) {
    return search(nums, target, mid + 1, right)
   }
   if (target < val) {
    return search(nums, target, left, mid - 1)
   }
   return -1
}


console.log(search([-1,0,3,5,9,12], 9))


