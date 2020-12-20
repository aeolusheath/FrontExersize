package ds
/**
 *
  Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])



Example 1:

Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: A = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4


Constraints:

3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4

 *
 *
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
func canThreePartsEqualSum(A []int) bool {
	sum := 0
	for i := 0; i < len(A); i++ {
		sum += A[i]
	}
	if sum%3 != 0 {
		return false
	}
	part := sum / 3
	var temp, i int
	for j := 0; j < len(A); j++ {
		temp += A[j]
		if temp == part {
			i += 1
			temp = 0
		}
	}
	return i == 3 || (i >= 3 && temp == 0)
}

