/**
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

 

Example 1:


Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [0]
Output: [0]
Example 4:

Input: head = [1,3]
Output: [3,1]
 

Constraints:

The number of nodes in head is in the range [0, 2 * 104].
-10^5 <= Node.val <= 10^5

**/


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type ListNode struct {
	     Val int
	     Next *ListNode
}

 type TreeNode struct {
	     Val int
	     Left *TreeNode
		 Right *TreeNode
}

//  方法一，找中间节点 rootNode，分割链表, 构造树
 func sortedListToBST(head *ListNode) *TreeNode {

	var HelpFunc func (node *ListNode) *TreeNode
	HelpFunc = func (node *ListNode) *TreeNode  {
		if (node == nil) {
			return nil
		} else if (node.Next == nil) {
			return &TreeNode{
				Val: node.Val,
			}
		}
		
		s := node
		f := node
        var prevMid *ListNode 
		for f != nil && f.Next != nil {
			prevMid = s
			s = s.Next
			f = f.Next.Next
		}
	  
		var rootNode = &TreeNode{ 
			Val: s.Val,
		}

		prevMid.Next = nil
		rootNode.Left = HelpFunc(node)
		rootNode.Right = HelpFunc(s.Next)
		return rootNode
	}
	
	return HelpFunc(head)
}
