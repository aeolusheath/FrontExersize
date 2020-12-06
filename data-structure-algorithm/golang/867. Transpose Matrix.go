package ds
/**
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal,

switching the row and column indices of the matrix.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]


Note:

1 <= A.length <= 1000
1 <= A[0].length <= 1000


 */

// 这个题目不要算法，行列互换，改变行和列的index就可以了
func transpose(A [][]int) [][]int {

	var m = len(A)
	var n = len(A[0])
	// 初始化一个二维slice
	retA := make([][]int, n)
	for a := range retA{ retA[a] = make([]int, m) }

	for i:= 0; i < m; i++ {
		for j:=0; j < n; j++ {
			retA[j][i] = A[i][j]
		}
	}
	return retA
}