/**
 * 
 * 简单选择排序
 *  
 */
var sort = (arr) => {
  if (!arr || arr.length === 1) return arr
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j
      }
    }
    // 交换最小值与当前值
    if (k !== i) {
      [arr[k], arr[i]] = [arr[i], arr[k]]
    }
  }
  return arr
}

console.log(sort([5,99,4,6,1,3]))
console.log(sort([5,3,4,6,1,3]))
console.log(sort([9,8,6,10,2,7,20,2]))
console.log(sort([20,100,30,1,5,20,40,55,8,6,10,2,7,20,20]))
