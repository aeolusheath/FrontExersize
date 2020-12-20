/**
 * 
 * 
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


  In Pascal's triangle, each number is the sum of the two numbers directly above it.


  Example:

  Input: 5
  Output:
  [
       [1], 
      [1,1],
     [1,2,1],
    [1,3,3,1],
   [1,4,6,4,1]
  ]

 * 
 */


 /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 一共 numRows 行 每一行就是索引+1的个数
  let  ret = []
  for (let i = 1; i <= numRows; i++) {
    let len = i
    let itemArr = []
    for (let j =0; j < len; j++) {
      if (j ==0 || j ==len - 1) {
        itemArr[j] = 1
      } else {
        itemArr[j] = ret[i -1 -1][j] + ret[i -1 -1][j - 1]
      }
    }
    ret.push(itemArr)
  }
  return ret
};

console.log(generate(5))