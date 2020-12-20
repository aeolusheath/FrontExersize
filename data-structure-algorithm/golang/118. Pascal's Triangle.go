package ds
/**
*
*
* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


 In Pascal's triangle, each number is the sum of the two numbers directly above it.


 Example:

 Input: 5
 Output:
 [
      [1],
     [1,1],
    [1,2,1],
   [1,3,3,1],
  [1,4,6,4,1]
 ]

*
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

func generate(numRows int) [][]int {
	// 初始化一个二维数组切片
	ret := make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		ret[i] = make([]int, (i + 1))
	}

	for j := 0; j < numRows; j++ {
		len := j + 1
		// itemArr := make([]int, j)
		for k := 0; k < len; k++ {
			if k == 0 || k == len - 1 {
				ret[j][k] = 0
			} else {
				ret[j][k] = ret[j - 1][k] + ret[j -1][k - 1] 
			}
		}
	}
	return ret
}

