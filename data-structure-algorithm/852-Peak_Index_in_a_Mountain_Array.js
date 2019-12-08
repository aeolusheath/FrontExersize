/**
 * 
 * 
 * Let's call an array A a mountain if the following properties hold:

  A.length >= 3
  There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
  Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

  Example 1:

  Input: [0,1,0]
  Output: 1
  Example 2:

  Input: [0,2,1,0]
  Output: 1
 * 
 * 
 */

 /**
 * @param {number[]} A
 * @return {number}
 */
// tag: binary search

// 线性扫描
var peakIndexInMountainArray = function(A) {
  let i = 0
  while(A[i] < A[i+1]) i++
  return i
};


// 二分查找
var peakIndexInMountainArray = function(A) {
  let l = 0
  let r = A.length - 1
  while(l < r) {
    // (l + r) / 2
    // l + (r-l) / 2   不是 (l + (r-l)) / 2 idiot
    // not equal
    let m = Math.floor((l+r)/2) 
    // A[m] 与A[m-1] 和 A[m+1]的 位置只有3种
    if (A[m]>A[m+1] && A[m] > A[m-1]) {
      return m
    } else if (A[m] < A[m-1]) {
      r = m
    } else if ([m] < A[m+1]) {
      l = m
    }
  }
};

// 递归的二分查找
var peakIndexInMountainArray = function(A, start = 0, end = A.length - 1) {
  if (!A.length) {
    return -1
  }
  const mid = ((start + end) / 2) | 0
  if (A[m] > A[m+1] && A[m] > A[m-1]) {
    return m
  }
  if (A[m] < A[m-1]) {
    return peakIndexInMountainArray(A, start, m)
  } 
  if (A[m] < A[m+1]) {
    return peakIndexInMountainArray(A, m, end)
  }
}


