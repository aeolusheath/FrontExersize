package ds

/**

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


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

// iteratively
func reverseList(head *ListNode) *ListNode {
	var x *ListNode
	var y *ListNode
	// var pre  *ListNode
	for head != nil {
		y = head.Next // y 存 后面的一个
		head.Next = x // x 为 前一个
		x = head      // 替换前一个的指针
		head = y
	}
	return x
}

// recursively
func reverseList2(head *ListNode) *ListNode {
	// func get(pre *ListNode, next *ListNode) {
	// }
	if head == nil || head.Next == nil {
		return head
	}
	newHead := reverseList(head.Next)
	head.Next.Next = head
	head.Next = nil
	return newHead
}
