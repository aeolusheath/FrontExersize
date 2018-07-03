  // 求30以内的素数

  // 最笨的方法【一， 二】
  function getPrimeNums(max = 3) {
    let primeArr = [2]
    for(let i = 3; i <= max; i++) { 
      let isPrime = true
      /**
      *   如果一个数不是素数是合数，
      *   那么一定可以由两个自然数相乘得到，
      *   其中一个大于或等于它的平方根，一个小于或等于它的平方根。并且成对出现。
      *   所以我们可以只需要将 j 遍历到i的平方根就可以，只需要除到平方根就可以了
      */
      for(let j = 2; j < i; j++){ //Tips 这里的i 可以是  Math.floor(Math.sqrt(i)), 并且< 应该要换成 <=  这样比直接循环到i 节约资源
        // if(i % j ===0){
        if(i % 2 === 0 || i % j === 0) { // 这里将偶数全部先过滤，偶数肯定不是质数
          isPrime = false
          break
        }
      }
      if(isPrime) {
        primeArr.push(i)
      }
    }
    return primeArr
  } 
  
  // 好一点的方法 【三】
  function getPrimeNums2(max = 30) {
    let primeArr = [2]
    for(let i = 3; i < max; i++) {
      for(let j = 0; j < primeArr.length; j++) {
        if( i % primeArr[j] ===0 ) break // 如果能够被存在的质数整除，则肯定不是
        if( i < primeArr[j] ** 2 ) { // if(primeArr[j] > Math.sqrt(i))
          primeArr.push(i)
          break
        }
      }
    }
    return primeArr
  }

  // 生成器求素数，这个好处是什么 ，就是可以求第几个素数
  function * $getPrimeNumsByGenerator() {
    yield 2;
    let primeArr = [2];
    for(let i = 3; i< Infinity; i++) {
      for(let j = 0; j< primeArr.length; j++) {
        if(i % primeArr[j] ===0) break;
        if(i < primeArr[j] ** 2) {
          yield i;
          primeArr.push(i);
          break;
        }
      }
    }
  }

  function * $limit(iterator, limitCounts) {
    for(let i=0; i<limitCounts; i++) {
      const result = iterator.next()
      if(!result.done){
        yield result.value
      }  
    }
  }

// 求第30个素数
var primes =[...$limit($getPrimeNumsByGenerator(), 10)]

console.log(primes[primes.length])



// 升级----素数数列
const Series = {
  *sequence(iterator) {
    let i = 0
    for(let item of iterator) {
      yield [i++, item]
    }
  },
  *range(iterator, start, end) {
    for(let[i, n] of Series.sequence(iterator)) {
      if(i >= end) break
      if(i >= start) yield n
    }
  }
}


// Meta-Programing 元编程->Symbol Reflect Proxy

const _cache = Symbol('cache')

const PrimeNumbers = {
  // 通过闭包来缓存这个已经找到的素数数组
  [_cache]: [2],
  
  // 构造一个无限循环的生成器，因为生成器需要执行器，我们只需要控制好执行器就好
  // 但是如果直接使用for(let item of PrimeNumbes)会产生无限循环
  *[Symbol.iterator]() {
    const pn = this[_cache]
    for(let n of pn) {
      yield n
    }
    for(let i = pn[pn.length-1];  i < Infinity; i++) {
      for(let j =0; j < pn.length; j++) {
        if(i % pn[j]===0) break
        if(i< pn[j]**2) {
          yield i
          pn.push(i)
          break
        }
      }
    }
  }
}

// 如果不加break，会造成无限循环 然后stackoverflow
for(let [i, n] of Series.sequence(PrimeNumbers)) {
  if(i >= 10) break
  console.log(n)
}

  
console.log(...Series.range(PrimeNumbers, 1, 10))
// 这时候可以查看PrimeNumbers，发现Symbol(cache)这个数组会变成10，闭包->缓存数据  