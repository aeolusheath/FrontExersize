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

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// tag: binary search

// ( l + r ) / 2     1, 3 = 2   3, 4  = 3
// l + (r - l ) / 2  1, 3 = 2   3, 4  = 3
// idiot right order will has right result

// tag: binary search / 二分法
var search = function(nums, target) {
    // nums已经是升序
    let l = 0
    let r = nums.length - 1 
    // l <= r 等于的情况，边界条件，数组只有一个元素
    while(l <= r) {

      let m = Math.floor((l+r)/2), cur = nums[m]
      // 3, 4, 3, 4, 5
      console.log(l , r, m, cur, target)


      if ( cur < target) {
        // 排除掉 l ~ m的这一半的区间, m这个值就不满足条件，直接排除即可
        l = m + 1
        // l = m
        // 有一种异常情况，l == m (r = l + 1, 就会出现这种情况) 并且 nums[m] < nums[target] 这样就会有死循环
        // 所以绝对不能将m直接赋值给l
      }
      if (cur > target) {
        // 排除掉 m ~ r 的这一半的区间范围
        r = m - 1
        // r = m
      }    
      if (cur == target) {
        return m
      }  
    }
    return -1
};

console.log(search([1,2,3,4,5], 5), 'kevvv') // 死循环


// class Solution {
  // function search( nums,  target) {
  //   let pivot, left = 0, right = nums.length - 1;
  //   while (left <= right) {
  //     pivot = left + (right - left) / 2;
  //     if (nums[pivot] == target) return pivot;
  //     if (target < nums[pivot]) right = pivot - 1;
  //     else left = pivot + 1;
  //   }
  //   return -1;
  // }
// }




