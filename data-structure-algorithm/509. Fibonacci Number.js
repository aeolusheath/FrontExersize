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
var fib2 = function (N) {
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

var fib3 = function (n) {
    if (!fib3.memo) {
        fib3.memo = {
            0: 0,
            1: 1
        }
    }
    if (n <= 1) { return fib3.memo(n) }
    if (fib3.memo[n]) { return fib3.memo[n] }
    fib3.memo[n] = fib3.memo[n-1] + fib3.memo[n-2]
    return fib3.memo[n] 
}

console.log(fib2(2), 'kev')
console.log(fib2(3), 'kev')
console.log(fib2(4), 'kev')
console.log(fib2(5), 'kev')
console.log(fib2(6), 'kev')




var x = 'myyh://yhlife.com/start/qiyu?cityname=%E4%B8%8A%E6%B5%B7&groupid=398800947&note=%C2%A5284.64&picture=http%3A%2F%2Fimage.yonghuivip.com%2F%2Fyh-image-library%2F7f3f40a9-ccec-4c8e-9543-a7b375846ba4.jpg%3FimageMogr2%2Fthumbnail%2F100x100&sellername=%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82&shopname=%E6%BC%95%E5%AE%9D%E8%B7%AF%E5%AE%9D%E9%BE%99%E5%BA%97&title=%E5%9B%BD%E9%A3%8E%E5%BD%A9%E9%92%BB2%23%E5%9C%86%E5%8C%99%E7%AD%89%E5%A4%9A%E6%AC%BE&url=myyh%3A%2F%2Fyhlife.com%2Fshow%2Fnative%3Fname%3Dorderdetail%26orderid%3D6204670210090060'


console.log(decodeURIComponent(x))