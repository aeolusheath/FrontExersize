/**
 * 
 * 
 * 给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。

另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

你需要将每对 [ri, ci] 指定的第ri行和第ci列上的所有单元格的值加 1。

请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。

输入：n = 2, m = 3, indices = [[0,1],[1,1]]
输出：6
解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
第一次增量操作后得到 [[1,2,1],[0,1,0]]。
最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。

输入：n = 2, m = 2, indices = [[1,1],[0,0]]
输出：0
解释：最后的矩阵是 [[2,2],[2,2]]，里面没有奇数。

 *
 /**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// 时间复杂度O(L + M * N)
var oddCells = function(n, m, indices) {
  let res = 0
  let rows = new Array(n); 
  let cols = new Array(m);
  rows.fill(0)
  cols.fill(0)

  // 记录行和列增加的次数
  for (let index of indices) {
    rows[index[0]]++
    cols[index[1]]++
  }
  
  // 遍历矩阵
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 行与列都增加过，总数为和
      // 如果是偶数 +=0， 如果是奇数 += 1

      // 这里行如果是奇数 列为偶数 那么为奇数
      //    行如果是偶数 列为奇数 那么为奇数
      //    如果都是偶数 或者 奇数 两者相加 那么为偶数
      

      // 所以只有这里 row[i]与cols[j]一个为奇数一个为偶数，那么条件成立 
      // 按照下面的去优化
      res += (rows[i] + cols[j]) & 1
    }
  }
  return res
}

// 优化的方法
// 看上面的解析
// 1，第i行重复了基数次，第j列重复了偶数次
// 2，第i行重复了偶数次，第j列重复了奇数次
var oddCells = function(n, m, indices) {
  let res = 0
  let rows = new Array(n); 
  let cols = new Array(m);
  rows.fill(0)
  cols.fill(0)

  // 记录行和列增加的次数
  for (let index of indices) {
    rows[index[0]]++
    cols[index[1]]++
  }
  
  let oddRows = rows.reduce((total, current) => {
    let ret = current & 1
    return total + ret
  }, 0)

  let oddCols = cols.reduce((total, current) => {
    let ret = current & 1
    return total + ret
  }, 0)
  
  // 偶数* 偶数为偶数  奇数 * j
  // n为行， m为列
  // 奇数行为 oddRows 偶数行为 (n - oddRows)
  // 奇数列为 oddCols 偶数列为 (m - oddCols)
  
  // 所以最后总数为

  return oddRows * ( m - oddCols ) + oddColsO * (n - oddRows)
}