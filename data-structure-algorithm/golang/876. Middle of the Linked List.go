package ds

/***
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.



Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.


Note:

The number of nodes in the given list will be between 1 and 100.



*/

type ListNode struct {
	Val  int
	Next *ListNode
}

// 方法一，算总长度，然后找到一半的位置
func middleNode(head *ListNode) *ListNode {
	l := 0
	h := head
	for head != nil {
		l++
		head = head.Next
	}
	mid := l / 2
	for i := 0; i < mid; i++ {
		h = h.Next
	}
	return h
}

// 方法二，很巧妙，快慢指针，慢的每次往后移动一个位置；快的每次往后移动两个位置
// 错误，slow多移动了一次,当快指针在最后一个的时候或者最后一个的下一个位置nil，慢指针已经在中间，不能指向Next了
// WRONG
func middleNode_(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	slow := head
	fast := head
	for slow != nil && fast != nil {
		slow = slow.Next
		if fast.Next != nil {
			fast = fast.Next.Next
		}
	}
	return slow
}

// RIGHT 当指针在最后一个 或者最后一个的.Next后面的时候，这时候slow一定在中间
// 从 1-2-3-4-5
// 从 1-2-3-4
//
func middleNode__(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	slow := head
	fast := head
	for slow != nil && fast != nil {
		if fast.Next != nil {
			fast = fast.Next.Next
		} else {
			break
		}
		slow = slow.Next
	}
	return slow
}

// 对上面的一个优化，当快指针在最后一个节点的时候，就不进入循环
func middleNode___(head *ListNode) *ListNode {
	slow := head
	fast := head
	// 循环遍历完，fast一定指向最后一个节点
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow

}
