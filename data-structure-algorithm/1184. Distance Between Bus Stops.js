/**
 * 
 * 
  A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

 

Example 1:



Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 

Example 2:



Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
 

Example 3:



Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
 

Constraints:

1 <= n <= 10^4
distance.length == n
0 <= start, destination < n
0 <= distance[i] <= 10^4
 * 
 * 
 * 
 */


 /**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    
  // 计算两个，顺时针走一次 ，逆时针走一次

  let min = Math.min(start, destination)

  let max = Math.max(start, destination)

  start = min
  destination = max
  console.log(start, destination, 'kevinkkkkkk')
  // 顺时针 0 - 2【0，1，2】
  let clockwiseDistance = 0
  for (let i = start; i < destination; i++) {
    clockwiseDistance += distance[i]
  }
  
  // 逆时针 2 - 0【2，3，0】
  let counterclockwise = 0
  // for (let i = destination; i < destination + (destination - start); i++) {
  //   let idx = i % (distance.length)
    
  //   console.log(idx, 'idx')
  //   counterclockwise += distance[idx]
  // }
  let i = destination
  while ( i != start) {
    console.log(i, 'iiii')
    counterclockwise += distance[i]
    i = (i + 1) % distance.length
  }
  console.log(counterclockwise)
  return Math.min(counterclockwise, clockwiseDistance)
};

// distanceBetweenBusStops([1,2,3,4], 0, 3)
distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2)

