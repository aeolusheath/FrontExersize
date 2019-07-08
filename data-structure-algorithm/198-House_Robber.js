/**
  You are a professional robber planning to rob houses along a street.
  Each house has a certain amount of money stashed,
  the only constraint stopping you from robbing each of them is that
    adjacent houses have security system connected
    and it will automatically contact the police
    if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers representing the amount of money of each house,
  determine the maximum amount of money you can rob tonight without alerting the police.

  Example 1:

  Input: [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
              Total amount you can rob = 1 + 3 = 4.
  Example 2:

  Input: [2,7,9,3,1]
  Output: 12
  Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
              Total amount you can rob = 2 + 9 + 1 = 12.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 找到 奇数项 和 偶数项 的总和
// 错了 ------>>>  不相邻不只是不相邻1个，可能不相邻2, 3个，甚至4个
/**
 *
 * [2, 1, 1, 2]
 * [3, 4, 7, 6, 1]
 * 递归的通常能用动态规划去替换
 * n 可能是 最后一个，也可能是倒数第一个
 * d[n] = d[n-2] + a[n]
 *
 *
 */
// 大错特错，，因为中间可能不止是隔了一个
var rob = function(nums) {
  var sum1 = 0
  var sum2 = 0
  for (let i = 0, j = 1; i < nums.length || j <nums.length; j += 2, i += 2) {
    sum1 = sum1 + (nums[i] || 0)
    sum2 = sum2 + (nums[j] || 0)
  }
  return Math.max(sum1, sum2)
};

// 换一种思路，比如最大值为 dp[i] 那么 有两种情况, dp[i]为以i为结尾的总和。
// 这时候有两种情况，要么nums[i] + d[i-2] 最大 要么 d[i-1]最大。。
// dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])  和爬梯子一样 从后面往前面推
// https://www.cnblogs.com/grandyang/p/4383632.html

// 这个和爬梯子类似 比如假定n的总数是dp[n]， 如果最后一步是1步，那么前面的是dp[n-1] ，如果最后一步是2步，那么前面的是dp[n-2]
// 所以dp[n] = dp[n-1] + dp[n-2] 递归、fibonacci数列
// 参考
var rob = function (nums) {
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) return Math.max(nums[0], nums[1])
  dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])
  for (let i = 2; i < nums.length; i++) {
     dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
  }
  return dp[nums.length - 1]
}



