/**
 *
 *Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Example:

  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  Follow up:

  If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 *
 *
 */

// 53-最大子序列和
// 思路:
// 扫描法
// n如果 前 n - 1的和 sum(n - 1) + nums[n] <= nums[n]
// 那么直接从nums[n]开始加，因为前面的总和肯定是个负数或者0
var maxSubArray = function (nums) {
  var sum = 0
  var max = 0
  for (let i = 0; i < nums.length; i++) {
    // 可以用下面的替代
    // if (sum + nums[i] < nums[i]) {
    //   sum = nums[i]
    // } else
    // {
    //   sum = sum + nums[i]
    // }
    sum = Math.max(sum + nums[i], nums[i])
    max = Math.max(max, sum)
  }
  return max
}

// 动态规划
// ref --- https://www.cnblogs.com/coderJiebao/p/Algorithmofnotes27.html
/**
　　下面介绍动态规划的做法，复杂度为 O(n)。
　　步骤 1：令状态 dp[i] 表示以 A[i] 作为末尾的连续序列的最大和（这里是说 A[i] 必须作为连续序列的末尾）。
　　步骤 2：做如下考虑：因为 dp[i] 要求是必须以 A[i] 结尾的连续序列，那么只有两种情况：

    这个最大和的连续序列只有一个元素，即以 A[i] 开始，以 A[i] 结尾。
    这个最大和的连续序列有多个元素，即从前面某处 A[p] 开始 (p<i)，一直到 A[i] 结尾。

      对第一种情况，最大和就是 A[i] 本身。
      对第二种情况，最大和是 dp[i-1]+A[i]。

    于是得到状态转移方程：
    　dp[i] = max{A[i], dp[i-1]+A[i]}
*/
var maxSubArray = function (nums) {
  var dp = []
  var A = []
  for (let i = 0; i < nums.length; i++) {
    A[i] = nums[i]
  }
  d[0] = A[0]
  max = d[0]
  for (let i = 1; i < nums.length; i++) {
    d[i] = Math.max(dp[i - 1] + A[i], A[i])
    max = Math.max(max, d[i])
  }
  return max
}