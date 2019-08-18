/**
 * 
  Given an array of integers, find if the array contains any duplicates.

  Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

  Example 1:

  Input: [1,2,3,1]
  Output: true
  Example 2:

  Input: [1,2,3,4]
  Output: false
  Example 3:

  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true 

 * 
 */

var containsDuplicate = function(nums) {
    var ret = [...new Set(nums)]
    return ret.length != nums.length
};

var containsDuplicate = function(nums) {
  var map = {}
  for (let i = 0, l = nums.length; i < l ; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] =  1
    } else {
      return true
    }
  }
  return false
};

var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b) // 先排序
  for (let i = 0, l = nums.length; i < l - 1; i++) {
    if(nums[i] == nums[i + 1])
      return true
  }
  return false
};

