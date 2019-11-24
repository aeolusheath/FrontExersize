/**
 * Students are asked to stand in non-decreasing order of heights for an annual photo.

  Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

  

  Example 1:

  Input: [1,1,4,2,1,3]
  Output: 3
  Explanation: 
  Students with heights 4, 3 and the last 1 are not standing in the right positions.
 * 
 * 
 * 
 */

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

// 期待的数组是一个非严格递增的数组
 /**
 * @param {number[]} heights
 * @return {number}
 */

// 方法一，排序，按照正确的位置去排序
var heightChecker = function(heights) {
    let copyArr = heights.slice()
    copyArr.sort((a, b) => a - b) // 排序可以扩展为冒泡排序啥的
    let count = 0
    for (let i = 0, j = copyArr.length; i < j; i++) {
      if (copyArr[i] != heights[i]) {
        count++
      }
    }
    return count
};

// 方法二，不用排序
// 这个前提
// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100
var heightChecker = function(heights) {
    let arr = Array.from({length: heights.length})
    arr.fill(0)
    // 这个位置上的index出现了多少次
    for (let item of heights) {
      // item 的值为数字，在下面用索引去做
      arr[item]++
    }
    let count = 0
    for (let i = 1, j = 0; i <= heights.length; i++) {
      // i 就是上面的item，就是数字
      while(arr[i]-- > 0) {
        if (heights[j++] != i) {
          count++
        }
      }
    }
}

