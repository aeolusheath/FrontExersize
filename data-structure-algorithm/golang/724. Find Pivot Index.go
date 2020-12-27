/**
 *
 *
 Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.



Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.


Constraints:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].

 *
 *
 *
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 时间复杂度O（n）
func pivotIndex(nums []int) int {
	if len(nums) <= 2 {
		return -1
	}

	left := make([]int, len(nums))
	right := make([]int, len(nums))

	left[0] = 0
	right[len(nums)-1] = 0
	n := len(nums)

	for i := 1; i < n; i++ {
		left[i] += nums[i-1] + left[i-1]
	}
	for i := n - 2; i >= 0; i-- {
		right[i] = nums[i+1] + right[i+1]
	}
	for j := 0; j < n; j++ {
		if left[j] == right[j] {
			return j
		}
	}
	return j
}

// 更简单的，leftSum = Sum - nums[i] - leftSum
// 一次遍历就可以了！！
func pivotIndex(nums []int) int {
	if len(nums) <= 2 {
		return -1
	}
	leftSum := 0
	sum := 0
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
	}

	// for i := 0; i < len(nums); i++ {
	// 这个顺序，不能改变【不然是错误的】
	// 	leftSum += nums[i]
	// 	if leftSum == sum-nums[i]-leftSum {
	// 		return i
	// 	}
	// }
	for i := 0; i < len(nums); i++ {
		if leftSum == sum-nums[i]-leftSum {
			return i
		}
		leftSum += nums[i]

	}
	return -1
}