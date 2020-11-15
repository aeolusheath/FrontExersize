/**
 * 
 * 
 
 You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

  Return true if it is possible to form the array arr from pieces. Otherwise, return false.

  Example 1:

  Input: arr = [85], pieces = [[85]]
  Output: true
  Example 2:

  Input: arr = [15,88], pieces = [[88],[15]]
  Output: true
  Explanation: Concatenate [15] then [88]
  Example 3:

  Input: arr = [49,18,16], pieces = [[16,18,49]]
  Output: false
  Explanation: Even though the numbers match, we cannot reorder pieces[0].
  Example 4:

  Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
  Output: true
  Explanation: Concatenate [91] then [4,64] then [78]
  Example 5:

  Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
  Output: false
  

  Constraints:

  1 <= pieces.length <= arr.length <= 100
  sum(pieces[i].length) == arr.length
  1 <= pieces[i].length <= arr.length
  1 <= arr[i], pieces[i][j] <= 100
  The integers in arr are distinct.
  The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).


 * 
 * 
 * 
 */

 // 审题，实际上就是看pieces里面的数组，是不是arr的子数组


 /**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
// 时间复杂度O(n^2) 空间复杂度O(1)
var canFormArray = function(arr, pieces) {
  
  let flag = true

  for (let i = 0; i < pieces.length;  i++) {
    let startVal = pieces[i][0]
    let startIndex = arr.findIndex(val => val === startVal)
    let len = pieces[i].length
    for (let j = 0; j < len; j++) {
      if (arr[startIndex] !== pieces[i][j]) {
        return false
        // break
      }
      startIndex++
    }
  }
  return flag
};


// 用map去做, 是判断map里面 保存的pieces[i]的每一个元素是连续的
var canFormArray = function(arr, pieces) { 
  var map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i)
  }
  for (let j = 0; j < pieces.length; j++) {
    // 索引可能是0，这里又错了
    if(map.get(pieces[j][0]) === undefined) return false
    for (let k = 0; k < pieces[j].length - 1; k++) {
      // map里面找到 pieces里面的所有数组的元素应该是连续的
      if ( map.get(pieces[j][k+1])-  map.get(pieces[j][k]) !==1) {
        return false
      }
    }
  }
  return true
}



console.log(canFormArray(
  [91,4,64,78],
[[78],[4,64],[91]]
))
// console.log(canFormArray([85], [[85]]))
