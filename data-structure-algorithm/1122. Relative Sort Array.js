/**
 * 
 * 
  Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

  Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  
  
  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

  

  Example 1:

  Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
  Output: [2,2,2,1,4,3,3,9,6,7,19]
  

  Constraints:

  1 <= arr1.length, arr2.length <= 1000
  0 <= arr1[i], arr2[i] <= 1000
  All the elements of arr2 are distinct.
  Each arr2[i] is in arr1.
 * 
 * 
 * 
 */

 /**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 方法一
// 时间复杂度O(nlogn) 空间复杂度O(n)
var relativeSortArray = function(arr1, arr2) {
    let mapFlag = {}
    for(let i = 0; i < arr2.length; i++) {
      mapFlag[arr2[i]] = true
    }
    let ret = []
    let others = []
    let mapNums = {}
    for (let j = 0; j < arr1.length; j++) {
      if (!mapFlag[arr1[j]]) {
        others.push(arr1[j])
      }
      mapNums[arr1[j]] = mapNums[arr1[j]] ? (mapNums[arr1[j]] + 1) : 1
    }

    for(let k = 0; k < arr2.length; k++) {
      let cur = arr2[k]
      while(mapNums[cur]-- > 0) {
        ret.push(cur)
      }
    }
    return ret.concat(...others.sort((a, b) => a - b))
};



// 方法二
// 时间复杂度O(n) 空间复杂度O(n)
// 更优解，计数排序，因为题目给出了限定条件 0-1000的数字，并且是0-1000的长度
// 桶统计【实际是升序】每个数字的个数，然后arr2决定顺序。
// 核心思想是； 
// 1，根据count sorts 统计 每个数字的出现次数
// 2，根据arr2，和 count sorts的结果来排序 【arr2 是要求的结果顺序，数组存储剩下的一定是升序】
var relativeSortArray = (arr1, arr2) => {
  // 存储所有数字出现的次数
  let cArr = new Array(1001).fill(0)
  for (let i = 0; i < arr1.length; i++) {
    cArr[arr1[i]]++
  }
  
  let k = 0;
  // 原地排序，so cool！ 因为每个数字和出现的次数已经找到了，顺序也能有arr2 和 cArr来确定，所以可以在arr1原地排序
  for (let j = 0; j < arr2.length; j++) {
    while(cArr[arr2[j]]-- > 0) {
      arr1[k++] = arr2[j]
    }
  }

  // arr2所有出现的数据已经完全加入到了arr1里面，arr1中出现，arr2中没有出现的，在cArr里面
  for (let m = 0; m < cArr.length; m++) {
    while(cArr[m]-- > 0) {
      arr1[k++] = m
    }
  }
  return arr1
}





// 方法三
// 根据题目线索
// Using a hashmap, we can map the values of arr2 to their position in arr2.
// After, we can use a custom sorting function.
// 修改排序方法的逻辑，so cooool！
// 自定义排序
var relativeSortArray = (arr1, arr2) => {
  let map = {}
  // for (let num of arr2) {
  //   map[num] = true
  // }

  for (let i = 0 ; i < arr2.length; i++) {
    map[arr2[i]] = i //  记录arr2 里面值的索引，通过这个顺序来排序
  }

  // 自定义sort函数，很巧妙
  arr1.sort((a, b) => {
    if (map[a] === undefined) map[a] = 1000 + a
    if (map[b] === undefined) map[b] = 1000 + b
    return map[a] - map[b]
  })

  return arr1
}
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))