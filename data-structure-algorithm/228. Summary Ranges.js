/**
 * 
  
  You are given a sorted unique integer array nums.

  Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
  
  That is, each element of nums is covered by exactly one of the ranges, 
  
  and there is no integer x such that x is in one of the ranges but not in nums.

  Each range [a,b] in the list should be output as:

  "a->b" if a != b
  "a" if a == b
  

  Example 1:

  Input: nums = [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
  Explanation: The ranges are:
  [0,2] --> "0->2"
  [4,5] --> "4->5"
  [7,7] --> "7"
  Example 2:

  Input: nums = [0,2,3,4,6,8,9]
  Output: ["0","2->4","6","8->9"]
  Explanation: The ranges are:
  [0,0] --> "0"
  [2,4] --> "2->4"
  [6,6] --> "6"
  [8,9] --> "8->9"
  Example 3:

  Input: nums = []
  Output: []
  Example 4:

  Input: nums = [-1]
  Output: ["-1"]
  Example 5:

  Input: nums = [0]
  Output: ["0"]
  

  Constraints:

  0 <= nums.length <= 20
  -2^31 <= nums[i] <= 2^31 - 1
  All the values of nums are unique.
  nums is sorted in ascending order.

 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {string[]}
 */
// 时间复杂度O（n），但是一点也不优雅
var summaryRanges = function(nums) {
 if (nums.length === 1) {
   return [ nums[0] + '' ]
 }
 let ret = []
 let start = nums[0]
 let end = nums[0]

 for (let i = 1; i <nums.length; i++) {
    if (nums[i] == nums[i-1] + 1) {
      // 这里应该跳过？
      end = nums[i]
    } else {
      ret.push(start != end ? `${start}->${end}` : `${start}`)
      start = nums[i]
      end = nums[i]
    }
    if (i == nums.length - 1) {
      ret.push(start != end ? `${start}->${end}` : `${start}`)
    }
  }
  return ret
}


console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])
console.log(summaryRanges([0,1,2,4,5,7]), ["0->2","4->5","7"])

console.log(summaryRanges([]), [])

console.log(summaryRanges([-1]), ["-1"])
console.log(summaryRanges([0]), ["0"])
console.log(summaryRanges([0,1,2,4,5,7]), ["0->2","4->5","7"])

