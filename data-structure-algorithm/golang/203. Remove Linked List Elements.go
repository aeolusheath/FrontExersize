package ds

/**
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

*/

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

func removeElements(head *ListNode, val int) *ListNode {
	pre := &ListNode{}
	pre.Next = head

	dummy := pre
	for pre != nil && pre.Next != nil {
		for pre.Next != nil && pre.Next.Val == val {
			pre.Next = pre.Next.Next
		}
		pre = pre.Next
	}
	return dummy.Next
}
