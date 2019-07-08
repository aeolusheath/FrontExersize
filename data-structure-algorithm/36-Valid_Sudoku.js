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
    // 一共实际上重复的行/列/子块 只有9 * 3 个
    // 每一个数字 只会在 某一列 某一行 某一个子块里面
    // 我们给每一行 每一列 每一子块 添加一个 map
    // 这个 map 存储出现的数字的次数
    // 每一个数字，必定在这3个中的某一个，
    const rows = new Array(10)
    const cols = new Array(10)
    const boxes = new Array(10)

    for (let i = 0; i < 9; i++) {
        rows[i] = new Map()
        cols[i] = new Map()
        boxes[i] = new Map()
    }

    for (let row = 0; row < board.length; row++) {
        // console.log("当前行", row)
        for(let col = 0; col < board[row].length; col++) {
            // console.log("当前行 列", row , col)
            let num = borad[row][col]
            if(num !== '') {
              let boxIndex = (i / 3) * 3 + j / 3;
              rows[row].set(num, (rows[row].get(num) || 0) + 1)
              cols[col].set(num, (cols[col].get(num) || 0) + 1)
              boxes[boxIndex].set(num, (cols[col].get(num) || 0) + 1)
            }
          if (rows[row].get(num) > 1 || cols[col].get(num) > 1 || boxes[boxIndex].get(num) > 1) {
            return false
          }
        }
    }
};

