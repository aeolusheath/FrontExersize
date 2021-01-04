package ds

/***
 *
 *

  Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

 *
 *
 *
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
func thirdMax(nums []int) int {
	var length int = len(nums)
	if length == 1 {
		return nums[0]
	}

	if length == 2 {
		if nums[0] < nums[1] {
			return nums[1]
		} else {
			return nums[0]
		}
	}
	// 有符号整形的最大值和最小值
	m1 := -1<<32
	m2 := -1<<32
	m3 := -1<<32

	for i:= 0; i < length; i++ {
		if nums[i] > m1 {
			m3 = m2
			m2 = m1
			m1 = nums[i]
		} else if  nums[i] == m1 {
			continue
		} else if nums[i] > m2 {
			m3 = m2
			m2 = nums[i]
		} else if nums[i] == m2 {
			continue
		} else if nums[i] > m3 {
			m3 = nums[i]
		}
	}
	if m3 == -1<<32 {
		return m1
	}
	return m3
}