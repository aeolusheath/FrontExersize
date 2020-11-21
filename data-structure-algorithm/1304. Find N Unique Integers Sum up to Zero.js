/**
 *
 * 
 
 Given an integer n, return any array containing n unique integers such that they add up to 0.

  

  Example 1:

  Input: n = 5
  Output: [-7,-1,1,3,4]
  Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
  Example 2:

  Input: n = 3
  Output: [-1,0,1]
  Example 3:

  Input: n = 1
  Output: [0]
  

  Constraints:

  1 <= n <= 1000

 *  
 * 
 * 
 */

 /**
 * @param {number} n
 * @return {number[]}
 */
// 一个数学题
// 方法一：
// 1，2..... n-1 -(1+2+3+4)
var sumZero = function(n) {
    let res = []
    let sum = 0;
    for (let i = 1; i <= n - 1; i++) {
      res.push(i)
      sum += i
    }
    res.push((0-sum))
    return res
};

// 方法二
/**
 * 
 * -n -(n-1) -(n-2) -(n-3) ... ...(n-3) (n-2) (n-1) n 
 * A[i] = i * 2 - n + 1
 */
var sumZero = function(n) {
  let res  = []
  for (let i = 0; i < n; i++) {
    res[i] = i * 2 - n + 1
  }
  return res
}