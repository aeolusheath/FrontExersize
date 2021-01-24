package ds

/**
*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).



Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
Example 3:

Input: head = [1], k = 1
Output: [1]
Example 4:

Input: head = [1,2], k = 1
Output: [2,1]
Example 5:

Input: head = [1,2,3], k = 2
Output: [1,2,3]


Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 10^5
0 <= Node.val <= 100


*
**/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

// 遍历两次，找到两个位置的node 略

/**
*
   1 -> [2] -> 3 -> 4 -> 5
   1 ->  4 ->  3 -> [2] -> 5
*/
// 双指针，遍历一次，找到交换的两个位置
// 一个先走，一个后走
func swapNodes(head *ListNode, k int) *ListNode {
	f := head
	s := head
	node := head

	i := 1
	// 这个判定条件让i
	for node.Next != nil {
		if i < k {
			f = f.Next // f最终指向顺序的第K个
		} else {
			s = s.Next // node走到头，s就指向倒数第K个
		}
		i = i + 1
		node = node.Next
	}

	// 交换两个节点
	temp := f.Val
	f.Val = s.Val
	s.Val = temp
	return head
}
