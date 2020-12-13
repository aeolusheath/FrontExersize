package ds

/**
*
*

 Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

 Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.



 Example 1:

 Input: nums = [1,2,2,3,1]
 Output: 2
 Explanation:
 The input array has a degree of 2 because both elements 1 and 2 appear twice.
 Of the subarrays that have the same degree:
 [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 The shortest length is 2. So return 2.
 Example 2:

 Input: nums = [1,2,2,3,1,4,2]
 Output: 6
 Explanation:
 The degree is 3 because the element 2 is repeated 3 times.
 So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


 Constraints:

 nums.length will be between 1 and 50,000.
 nums[i] will be an integer between 0 and 49,999.
*
*
*
*
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 毫无思路
// 我只想到了 求出频率最大的次数，以及出现频率最大次数的数字
//

func findShortestSubArray(nums []int)  int{
	left := make(map[int]int)
	right := make(map[int]int)
	count := make(map[int]int)

	maxCount := 0

	// 找到了最大的
	for i := 1; i <= len(nums); i++ {
		val, _ := left[nums[i - 1]] // out of range，所以i-1
		if val == 0 {
			left[nums[i - 1]] = i
		}
		right[nums[i - 1]] = i
		c , _ := count[nums[i - 1]]
		if c == 0 {
			count[nums[i - 1]] = 1
		} else {
			count[nums[i - 1]]++
		}

		maxCount = max(maxCount, count[nums[i - 1]])
	}

     //var minLength int // 应该是一个比较大的数字
     minLength := len(nums) + 1
	 for key := range count {
	 	if count[key] == maxCount {
			len := right[key] - left[key] + 1
			minLength = min(len, minLength)
		}
	 }
	 return minLength

}


func max(x, y int) int {
	if x >= y {
		return x
	}
	return y
}

func min(x, y  int) int {
	if x <= y {
		return x
	}
	return y
}