/**
 * 
 * 
  
    Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

    Return the number of negative numbers in grid.

    

    Example 1:

      Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
      Output: 8
      Explanation: There are 8 negatives number in the matrix.
      Example 2:

      Input: grid = [[3,2],[1,0]]
      Output: 0
      Example 3:

      Input: grid = [[1,-1],[-1,-1]]
      Output: 3
      Example 4:

      Input: grid = [[-1]]
      Output: 1
    

    Constraints:

      m == grid.length
      n == grid[i].length
      1 <= m, n <= 100
      -100 <= grid[i][j] <= 100

 * 
 * 
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
//  1, 暴力法，时间复杂度O(m * n)
var countNegatives = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let total = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        total += grid[i][j] < 0 ? 1 : 0
      }
    }
    return total
};

// 因为是有序的，有序的序列基本都能用到二分查找？
// 二分法
var countNegatives = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let res = 0, lastNeg = cols - 1;

  for (let row = 0; row < rows; row++) {
      if (grid[row][0] < 0) {
        res +=cols;
        continue;
      }
      if (grid[row][cols - 1] > 0) {
        continue
      }

      // 二分法找到第一个小于0的数字，因为已经是降序排列了
      let l = 0, r = lastNeg
      while (l <= r) {
        let m = Math.floor((r + l) / 2)
        if (grid[row][m] < 0) {
          r = m - 1
        } else {
          l = m + 1
        }
      }
      // 现在 l 指向的是第一个负数元素
      //  0  1  2
      // [4, 2, -1, -2]
      //  那么负数的总数是 length - 2
      res += (cols - l )
  }
  return res
}

console.log(countNegatives([[3,2],[1,0]]))