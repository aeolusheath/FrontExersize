/**
 * 
    Given an integer array nums, return the most frequent even element.

    If there is a tie, return the smallest one. If there is no such element, return -1.

    

    Example 1:

    Input: nums = [0,1,2,2,4,4,1]
    Output: 2
    Explanation:
    The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
    We return the smallest one, which is 2.
    Example 2:

    Input: nums = [4,4,4,9,2,4]
    Output: 4
    Explanation: 4 is the even element appears the most.
    Example 3:

    Input: nums = [29,47,21,41,13,37,25,7]
    Output: -1
    Explanation: There is no even element.
    

    Constraints:

    1 <= nums.length <= 2000
    0 <= nums[i] <= 105

 * 
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
   if (nums.length === 1) return ((nums[0] & 1) === 0 ? nums[0] : -1)
   // 找到第一个偶数
   var i = null
   var index = null
   // 这一步可以去掉
   for (let k = 0 ; k < nums.length; k++) {
      if ((nums[k] & 1) === 0) {
         i = nums[k]
         index = k
         break
      }
   }
   if (i === null) return - 1
   var map = {}
   var num = i
   map[num] = 1
   let count = 1
   for (let j = index + 1; j < nums.length; j++) {
         var n = nums[j]
         if ((n & 1) === 0) {
            map[n] = ((!map[n]) ? 1 : map[n] + 1)
            if (n === num) {
               count++
            } else {
               if (map[n] > count || ((map[n] === count && n < num))) {
                  count = map[n]
                  num = n
               }
            }
         }

   }
   return num
};

// console.log(mostFrequentEven([0,1,2,2,4,4,1]))
console.log(mostFrequentEven([2,10000,10000,10000,2]))

var mostFrequentEven = function(nums) { 
   var map = {}
   let output
   for (let i = 0; i < nums.length; i++ ) {
      var num = nums[i]
      if ((num & 1) === 0) {
         const newVal = map[num] ? (map[num] + 1) : 1
         map[num] = newVal
         if (output == undefined || newVal> map[output] ) {
            output = num
         }else if (newVal == map[output]) {
            output = Math.min(output, num)
         }

      }
   }
   return output === undefined ? -1 : output;
}