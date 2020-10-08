/**
 * 插入排序
 * 
 * 
 */


// 每一次插入，都与前面的【有序序列】比较，找到合适的位置
var sort = (arr) => {
  if (!arr || arr.length === 1) return arr
  // var key = arr[0]
  let key, j;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    
    // 判定条件是，当前值小于index为j的值
    for (j = i - 1; j >= 0 && arr[j] > key ; j--) {
      // if (arr[j] > key) {
        arr[j+1] = arr[j]
      // }
      // else {
      //   arr[j+1] = key
      // }
    }
    console.log(key, j+1,'key')
    // 找到正确的位置之后，将这个值插入
    arr[j+1] = key
    
  }

  return arr
}


console.log(sort([5,2,4,6,1,3]))


// 二，改成while循环
var sort2 = (arr) => {
  if (!arr || arr.length === 1) return arr
  let j, key
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    key = arr[i]
    while(key < arr[j] && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }

  return arr
}
console.log(sort3([5,2,4,6,1,3]))

