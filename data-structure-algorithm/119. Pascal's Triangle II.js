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

var getRow = function (rowIndex) {
  let arr = new Array(rowIndex + 1).fill(0)
  arr[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    if (i === 3) {
      console.log(arr.slice())
    }
    for (let j = i; j > 0; j--) {
      arr[j] += arr[j-1]
      // if(i == 3) {
      //   console.log( j, arr[j],`arr[${j}]`, 'jjj')
      // }
    }
  } 
  // console.log(arr, 'arr-----arr')
  return arr
}


var getRow2 = function(rowIndex) {
    // let ret = []
    if (rowIndex === 0) return [1]
    let ret = new Array(rowIndex + 1).fill(0)
    for (let i = 1; i < rowIndex + 1; i++) {

      let t = 0
      let j = 0
      while (j <= rowIndex) {
        if (j == 0 || j==rowIndex) {
          ret[j] = 1
          t = ret[j]
        } else {
          // let temp = ret[j-1] + t
          // console.log(j , 'jjj', ret)
          ret[j] = ret[j-1] + ret[j]
        }
        j++
      }
      
    }
    console.log(ret)
    return ret
};

getRow(3)
// getRow2(0)
