/**
 
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

3

0 1 2 3 4 5 6

0 2 4 6

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
0 1 2 3 4 5 6
P     I     N
A   L S   I G
Y A   H R
P     I
Example 3:
 
 

  0       03       06
  1   12  13    15 16  
  2 21    23  24     
  3       33       


  1       3       1              
  2   2   4    4  2     
  3 1     1  3
  4       2


  1       7        13              
  2   6   8    12  14       0 1 2 3 4 5
  3 5     9  11
  4       10




  0 3 6 [4]

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

 * 
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1) {
         return s
    }
    let arr = []
    // 一共 numRows 行
    // 一共多少列 是不确定的，注意题目的限制条件，很关键，可以默认最大多少列给设置出来
    for (let i = 0; i < numRows; i++){
        arr[i] = []
    }
    
    let row = numRows
    let col = 1000

    // 难点，计算列

    // (row * row-1) 保证为一个单元格

    let l = 0

    for (j = 0; j < col; j++) {
        if (l >= s.length) break
        if (j % (row-1) === 0 || (j == 0 && row == 1)){
            for (let k = 0; k < row; k++) {
                arr[k][j] = s[l]
                l++
            }
        }else{
            for (let k = 0; k < row; k++) {
                if ( (k+ j) % (row-1) === 0 ) {
                    arr[k][j] = s[l]
                    l++
                } else {
                    arr[k][j] = ''
                }
            }
        }
    }

    // 然后遍历这个二位数组
    let r = ''
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j ++) {
            if (arr[i][j]) {
                r += arr[i][j]
            }
        }
    }
    return r
    
};

// convert(s = "PAYPALISHIRING", numRows = 4)
// convert(s = "A", numRows = 4)
convert(s = "AB", numRows = 1)





// var convert2 = function(s, numRows) {

//     if (numRows === 1) {
//          return s
//     }
//     let arr = []
//     // 一共 numRows 行
//     for (let i = 0; i < numRows; i++){
//         arr[i] = []
//     }
    
    
//     let i = 0
//     let len = s.length
//     while (i < len) {
//         for (let idx = 0; idx < numRows && i < len; idx++) {

//         }
//     }



//     // 然后遍历这个二位数组
//     let r = ''
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j ++) {
//             if (arr[i][j]) {
//                 r += arr[i][j]
//             }
//         }
//     }
//     return r
    
// };
