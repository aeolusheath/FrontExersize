/**
 * 
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

 

Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
Example 4:

Input: [1,2,4,5]
Output: true
Example 5:

Input: [1,1,1]
Output: true
 

Note:

1 <= A.length <= 50000
-100000 <= A[i] <= 100000
 * 
 * 
 * 
 */



 /**
 * @param {number[]} A
 * @return {boolean}
 */

 // 方法一，排序，然后对比每个位置 时间复杂度O(nlogn) 略，将js数组转换为字符串，toString，然后比较

 // 方法二，一次遍历
var isMonotonic = function(A) {
  if (A.length === 1) return true
  // 如果flag为true 那么是降序
  // 如果flag为false 那么是升序
  // let flag =A[0] - A[1] === 0 ? null : (A[0] - A[1]) > 0 // 这里不能加等号
  let flag = null;
  for (let i = 0; i < A.length - 1; i++) {
    // console.log(A[i], A[i+1], 'kevinkang')
    if ( flag === null && A[i] != A[i+1]) {
      flag = (A[i] - A[i + 1]) > 0
      // console.log('flag 1111')
    } else if (A[i] - A[i+1] < 0) { // 遇到升序
      // 但是flag一开始为降序
      if(flag === true) return false
    } else if (A[i] - A[i+1] > 0) { // 遇到降序
      // 但是flag一开始为升序
      if(flag === false) return false
    }
  }
  return true
}

// ???? 太巧妙了吧
var isMonotonic = function(A) {
    let inc = true, dec = true; 
    for (let i = 1; i < A.length; i++) {
      inc &= A[i-1] <= A[i]
      dec &= A[i-1] >= A[i]
    } 
    return inc || dec
}



console.log(isMonotonic([1,2,2,3]), "kkkk", true)
console.log(isMonotonic([1,3,2]), "kkkk", false)
console.log(isMonotonic([1,2,4,5]), "kkkk", true)
console.log(isMonotonic([1,1,0]), "kkkk", true)
console.log(isMonotonic([1,1,1]), "kkkkkk------", true)
