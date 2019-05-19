/***
 *
 *
 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

  如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

  注意你不能在买入股票前卖出股票。

  示例 1:

  输入: [7,1,5,3,6,4]
  输出: 5
  解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
  示例 2:

  输入: [7,6,4,3,1]
  输出: 0
  解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 *
 */

// one

// var maxProfit = function(prices) {
//     let max = 0
//     const length = prices.length
//     for (let i = 0 ; i < length; i++) {
//         const current = prices[i]
//         for (let j = i + 1; j < length; j++) {
//             max = Math.max(prices[j] - current, max)
//         }
//     }
//     return max
// };


// two
// 最大利润 = 最大减去最小
// 最小值 用一个变量存储，遇到比其更小的，则存储下来
// 最大值 一定在后面？【遍历即可】

var maxProfit = function (prices) {
  var minPrice = Number.MAX_SAFE_INTEGER
  var profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    if (profit < (prices[i] - minPrice)) {
      profit = prices[i] - minPrice
    }
  }
  return profit
}

// three

// var maxProfit = function(prices) {
//     if(!prices || [0, 1].includes(prices.length))
//         return 0
//     let minPrice = prices[0] //买入的价钱永远在前面
//     let profit = 0
//     for (let i = 1 ; i < prices.length; i++) {
//         minPrice = Math.min(minPrice, prices[i])
//         profit = Math.max(profit,  prices[i] - minPrice)
//     }
//     return profit
// };

// second time
var maxProfit = function (prices) {
  var min = prices[0]
  var profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
      // profit = Math.max(profit, prices[i] - min)
    }
    // else {
      profit = Math.max(profit, prices[i] - min)
    // }
  }
  return profit
}
