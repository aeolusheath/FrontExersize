/**
 *
 *  Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

    A partially filled sudoku which is valid.

    The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

    Example 1:

    Input:
    [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]
    Output: true
    Example 2:

    Input:
    [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]
    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being
        modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
    Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.
    The given board contain only digits 1-9 and the character '.'.
    The given board size is always 9x9.
 *
 *
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
  // 每一行 每一列 每一个小格子 不能存在重复的
  // 9个列 
  // 9个行
  // 9个小格子 
  // 一共 27个 hash table

  const rows = new Array(9)
  const cols = new Array(9)
  const boxes = new Array(9)

  for (let i = 0; i < 9; i++) {
    rows[i] = {}
    cols[i] = {}
    boxes[i] = {}
  }

  // 遍历这 81 个格子
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      let num = board[i][j]
      var rowMap = rows[i]
      var colMap = cols[j]
      const boxIndex = ~~(i / 3) * 3 + ~~(j / 3) // 将九宫格分成9个大块
      var boxMap = boxes[boxIndex]

      if (num != '.') {    
        rowMap[num] = rowMap[num] == undefined ? 1 : (rowMap[num] + 1)
        colMap[num] = colMap[num] == undefined ? 1 : (colMap[num] + 1)
        boxMap[num] = boxMap[num] == undefined ? 1 : (boxMap[num] + 1)
      }

      if (rowMap[num] > 1 || colMap[num]> 1 || boxMap[num] > 1) {
        // console.log(i, j, board[1][9], "oppo")
        // console.log(false, num, rowMap ,rowMap[num], colMap[num], boxMap[num], "abcdefg----")
        return false
      }
    }
  }
  // console.log(true)
  return true
}

isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
   [".","9","8",".",".",".",".","6","."],
   ["8",".",".",".","6",".",".",".","3"],
   ["4",".",".","8",".","3",".",".","1"],
   ["7",".",".",".","2",".",".",".","6"],
   [".","6",".",".",".",".","2","8","."],
   [".",".",".","4","1","9",".",".","5"],
   [".",".",".",".","8",".",".","7","9"]])