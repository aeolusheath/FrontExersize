/***
 * 
 * 
 
  Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if (nums.length == 1) return nums[0]
  if (nums.length == 2) {
    return nums[0] < nums[1] ? nums[1] : nums[0]
  }
  let m1 = Number.NEGATIVE_INFINITY
  let m2 = Number.NEGATIVE_INFINITY
  let m3 = Number.NEGATIVE_INFINITY

  for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] > m1) {
      m3 = m2
      m2 = m1
      m1 = nums[i]
      // 下面else if 这两个 != 是为了严格不等于
    } else if (nums[i] > m2 ) {
        if (nums[i] != m1) { //  这个if不能放在 else if 里面
          m3 = m2
          m2 = nums[i]
        }
    } else if (nums[i] > m3 ) {
      if (nums[i] != m2) {
        m3 = nums[i]
      }
    }
  }
  if (m3 == Number.NEGATIVE_INFINITY ) {
   return  m1
  }
  return m3
};
// console.log(thirdMax([2, 2, 3, 1]))
// console.log(thirdMax([1,2,3]))
// console.log(thirdMax([1,1,2]))
console.log(thirdMax([1,2,2,5,3,5]))


