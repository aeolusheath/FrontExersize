// 方法一
// 有重复的调用计算，调用函数次数呈类指数级增长
function fibonaci(n) {
  // 边界 n < 0  n 不是整形数字
  return n <= 2 ? n : fibonaci(n - 1) + fibonaci(n - 2)
}

// 方法二
// 优化，不用什么鬼递归，用数组存储之前计算出来的值
var initFibonaci = [1,2]
function fibonaci2(n) {
  if (n <= 2) return initFibonaci[n - 1]
  for (let i = 3; i <= n; i++) {
    const index = i - 1
    initFibonaci[index] = initFibonaci[index - 1] + initFibonaci[index - 2]
  }
  return initFibonaci[n-1]
}

// 方法三
// 基于方法二进行优化 方法二不好的点有：全局变量；没有缓存之前计算出来的数据，重复去计算
// 用闭包缓存数组
const getFibonacci = ((n) => {
  var initFibonaci = [1,2]
  return function(n) {
    // if (n <= 2) return initFibonaci[n - 1]
    // 如果传递的数字小于等于缓存的数组长度，那么这个值已经在数组里面了【这种情况已经包含上面注释的情况】
    if (n <= initFibonaci.length) return initFibonaci[n - 1] 
    // 如果传递的数字大于缓存的数组长度，那么我们直接从数组的最终值开始求值，不用从i=3 开始计算，因为第1个到 initFibonaci.lengh 个数字已经求出来了。不用从新计算重复的
    for (let i = initFibonaci.length; i <= n; i++) {
      const index = i
      initFibonaci[index] = initFibonaci[index - 1] + initFibonaci[index - 2]
    }
    return initFibonaci[n-1]
  }
})()

