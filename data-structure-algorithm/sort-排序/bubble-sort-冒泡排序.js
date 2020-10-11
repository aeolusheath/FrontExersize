// 冒泡排序 属于交换排序中的一种

var sort = (arr) => {
  if (!arr || arr.length === 1) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        
        // 交换方式一
        // let temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp

        // 交换方式二
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(sort([5,2,4,6,1,3]))





var bubbleSort = (arr) => {
  if (!arr || arr.length === 1) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}