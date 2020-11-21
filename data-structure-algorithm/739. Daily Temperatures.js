/**
 * 
 Given a list of daily temperatures T, return a list such that, for each day in the input, 
 tells you how many days you would have to wait until a warmer temperature. 
 If there is no future day for which this is possible, put 0 instead.

  For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

  Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 * 
 * 
 */


 /**
 * @param {number[]} T
 * @return {number[]}
 */
// 暴力法
// 时间复杂度O(n^2)
var dailyTemperatures = function(T) {
  let ret = new Array(T.length)
  ret.fill(0)
  for(let i = 0; i < T.length; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        ret[i] = j - i
        break
      }
    }
  }
  return ret
};

var dailyTemperatures = function(T) {
  let ret = new Array(T.length).fill(0)
  let stack = []
  let len = T.length;
  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && T[stack[0]] < T[i]) {
      ret[stack[0]] = (i - stack[0])
      stack.shift()
    }
    stack.unshift(i)
  }
  return ret
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), 'kkkkk')