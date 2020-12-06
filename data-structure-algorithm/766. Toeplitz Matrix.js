/**
 * 
 * 
 Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

Example 1:

m = 3 n = 4
    2     3
Input: matrix = [
  [1,2,3,4], 00 01 02 03
  [5,1,2,3], 10 11 12 13
  [9,5,1,2]] 20 21 22 23
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:


Input: matrix = 
[[1,2], 00 01 02
 [2,2]] 10 11 12
        20 21 22

Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
 



[ 
  [1,2,3,4], 00 01 02 03
  [4,1,2,3]  10 11 12 13
]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 20
0 <= matrix[i][j] <= 99
 

Follow up:

What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
What if the matrix is so large that you can only load up a partial row into the memory at once?


 * 
 * 
 */


 /**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// 方法一，每一条对角线的 i - j是相等的
// 时间复杂度O(m * n) 空间复杂度O(n)
var isToeplitzMatrix = function(matrix) {
  let map = new Map()
  let m = matrix.length; n = matrix[0].length
  for (let i = 0 ; i < m; i++ ) {
    for (let j = 0; j < n; j++) {
      if (map.get(i-j) === undefined) {
        map.set(i-j, matrix[i][j])
      } else {
        if (map.get(i-j)!== matrix[i][j])
          return false
      }
    }
  }
  return true
};

// 直接判断 i - 1，j - 1与  i，j位置的数据是否一样
// 时间复杂度O(m*n) 空间复杂度O(n)
var isToeplitzMatrix = function(matrix) {
  let m = matrix.length; n = matrix[0].length
  for (let i = 0 ; i < m - 1; i++ ) {
    for (let j = 0; j < n - 1; j++) {
      if(matrix[i][j] !== matrix[i+1][j+1])
        return false
    }
  }
  return true
};
console.log(isToeplitzMatrix([[0,33,98],[34,22,33]]))


