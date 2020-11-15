/**
 * 
 * 
  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

  Return the array in the form [x1,y1,x2,y2,...,xn,yn].

  

  Example 1:

  Input: nums = [2,5,1,3,4,7], n = 3
  Output: [2,3,5,4,1,7] 
  Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
  Example 2:

  Input: nums = [1,2,3,4,4,3,2,1], n = 4
  Output: [1,4,2,3,3,2,4,1]
  Example 3:

  Input: nums = [1,1,2,2], n = 2
  Output: [1,2,1,2]
  0, 1, 2, 3
 * 
 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle_1 = function(nums, n) {
    // 时间复杂度O(n) 空间复杂度O(n)
    if (!nums || nums.length === 0) return nums
    let arr = new Array(nums.length)
    let i = 0, j = n
    let k = 0
    while ( k < nums.length) {
      // //方法一，复杂了
      arr[k++] = nums[i++]
      arr[k++] = nums[j++]
      // 方法二，直接往数组里面push,可以不需要关注索引,因为k已经限制了索引的范围 【错误】
      // 错误一，k的索引没变化
      // 错误二，k的索引应该加2，因为每一次push了两次
      // 错误三，因为是每一次都push，所以初始化数组的时候，应该长度为0
      // arr.push(i++)
      // arr.push(j++)
    }
    return arr
};



var shuffle_2= function(nums, n) {
  // 时间复杂度O(n) 空间复杂度O(n)
  if (!nums || nums.length === 0) return nums
  let arr = new Array() // 用push方式的话，这里初始化的时候就要用空数组了
  let arr = []
  let i = 0, j = n
  let k = 0
  while ( k < nums.length) {
    // //方法一，复杂了
    // arr[k++] = nums[i++]
    // arr[k++] = nums[j++]
    // 方法二，直接往数组里面push,可以不需要关注索引,因为k已经限制了索引的范围 【错误】
    // 错误一，k的索引没变化
    // 错误二，k的索引应该加2，因为每一次push了两次

    // 实际上 j = (i + n); 所以这里可以优化一下
    arr.push(nums[i++])
    arr.push(nums[j++])
    k+=2
  }
  return arr
};


// best solution
// 时间复杂度O(n) 空间复杂度O(n)
var shuffle_3 = function(nums, n) {
  if (!nums || nums.length === 0) return nums
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(nums[i])
    arr.push(nums[i + n])
  }
  return arr
}

shuffle_3([1,1,2,2], 2)