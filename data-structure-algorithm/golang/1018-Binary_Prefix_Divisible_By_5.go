/**

 *

 Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

Example 1:

Input: [0,1,1]
Output: [true,false,false]
Explanation:
The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
Example 2:

Input: [1,1,1]
Output: [false,false,false]
Example 3:

Input: [0,1,1,1,1,1]
Output: [true,false,false,false,true,false]
Example 4:

Input: [1,1,1,0,1]
Output: [false,false,false,false,false]


Note:

1 <= A.length <= 30000
A[i] is 0 or 1
 *
 *
*/

// 错误的解法，数据溢出
func prefixesDivBy5(A []int) []bool {
	len := len(A)
	ret := make([]bool, len)
	str := ""
	for i := 0; i < len; i++ {
		str += strconv.Itoa(A[i])
		x, _ := strconv.ParseInt(str, 2, 64)
		if x%5 == 0 {
			ret[i] = true
		}
	}
	return ret
}

// 正确解法，处理数据溢出的问题
/**
(a* b + c) % 5 = (a % 5)(b % 5) + b % 5

b
*/

// 余数定理：  14 % 10 = 4  4 % 10 = 4
/**
    c 为 0 或者 1， b 为 2  只有a是变化的，但是 a % d = a % d % d
	(a * b + c) % d

    (a % d) * (b % d) + c % d

    a % d = a % d % d

    3 * 2 + 1  = 7    7 % 5 = 2

	(7 * 2 + 1)  = 15	  (7 * 2 + 1) % 5 = 0  ->  2 = 7 % 5  ->(2 * 2 + 1) % 5 = 0

*/

func prefixesDivBy5(A []int) []bool {
	len := len(A)
	ret := make([]bool, len)
	temp := 0
	for i := 0; i < len; i++ {
		temp = (temp << 1) + A[i] // 当前的值
		if temp%5 == 0 {
			ret[i] = true
		}
		temp = temp % 5 // 这里是为了防止溢出
		/**
							原理是什么：
							b = 5
				      实际上就是  temp % b = temp % b % b, 这里的temp就是一直增长的数据
		          temp  = (temp * 2 + A[i])
		*/
	}
	return ret
}