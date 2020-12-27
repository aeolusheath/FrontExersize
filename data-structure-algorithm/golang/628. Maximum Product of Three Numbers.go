/*
*
*
*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:s

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6


Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000


*
*
*/
// 方法一，排序

// 方法二，线性扫描
func maximumProduct(nums []int) int {
	min1 := 1001
	min2 := 1002

	max1 := -1001
	max2 := -1002
	max3 := -1003

	len := len(nums)
	for i := 0; i < len; i++ {
		// 找到最大的3个值
		if nums[i] > max1 {
			max3 = max2
			max2 = max1
			max1 = nums[i]
		} else if nums[i] > max2 {
			max3 = max2
			max2 = nums[i]
		} else if nums[i] > max3 {
			max3 = nums[i]
		}

		// 找到最小的两个值
		if nums[i] < min1 {
			min2 = min1
			min1 = nums[i]
		} else if nums[i] < min2 {
			min2 = nums[i]
		}

	}
	return maxV(min1*min2*max1, max2*max3*max1)

}
func maxV(a, b int) int {
	if a > b {
		return a
	}
	return b
}