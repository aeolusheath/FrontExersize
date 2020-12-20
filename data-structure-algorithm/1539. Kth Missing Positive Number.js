/**
 * 
 * 
 
 Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

 * 
 * 
 */


 /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 双指针 + 计数排序
// 时间复杂度O(n)
var findKthPositive = function(arr, k) {
  let newArr = new Array(2001).fill(false)
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = true
  }
  let q = 1
  for (let j = 1; j <= 2000; j++) {
    if (newArr[j] == false ) {
      if (q == k) {
        return j
      }
      q++
    }
   }
};

// 最开始的错误版本，思路是对的，数组的索引没有对
var findKthPositive = function(arr, k) {
  let newArr = new Array(1001).fill(false)
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = true
  }
  let q = 1
  //题目理解错误，这里说的是 arr[i] 在[1, 1000]内部，后续的数字没有在里面，这里改成while循环
  for (let j = 1; j <= 1000; j++) {
    console.log(newArr[j], j, q)
    if (newArr[j] == false) {
      if (q == k) {
        return j
      }
      q++
    }
   }
};

// console.log(findKthPositive([2,3,4,7,11], 5))
console.log(findKthPositive([1,2,3,4], 2))
