package ds

/**
*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array.

 Example 1:

 Input: [3,2,3]
 Output: 3
 Example 2:

 Input: [2,2,1,1,1,2,2]
 Output: 2

*
*
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一，排序
//func majorityElement(nums []int) int {
//	length := len(nums)
//	number := length / 2
//	sort.Ints(nums)
//	fmt.Println(nums)
//	return nums[number]
//}

// 方法二，vote算法
func majorityElement(nums []int) int {
	count := 1
	val := nums[0]
	for i := 1; i < len(nums); i++ {
		if count == 0 {
			val = nums[i]
			count = 1
		} else if nums[i] == val {
			count++
		} else if nums[i] != val {
			count--
		}
	}
	return val
}
