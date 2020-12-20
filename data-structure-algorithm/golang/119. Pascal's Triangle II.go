package ds
/**
 *
 *
 Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?



Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]


  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1]
  ]


 *
 *
 *
 *
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

func getRow(rowIndex int) []int {
	arr := make([]int, rowIndex+1)
	arr[0] = 1
	for i := 1; i < rowIndex+1; i++ {
		for j := i; j > 0; j-- {
			arr[j] += arr[j-1]
		}
	}
	return arr
}

