// 利用了js的一些语言特性
var countSort = (nums) => {
  let arr = []
  for (let num of nums) {
    arr[num] = arr[num] ? arr[num] + 1 : 1
  }  
  // 此时arr 的索引就是num元素，值就是出现的次数
  // 遍历这个arr数组，有值的索引连续放到新的数组里面即可
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      while(arr[i] > 0) {
        ret.push(i)
        arr[i]--
      }
    }
  }
  return ret
}

console.log(countSort([11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]))
console.log(countSort([11, 20, 2,8,5]))
