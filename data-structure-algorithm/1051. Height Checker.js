/**
 * 
 * 
  Students are asked to stand in non-decreasing order of heights for an annual photo.

  Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
  返回最小移动的人数
  Notice that when a group of students is selected they can reorder in any possible way between themselves 
  and the non selected students remain on their seats.

  

  Example 1:

  Input: heights = [1,1,4,2,1,3]
  Output: 3
  Explanation: 
  Current array : [1,1,4,2,1,3]
  Target array  : [1,1,1,2,3,4]
  On index 2 (0-based) we have 4 vs 1 so we have to move this student.
  On index 4 (0-based) we have 1 vs 3 so we have to move this student.
  On index 5 (0-based) we have 3 vs 4 so we have to move this student.
  Example 2:

  Input: heights = [5,1,2,3,4]
  Output: 5
  Example 3:

  Input: heights = [1,2,3,4,5]
  Output: 0
  

  Constraints:

  1 <= heights.length <= 100
  1 <= heights[i] <= 100
 * 
 */

 /**
 * @param {number[]} heights
 * @return {number}
 */
// 先排序，然后每一个一个对比，找到位置不同的元素
// 时间复杂度O(nlogn) 
// 用数组存储标记，也可以用map
// 排序是对的，排序之后的处理是错的
// WRONG
var heightChecker = function(heights) {
  
    let sortArr = heights.slice().sort((a, b) => a - b)
    let arr = new Array(101).fill(0)
    for (let i = 0; i < sortArr.length; i++) {
      if(sortArr[i] !== heights[i]) {
        arr[sortArr[i]]++
        arr[heights[i]]++
      }
    }
    let ret = 0
    for (let j = 0; j < arr.length; j++) {
      if(arr[j]!==0) {
        ret++
      }
    }
    return ret
};



// CORRECT
// 时间复杂度O(nlogn) 空间复杂度O(n)
var heightChecker = function(heights) {
  let sortArr = heights.slice().sort((a, b) => a - b)
  let ret = 0
  for (let i = 0; i < sortArr.length; i++) {
    if(sortArr[i] !== heights[i]) {
      ret++
    }
  }
  return ret
};


// 更优解，这种限定范围的数组排序，一般可以用计数排序(桶排序)来完成，优化一下
// 时间复杂度O(n) 空间复杂度O(n)
var heightChecker = function(heights) {
  // 数字是从1-100  数组是从0开始的，arr[100] 那么需要101个位置
  var arr = new Array(101).fill(0) 
  for (let num of heights) {
    arr[num]++
  }
  // 然后只要判断 heights里面的数组是否在正确的位置上
  let ret = 0
  let curHeight = 0  // arr的指针
  for (let i = 0 ; i < heights.length; i++) {
    //  参考:  https://leetcode.com/problems/height-checker/discuss/300472/Java-0ms-O(n)-solution-no-need-to-sort
    while(arr[curHeight] ===0) {
      curHeight++
    }
    if (heights[i] !== curHeight) {
      ret++
    }
    arr[curHeight]--
  }
  return ret
}

// 与上面一样，都是基于计数排序，但是求不同的时候，一个是遍历原数组，一个是遍历顺序数组
var heightChecker = function(heights) {
  // 数字是从1-100  数组是从0开始的，arr[100] 那么需要101个位置
  var arr = new Array(101).fill(0) 
  for (let num of heights) {
    arr[num]++
  }
  // 然后只要判断 heights里面的数组是否在正确的位置上
  let ret = 0
  let j = 0; // heights的指针
  for (let i = 0; i < arr.length; i++) { // 最多执行n次
    while(arr[i] > 0) {  // 最多执行n次
      if(i !== heights[j++]) { // 最多执行n次
        ret++ // 最多执行n次
      }
      arr[i]-- // 最多执行n次
    }
  }
  return ret
}




console.log(heightChecker([1,1,4,2,1,3]))
console.log(heightChecker([2,1,2,1,1,2,2,1]))