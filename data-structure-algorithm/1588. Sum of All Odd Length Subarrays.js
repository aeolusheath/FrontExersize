/**
 * 
  Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

  A subarray is a contiguous subsequence of the array.

  Return the sum of all odd-length subarrays of arr.

  

  Example 1:

  Input: arr = [1,4,2,5,3]
  Output: 58
  Explanation: The odd-length subarrays of arr and their sums are:
  [1] = 1
  [4] = 4
  [2] = 2
  [5] = 5
  [3] = 3
  [1,4,2] = 7
  [4,2,5] = 11
  [2,5,3] = 10
  [1,4,2,5,3] = 15
  If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
  Example 2:

  Input: arr = [1,2]
  Output: 3
  Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
  Example 3:

  Input: arr = [10,11,12]
  Output: 66
  

  Constraints:

  1 <= arr.length <= 100
  1 <= arr[i] <= 1000

  
 * 
 * 
 */

 // 暴力法，直接求出所有的子数组[连续的index才为子数组]
 // 时间复杂度O(n^3) 空间复杂度O(1)
 var sumOddLengthSubarrays = function(arr) {
  let retSum = 0 
  var accumulate = (len, start, arr) => {
    let res = 0
    // console.log(start + len, 'what is start + len')
    for (let i = start ; i < (start + len) ; i++) {
      res += arr[i]
    }
    return res
  }
  for (let i = 0; i < arr.length; i++) {
    // oddLen 为子数组的长度,最小为1，最大为整个数组的长度
    // 这里要加一个限制， (长度 + i) <= 数组长度
    for (let oddLen = 1; (oddLen + i) <= arr.length; oddLen += 2) {
      // 计算所有的子数组的和
      console.log(arr.slice(i, i+oddLen)) // 奇数项的子数组
      retSum += accumulate(oddLen, i , arr)
    }
  }
  return retSum
 };

 // 对上面的进行优化，求子数组的累加和的算法，子数组任意一段[start, end]的区间和等于sum[end] - sum[start];
 // 时间复杂度O(n^2) 空间复杂度O(1)
 var sumOddLengthSubarrays = function(arr) {
  // 先用数组或者map存储累加和
  // var arr = new Array(1001)
  // arr.fill(0)

  // 优化，空间不需要那么多
  var sumArr = new Array(arr.length + 1)
  sumArr.fill(0)
  // 第0个sum为0，1个sum为第一个
  // 也可以用map去存储
  for (let i = 0; i < sumArr.length - 1; i++) {
    sumArr[i+1] = sumArr[i] + arr[i]
  }
  console.log(sumArr)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // 找到所有的子数组
    for (let oddLen = 1; (oddLen + i)<= arr.length; oddLen+=2) {
      let startIndex = i;
      let endIndex = startIndex + oddLen
      let subArrSum = sumArr[endIndex] - sumArr[startIndex]
      sum += subArrSum
    }
  }
  return sum
 }




 // 时间复杂度O(n) 空间复杂度O(1)
 var sumOddLengthSubarrays = function(arr) {
  let len = arr.length; 
  let res = 0
  for (let i = 0; i < len; i++) {
    // 第i个数字
    // 出现的次数 有两种情况
    // 1，左边是奇数个，右边也是奇数个
    // 2，左边是偶数个，右边也是偶数个
    //  [1,4,2,5,3]  
    //   0,1, 2 ,3,4
    // 比如第i个数字，左边是（ 0 ~ i - 1） 右边是 （ i + 1 ~ len-1 ）
    // 左边包含i的奇数个数组就等于 0 ~ i - 1中，奇数的个数，也就是 1 ~ i 中奇数的个数
    // 左边包含i的偶数个数组就等于 0 ~ i - 1中，偶数的个数，也就是 1 ~ i 中偶数的个数
    // 在第 i = 3，[0, 2(i-1)] 左边的奇数 1， 左边的偶数 2
    //            [4, 4]  右边的奇数 1， 右边的偶数 2
    const LeftOdd = Math.floor((i + 1) / 2),
          LeftEven = Math.floor(i / 2) + 1,
          RightOdd = Math.floor((len - i) / 2), 
          RightEven = Math.floor((len - 1 - i) / 2) + 1;
          if (i===2) {
            console.log(LeftOdd, LeftEven, RightOdd, RightEven)
          }
          res += arr[i]*(LeftOdd * RightOdd + LeftEven * RightEven);

  }
  return res

 }





 console.log(sumOddLengthSubarrays([1,4,2,5,3]))



// 求出所有数组的【奇数个】子数组
 var getSubOddArrays = function(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    for (let oddLen = 1; (oddLen + i) <= arr.length; oddLen += 2) {
      res.push(arr.slice(i, i+oddLen))
    }
  }
  return res
 };

 console.log(getSubOddArrays([1,4,2,5,3]))
 