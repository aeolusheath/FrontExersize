/**
 *
 *  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 *
 */
// wrong method
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
    let remain = target - nums[i]
    if (map.has(remain) && i !== map.get(remain)) {
        return [map.get(remain), i]
    }
  }
};



// method 1 可以优化。。
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]
    if (map.has(remain) && i !== map.get(remain)) {
        return [map.get(remain), i]
    }
    map.set(nums[i], i)
  }
};

// twoSum([2, 7, 11, 15], 9)
// console.log('---00---')
// twoSum([4, 4, 3, 9], 8)
// console.log('---11---')
// twoSum([3,3], 6)

// method 2 方法同上
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
      let remain = target - nums[i]
      if ((remain + '') in map && map[remain] !== i) {
        return [map[remain], i]
      }
      map[nums[i]] = i
  }
};

// method 3
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]
    if (Object.prototype.hasOwnProperty.call(map, remain)) {
      return [map[remain], i]
    }
    map[nums[i]] = i
  }
}
