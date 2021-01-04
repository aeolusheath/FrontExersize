package ds

/**
*


 In a deck of cards, each card has an integer written on it.

 Return true if and only if you can choose X >= 2 such that

 it is possible to split the entire deck into 1 or more groups of cards, where:

 Each group has exactly X cards.
 All the cards in each group have the same integer.


 Example 1:

 Input: deck = [1,2,3,4,4,3,2,1]
 Output: true
 Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 Example 2:

 Input: deck = [1,1,1,2,2,2,3,3]
 Output: false´
 Explanation: No possible partition.
 Example 3:

 Input: deck = [1]
 Output: false
 Explanation: No possible partition.
 Example 4:

 Input: deck = [1,1]
 Output: true
 Explanation: Possible partition [1,1].
 Example 5:

 Input: deck = [1,1,2,2,2,2]
 Output: true
 Explanation: Possible partition [1,1],[2,2],[2,2].


 Constraints:

 1 <= deck.length <= 10^4
 0 <= deck[i] < 10^4
 Accepted
 56,718
 Submissions
 164,886

*
*
*
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */

func hasGroupsSizeX(deck []int) bool {
	length := len(deck)
	if length < 2 {
		return false
	}
	m := make(map[int]int)

	for i := 0; i < length; i++ {
		cur := deck[i]
		val, ok := m[cur]
		if ok {
			m[cur] = val + 1
		} else {
			m[cur] = 1
		}
	}

	//  min := 1<<31 - 1
	//  for val := range m {
	//    if m[val] < min {
	//     min = m[val]
	//    }
	//  }

	g := m[deck[0]]

	for val := range m {
		g = gcd(g, m[val])
	}

	return g >= 2

}

func gcd(a, b int) int {

	for a%b != 0 {
		c := a % b

		a = b

		b = c
	}

	return b
}
