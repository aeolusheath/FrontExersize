/***
 * 
 
    You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

    To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

    If k > 0, replace the ith number with the sum of the next k numbers.
    If k < 0, replace the ith number with the sum of the previous k numbers.
    If k == 0, replace the ith number with 0.
    As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

    Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

    Example 1:

    Input: code = [5,7,1,4], k = 3
                   0,1,2,3
    Output: [12,10,16,13]
    Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
    Example 2:

    Input: code = [1,2,3,4], k = 0
    Output: [0,0,0,0]
    Explanation: When k is zero, the numbers are replaced by 0. 
    Example 3:

    Input: code = [2,4,9,3], k = -2
                   0  2  3   (0-1)
                   1  0  3
                   2  1  0
                   3  2  1
    Output: [12,5,6,13]
    Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
    Constraints:

    n == code.length
    1 <= n <= 100
    1 <= code[i] <= 100
    -(n - 1) <= k <= n - 1
 * 
 * 
 */


 /**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
// 时间复杂度O(n * k)
var decrypt = function(code, k) {
  let ret = []
  let len = code.length
  if (k === 0) {
    return new Array(code.length).fill(0)
  }
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      // ret [i] = 
      let sum = 0
      for (let j = 1; j <= k; j++) {
          sum += code[((i + j) % len)] 
      }
      ret[i] = sum
    }
  }
  if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      let positiveK = Math.abs(k) 
      let sum = 0
      for (let j = 1; j<= positiveK; j++) {
          if (i - j >=0) {
            sum += code [i - j]
          } else {
            sum += code [len + (i - j)]
          }
      }
      ret[i] = sum
    }
  }
  return ret
};


// better 时间复杂度O(n)
var decrypt = (code, k)  => {
  let len = code.length
  let ret = new Array(len).fill(0)
  if (k === 0) return ret
  let start = 1, end = k, sum = 0

  // Define the initial window and initial sum
  if (k < 0) {
    let nK = -k
    start = len - nk
    end = len - 1 // 这是怎么得出来的, 找规律
  }

  for (let i = start; i <= end; i++) { sum += code[i] }


  // Scan through the code array as i moving to the right, update the window sum.
  let res = []
  for (let i = 0; i < code.length; i++) {
    res[i] = sum
    // slide window 减去前一个，新增后一个数字
    sum -= code[start++ % len]
    sum += code[++end % len]
  }
  return res
}

console.log(decrypt([5,7,1,4], 3))
console.log(decrypt([2,4,9,3], -2))


