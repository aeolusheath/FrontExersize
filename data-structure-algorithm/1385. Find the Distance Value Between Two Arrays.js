/**
 * 
 * 
  
 Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

 

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2
Example 2:

Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2
Example 3:

Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1
 

Constraints:

1 <= arr1.length, arr2.length <= 500
-10^3 <= arr1[i], arr2[j] <= 10^3
0 <= d <= 100
 * 
 * 
 */


 /**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */


// 方法一，

// 方法二，二分法来做
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a, b) => a - b)
    if (d === 0) return arr1.length
    let ret = 0
    for (let num of arr1) {
      ret += binarySearchInner(num, arr2, d) ? 1 : 0
    }
    return ret
};

// 通过二分法查找是否符合要求
var binarySearchInner = (num, arr2, d) => {
  // 如果 num 已经比arr2数组中最小的还小
  // if (num < arr2[0] && arr2[0] - num <= d ) return false
  if (num < arr2[0]) {
    return arr[0] - num > d
  }
  // 如果 num 已经比arr2数组中最大的还大
  // if (num > arr2[arr2.length - 1] && num - arr2[arr2.length - 1] <= d) return false
  if (num > arr2[arr2.length - 1]) {
    return num - arr2[arr2.length - 1] > d
  }
  
  // 如果 num 处于arr2数组中某两个数之间
  let l = 0; r = arr2.length - 1
  while(l <= r) {
      let m = Math.floor((l + r) /2)
      if (num < arr2[m]) {
          r = m - 1
      } else if (num > arr2[m]) {
          l = m + 1
      } else {
        console.log('3')
         return false
      }
   }
  // 现在num的大小 在 arr2[r] arr[r+1]之间
  return (num - arr2[r] > d)  && (arr2[r + 1] - num > d)
  
}


console.log(findTheDistanceValue(
  [2,1,100,3],
  // [-5,-2,10,-3,7],
  [-5, -3, -2, 7, 10],
  6
))




