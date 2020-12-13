/**
 * 
 * 
 * 
 * 
 *  Given an array of integers arr, replace each element with its rank.

    The rank represents how large the element is. The rank has the following rules:

    Rank is an integer starting from 1.
    The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
    Rank should be as small as possible.
    

    Example 1:

    Input: arr = [40,10,20,30]
    Output: [4,1,2,3]
    Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
    Example 2:

    Input: arr = [100,100,100]
    Output: [1,1,1]
    Explanation: Same elements share the same rank.
    Example 3:

    Input: arr = [37,12,28,9,100,56,80,5,12]
    Output: [5,3,4,2,8,6,7,1,3]
    

    Constraints:

    0 <= arr.length <= 105
    -109 <= arr[i] <= 109
 * 
 * 
 * 
 */

 /**
 * @param {number[]} arr
 * @return {number[]}
 */
// 时间复杂度O(nlogn) 空间复杂度O(n)
// 优化，排序可以用count sort 计数排序 因为这里限定了数组的长度 和 元素的大小
var arrayRankTransform = function(arr) {
    let originArr = arr.slice()
    arr.sort((a, b) => a - b)
    let map = {}

    let j = 1;
    map[arr[0]] = j
    for (let i = 1; i < arr.length; i++) {
      if (arr[i]!== arr[i-1]) {
        map[arr[i]] = ++j
      }
    }

    let ret = []
    for (let j = 0; j < originArr.length; j++) {
      ret.push(map[originArr[j]])
    }
    return ret
};


console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))
console.log(arrayRankTransform([100]))
