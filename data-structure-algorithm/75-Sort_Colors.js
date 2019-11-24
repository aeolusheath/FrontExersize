/**
 * 
 * Given an array with n objects colored red, white or blue, 
 * sort them in-place so that objects of the same color are adjacent, with the colors in the order 
 * red, white and blue.

    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

    Note: You are not suppose to use the library's sort function for this problem.

    Example:

    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
    Follow up:

    A rather straight forward solution is a two-pass algorithm using counting sort.
    First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
    Could you come up with a one-pass algorithm using only constant space?
 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一 计数排序 两趟扫描法
var sortColors = function(nums) {
    let map = {
      0: 0,
      1: 0,
      2: 0
    }   
    for (let i = 0, j = nums.length; i < j; i++) {
      map[nums[i]] = map[nums[i]] + 1
    }
    let t = 0
    let colors = Object.keys(map) // 0, 1, 2
    for (let k = 0, p = colors.length; k < p; k++) {
      let color = colors[k]
      while(map[color] > 0) {
        nums[t++] = color
        map[color] = map[color] - 1
      }
    }
    return nums
};

// 方法二 
var sortColors = function(nums) {
  // 对于所有 idx < i : nums[idx < i] = 0
  // j是当前考虑元素的下标
  let p0 = 0, curr = 0;
  
  // 对于所有 idx > k : nums[idx > k] = 2
  let p2 = nums.lenght - 1

  let tmp
  while(curr <= p2) {
    if (nums[curr] = 0) {
      // 交换第 p0个 和 第 curr个元素
      tmp = nums[p0];
      nums[p0++] = nums[curr]
      nums[curr++] = tmp
    } else if (nums[curr] = 2) {
      // 交换第k个 和 第 curr个元素
      tmp = nums[curr];
      nums[curr] = nums[p2];
      nums[p2--] = tmp
    } else {
      curr++
    }
  }
}

