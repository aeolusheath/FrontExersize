/**
 * 
 * 
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

    Example 1:

    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Example 2:

    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
 * 
 * 
 * 
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
// 方法一 常规操作
var sortedSquares = function(A) {
  return A.map(item => item*item).sort((a, b) => a - b)
};


//  方法二 双指针
var sortedSquares = function(A) {
  let N = A.length
  let j = 0
  while(j < N && A[j] < 0) {
    j++
  }
  // j为负数的总个数
  let i = j - 1

  // 0 i   ----   j N-1 前半部分为负数, 后半部分为正整数
  let ans = Array.from({length: N})
  let t = 0


  // 非负数 从 小的索引开始  0  2  4
  // 负数   从 大的索引开始  -1 -3  5
  while(i >= 0 && j < N) {
    if (A[i] * A[i] < A[j] * A[j]) {
      ans[t++] = A[i] * A[i]
      i--
    } else {
      ans[t++] = A[j]*A[j]
      j++
    }
  }

  while (i>=0) {
    ans[t++] = A[i]*A[i]
    i--
  }
  while (j<N) {
    ans[t++] = A[j]*A[j]
    j++
  }
  return ans
}

// 方法二的双指针 有点类似于 有序数组的合并
var mergeSortedArray = function(arr1, arr2) {
    let i = 0;
    let j = 0;
    let t = 0;

    let M = arr1.length;
    let N = arr2.length;
    let ans = Array.from({length: M + N})
    while(i < M && j < N) {
      if (arr1[i] < arr2[j]) {
        ans[t++] = arr1[i]
        i++
      } else {
        ans[t++] = arr2[j]
        j++
      }
    }

    while(i < M) {
      ans[t++] = arr1[i++]
    }
    while(j < N) {
      ans[t++] = arr2[j++]
    }
    return ans
}