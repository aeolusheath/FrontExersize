/**
 * 
 * 
 
 Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), 
 return the indexes of the k weakest rows in the matrix ordered         from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, 
or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, 
that is, always ones may appear first and then zeros.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 1 
row 1 -> 4 
row 2 -> 1 
row 3 -> 1 
Rows ordered from the weakest to the strongest are [0,2,3,1]
 

Constraints:

m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.

 * 
 * 
 */


 /**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// 一次 m*n的遍历
// bad
var kWeakestRows = (mat, k) =>  {
  // 找到每一行的solder数量
  let m = mat.length, n = mat[0].length
  let r = new Array(mat.length).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        r[i]++
      }
    }
  }
  // 然后对 数组的索引进行排序
  let res = r.map((item, index) => ({num: item, idx: index})).sort(( a, b) => a.num - b.num).map(i => i.idx)
  return res.slice(0, k)
};


// 二分法的使用场景： 1，已经排序的  2， 连续的两块数据
// 通过二分法来找到士兵的总数
// 用数组来存储排序，而不是上面的对象来排序
var kWeakestRows = (mat, k) => {
  // 找到每一行的solder数量
  let m = mat.length, n = mat[0].length
  let r = new Array(mat.length).fill(0)
  for (let i = 0; i < m; i++) {
    r[i] = [binarySearchSum(mat[i]), i]
  }
  // 这里的排序很巧妙，如果总数相等就根据index来排，如果不等就根据总数来排
  r.sort((a, b) => a[0] === b[0] ? (a[1] - b[1]) : (a[0] - b[0]))
  let ret = []
  for (let j = 0; j < k; j++) {
    ret.push(r[j][1])
  }
  return ret
}

var binarySearchSum = (arr) => {
  let l = 0, r = arr.length;
  while(l <= r) {
    let m = Math.floor (( l + r ) / 2) // 越界风险
    if (arr[m]) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  // l就是1的总数
  // l - 1 就是 1的索引
  return l
}

// console.log(binarySearchSum([1,1,0,0,0]))
// console.log(binarySearchSum([1,1,1,1,0]))
// console.log(binarySearchSum([1,0,0,0,0]))
// console.log(binarySearchSum([1,1,1,0,0]))
// console.log(binarySearchSum([0,0,0,0,0]))
// console.log(binarySearchSum([1,1,1,1,1]))





console.log(kWeakestRows(
[
  [1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]], 3))