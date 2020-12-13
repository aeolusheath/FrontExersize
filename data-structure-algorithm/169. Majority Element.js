/**
 * 
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:

  Input: [3,2,3]
  Output: 3
  Example 2:

  Input: [2,2,1,1,1,2,2]
  Output: 2

 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一 用map 存一个映射 时间复杂度O(n) 空间复杂度O(n)

// 方法二  先排序，然后使用 slide window 时间复杂度O(Max(logN, n))
var majorityElement = function(nums) {
  let t = Math.floor(nums.length / 2) 
  // appear times >= t
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + t]) {
      return nums[i]
    }
  }
}

// 方法三 非常棒！！！！！！
// https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html
// Basically each element votes for itself and against other elements, and the majority element always wins because it has the most votes. 
var majorityElement = function(nums) {
  let initVal = nums[0];
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      initVal = nums [i]
      count++
    } else if (nums[i] == initVal) {
      count++
    } else {
      count--
    }
  }
  return initVal
}

// 方法4 更简单，排序，然后取 n/2位置的值，因为超过了这个数量的值，这个数字一定在 n/2上面，so cool！！！
// 略去