// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len -i - 1; j++) {
       if (arr[j] > arr[j + 1]) {
          [ arr[j], arr[j+1] ] = [arr[j+1], arr[j]]
       }
    }
  }
  return arr
}


function binarySearch(arr, target) {
  let max = arr.length - 1
  let min = 0
  while(min <= max) {
    let mid = ~~((max+min)/2)
    if(target < arr[mid]) {
      max = mid - 1
    } else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1
}