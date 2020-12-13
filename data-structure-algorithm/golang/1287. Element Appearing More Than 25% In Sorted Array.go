package ds
/**
 * 
 * 
  

  Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

  Return that integer.

  

  Example 1:

  Input: arr = [1,2,2,6,6,6,6,7,10]
  Output: 6
  

  Constraints:

  1 <= arr.length <= 10^4
  0 <= arr[i] <= 10^5

 * 
 * 
 * 
 */


 /**
 * @param {number[]} arr
 * @return {number}
 */
// 方法一 时间内复杂度O(n) 计数排序即可，找到每个数字出现的频率，然后遍历数组，找到索引对应的值 > 1/4 的索引即可

// 方法二，时间复杂度O(n) 一次遍历，判断 arr[i] === arr[i + step]  step为（频率）（出现的次数）
// Slide Window

func findSpecialInteger(arr []int) int {
    var step = len(arr) / 4
    for i:= 0; i < len(arr) - step; i++ {
      if arr[i] == arr[i + step] {
        return arr[i]
      }
    }
    return 0
}


// 方法三，时间复杂度O(n) 一次遍历，统计每个数字的重复次数 JS 版本
//var findSpecialInteger = function(arr) {
//  let oTimes = Math.floor(arr.length * 0.25)
//  let repeatTimes = 1
//  let initVal = arr[0]
//  for (let i = 1; i < arr.length; i++) {
//    if (arr[i] === initVal) {
//      repeatTimes++
//    } else {
//      repeatTimes = 1
//      initVal = arr[i]
//    }
//
//    if (repeatTimes > oTimes) {
//      return arr[i]
//    }
//  }
//  return initVal
//}
//
//console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
//
//
//
//// 方法四，二分查找 JS 版本
//// 找到第一次出现和最后一次出现的位置，然后减去是否大于oTimes
//// main函数略去，二分查找如下
//
//
//console.log('---------------------')
//
//
//var firstOccuer = (arr, target) => {
// let l = 0
// let r = arr.length - 1
// while(l <= r) {
//   let mid = Math.floor( (l + r) / 2 )
//   let val = arr[mid]
//   if (val === target  && ( (mid - 1) < 0 || arr[mid - 1] < val)) {
//     return mid
//   }
//   if (val < target) {
//     l = mid + 1
//   }
//   // 等于要加入，重复数据会有死循环
//   if (val >= target) {
//     r = mid - 1
//   }
// }
// return -1
//}
//console.log(firstOccuer([0,1,1,2], 1))
//console.log(firstOccuer([1,2,2,6,6,6,6,7,10], 1))
//// console.log(firstOccuer([1,2,2,6,6,6,6,7,10], 10))
//// console.log(firstOccuer([1,2,2,6,6,6,6,7,10], 2))
//// console.log(firstOccuer([1,2,2,6,6,6,6,7,10], 6))
//
//
//
//
//var lastOccur = (arr, target) => {
//  var l = 0
//  var r = arr.length - 1
//  while (l <= r) {
//    let mid = Math.floor( (l + r) / 2 )
//    let val = arr[mid]
//    if (val === target && ( mid === arr.length -1 || arr[mid + 1] > val)) {
//      return mid
//    }
//    if (val <= target) {
//      l = mid + 1
//    }
//    if (val > target) {
//      r = mid - 1
//    }
//  }
//  return -1
//}
//console.log('--------')
//console.log(lastOccur([0,1,1,1,2], 1))
// console.log(lastOccur([1,2,2,6,6,6,6,7,10], 10))
// console.log(lastOccur([1,2,2,6,6,6,6,7,10], 2))
// console.log(lastOccur([1,2,2,6,6,6,6,7,10], 6))