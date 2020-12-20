/**
 * 
 * 
 
  On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
  Once you pay the cost, you can either climb one or two steps. 
  You need to find minimum cost to reach the top of the floor, 
  and you can either start from the step with index 0, or the step with index 1.

  Example 1:
  Input: cost = [10, 15, 20]
  Output: 15
  Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
  Example 2:
  Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  Output: 6
  Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
  Note:
  cost will have a length in the range [2, 1000].
  Every cost[i] will be an integer in the range [0, 999].
 * 
 * 
 * 
 * 
 * 
 * 
 */

 /**
 * @param {number[]} cost
 * @return {number}
 */
// DP 动态规划 
// 方法一：用一个数组存储每一步的最小值
// 每一步花费最小就是 dp[i] = cost[i] + min(dp[i - 1] + dp[i - 2])
var minCostClimbingStairs = function(cost) {
    let len = cost.length
    dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < cost.length; i++) {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
    return Math.min(dp[len - 1], dp[len - 2])
};

// 方法二，实际上不需要用数组去存储每一步所需要的最小值，我们只需要最后的两个值
// 用两个变量来存储
var minCostClimbingStairs = function(cost) {
  
  let len = cost.length
  dp = []
  // dp[0] = cost[0]
  // dp[1] = cost[1]
  let val1 = cost[0]
  let val2 = cost[1]
  for (let i = 2; i < cost.length; i++) {
    let temp = val2
    val2 = cost[i] + Math.min(val2, val1)
    val1 = temp
  }
  return Math.min(val1, val2)
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

console.log(minCostClimbingStairs(
  [0,1,1,0]))
