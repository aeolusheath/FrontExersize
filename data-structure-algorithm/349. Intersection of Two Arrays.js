/**
 * 


  Given two arrays, write a function to compute their intersection.

  Example 1:

  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2]
  Example 2:

  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [9,4]
  Note:

  Each element in the result must be unique.
  The result can be in any order.
 * 
 * 
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// many solutions
// solution 1
var intersection = function(nums1, nums2) {
  let n1 = Array.from(new Set(num1))
  let n2 = Array.from(new Set(num2))

  return n1.filter(item => n2.includes(item))

};

// solution 2
var intersection = function(nums1, nums2) {
  let map = new Map()
  for (let i of nums1) {
    map.set(i, true)
  }
  let ret = []
  for (let j of nums2) {
    if (map.has(j)) {
      ret.push(j)
      map.delete(j)
    }
  }
  return ret
};

// solution 3
/**
 * 
 *  This is a Facebook interview question.
    They ask for the intersection, which has a trivial solution using a hash or a set.

    Then they ask you to solve it under these constraints:
    O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).
    You are told the lists are sorted.

    Cases to take into consideration include:
    duplicates, negative values, single value lists, 0's, and empty list arguments.
    Other considerations might include
    sparse arrays.
 * 
 */
// [4,5,9], [4,4,8,9,9]
// [1,1,2,2], [2,2]
function intersections(l1, l2) {
  l1.sort((a, b) => a - b) // assume sorted
  l2.sort((a, b) => a - b) // assume sorted
  const intersections = []
  let l = 0, r = 0;
  while ((l2[l] && l1[r]) !== undefined) {
     const left = l1[r], right = l2[l];
      if (right === left) {
        intersections.push(right)
        while (left === l1[r]) r++;
        while (right === l2[l]) l++;
        continue;
      }
      if (right > left) {
        while (left === l1[r]) r++;
      } 
      else {
        while (right === l2[l]) l++;
      } 
      
  }
  return intersections;
}

// 2020 01-03
// 今天又看到了一种解法， 空间复杂度是O(1) ,但是有重复的元素，所以需要进一步
// 实际上这个解法是上面解法的第一步
const intersection1 = (l1, l2) => {
  l1.sort((a, b) => a - b)
  l2.sort((a, b) => a - b)
  let res = []
  let i =0, j = 0;
  while( i < l1.length && j < l2.length ) {
    if (l1[i] == l2[j]) {
      res.push(l1[i])
      i++
      j++
    } else if (l1[i] < l2[j]) {
      i++
    } else if (l1[i] > l2[j]) {
      j++
    }
  }
  return res
}

// 第二步
// [1,2,2,1], [2,2]
const intersection2 = (l1, l2) => {
  l1.sort((a, b) => a - b)
  l2.sort((a, b) => a - b)
  let res = []
  let i = 0, j = 0;
  while(i < l1.length && j < l2.length) {
    let left = l1[i], right = l2[j]
    if (left == right) {
      res.push(left)
      // 因为要跳过重复的数据
      while (left == l2[j]) j++
      while (right == l1[i]) i++
    } else if (left > right) {
      while (left > l2[j] ) j++
    } else if (left < right) {
      while (l1[i] < right) i++
    }
  }
  return res
}

intersection2([4,9,5], [9,4,9,8,4])



 