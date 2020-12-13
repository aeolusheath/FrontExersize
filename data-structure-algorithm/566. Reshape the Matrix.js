/**
 * 
 
 

 In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
Example 2:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.
 *
 * 
 * 
 */

 /**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 方法一，用一个一位数组，存储所有的值，然后重新组织这个matrix
// 时间复杂度O(m * n)
var matrixReshape = function(nums, r, c) {
    let m = nums.length;
    let n = nums[0].length
    if (m  * n != r * c) {
      return nums
    }
    let flatArr = []
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        flatArr.push(nums[i][j])
      }
    }
    let ret= []
    // 然后重新组织这个matrix
    for (let p = 0; p < r; p++) {
      ret[p] = []
      for (let q = 0; q < c; q++) {
        ret[p].push(flatArr.pop())
      }
    }
    return ret
};

// 有更简单的办法，可以直接通过 m ，n，r，c 找到新的值与旧的值之间的关系
var matrixReshape = function(nums, r, c) {
  let m = nums.length; // oldRow
  let n = nums[0].length; //oldCol
  if (r * c !== m * n) return nums
  let ret = []
  // init arr
  for (let i = 0; i < r; i++) {
    ret[i] = []
  }

  
  // key code
  // c 为多少列，每一行的总个数
  for (let i = 0; i < r * c; i++) {
    // new row
    let newRow = Math.floor(i/c)
    let newCol = i % c 

    let oldRow = Math.floor(i/n)
    let oldCol = i % n
    ret[newRow][newCol] = nums[oldRow][oldCol]
  }
}

/**
 * 
 * 比如 3 * 4 要转变为 2 * 6
 * 
 * 老的行 [i/4] 老的列 [i%4]
 * 新的行 [i/6] 新的列 [i%6]
 * 
 */