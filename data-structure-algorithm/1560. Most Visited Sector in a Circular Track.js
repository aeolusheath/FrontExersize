/**
 * 
  Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. 
  
  A marathon will be held on this track, the marathon consists of m rounds. 
  
  The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. 
  
  For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

  Return an array of the most visited sectors sorted in ascending order.

  Notice that you circulate the track in ascending order of sector numbers 
  in the counter-clockwise direction (See the first example).

  

  Example 1:

  Input: n = 4, rounds = [1,3,1,2]
   1 2 3
   4 1 
   2
  Output: [1,2]
  Explanation: The marathon starts at sector 1. The order of the visited sectors is as follows:
  1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of round 3 and the marathon)
  We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.
  Example 2:

  Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
  2 1 
  2 1
  2 1
  2 1
  2
  Output: [2]


  Example 3:
  Input: n = 7, rounds = [1,3,5,7]

  1 2 3
  4 5 
  6 7
  Output: [1,2,3,4,5,6,7]
  

  Constraints:

    2 <= n <= 100
    1 <= m <= 100
    rounds.length == m + 1
    1 <= rounds[i] <= n
    rounds[i] != rounds[i + 1] for 0 <= i < m
 *
 */

 // TODO 

// 因为马拉松全程只会按照同一个方向跑，中间不论跑了多少圈，对所有扇区的经过次数的贡献都是相同的
// 因此 【答案】 只与起点和终点相关
// 从起点沿着终点往逆时针方向走到终点的这部分扇区，都是经过次数最多的扇区。

var mostVisited = function(n, rounds) {
  let ret = []
  let len  = rounds.length
  let start = rounds[0]
  let end = rounds[len - 1]
  if (start <= end) {
    for ( let i = start; i <= end; i++ ) {
      ret.push(i)
    }
  } else {
    // 现在 start > end
    // [ 6, 4, 2 ]

    // [ 1, end ] ~ [ start, n ]
    for (let i = 1; i <= end; i++) {
      ret.push(i)
    }

    for (let i = start; i <= n; i++) {
      ret.push(i)
    }
  }
  return ret
}














  // class Solution {
  //   public:
  //       vector<int> mostVisited(int n, vector<int>& rounds) {
  //           vector<int> ret;
  //           int size = rounds.size();
  //           int start = rounds[0], end = rounds[size - 1];
  //           if (start <= end) {
  //               for (int i = start; i <= end; i++) {
  //                   ret.push_back(i);
  //               }
  //           } else { // 由于题目要求按扇区大小排序，因此我们要将区间分成两部分
  //               for (int i = 1; i <= end; i++) {
  //                   ret.push_back(i);
  //               }
  //               for (int i = start; i <= n; i++) {
  //                   ret.push_back(i);
  //               }
  //           }
  //           return ret;
  //       }
  //   };
    
    