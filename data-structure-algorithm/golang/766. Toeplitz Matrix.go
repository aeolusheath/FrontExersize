package ds
/**
 *
 *
 Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.



Example 1:

m = 3 n = 4
    2     3
Input: matrix = [
  [1,2,3,4], 00 01 02 03
  [5,1,2,3], 10 11 12 13
  [9,5,1,2]] 20 21 22 23
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:


Input: matrix =
[[1,2], 00 01 02
 [2,2]] 10 11 12
        20 21 22

Output: false
Explanation:
The diagonal "[1, 2]" has different elements.




[
  [1,2,3,4], 00 01 02 03
  [4,1,2,3]  10 11 12 13
]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 20
0 <= matrix[i][j] <= 99


Follow up:

What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
What if the matrix is so large that you can only load up a partial row into the memory at once?


*/

// 判断下一个与之相等就可以了
func isToeplitzMatrix(matrix [][]int) bool {
	var m int = len(matrix)
	var n int = len(matrix[0])
	for i := 0; i < m-1; i++ {
		for j := 0; j < n-1; j++ {
			if matrix[i][j] != matrix[i+1][j+1] {
				return false
			}
		}
	}
	return true
}

// 每条对角线的索引值差距为1
func isToeplitzMatrix_2(matrix [][]int) bool {
	var m int = len(matrix)
	var n int = len(matrix[0])
	var valueMap = make(map[int]int)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// 因为map初始化的value，如果没存在map中，那么这个值为0，所以下面的值需要+1
			if valueMap[i-j] == 0 {
				valueMap[i-j] = matrix[i][j] + 1
			} else {
				if valueMap[i-j] != (matrix[i][j] + 1) {
					return false
				}
			}
		}
	}
	return true
}