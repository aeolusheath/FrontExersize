/**
 * 
 * 
 
    Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    Clarification:

    Confused why the returned value is an integer but your answer is an array?

    Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

    Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
    int len = removeDuplicates(nums);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        print(nums[i]);
    }
    

    Example 1:

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2]
    Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
    Example 2:

    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4]
    Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
    

    Constraints:

    0 <= nums.length <= 3 * 10^4
    -10^4 <= nums[i] <= 10^4
    nums is sorted in ascending order.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */

 // 原地更改

// 1, 计数排序的原理，用arr存储，然后老数组 从0 开始
var removeDuplicates1 = function(nums) {
  var arr = new Array(209).fill(0)
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] + 104]++
  } 
  let j = 0
  let idx = 0
  while (j < arr.length) {
    if (arr[j] != 0) {
      nums[idx++] = j - 104
    }
    j++
  }
  return idx + 1
};




 // 2, 双指针，快慢
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[j - 1]) {
      i++
      nums[i] = nums[j]
    }    
  }
  // return nums
  return i+1
};

console.log(removeDuplicates([1,1,2]), "kev")