/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.

  Example 1:
  Input: [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s.
      The maximum number of consecutive 1s is 3.
 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一
var findMaxConsecutiveOnes = function(nums) {
  let consecutiveOneArr = nums.join('').split('0')
  return consecutiveOneArr.reduce((max, item) => {
    if (max >= item.length) {
      return max 
    } 
    return item.length
  }, 0)
};


// 方法二 用正则将每一段连续的字符转换为数组
var findMaxConsecutiveOnes = function(nums) {
  let consecutiveArr = nums.join('').match(/(\w)\1*/g)
  // 和上面的类似
};


findMaxConsecutiveOnes([1])


// [1,1,0,1,1,1] 用栈来解决？,栈其实也就是一个标量
var findMaxConsecutiveOnes = function(nums) {
   let stack = []
   let max = 0
   for (let i = 0, j = nums.length; i < j ; i++) {
     if (nums[i] == 1) {
       stack.push(nums[i])
       max = Math.max(max, stack.length)
     } else {
       stack = []
     }
   }
   return max
};

// 根据上面的来优化
var findMaxConsecutiveOnes = function(nums) {
  let count = 0
  let max = 0
  for (let i = 0, j = nums.length; i < j; i++) {
    if (nums[i] === 1) {
      count++
      max = Math.max(max, count) // 放这里感觉更好，为0的话 没必要比较一次
    } else {
      count = 0
    }
    // max = Math.max(max, count)
  }
  return max
}




//  编程题，找出字符串中连续出现最多的字符和个数
// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}
function getMaxStr(str) {
  let map = {}
  let resultArr = []
  let max = Number.NEGATIVE_INFINITY
  let k = 1
  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i-1]) {
      k++
      // 说明有大于之前存在的最大长度的连续字符串了
      if (k > max) {
        resultArr = [str[i]]
      } 
      if (k == max) {
        resultArr.push(str[i])
      }
      // max = k
      max = Math.max(k, max)

    } else {
      k = 1
    }
  }
  console.log(resultArr, max)
  for (let i = 0; i < resultArr.length; i++) {
    map[resultArr[i]] = max
  }
  return map
}