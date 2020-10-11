// 冒泡排序 属于交换排序中的一种
var sort = (arr, low, high) => {
  if (!arr || arr.length === 1) return arr
  if (low > high) return 
  // let pivortKeyIndex = 0
  // let pivotKey = arr[low]
  let pivotKeyIndex = getPartitionIndex(arr, low, high)
  sort(arr, low, pivotKeyIndex - 1)
  sort(arr, pivotKeyIndex + 1, high)
  return arr
}

var getPartitionIndex = (arr, low, high) => {
  // console.log('第一次', low, high, arr)
  let key = arr[low]
  while(low < high) {
    // console.log(low, high, arr, key, 'while')
    // high开始的已经大于key，不需要移动，只需要继续往前
    while ( arr[high] >= key && low < high) high--

    // method 1
    arr[low] = arr[high]  
    
    // method 2
    // if (low < high) {
    //   arr[low] = arr[high]
    //   low++
    // }

    // method wrong
    // if (arr[high] < key) { 
      // low++
    // }
    // low处的值已经小于key，不需要移动，只需要继续往后
    while (arr[low] < key && low < high)  low++

    // method 1
    arr[high] = arr[low]

    // method 2
    // if (low < high) {
    //   arr[high] = arr[low]
    //   high--
    // }

    // method wrong
    // if (arr[low] > key) {
      // high--
      // console.log(arr, '>')
    // }
  }
  arr[low] = key
  console.log(arr, 'res')
  return low
}
console.log(sort([5,99,4,6,1,3], 0, 5))
console.log(sort([5,3,4,6,1,3], 0, 5))
console.log(sort([9,8,6,10,2,7,20,2], 0, 7))
console.log(sort([20,100,30,1,5,20,40,55,8,6,10,2,7,20, 20], 0, 14))

getPartitionIndex([3,3,4,1], 0, 3)