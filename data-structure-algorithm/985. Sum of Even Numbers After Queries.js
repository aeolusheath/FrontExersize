/**
 * 
 * 
 * 
 *

 We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

 

Example 1:

Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: 
At the beginning, the array is [1,2,3,4].
After adding 1 to  A[0], the array is [2,  2, 3, 4],   and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2, -1, 3, 4],   and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1, 3, 4],   and the sum of even values is -2 + 4 = 2.
After adding 2 to  A[3], the array is [-2,-1, 3, 6],   and the sum of even values is -2 + 6 = 4.
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < A.length
 * 
 */


 /**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
// 方法一，暴力法
// 每一次换位置 都去做一次遍历，时间复杂度O(n^2) 空间复杂度O(n)


// 方法二，先算出最初的总和，然后遍历query在去
// 时间复杂度O(n) 空间复杂度O(n)
var sumEvenAfterQueries = function(A, queries) {
    let even = 0
    // 添加所有偶数
    for (let i of A) {
      if ( (i & 1) === 0) {
        even += i
      }
    }
    let ret = []
    // 修改原数组
    let sum = even
    for (let subArr of queries) {
      let idx = subArr[1]
      let val = subArr[0]

      // 以前是偶数
      let oldValIsEven = (A[idx] & 1) === 0
      let curValIsEven = (val & 1) === 0
  
      // old 偶数  new 偶数
      if (oldValIsEven && curValIsEven) {
        sum += val
      }
      // old 奇数 new 奇数
      if (!oldValIsEven && !curValIsEven) {
        sum += (val + A[idx])
      }
      // old 偶数 new 奇数  ---因为少了一个偶数，所以要减去
      if (oldValIsEven && !curValIsEven) {
        sum -= A[idx]
      }
      // old 奇数 new 偶数 
      // 新数 和 老位置的数 都是奇数 不做处理
      ret.push(sum)
      A[idx] = (A[idx] + val)
      console.log(A, 'A', sum)
    }
    return ret
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))