/**
 * 

  Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

  Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

  

  Example 1:

  Input: arr = [3,5,1]
  Output: true
  Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
  Example 2:

  Input: arr = [1,2,4]
  Output: false
  Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
  

  Constraints:

  2 <= arr.length <= 1000
  -10^6 <= arr[i] <= 10^6



 * 
 * 
 * 
 */

 /**
 * @param {number[]} arr
 * @return {boolean}
 */
// 方法一：排序，然后判断是否相等
// 时间复杂度O(nlogn) 空间复杂度O(n)
var canMakeArithmeticProgression = function(arr) {
  if (!arr || arr.length === 0) return false
  if (arr.length === 2) return true
  arr.sort((a, b) => a - b)
  let step = arr[1] - arr[0]
  for (let i = 2;  i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== step)
      return false
  }
  return true
};


// 因为是一个等差数列, 根据等差数列的性质来判断
var canMakeArithmeticProgression = function(arr) {
  let min = Number.POSITIVE_INFINITY,
      max = Number.NEGATIVE_INFINITY;
  
  const set = new Set()
  for (let num of arr) {
    min = Math.min(num, min)
    max = Math.max(num, max)
    set.add(num)
  }
  let n = arr.length
  let step = (max - min) / (n - 1)
  if (!Number.isInteger(step)) return false
  
  // 遍历第二次数组,查看每个元素是否在set集合中
  // 从最小的那个数字开始算，每一个递增的数据是否在集合set中
  for (let i = 1; i < n; i++) {
    let n = min + (i * step)
    if (!set.has(n))
      return false
  }
  return true
}

console.log(canMakeArithmeticProgression([3,5,1]))
console.log(canMakeArithmeticProgression([4,2,1]))