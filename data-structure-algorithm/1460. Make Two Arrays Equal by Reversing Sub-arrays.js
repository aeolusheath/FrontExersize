/**
 * 
 * 
 * 
  Given two integer arrays of equal length target and arr.

  In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

  Return True if you can make arr equal to target, or False otherwise.

  

  Example 1:

  Input: target = [1,2,3,4], arr = [2,4,1,3]
  Output: true
  Explanation: You can follow the next steps to convert arr to target:
  1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
  2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
  3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
  There are multiple ways to convert arr to target, this is not the only way to do so.
  Example 2:

  Input: target = [7], arr = [7]
  Output: true
  Explanation: arr is equal to target without any reverses.
  Example 3:

  Input: target = [1,12], arr = [12,1]
  Output: true
  Example 4:

  Input: target = [3,7,9], arr = [3,7,11]
  Output: false
  Explanation: arr doesn't have value 9 and it can never be converted to target.
  Example 5:

  Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
  Output: true
  

  Constraints:

  target.length == arr.length
  1 <= target.length <= 1000
  1 <= target[i] <= 1000
  1 <= arr[i] <= 1000


 * 
 * 
 */
// 多种办法
// 方法一，先排序，然后比较每个位置是否相等 时间复杂度O(nlogn)
// 方法二，先排序，然后将数组转换成字符串，比较字符串是否相等 时间复杂度O(nlogn)
var canBeEqual = function(target, arr) {
   target = target.sort((a, b) => a - b)
   arr = arr.sort((a, b) => a - b)
   let equalFlag = true
   for (let i = 0; i < target.length; i++) {
     if (target[i] !== arr[i]) {
       equalFlag = false
       return false
     }
   }
   return true
}



// 方法三，使用map 或者 数组 存储出现的次数
// 使用数组存储出现的次数，类似于计数排序
var canBeEqual = function(target, arr) {
  // let arr = new Array(arr.length)
  let array = new Array(1001).fill(0)
  let len = target.length;
  for (let i = 0; i < len; i++) {
    array[arr[i]]++
  }

  for (let j = 0; j < len; j++) {
    array[target[j]]--
  }
  let equalFlag = true
  for (let k = 0; k < array.length; k++) {
    if (array[k] !==0) {
      equalFlag = false
      break
    }
  }
  return equalFlag
};

console.log(canBeEqual([3, 7, 9], [3, 7, 11]))