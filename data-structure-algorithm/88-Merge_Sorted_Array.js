/**
 *
 *
 *  Share
    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
    Example:

    Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]


 *
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 88. 合并两个有序数组
// 方法一
var merge = function (nums1, m, nums2, n) {
  console.log("input array", nums1, nums2)
  // 新建一个数组
  var newNums = []
  var i = 0, j = 0, k = 0
  while (i < m && j < n) {
    // 这里是错的
    // newNums[k] = nums1[i] <= nums2[j] ? nums1[i] : nums2[j]
    // k = k + 1
    // i = i + 1
    // j = j + 1
    if (nums1[i] <= nums2[j]) {
      newNums[k] = nums1[i]
      k = k + 1
      i = i + 1
    } else {
      newNums[k] = nums2[j]
      k = k + 1
      j = j + 1
    }
  }
  console.log(i, j)
  // 可能i 或者 j 没有到最后，需要将剩下的值给赋值到新的数组
  while (i < m) {
    newNums[k] = nums1[i]
    k = k + 1
    i = i + 1
  }
  while (j < n) {
    newNums[k] = nums2[j]
    k = k + 1
    j = j + 1
  }
  console.log(newNums, "kevin")
  nums1 = nums1.splice(0, nums1.length, ...newNums)
};

// merge([1,2,3,0,0,0], 3, [2,5,6], 3)

// 方法一 优化
/**
 *
    nums1 = [4,5,0,0,0]
    nums2 = [3,8,9]
 */
var merge = function (nums1, m, nums2, n) {
  console.log("input array", nums1, nums2)
  // 新建一个数组
  var newNums = []
  var i = 0, j = 0, k = 0
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      newNums[k++] = nums1[i++]
    } else {
      newNums[k++] = nums2[j++]
    }
  }
  // 可能i 或者 j 没有到最后，需要将剩下的值给赋值到新的数组
  while (i < m) {
    newNums[k++] = nums1[i++]
  }
  while (j < n) {
    newNums[k++] = nums2[j++]
  }
  nums1 = nums1.splice(0, nums1.length, ...newNums)
};

// 方法二 和方法一 类似, 但是空间复杂度低一点
var merge = function (nums1, m, nums2, n) {
  var i = m - 1 , j = n - 1, k =  m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  /**
    nums1 = [4,5,0,0,0]
    nums2 = [3,8,9]
   *
   */

  // 说明nums1的所有数据都已经放到了最后几位，并且大于nums2剩下的数据，那么直接放到前面即可，已经排好序了
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }

  //不做处理，因为i前面的已经是排好序的了，j数组已经全部放到后面了
  // while (i >= 0) {
  // }
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
