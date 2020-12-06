package ds
/**
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.



Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]


Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100


*/
// 方法一
// 时间复杂度O(m*n) 空间复杂度O(m*n)
// 1，将matrix磨平，生成一个长度m*n的数组，然后将这个数组
// 2，往后移动k个数字
// 3，将这个数组还原为一个matrix
func shiftGrid(grid [][]int, k int) [][]int {
	var m int = len(grid)
	var n int = len(grid[0])
	//var total int = m * n
	oneArr := make([]int, 0)
	//// 初始化一个二维slice
	//retA := make([][]int, m)
	//for a := range retA{ retA[a] = make([]int, n) }

	// step - 1
	for i := 0; i < m ;i++ {
		for j := 0; j < n; j++ {
			oneArr = append(oneArr, grid[i][j])
		}
	}

	// step - 2
	newArr := moveK(oneArr, k)

	// step - 3
	// 初始化一个slice
	retMatrix := make([][]int, m)
	for idx := range retMatrix { retMatrix[idx] = make([]int, n) }

	// step - 4
	// 还原这个slice
	var o = 0
	for i := 0; i < m ;i++ {
		for j := 0; j < n; j++ {
			retMatrix[i][j] = newArr[o]
			o++
		}
	}
	return retMatrix
}

func moveK(arr []int, k int) []int {
	var mK = k % len(arr)
	var length = len(arr)
	retArr := make([]int, len(arr))
	for i:= 0; i < len(arr); i++ {
		oldIdx := (i + (length - mK)) % length
		retArr[i] = arr[ oldIdx  ]
	}
	return retArr
}