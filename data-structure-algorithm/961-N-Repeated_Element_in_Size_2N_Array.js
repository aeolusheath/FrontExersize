/**
 * 
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

    Return the element repeated N times.

    

    Example 1:

    Input: [1,2,3,3]
    Output: 3
    Example 2:

    Input: [2,1,2,5,3,2]
    Output: 2
    Example 3:

    Input: [5,1,5,2,5,3,5,4]
    Output: 5
 * 
 * 
 */

 // 重复N次的元素，也是唯一重复的元素，因为只有N+1种元素，一共2N个元素
 /**
 * @param {number[]} A
 * @return {number}
 */

 // 判断某一个元素是否存在就可以了,
 // set 
var repeatedNTimes = function(A) {
    var set = new Set()
    for (let i of A) {
      if (set.has(i)) {
        return i
      }
      set.add(i)
    }
};

// map
var repeatedNTimes = function(A) {
  var map = new Map()
  for (let i of A) {
    if (map.has(i)) {
      return i
    }
    map.set(i, true)
  }
};