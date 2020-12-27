/**
*
*

You are given an integer n. An array nums of length n + 1 is generated in the following way:
 len = 2 0, 1        i = 0
 len = 3 0, 1, 2     i max = 1
 len = 4 0, 1, 2, 3  i max =
 nums[0] = 0
 nums[1] = 1
 nums[2 * i] = nums[i] when 2 <= 2 * i <= n
 nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
 Return the maximum integer in the array nums​​​.



 Example 1:

 Input: n = 7
 Output: 3
 Explanation: According to the given rules:
   nums[0] = 0
   nums[1] = 1
   nums[(1 * 2) = 2] = nums[1] = 1
   nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
   nums[(2 * 2) = 4] = nums[2] = 1
   nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
   nums[(3 * 2) = 6] = nums[3] = 2
   nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
 Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is 3.
 Example 2:

 Input: n = 2
 Output: 1
 Explanation: According to the given rules, the maximum between nums[0], nums[1], and nums[2] is 1.
 Example 3:

 Input: n = 3
 Output: 2
 Explanation: According to the given rules, the maximum between nums[0], nums[1], nums[2], and nums[3] is 2.


 Constraints:

 0 <= n <= 100
 Accepted
 10,066
 Submissions
 20,869

*
*
*
*
*/

/**
 * @param {number} n
 * @return {number}
 */

func getMaximumGenerated(n int) int {
	if n <= 1 {
		return n
	}

	num := make([]int, n+1)
	num[0] = 0
	num[1] = 1
	max := -1

	for i := 2; i <= n; i++ {
		if (i & 1) == 0 {
			num[i] = num[i/2]
			max = maxFunc(num[i], max)
		} else {
			num[i] = num[(i-1)/2] + num[(i-1)/2+1]
			max = maxFunc(num[i], max)
		}
	}
	return max
}

func maxFunc(a, b int) int {
	if a >= b {
		return a
	}
	return b
}

