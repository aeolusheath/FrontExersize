/**
 * 
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

    Find all the elements of [1, n] inclusive that do not appear in this array.

    Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

    Example:

    Input:
    [4,3,2,7,8,2,3,1]

    Output:
    [5,6]
 * 
 */

var findDisappearedNumbers = function(nums) {
    console.log(nums)
    //[4,3,2,7,8,2,3,1]
    //[3,2,1,6,7,1,2,0]
    for (let i = 0, j = nums.length; i < j; i++) {
        let k = Math.abs(nums[i]) - 1
        console.log(nums[i], k)
        if (nums[k] > 0) {
          nums[k] = -nums[k]
        }
    }
    // return nums.filter(item=>item != -1)
    console.log(nums)
    let ret = []
    for (let k = 0, p = nums.length; k < p; k++ ) {
      if (nums[k] > 0) {
        ret.push(k + 1)
      }
    }
    console.log(ret)
    return ret
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]) 


var findDisappearedNumbers2 = function(nums) {
  var x = new Array(nums.length)
  x.fill(false)
  for (let i = 0, j = nums.length; i < j; i++) {
      
      x[nums[i] - 1] = true
  }
  // return nums.filter(item=>item != -1)
  let ret = []
  for (let k = 0, p = nums.length; k < p; k++ ) {
    if (x[k] == false) {
      ret.push(k+1)
    }
  }
  return ret
};