
// 质数 只能被1 和 自己 整除的数字
var countPrimes = function (n) {
  // 偶数肯定不是质数
  // 1 到 sqrt(n)之间
  if (n <= 1) {
    return 0
  }
  if (n == 2) {
    return 0
  }
  let total = 1
  for (let i = 3; i < n; i+=2) {
    if (isPrime(i)) {
      total++
    }
  }
  return total
};

var isPrime = function (n) {
  for (let j = 3; j <= Math.sqrt(n); j++) {
    if (n % j == 0) {
      return false
    }
  }
  // console.log('----------3----------', n)
  return true
}

console.log(countPrimes(10), "---------------------------------->>>>>>><<<<<<<<-------------------------")

// 仍然会堆溢出
var countPrimes2 = function (n) {
  if (n <= 2) {
    return 0
  }
  let primeArr = [2];
  // for(let i = 3; i< Infinity; i++) {
  for(let i = 3; i < n; i += 2) {
    for(let j = 0; j < primeArr.length; j++) {
      if(i % primeArr[j] ===0) break;
      if(i < primeArr[j] ** 2) {
        primeArr.push(i);
      }
    }
  }
  return primeArr.length
}

// console.log(countPrimes2(10000), "result----->>>")


/**
 *
 * 厄拉多塞筛法 筛选法 详情查看维基百科
 *
 * 偶数肯定不是素数，是2的倍数
 * 3的倍数 肯定也不是
 * 4的倍数 肯定也不是
 *
 */

var countPrimes3 = function (n) {
  var flags = new Array(n)
  flags.fill(true)
  for (var i = 2; i < n; i++) {
    console.log(i, "i value-", flags[i])
    if (flags[i]) {
      // i 为 2， 2的倍数
      // i 为 3， 3的倍数
      for (let j = 2; j * i < n; j++){
        console.log(i, j, j * i, "---0000---")
        // flags[j] = false;
        flags[j * i] = false
      }
    }
  }
  let count = 0
  for (let i = 2; i < n; i++) {
    if (flags[i]) {
      count++
      console.log(i)
    }
  }
  return count
}

// 对上面的按照countPrimes4做优化，但是失败了
var countPrimes3_2 = function (n) {
  var flags = new Array(n)
  flags.fill(true)
  // 这里比如要从2 开始，并且不能以3开始，i+=2 因为这里是排除法，必须要排除每一个
  for (var i = 2; i < n; i++) {
    if (flags[i]) {
      for (let j = 2; j * i < n; j++) {
        flags[j * i] = false
      }
    }
  }
  let count = 0
  for (let i = 2; i < n; i++) {
    if (flags[i]) {
      console.log(i)
      count++
    }
  }
  return count
}

console.log(countPrimes3_2(10), "10-----------")

/**
 *
 * 类似于 厄拉多塞筛法 
 * 偶数永远不是素数
 *
 */

var countPrimes4 = function (n) {
  if (n <= 2) {
    return 0
  }
  var count = 1
  var arr = new Uint32Array(n)
  // 偶数肯定不是素数 直接排除，这里不是排除法，是验证每一个素数
  for (let i = 3; i < n; i += 2) {
    if (arr[i] == 0) {
      count++
      // 排除3的倍数
      // 排除5的倍数
      for (let j = i; j * i < n; j++) {
        arr[j * i] = 1
      }
    }
  }
  return count
}