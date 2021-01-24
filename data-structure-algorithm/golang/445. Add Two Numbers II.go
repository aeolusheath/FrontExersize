package ds

/**
 *
 *
 *
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

 *
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	s1 := make([]int, 0)
	s2 := make([]int, 0)
	for l1 != nil {
		s1 = append(s1, l1.Val)
		l1 = l1.Next
	}
	for l2 != nil {
		s2 = append(s2, l2.Val)
		l2 = l2.Next
	}
	r := 0
	var node *ListNode = nil

	for len(s1) != 0 || len(s2) != 0 || r != 0 {
		v1 := 0
		v2 := 0
		if len(s1) != 0 {
			v1 = s1[len(s1)-1]
			s1 = s1[:len(s1)-1] // 删掉最后一个数字 前闭后开
		}
		if len(s2) != 0 {
			v2 = s2[len(s2)-1]
			s2 = s2[:len(s2)-1]
		}

		remain := (v1 + v2 + r) % 10
		r = (v1 + v2 + r) / 10

		cur := &ListNode{}
		cur.Val = remain
		cur.Next = node
		node = cur
	}
	return node
}
