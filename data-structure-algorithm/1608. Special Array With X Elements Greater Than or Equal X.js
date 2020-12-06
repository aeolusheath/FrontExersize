/**
 * 
 * 
 * 
 * 
 You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

 

Example 1:

Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
Example 2:

Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.
Example 3:

Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.
Example 4:

Input: nums = [3,6,7,7,0]
Output: -1
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
 * 
 */

 // 方法一，暴力解决办法 最大值为n，从1 开始遍历到n，然后循环数组，时间复杂度O(n)
 // 略


 // 方法二，先排序，然后穷举，时间复杂度O(nlogn) 没太理解，略，后续补充


 // 方法二，计数排序，记录下每一个数字出现的频率，然后倒序累加，计算总数大于等于idx
 // 时间复杂度O(n)
 // TODO 仍然可以优化，不需要counts变量，每一次覆盖arr[i]
 var specialArray = function(nums) {
  let arr = new Array(1001).fill(0)
  for (let i of nums) {
      arr[i] = arr[i] == undefined ? 1 : (arr[i]+1)
  }
  
  let counts = 0
  // 优化，nums遍历nums就好了
  for (let k = arr.length-1; k >=0; k--) {
      counts += arr[k]
      if (counts === k) {
          return k
      }
  }
  return -1
};