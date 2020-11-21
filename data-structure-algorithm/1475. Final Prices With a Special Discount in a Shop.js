/**
 * 
 * 
 

  Given the array prices where prices[i] is the price of the ith item in a shop. 
  
  There is a special discount for items in the shop, 
  if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], 
  otherwise, you will not receive any discount at all.

  Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

 
  Example 1:

  Input: prices = [8,4,6,2,3]
  Output: [4,2,4,2,3]
  Explanation: 
  For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
  For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
  For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
  For items 3 and 4 you will not receive any discount at all.
  Example 2:

  Input: prices = [1,2,3,4,5]
  Output: [1,2,3,4,5]
  Explanation: In this case, for all items, you will not receive any discount at all.
  Example 3:

  Input: prices = [10,1,1,6]
  Output: [9,0,1,6]
  

  Constraints:

  1 <= prices.length <= 500
  1 <= prices[i] <= 10^3


 * 
 * 
 * 
 * 
 */

 // 最简单的暴力方法
 // 时间复杂度为O(n^2) 空间复杂度O(n)
var finalPrices = function(prices) {
    let res = []
    let len = prices.length;
    for (let i = 0; i < len; i++) {
      let hasDiscount = false
      for (let j = i+1; j < len; j++) {
        if (prices[j] <= prices[i]) {
          hasDiscount = true
          res.push(prices[i] - prices[j])
          break
        }
      }
      if (!hasDiscount) {
        res.push(prices[i])
      }
    }
    return res
};

// 单调栈
var finalPrices2 = function(prices) {
  let stack = []
  for (let i = 0; i < prices.length; i++) {
    while(stack.length !== 0 && prices[stack[0]] >= prices[i]) {
      // shift 出栈
      prices[stack.shift()] -= prices[i]
    }
    // 入栈
    // 每一次将索引入栈，如果遇到了比这个索引的对应1的值小的就出栈
    stack.unshift(i)
  }
  return prices
}

// console.log(finalPrices2([8,4,6,2,3]), 'kevin')
console.log(finalPrices2([8, 7, 6, 5, 4, 3, 2, 1]), 'kevin')
console.log(finalPrices2([1, 2, 3, 4, 5, 6, 7, 8]), 'kevin')


// console.log(finalPrices2([8,7,4,2,8,1,7,7,10,1]), 'kevin')
