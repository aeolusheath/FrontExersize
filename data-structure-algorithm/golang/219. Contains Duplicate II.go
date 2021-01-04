package ds
/**
*
*

Given an array of integers and an integer k,

find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]

and the absolute difference between i and j is at most k.

 Example 1:

 Input: nums = [1,2,3,1], k = 3
 Output: true
 Example 2:

 Input: nums = [1,0,1,1], k = 1
 Output: true
 Example 3:

 Input: nums = [1,2,3,1,2,3], k = 2
 Output: false

*
*
*
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 方法一，双重循环，暴力法  略

// 方法二，遍历两次，map存最大索引

func containsNearbyDuplicate(nums []int, k int) bool {
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		val, ok := m[nums[i]]
		if ok == false {
			m[nums[i]] = i
		} else {
			if (i - val) <= k {
				return true
			}
			m[nums[i]] = i
		}
	}

	return false
}
