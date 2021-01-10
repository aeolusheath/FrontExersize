package ds

/**
Given the head of a sorted linked list,

delete all duplicates such that each element appears only once. Return the linked list sorted as well.


The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

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

// 方法一，数组存，然后去重复，然后重新构造一个链表

// 方法二, 一次线性遍历，画个图更好理解
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	h := &ListNode{}
	h.Next = head
	pre := h

	for h.Next != nil && h.Next.Next != nil {
		for h.Next != nil && h.Next.Next != nil && h.Next.Val == h.Next.Next.Val {
			h.Next = h.Next.Next
		}
		h = h.Next
	}

	return pre.Next
}

// 对方法二的改进，去掉pre节点，better

func deleteDuplicates2(head *ListNode) *ListNode {
	h := head
	for h != nil && h.Next != nil {
		if h.Val == h.Next.Val {
			h.Next = h.Next.Next
		} else {
			h = h.Next
		}
	}
	return head
}
