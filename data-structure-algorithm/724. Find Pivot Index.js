/**
 * 
 * 
 Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
 

Constraints:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].

 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length <=2) return -1
  let leftArr = [0]
  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i-1] + nums[i-1]
  }
    
  let rightArr = []
  rightArr[nums.length - 1] = 0 
  for (let j = nums.length - 2; j >= 0; j--) {
      // rightArr[j] = (j === nums.length - 2 ? nums[j + 1] :rightArr[j + 1] ) + nums[j]
      // if (j=== nums.length - 2) {
      //   console.log(j, rightArr[j])
      // }
      rightArr[j] = rightArr[j + 1] + nums[j+1]
  }
    
  console.log(leftArr)
  console.log(rightArr) 

  for (k = 0; k < nums.length ; k++) {
  
    if (leftArr[k] === rightArr[k]) {
      return k
    }
  }
  return -1
};

/**
 * 
 * [1,7,3,6,5,6]
 * [0,1,8,11,16,22]
 * 
 * [27,20,17,11,6,0]
 * 
 */


console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([-1,-1,-1,0,1,1]))