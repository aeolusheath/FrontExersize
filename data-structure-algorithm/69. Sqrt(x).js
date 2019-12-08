/**
 * 
 * Implement int sqrt(int x).

  Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

  Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

  Example 1:

  Input: 4
  Output: 2
  Example 2:

  Input: 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since 
               the decimal part is truncated, 2 is returned.
  
 * 
 * 
 */


 /**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//      let i = 1
//      while(i*i < x) {
//       if ( i*i  )
//      }
// };

var mySqrt = function(x) {
  let l = 0, r = x;
  while(l <= r) {
    let m = Math.floor((l+r)/2)
    if (m*m> x) {
      // m 肯定被排除了，所以不需要讲m算进新的区间里
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return l - 1
}