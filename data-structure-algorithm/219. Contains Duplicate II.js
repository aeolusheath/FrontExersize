/**
 * 
 * 

 Given an array of integers and an integer k, 
 
 find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] 
 
 and the absolute difference between i and j is at most k.

  Example 1:

  Input: nums = [1,2,3,1], k = 3
  Output: true
  Example 2:

  Input: nums = [1,0,1,1], k = 1
  Output: true
  Example 3:

  Input: nums = [1,2,3,1,2,3], k = 2
  Output: false

 * 
 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


 // 方法一，双重循环，暴力法  略
 

 // 方法二，遍历两次，map存最大索引
var containsNearbyDuplicate = function(nums, k) {
  let map = {}
  let flag = true
  for (let i = 0 ; i < nums.length; i++) {
    let val = nums[i]
    if (map[val] == undefined) {
      map[val] = i
    } else {
      if ((i - map[val]) <= k) {
        return true
      }
      map[val] = i
    }
  }
  return false
};


console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
