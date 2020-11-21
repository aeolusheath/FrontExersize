/**
 * 
 
  Given an array arr, 
  
  replace every element in that array with the greatest element among the elements to its right, 
  
  and replace the last element with -1.

  After doing so, return the array.

  

  Example 1:

  Input: arr = [17,18,5,4,6,1]
  Output: [18,6,6,6,1,-1]
  

  Constraints:

  1 <= arr.length <= 10^4
  1 <= arr[i] <= 10^5

 * 
 * 
 */
// 暴力法 时间复杂度O(n^2)



// 倒序遍历
// 时间复杂度O(n) 空间复杂度O(1)
// 错误方法
var replaceElements = function(arr) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = arr.length - 1; i >=0 ; i--) {
    arr[i] = i === arr.length - 1 ? -1 : max
    // arr[i]的数据已经丢失
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return arr
};

// initial one
var replaceElements = function(arr) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = arr.length - 1; i >=0 ; i--) {
    let prev = max
    if (arr[i] > max) {
      max = arr[i]
    }
    arr[i] = i === arr.length - 1 ? -1 : prev
  }
  return arr
};

// initial two
// 更容易理解，每一次取后面的最大值
// 比较当前值与最大值比较
var replaceElements = function(arr) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = arr.length - 1; i >=0 ; i--) {
    let t = arr[i]
    arr[i] = i === arr.length - 1 ? -1 : max
    if (t > max) {
      max = t
    }
  }
  return arr
};

// 简洁版

var replaceElements = function(arr) {
  var max = -1;
  for (let i = arr.lenght; i >=0; i--) {
    let t = arr[i]
    arr[i] = max
    max = Math.max(max, t)
  }
  return arr
}
console.log(replaceElements([17,18,5,4,6,1]))