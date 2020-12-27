/**
 * 
 You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.


 * 
 * 
 */

 /**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  var getGradient = (A, B) => {
    if (A[0] == B[0]) return Number.POSITIVE_INFINITY
    return (A[1] - B[1]) / (A[0] - B[0])
  }
  var init = getGradient(coordinates[1], coordinates[0])
  for (let i = 2 ; i < coordinates.length; i++) {
    if (init != getGradient(coordinates[i], coordinates[i-2])) {
      return false
    }
  }
  return true
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]))
