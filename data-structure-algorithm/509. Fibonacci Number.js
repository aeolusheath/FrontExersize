/**
 * 
 * 
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, 
 * called the Fibonacci sequence, such that each number is the sum of the two preceding ones, 
 * starting from 0 and 1. That is,

    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), for N > 1.
    Given N, calculate F(N).


    Example 1:

    Input: 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
    Example 2:

    Input: 3
    Output: 2
    Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
    Example 3:

    Input: 4
    Output: 3
    Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 
    Note:

    0 ≤ N ≤ 30.
 


 * 
 */

 /**
 * @param {number} N
 * @return {number}
 */

// 递归，最不好的办法，栈的调用
var fib = function(N) {
    if (N <=1) return N
    return fib(N - 1) +  fib(N - 2)
};
 
// 两个变量存储，不用重复计算
var fib2 = function(N) {
 if (N <= 1) return N
 let i = 1;
 let a = 0; let b = 1;
 // 也可以用数组去存储每一个位置的值
 while (i++ < N - 1) {
  let t = b
  b = a + b
  a = t
  // 简洁但是不用
  // [a, b] = [b, a + b]
  // i++
 }
 return a + b
}

console.log(fib2(2), 'kev')
console.log(fib2(3), 'kev')
console.log(fib2(4), 'kev')
console.log(fib2(5), 'kev')
console.log(fib2(6), 'kev')


