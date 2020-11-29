/**
 * 
 
    Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

    A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

    

    Example 1:

    Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
    Output: [15]
    Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
    
    //[3, 9, 15]
    //[15, 16, 17]
    
    Example 2:

    Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
    // [1, 3, 12]
    // [15, 16, 17, 12]
    Output: [12]
    Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
    Example 3:

    Input: matrix = [[7,8],[1,2]]
    Output: [7]
    

    Constraints:

    m == mat.length
    n == mat[i].length
    1 <= n, m <= 50
    1 <= matrix[i][j] <= 10^5.
    All elements in the matrix are distinct.

 * 
 * 
 * 
 */

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// i 行 j 列
// max(column) min(row)
// 遍历两次 求出每一行的最小值 和最大值
// 时间复杂度O(m * n) 空间复杂度O(max(m, n))
var luckyNumbers  = function(matrix) {
  let rowLen = matrix.length 
  let colLen = matrix[0].length

  let ret = []

  let mapRow = {}
  for (let row = 0; row < rowLen; row++) {
    let min = Number.POSITIVE_INFINITY
    for (let col = 0; col < colLen; col++) {
      if (matrix[row][col] < min) {
        min = matrix[row][col]
      }
    }
    mapRow[min] = true
    // 将每一行的最小值 放在map里面
  }

  for (let col = 0; col < colLen; col++) {
    let max = Number.NEGATIVE_INFINITY
    for (let row = 0; row < rowLen; row++) {
      if (matrix[row][col] > max) {
        max = matrix[row][col]
      }
    }
    if (mapRow[max]) {
      ret.push(max)
    }
  }
  return ret
};



// 对上面的优化，直接一次遍历就可以求出，行的最小和列的最大
// 有问题，m 和 n 一样的情况下，一次遍历是可以的，不一样的话会出现数组越界
// 一次遍历会有问题---正确解法参考下面
var luckyNumbers_wrong  = function(matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  let set = new Set()
  let map = {}
  let ret = []
  for (let i = 0; i < rowLen; i++) {
    let minRow = Number.POSITIVE_INFINITY
    let maxCol = Number.NEGATIVE_INFINITY
    for (let j = 0; j < colLen; j++) {
      // 遍历行
      // 找每一行的最小值
      if (matrix[i][j] < minRow) {
        minRow = matrix[i][j]
      }
      // 遍历列
      // 找每一列的最大值
      if (matrix[j] && matrix[j][i] > maxCol) {
        maxCol = matrix[j][i]
      }  
      console.log(i, j, `matrix[${j}][${i}]`, `matrix[${i}][${j}]`)
    }
    console.log(minRow, maxCol, 'kevinkang-')
    if (!map[minRow]) {
      map[minRow] = true
    } else {
      ret.push(minRow)
    }

    if (!map[maxCol]) {
      map[maxCol] = true
    } else {
      ret.push(maxCol)
    }
  }
  return ret
}





// 参考： https://leetcode.com/problems/lucky-numbers-in-a-matrix/discuss/539731/JavaPython-3-Two-23-pass-codes-w-brief-explanation-and-analysis.

// 做一次遍历，是能够求出每一行的最小和每一列的最大值
var luckyNumbers = function(matrix) {
  let m = matrix.length;     // 行
  let n = matrix[0].length;  // 列

  let minsRow = new Array(m).fill(Number.POSITIVE_INFINITY)
  let maxsCol = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j, `matrix[${i}][${j}]`)
      minsRow[i] = Math.min(matrix[i][j], minsRow[i])
      maxsCol[j] = Math.max(matrix[i][j], maxsCol[j])
    }
  }
  console.log(minsRow) // 每一行的最小值在这个数组里面
  console.log(maxsCol) // 每一列的最大值在这个数组里面
  // 然后求这两个数组的交集，即可
  // 求交集可以用O（m*n）数组遍历，也可以用 map去存储
}



// console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))
console.log(luckyNumbers([
  [1,10,4,2],
  [9,3,8,7],
  [15,16,17,12]]
))
// 如果从行开始遍历 00 01 02 03 、10 11 12 13、 20 21 22 23
// 如果从列开始遍历 00 10 20 、 01 11 21 、 01 12 22 、 03 13 23
// console.log(luckyNumbers([[7,8],[1,2]]))
