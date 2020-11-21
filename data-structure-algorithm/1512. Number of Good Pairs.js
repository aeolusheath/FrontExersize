/**

  Given an array of integers nums.

  A pair (i,j) is called good if nums[i] == nums[j] and i < j.

  Return the number of good pairs.

  

  Example 1:

  Input: nums = [1,2,3,1,1,3]
  Output: 4
  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  Example 2:

  Input: nums = [1,1,1,1]
  Output: 6
  Explanation: Each pair in the array are good.
  Example 3:

  Input: nums = [1,2,3]
  Output: 0


  Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100

 */
// related topic hash table or array
// 时间复杂度O(n^2) 空间复杂度O(1) -- 可以优化
var numIdenticalPairs = function(nums) {
    if (!nums || nums.length === 0) return 0
    let len = nums.length
    let total = 0
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] === nums[j]) {
          total++
        }
      }
    }
    return total
};


// cool solution
// 题目的要求实际上就是重复的次数，单个数字重复的次数和的【等差数列和】
// 重新理解一下题目，就是每个数字出现的次数n [1 + 2 + 3 + ... (n - 1)]
// 时间复杂度O(n) 空间复杂度O(n) -- 可以优化
var numIdenticalPairs = function(nums) {
  if (!nums || nums.length === 0) return 0
  let total = 0
  // arr[100] 
  // arr的索引是从0开始的，那么100对应的长度为101
  let arr = new Array(101) // 因为值可能为100， 所以这个数组的长度必须为101，防止越界
  arr.fill(0)
  // 找到每个数字重复的次数
  for (let i = 0; i < 100; i++) {
    arr[nums[i]]++
  }
  for (let j = 0; j < arr.length; j++) {
    let count = arr[j]
    // 每个数字重复的次数，是一个累加和，比如重复了i次，那么总和就是 1 + 2 + ... + (i - 1) = n * (n - 1) / 2
    total += count * (count - 1) / 2
  }
  return total
};


// 最简洁的一个方法
// 时间复杂度O(n) 空间复杂度O(n)
var numIdenticalPairs = function(nums) {
  if (!nums || nums.length === 0) return 0
  let total = 0
  let arr = new Array(101) // 因为值可能为100， 所以这个数组的长度必须为101，防止越界
  arr.fill(0)
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i]

    console.log(arr[a], '000000')
    total += (arr[a]++) // 这一步将上面的 第二个循环给代替了【so cool！！】
  }
  console.log('--')
  return total
};

// console.log(numIdenticalPairs_1([1,1,1,1]),  'kkk----')


// 用map去存储，累加的值， 1 + 2 + 3 + ...n 。 实际上这个可以用 一个变量去存储前面的累加。不用非要做循环
// var total = 0, a = 0; var total = total + (a++) 
var numIdenticalPairs_ = function(nums) {
  if (!nums || nums.length === 0) return 0
  let count = 0
  let map =  new Map()
  for (let num of nums) {
    count += (map.get(num) || 0)
    map.set(num, ((map.get(num) || 0) + 1))
  }
  return count
}

// console.log(numIdenticalPairs([1,2,3,1,1,3]), 'kkk----')
console.log(numIdenticalPairs([1,1,1,1]),  'kkk----')

