/**
 * 
 

Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

 

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100

                                       4-1+0 4-1+1 4-1+2
[1,2,3,4]  0, 1, 2, 3 移动一步 除 4的余数 0，1，2，3
[4,1,2,3]                              +(n - 1)
[3,4,1,2]                              3, 4(0), 5(1), 6(2)
[2,3,4,1]                              2, 3,    0,    1
 *                                     
 * 
 * 
 */


 /**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

 // 方法一
 // 时间复杂度O(m*n) 空间复杂度O(m*n)
 // 1，将matrix磨平，生成一个长度m*n的数组，然后将这个数组
 // 2，往后移动k个数字
 // 3，将这个数组还原为一个matrix

var shiftGrid = function(grid, k) {
  let m = grid.length
  let n = grid[0].length
  var arr = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j])
    }
  }
  
  let newArr = moveK(arr, k)

  // 然后将矩阵还原
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = newArr.shift()
    }
  }
  return grid
};


// 将数组arr 往后面移动k个位置 
// 移动K个位置
function moveK(arr, k) {
 let len = arr.length
 k = k % len
 let newArr = []
 for (let i = 0; i < len; i++) {
   newArr.push( arr[ (i + (len - k)) % len  ] )
 }
 return newArr
}

// 移动K个位置 2
function moveK(arr, k) {
  let len = arr.length
  k = k % len
  let newArr = []
  for (let i = 0; i < len; i++) {
    newArr.push( arr[ (i + (len - k)) % len  ] )
  }
  return newArr
 }


// 方法二
// 同上，但是用了js自带的方法，很cool
var shiftGrid = function(grid, k) {
  let arr = grid.flat() // 直接抹平
  // 1， 向后移动， 因为js里面数组可以动态扩展 所以
  while(k-- > 0) {
    // 2，将最后一个数字弹出，然后放在数组的最前端
    arr.unshift(arr.pop())
  }
 // 还原或者生成一个matrix
  // let m = grid.length;
  let n = grid[0].length;
  let ret = [];
  while (grid.length) {
    ret.push(grid.splice(0, n))
  }
  return ret
}