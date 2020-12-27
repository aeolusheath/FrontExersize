/**

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].



Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1


Constraints:

1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9



*/

var numEquivDominoPairs = function(dominoes) {
	let map = {}
	let total = 0
	dominoes.forEach(item => {
			let val = item.sort((a, b) => a- b).join('')
			if (map[val] == undefined) {
					map[val] =1
			} else {
					
					total += map[val] // right 【很巧妙，代替了1+2...+n-1的】
					map[val] = map[val] + 1
			}
		 
	})
 return total 
};