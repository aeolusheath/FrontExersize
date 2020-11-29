/**
 * 
 * 

    Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

    Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

    You may return any answer array that satisfies this condition.

    

    Example 1:

    Input: [4,2,5,7]
    Output: [4,5,2,7]
    Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
    

    Note:

    2 <= A.length <= 20000
    A.length % 2 == 0
    0 <= A[i] <= 1000


 * 
 * 
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var sortArrayByParityII = function(A) {
    let evenArr = []
    let oddArr = []
    for(let i = 0; i < A.length; i++) {
      if (A[i] & 1) {
        oddArr.push(A[i])
      } else {
        evenArr.push(A[i])
      }
    }
    let m = 0
    let n = 0
    for (let i = 0, j = 1; i < A.length, j < A.length; i+=2, j+=2 ) {
      A[i] = evenArr[m++]
      A[j] = oddArr[n++]
    }
    return A
};


// 双指针原地交换 时间复杂度O(n) 空间复杂度O(1)
var sortArrayByParityII_ = function(A) {
  let i = 0, j = 1, len = A.length
  while( i < len && j < len) {
    while( i < len && A[i] % 2 === 0) {
      i += 2
    }
    while (j < len && A[j] % 2 !== 0) {
      j += 2
    }
    if (i < len && j < len) {
      [A[i], A[j]] = [A[j], A[i]]
    }
  }
  return A
}
console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII_([4,2,5,7]))
