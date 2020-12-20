/**
 * 
 In a string s of lowercase letters, these letters form consecutive groups of the same character.

  For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

  A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

  A group is considered large if it has 3 or more characters.

  Return the intervals of every large group sorted in increasing order by start index.

  

  Example 1:

  Input: s = "abbxxxxzzy"
  Output: [[3,6]]
  Explanation: "xxxx" is the only large group with start index 3 and end index 6.
  Example 2:

  Input: s = "abc"
  Output: []
  Explanation: We have groups "a", "b", and "c", none of which are large groups.
  Example 3:

  Input: s = "abcdddeeeeaabbbcd"
  Output: [[3,5],[6,9],[12,14]]
  Explanation: The large groups are "ddd", "eeee", and "bbb".
  Example 4:

  Input: s = "aba"
  Output: []



 * 
 * 
 */

 func largeGroupPositions(s string) [][]int {
		count := 1
		startIndex := 0
		ret := make([][]int, 0)

		for i := 1 ; i < len(s); i++ {
			if s[i] == s[i - 1] {
				count++
				if (i == len(s) - 1 && count >= 3) {
					// ret.push([startIndex, startIndex + count - 1])
					ret = append(ret, []int{startIndex, startIndex + count - 1})
				}
			} else {
				if count >= 3 {
					ret = append(ret, []int{startIndex, startIndex + count - 1})
				}
				count = 1
				startIndex = i
			}
		}
		return ret
 }




var largeGroupPositions = function(s) {
  let count = 1;
  let startIndex = 0
  
  let ret = []
  for (let i = 1; i < s.length; i++) {
      if (s[i] == s[i - 1]) {
          count++
          if (i == s.length - 1 && count >= 3) {
            ret.push([startIndex, startIndex + count - 1])
          }
      } else if ( s[i] != s[i - 1] ) {
          if(count >= 3 ) {
            ret.push([startIndex, startIndex + count - 1])
          }
          count = 1
          startIndex = i
      }
  }
  return ret
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"))
console.log(largeGroupPositions("abbxxxxzzy"))
console.log(largeGroupPositions("abc"))
console.log(largeGroupPositions("aaa"))

