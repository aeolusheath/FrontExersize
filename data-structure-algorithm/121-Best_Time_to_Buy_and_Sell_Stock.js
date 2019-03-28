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