/**
 *
 *
 * You are given two arrays (without duplicates) nums1 and nums2
 * where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.


  The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
  If it does not exist, output -1 for this number.

  Example 1:
  Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
  Output: [-1,3,-1]
  Explanation:
      For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
      For number 1 in the first array, the next greater number for it in the second array is 3.
      For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var map = new Map()
    // var map = {}
    var stack = []
    for (let i = 0; i < nums2.length; i++) {
        while(stack.length!==0 && stack[stack.length-1] < nums2[i]) {
            // map[stack[stack.length-1]] = nums2[i]
            // stack.pop()
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }

    for (let j = 0; j < nums1.length; j++) {
        nums1[j] = map.get(nums1[j]) || -1
    }
    return nums1

};