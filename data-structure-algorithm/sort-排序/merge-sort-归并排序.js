/**
 * 归并排序 - 迭代法 和 递归
 */

 var sort = (arr) => {
  if (!arr || arr.length === 1) return arr
  let copyArr = new Array(arr.length)
  return mergeSort(arr, copyArr, 0, arr.length - 1)
 }

 var mergeSort = (arr, tempArr, left, right) => {
   if (left >= right) return 
   // 找到中间点，然后划分为两个序列
   let mid = Math.trunc((left + right) / 2)
   mergeSort(arr, tempArr, mid + 1, right)
   mergeSort(arr, tempArr, left, mid)
   
   mergeHalves(arr, tempArr, left, right)
   return arr
 }


 // 合并两个有序序列--栈底一定是相邻的两个元素来作比较
 var mergeHalves = (arr, tempArr, leftStart, rightEnd) => {
    
    let leftEnd = Math.trunc((leftStart + rightEnd) / 2)
    let rightStart = leftEnd + 1

    let left = leftStart
    let right = rightStart
    let k = leftStart // 复制数据的时候需要

    while(left <= leftEnd && right <= rightEnd) {
      tempArr[k++] = arr[left] <= arr[right] ? arr[left++] : arr[right++]
    }
    while(left<= leftEnd) {
      tempArr[k++] = arr[left++]
    }
    while(right <= rightEnd) {
      tempArr[k++] = arr[right++]
    }
    
    // 复制所有的数据到原数组里面    
    for (let j = leftStart; j <= rightEnd; j++) {
      arr[j] = tempArr[j]
    }
 }

console.log(sort([5,99,4,6,1,3]))
console.log(sort([5,3,4,6,1,3]))
console.log(sort([9,8,6,10,2,7,20,2]))
console.log(sort([20,100,30,1,5,20,40,55,8,6,10,2,7,20,20]))
console.log(sort([99,98,80,6,1,3]))
