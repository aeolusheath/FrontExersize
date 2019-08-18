/**
 
 *

 Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

Example 1:

Input: [0,1,1]
Output: [true,false,false]
Explanation: 
The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
Example 2:

Input: [1,1,1]
Output: [false,false,false]
Example 3:

Input: [0,1,1,1,1,1]
Output: [true,false,false,false,true,false]
Example 4:

Input: [1,1,1,0,1]
Output: [false,false,false,false,false]
 

Note:

1 <= A.length <= 30000
A[i] is 0 or 1
 * 
 * 
 */

 // 错误 溢出
var prefixesDivBy5 = function(A) {
    var s = ''
    for (let i = 0, j = A.length; i < j; i++) {
       s = s + A[i]
       // 这里有问题，会溢出
       let num = parseInt(s, '2')
       A[i] = num % 5 == 0
    }
    return A
};

var prefixesDivBy5 = function(A) {
  let acc = 0
  return A.map(item => {
    // 这里必须要求余，不然会溢出
    acc = (acc << 1) % 5  + item
    return (acc % 5 == 0)
  })
}


const minute = 25
