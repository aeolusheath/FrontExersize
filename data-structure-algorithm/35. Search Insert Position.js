/**
 * 
 * 
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 有序查找或者插入 ----- 二分法
var searchInsert = function(nums, target) {
    
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    let mid = Math.floor((l + r) / 2)
    let val = nums[mid]
    if (val === target) {
      return mid
    } else if (val < target) {
      l = mid + 1
    } else if (val > target) {
      r = mid - 1
    }
  }
  return l
};

console.log(searchInsert([1,3,5,6], 2) )
console.log(searchInsert([1,3,5,6], 5) )
console.log(searchInsert([1,3,5,6], 7) )
console.log(searchInsert([1,3,5,6], 0) )

