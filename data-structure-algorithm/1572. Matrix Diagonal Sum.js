/**
 * 
  
  Given a square matrix mat, return the sum of the matrix diagonals.

  Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

  

  Example 1:


  Input: mat = [[1,2,3],
                [4,5,6],
                [7,8,9]]
  Output: 25
  Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
  Notice that element mat[1][1] = 5 is counted only once.
  Example 2:

  Input: mat = [[1,1,1,1],
                [1,1,1,1],
                [1,1,1,1],
                [1,1,1,1]]
  Output: 8
  Example 3:

  Input: mat = [[5]]
  Output: 5
  

  Constraints:

  n == mat.length == mat[i].length
  1 <= n <= 100
  1 <= mat[i][j] <= 100

 * 
 */

// 对角线上的数字的和
// 时间复杂度O(n^2) 空间复杂度O(1)
var diagonalSum = function(mat) {
  let k = 0;
  let total = 0
  let len = mat[0].length - 1
  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
          if (i === j || (i + j) === len ) {
              total += mat[i][j]
          }
      }
  }
  return total
};

// 时间复杂度O(n)
// 对上面的一个优化，[i][j] 实际上可以通过一个计算关系去转换,第二个循环可以去掉
var diagonalSum = function(mat) {
  let total = 0
  let len = mat.length
  let mid = Math.floor(len / 2)
  for (let i = 0; i < len; i++) {
    // 索引相等的，以及加起来为(len-1的)
    // 但是如果len为奇数的话，最中间的数字被添加了两次
    total += mat[i][len - i - 1] + mat[i][i]
  }
  // 如果为奇数的话，最中间的数字会被添加两次，所以执行下面的操作
  // len & 1 如果是奇数，结果为1，如果是偶数，结果为0
  return total - mat[mid][mid] * (len & 1)
}