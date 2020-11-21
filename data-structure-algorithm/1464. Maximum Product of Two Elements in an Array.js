/**
 * 
    
 
    Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

    Example 1:

    Input: nums = [3,4,5,2]
    Output: 12 
    Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
    Example 2:

    Input: nums = [1,5,4,5]
    Output: 16
    Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
    Example 3:

    Input: nums = [3,7]
    Output: 12
    

    Constraints:

    2 <= nums.length <= 500
    1 <= nums[i] <= 10^3


 * 
 */

// 时间复杂度O(n*log(n)) 空间复杂度O(1)
var maxProduct = function(rawNums) {
  let nums = rawNums.sort((a, b)=> a-b)
  let num1 = (nums[0] - 1) * (nums[1] - 1)
  let num2 = (nums[nums.length - 1] - 1) * ( nums[nums.length - 2] - 1)
  return num1 >= num2 ? num1 : num2
};

// 因为全都是正数，所以我们只需要找最大的两个数就可以了，不用考虑负数的情况
// 最妙的是 一次循环就可以找到最大的两个数

// 时间复杂度O(n)  空间复杂度O(1)
var maxProduct = function(nums) {
  // 用 m 和 n 存储最大的两个数字
  let m = Number.MIN_VALUE // 最大的数字
  let n = m                // 第二大的数字
  for (let num of nums) {
    if (num >= m) {
      n = m // 先将最大值 m 赋值给 n
      m = num   // 然后将比m 还大的 新的最大值赋给m
    } else if (num > n) {
      n = num
    }
  }
  return (m - 1) * (n - 1)
}

console.log(maxProduct([3,4,5,2]))




// 这里实际上提供了一个思路，求一个数组的最大值，最大的两个值，最大的三个值【最小同理】
// 一次遍历就能找到，不用排序就可以时间复杂度O(n)
// 下面的数组，通过一次遍历找到最大的三个数，模拟上面的
var findThirdMaxValues = (arr) => {
  // m 是最大，n 为第二大， o 为第三大
  let m = Number.MIN_VALUE,
  n = m,
  o = n;
  for (let num of arr) {
    if (num >= m) {
      o = n
      n = m
      m = num
    } else if (num >= n) {
      o = n
      n = num
    } else if (num >= o)
      o = num
  }

 console.log('最大的三个值为', m, n, o)
}

findThirdMaxValues([3,4,5,5,2])

// leetcode 第628题，这个题目就用到了这一点，O（n）的时间复杂度，可以求出前n个最大的，和最小的数字
// 628这个题的key point是找到最大的三个数字 和最小的两个数字，可以用线性扫描，O（n）找到