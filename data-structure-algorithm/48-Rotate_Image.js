/**
 * 
    
    You are given an n x n 2D matrix representing an image.

    Rotate the image by 90 degrees (clockwise).

    Note:

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

    Example 1:

    Given input matrix = 
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ],

    rotate the input matrix in-place such that it becomes:
    [
    [7,4,1],
    [8,5,2],
    [9,6,3]
    ]
    Example 2:

    Given input matrix =
    [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
    ], 

    rotate the input matrix in-place such that it becomes:
    [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
    ]


    // 先旋转
    Given input matrix =
    [
      [ 5, 1, 9,11],
      [ 2, 4, 8,10],
      [13, 3, 6, 7],
      [15,14,12,16]
    ], 
 
    // 将右上角部分与左下角部分替换
    [
      [5，2，13，15],
      [1，4，3，14],
      [9，8，6，12],
      [11，10，7，16]
    ]

    // 然后将每一行翻转？


 * 
 * 
 */

 var rotate = function(boards){
    let n = boards.length
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let temp;
        temp = boards[i][j]
        boards[i][j] = boards[j][i]
        boards[j][i] = temp
      }
    }
    
    for (let i = 0; i < n; i++) {
      // for (let j = 0 ; j < n ; j++) {
        //  翻转一个数组
        rotateArray(boards[i])
      // }
    }
 }

function rotateArray(arr) {
  let len = arr.length
  for (let i = 0; i < Math.trunc(len / 2); i++) {
    let temp 
    temp = arr[i]
    arr[i] = arr[len - i - 1]
    arr[len - i - 1] = temp
  }
  console.log(arr, "arr------>>>>")
  return arr
}

rotateArray([1,2,3,4,5])