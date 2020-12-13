/**
 *
 *  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:

    Input:  [0,1,0,3,12]
    Output: [1,3,12,0,0]
    Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
 *
 *
 */

// 错误版本
// var moveZeroes = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     const cur = nums[i]
//     if (cur === 0) {
//       nums.splice(i, 1)
//       nums.push(0)
//     }
//   }
// };

// 但是用到了
var moveZeroes = function(nums) {
  for (let i = 0, j = 0; i < nums.length, j < nums.length; i++, j++) {
    const cur = nums[i]
    if (cur === 0) {
      nums.splice(i, 1)
      // i = (i - 1) < 0 ? 0 : i - 1 // 死循环，这里不好控制，所以加了一个标量
      // i = i - 1
      j = j + 1 // 加上这个报错。。本想减少操作次数，但i是本来就应该循环这么多次
      nums.push(0)
    }
  }
};

// 方法二
var moveZeroes = function (nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[total] = nums[i]
      total++
    }
  }
  //
  while (total <= nums.length - 1) {
    // 这里犯错了，因为nums数组的长度，已经是正常的了
    // 所以这里不能用push，push的话整体长度就已经变长了
    // nums.push(0)
    nums[total] = 0
    total++
  }
}

// 方法三，错误
// [2, 1]
// [1, 0]
var moveZeros = function (nums) {
  let pos = 0
  // i 肯定不能以0 起手的，以0起手，没法交换？？，自己交换自己
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      var temp = nums[pos]
      nums[pos] = nums[i]
      nums[i] = temp
      pos++
    }
  }
  // console.log(nums)
}

// 错误
// 方法三，再来


var moveZeroes2 = function (nums) {
  for (let i = 0, j = 0; i < nums.length; ++i) {
      if (nums[i]) {
        var temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        j++
      }
  }
  console.log("nums", nums)
}


moveZeroes2([1,0,2])
// 思路
// class Solution {
//     public void moveZeroes(int[] nums) {
//         int pos = nums.length - 1;
//             for (int i = nums.length - 2; i >= 0; i--) {
//                 int tmp = nums[i];
//                 if (tmp == 0) {
//                     nums[i] = nums[pos];
//                     nums[pos] = 0;
//                     pos = pos - 1;
//                 }
//             }
//     }
// }



var moveZeroes = function(nums) {
  let i = 0, j = 0;
  while(i < nums.length) { 
      if(nums[i]!= 0) {
          nums[j++] = nums[i]
      }
      i++
  }
  while(j < nums.length) {
      nums[j++] = 0
  }
  return nums
};