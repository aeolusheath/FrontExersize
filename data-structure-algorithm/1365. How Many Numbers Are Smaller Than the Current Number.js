/**
 * 
  Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
  
  That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

  Return the answer in an array.

  
  Example 1:

  Input: nums = [8,1,2,2,3]
  Output: [4,0,1,1,3]
  Explanation: 
  For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
  For nums[1]=1 does not exist any smaller number than it.
  For nums[2]=2 there exist one smaller number than it (1). 
  For nums[3]=2 there exist one smaller number than it (1). 
  For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
  Example 2:

  Input: nums = [6,5,4,8]
  Output: [2,1,0,3]
  Example 3:

  Input: nums = [7,7,7,7]
  Output: [0,0,0,0]




  CONSTRAINTS:
    2 <= nums.length <= 500
    0 <= nums[i] <= 100
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */


/**
 * 
  题目有个前提条件
    CONSTRAINTS:
      2 <= nums.length <= 500
      0 <= nums[i] <= 100
 *
 */


// 时间复杂度O(n^2) 空间复杂度O(n) -- 有更优解
var smallerNumbersThanCurrent_1 = function(nums) {
 if (!nums || nums.length === 0) { return nums }
 let len = nums.length
 let arr = [];
 for (let i = 0; i < len; i++) {
   arr [i] = 0
   for (let j = 0; j < len; j++) {
    if (nums[j] < nums[i] && i !== j) {
      arr[i]++
    }
   }
 }
 return arr
};



/**
 * 
  题目有个前提条件
    CONSTRAINTS:
      2 <= nums.length <= 500
      0 <= nums[i] <= 100
 *
 */


// cool solution
// 时间复杂度O(n) 空间复杂度O(n)
var smallerNumbersThanCurrent = function(nums) {
  if (!nums || nums.length === 0) { return nums }
  let len = nums.length
  let arr = new Array(101)
  arr.fill(0)
  // step - 1
  // 给index，也就是nums数组里面的值，所在的索引添加值，如果为1，说明这个值出现过一次，为2或者更多，那么出现过多次
  // index所在位置的如果有值（不为0），那么前面所有的索引值的和，就是比这个index也就是nums的value小的值的个数
  for (let i = 0; i < len; i++) {
    arr[nums[i]]++
  }

  // step - 2
  // 计数，比如 index 为 i（i < nums.length） 的 比他小的个数，应该是 arr[0] - 到 arr[i - 1]的值的总和
  // 0 - 100
  for (let i = 1; i < 101; i++) {
    arr[i] += arr[i - 1]
  }
  
  // step - 3
  // 一共是 0 - 100， 101个元素
  // 第1个元素比他小的在 index 为 0 的位置
  // 第2个元素比他小的在 index 为 1 的位置
  // 第3个元素比他小的在 index 为 2 的位置
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] === 0 ? 0 : arr[nums[i] - 1]
  }
  // 然后计算出每个位置的值
  
  return nums
 };

console.log(smallerNumbersThanCurrent([6,5,4,8]))