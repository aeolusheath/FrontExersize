// 求第1000个素数
// 好的资料

// 方法一
function getPrime(n) {
  let primeArr = [2]
  for(let i = 3; i <= n; i++) {
    let isPrime = true
    for(let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if(isPrime)
      primeArr.push(i)
  }
  return primeArr
}
// 这是最基础，也是最笨的办法，没有任何优化
// 其实在判断 1 到 n 之间被n整除的时候，我们可以轻易的过滤掉，能被2整除的偶数全部不是质数（除了2）所以我们先做一次优化，去掉偶数


// 方法二 去掉偶数
function getPrime2(n) {
  let primeArr = [2]
  // 从3开始 每次加2 就过滤了偶数
  for (let i = 3; i <= n; i+=2) {
    let isPrime = true
    for(let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if(isPrime)
      primeArr.push(i)  
  }
  return primeArr  
}
// 我们过滤了一部分,但是被除数其实可以过滤一下，被除数小于等于 n的开方 即可
// 关于只要求到平方根的说明
// 因为任何一个数都不可能分解成两个大于其平方根的数的乘积.肯定只能分解为一个大于或等于其平方根,另一个小于或等于其平方根
// 方法三
function getPrime3(n) {
  let primeArr = [2]
  for (let i = 3; i <= n; i++) {
    let isPrime = true
    for(let j = 2; j < Math.sqrt(i); j++) {
      if (i % 2 === 0 || i % j === 0) {
        isPrime = false
        break
      }
    }
    if(isPrime)
      primeArr.push(i)  
  }
  return primeArr  
}


// 方法二和方法三其实我们做了一个优化就是已经知道偶数肯定不是素数
// 我们的做法是在内层循环做判断 其实这也比较蠢，因为我们可以通过外层来控制

// 方法三的 最优
function getPrime3(n) {
  let primeArr = [2]
  // for (let i = 3; i <= n; i++) {
  // 这里我们直接+2 将偶数过滤即可
  for (let i = 3; i <= n; i+=2) {
    let isPrime = true
    for(let j = 2; j < Math.sqrt(i); j++) {
      // if (i % 2 === 0 || i % j === 0) {
      if ( i % j === 0) {        
        isPrime = false
        break
      }
    }
    if(isPrime)
      primeArr.push(i)  
  }
  return primeArr  
}


// 方法四 更优解，通过生成器去做 // search File ： 求素数Prime.js



// tips
// 犯了一个巨蠢的错误，实际上如果i 的判断条件不满足的时候，会直接跳出循环，根本不会走到i++ 那一步去
// 所以下面的循环 只会输出1, 当i为2的时候，i % 2 === 0，所以会终止循环
for(let i = 1; i < 10 && i% 2 !== 0; i++ ) {
  console.log(i)
}

// 我们写一个辅助方法判断是否是素数

function isPrime(n) {
  if (n % 2 === 0) return false
  // 虽然上面过滤了，如果n是一个奇数 下面的循环还是要执行多次，所以将 i++ 换成i+=2
  for(let i = 3; i < Math.sqrt(n); i+=2) {
    if(n % i === 0) return false
  }
  return true
}