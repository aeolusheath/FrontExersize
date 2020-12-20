/**
 * 
 *
 * 
 *  
 * Given a 2D integer matrix M representing the gray scale of an image, 
 * you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. 
 * If a cell has less than 8 surrounding cells, then use as many as you can.

    Example 1:
    Input:
    [[1,1,1],
    [1,0,1],
    [1,1,1]]
    Output:
    [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]
    Explanation:
    For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
    For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
    For the point (1,1): floor(8/9) = floor(0.88888889) = 0
    Note:
    The value in the given matrix is in the range of [0, 255].
    The length and width of the given matrix are in the range of [1, 150].
 * 
 *  
 * 
 * 
 * 
 */


 /**
 * @param {number[][]} M
 * @return {number[][]}
 */
// 暴力法 求出四周的和 以及 平均值
// 四周的值，关键点为将 四周的值，通过坐标变换得到，然后这个变换存储在一个数组里面。 
// 之前也遇到过类似的，上下左右的坐标通过 moves数组去获取到
var imageSmoother = function(M) {
  let m = M.length;
  let n = M[0].length;
  let moves = [
    // 上 下 左 右
    [0, 1], 
    [0, -1],  
    [-1, 0],
    [1, 0],
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ]
  let ret = []
  let q = 0
  while (q < m) { 
    q++;
    ret.push([])
  }

  // 暴力法
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum = M[i][j]
      let total = 1
  
      for (let k = 0 ; k < moves.length; k++) {
        let newI = i + moves[k][0]
        let newJ = j + moves[k][1]
        if (newI >=0  && newI < m && newJ >=0 && newJ <n) {
          sum += M[newI][newJ]

          if (i == 0 && j== 1) {
            console.log(`[${newI}][${newJ}]`, M[newI][newJ], '01')
          }
          total++
        }
      }
      if (i == 0 && j== 1) {
        // console.log(`[${newI}][${newJ}]`, '01')
      console.log(`[${i}][${j}]`, sum, total)
      }
      ret[i][j] = Math.floor(sum/total) // 这里赋值导致后续错误
    }
  }
  console.log(ret)
};

imageSmoother(   
  [[1,1,1],
  [1,0,1],
  [1,1,1]])