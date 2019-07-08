// 找出数组种重复的数字
// Map Set Object or Array.prototype.includes 等都可以

// 其他的解法（考虑时间复杂度和空间复杂度）

// 解法一，对数组进行排序，排序一个长度为n的数组需要O（nlogn）的时间【不懂】
//        然后从头到尾扫描就是了，判断与前一个是否相等，相等则是重复

// 解法二，用哈希表，即是用普通对象来实现，时间复杂度O(n)，空间复杂度为O(n) O(n)的哈希表定义

// 解法三，用将空间复杂度降低为O(1)

// TODO 
function getRepeatNumber(array) {
  const repeatArray = []
  for(let i=0; i< array.length; i++) {
    const num = array[i]
    if(num !== i) {
      if(num === array[num])
        repeatArray.push(num)
      if(num !== array[num] && typeof array[num]) {}
    }
  }
}
