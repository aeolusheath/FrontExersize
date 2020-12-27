/**
 * 
 * 
 * 
 * 
 * 
 * For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

  Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

  

  Example 1:

  Input: A = [1,2,0,0], K = 34
  Output: [1,2,3,4]
  Explanation: 1200 + 34 = 1234
  Example 2:

  Input: A = [2,7,4], K = 181
  Output: [4,5,5]
  Explanation: 274 + 181 = 455
  Example 3:

  Input: A = [2,1,5], K = 806
  Output: [1,0,2,1]
  Explanation: 215 + 806 = 1021
  Example 4:

  Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
  Output: [1,0,0,0,0,0,0,0,0,0,0]
  Explanation: 9999999999 + 1 = 10000000000
  

  Note：

  1 <= A.length <= 10000
  0 <= A[i] <= 9
  0 <= K <= 10000
  If A.length > 1, then A[0] != 0

 * 
 * 
 */

 /**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  // 数组越界，不能这样做
  // let numStr = (Number(A.join('')) + K) + ''
  // let ret = []
  // for(let i = 0 ; i < numStr.length; i++) {
  //   ret.push(Number(numStr[i]))
  // }
  // return ret

  let re = 0
  let j = K % 10  
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] + j + re < 10) {
      A[i] = A[i] + j + re 
      re = 0
    } else {
      A[i] = (A[i] + j+re) % 10
      re = 1
    }
    K = Math.floor(K / 10) 
    j = K % 10
  }
  // console.log(A,re, K, 'AA')
 
  
  while(K > 0) {
    j = K % 10
    A.unshift((j + re)% 10)
    re = ((j + re) >=10) ? 1 : 0
    K = Math.floor(K / 10)
  }


  if (re !== 0) {
    A.unshift(1)
  }

  return A
};


console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516))
console.log([9,9,9,9,9,9,9,9,9,9])
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9],1))



console.log(addToArrayForm([0],23))


console.log(addToArrayForm([6],809))