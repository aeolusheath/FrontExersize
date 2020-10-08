/**
 * 插入排序
 * 二分插入排序，因为每次插入的时候，前面已经是有序序列
 * 所有的有序序列都可以考虑到二分查找
 * 
 */

 
// 每一次插入，都与前面的【有序序列】比较，找到合适的位置，因为是有序的所以，二分查找找到位置是可以的
var sort = (arr) => {
  if (!arr || arr.length === 1) return arr
  // var key = arr[0]
  let key;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    
    // 方法一： 简单查找，找到插入点
    // 判定条件是，当前值小于index为j的值
    // for (j = i - 1; j >= 0 && arr[j] > key ; j--) {
    //     arr[j+1] = arr[j]
    // }
    
    // 方法二： 二分查找，找到插入点
    let low = 0, high = i - 1;
    while(low <= high) {
      let mid = Math.trunc((low + high) / 2)
      if (arr[mid] > key) { // 这里大于小于就是排序的升序降序区别
        high = mid - 1

      } else {
        low = mid + 1
      }
    }

    // 找到了插入的位置是 high + 1
    // 后面的每一个往后面移动一个位置
    // 错误， 不能从前往后，这样j+1的值会丢失，【除非你用一个变量存取后面的值】
    // for(let j = high + 1; j < i - 1; j++ ) {
    //   arr[j+1] = arr[j]
    // }
    // 正确， 可以从后往前，因为最后一个i的值，已经存在key里面了，是要放在插入位置的值，所以覆盖也没关系，
    for (let j = i - 1; j >= high + 1; j--) {
      arr[j + 1] = arr[j]
    }

    // 找到正确的位置之后，将这个值插入
    arr[high+1] = key
    
  }

  return arr
}


console.log(sort([5,2,4,6,1,3]))


