/**
 * 
 在一个 8 x 8 的棋盘上，有一个白色的车（Rook），用字符 'R' 表示。棋盘上还可能存在空方块，白色的象（Bishop）以及黑色的卒（pawn），分别用字符 '.'，'B' 和 'p' 表示。不难看出，大写字符表示的是白棋，小写字符表示的是黑棋。

  车按国际象棋中的规则移动。东，西，南，北四个基本方向任选其一，然后一直向选定的方向移动，直到满足下列四个条件之一：

  棋手选择主动停下来。
  棋子因到达棋盘的边缘而停下。
  棋子移动到某一方格来捕获位于该方格上敌方（黑色）的卒，停在该方格内。
  车不能进入/越过已经放有其他友方棋子（白色的象）的方格，停在友方棋子前。
  你现在可以控制车移动一次，请你统计有多少敌方的卒处于你的捕获范围内（即，可以被一步捕获的棋子数）。


  提示：

  board.length == board[i].length == 8
  board[i][j] 可以是 'R'，'.'，'B' 或 'p'
  只有一个格子上存在 board[i][j] == 'R'



 * 
 * 
 */


 /**
 * @param {character[][]} board
 * @return {number}
 */
/**
 * 
 

 抽象各个方向为坐标的 -1， 1， 0，的移动
 * 
 * 
 *  
 */
var numRookCaptures = function(board) {
  var mx = [1, -1, 0, 0]
  var my = [0, 0, -1, 1]
  // [1,0] [-1, 0], [0, -1] [0, 1] 在上 左 下 右移动一个位置


  let x, y ;
  // 先找到R的位置
  outLoop: for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        break outLoop
      }
    }
  }
  let ret = 0
  // 然后根据这个位置，每个方向移动看是否能够捕获
  console.log(x, y)
  for (let i = 0; i < 4; i++) {

    let step = 1;
    let curX = x;
    let curY = y;

    while( step ) {
      curX = x + mx[i]*step
      curY = y + my[i]*step
      console.log(curY, curX, 'kevin')
      if (curX === 7 ||curY=== 7 ||curX=== 0 ||curY=== 0 || board[curX][curY] === 'B') {
        break
      }
      if (board[curX][curY] === 'p') {
        ret++
        break
      }
      step++
      if (curY < 0) {
        break
      }
    }
  }
  return ret
};

console.log(numRookCaptures(

  [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]

))