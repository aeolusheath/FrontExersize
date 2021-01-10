package ds

/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.



Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 10^4].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked-list.


Follow up: Can you solve it using O(1) (i.e. constant) memory?



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

// 方法一，如果是js动态语言，每次遍历给节点增加一个标记，如果下次又遍历到那么为true
// 时间复杂度O(n) 空间复杂度O(1)

// 方法二，用Map或者Set存储每一个地址，如果出现过那么为true
// 时间复杂度O(n) 空间复杂度O(n)

// 方法三，龟兔赛跑算法，一快一慢，快的必然会追上慢的
func hasCycle(head *ListNode) bool {
	if head == nil {
		return false
	}
	p := head
	n := head.Next

	for p != nil && n != nil {
		if p == n {
			return true
		}
		p = p.Next
		if n.Next != nil {
			n = n.Next.Next
		} else {
			n = nil
		}
	}
	return false
}
