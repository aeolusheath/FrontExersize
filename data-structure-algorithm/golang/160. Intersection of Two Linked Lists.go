package ds

/**



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

// 方法一，用Set或者Map存储, Set没有原生GO，用Map操作
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	m := make(map[*ListNode]int)

	for headA != nil {
		m[headA] = 1
		headA = headA.Next
	}

	for headB != nil {
		_, ok := m[headB]
		if ok {
			return headB
		}
		headB = headB.Next
	}
	return nil
}

// 方法二 略 a+c+b = b+c+a
// A遍历完略找B，B遍历完了找A
