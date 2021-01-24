package ds

/**


Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL


Constraints:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
The length of the linked list is between [0, 10^4].





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

// 时间复杂度为O（n），空间复杂度O（1）

// 遍历一次，将even 和odd都求出来
func oddEvenList(head *ListNode) *ListNode {
	// 奇数
	var odd *ListNode = nil

	var even *ListNode = nil

	var evenHead *ListNode = nil

	node := head

	i := 1
	for node.Next != nil {
		// 奇数
		if i&1 == 1 {
			if odd == nil {
				odd = node
			} else {
				odd.Next = node
				odd = odd.Next
			}

		} else {
			if even == nil {
				even = node
				evenHead = node
			} else {
				even.Next = node
				even = even.Next
			}
		}
		i = i + 1
		node = node.Next
	}

	// 重要
	if odd != nil {
		odd.Next = nil
	}

	// 重要
	if even != nil {
		even.Next = nil
	}

	odd.Next = evenHead

	return head
}

// 官方简洁方法

func oddEvenList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	odd := head // 这个节点必然不会为空
	evenHead := head.Next
	even := head.Next

	// 结束的条件， even为空 或者 even.Next 为空
	for even != nil && even.Next != nil {
		odd.Next = even.Next
		odd = odd.Next
		even.Next = odd.Next
		even = even.Next
	}
	odd.Next = evenHead
	return head
}
