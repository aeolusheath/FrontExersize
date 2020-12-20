package ds
/**
 *
 *
  Given a fixed length array arr of integers,
  duplicate each occurrence of zero, shifting the remaining elements to the right.

  Note that elements beyond the length of the original array are not written.

  Do the above modifications to the input array in place, do not return anything from your function.



Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]


Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

 *
 *
 *
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

func duplicateZeros(arr []int) {
	zc := 0
	len := len(arr) - 1

	for left := 0; left+zc <= len; left++ {
		if arr[left] == 0 {
			if left+zc == len {
				// 处理边界情况，最后一个原本位置的0不能移动
				arr[len] = 0
				len = len - 1
				break
			}
			zc++
		}
	}
	last := len - zc
	// 所有的元素往后移动zc个
	for i := last; i >= 0; i-- {
		if arr[i] == 0 {
			arr[i+zc] = 0
			zc--
			arr[i+zc] = 0
		} else {
			arr[i+zc] = arr[i]
		}
	}

}


