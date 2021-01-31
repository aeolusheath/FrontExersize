package ds
/**
 * 
 * 
 * Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
Example 1:
Input:
root = [1, 2, 3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The input and each element of the output are ListNodes, not arrays.
For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but it's string representation as a ListNode is [].
Example 2:
Input: 
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
Note:

The length of root will be in the range [0, 1000].
Each value of a node in the input will be an integer in the range [0, 999].
k will be an integer in the range [1, 50].

 * 
 * 
 * 
 * 
 */



 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */


/**
 * 
 * @param {} root 
 * @param {*} k
 * 
 * 数学题，比如总长度为N，分成k份
 * 如果N < K , 每一份为1，剩余的的为空
 * 如果N > K,  平均每一份基本长度为 N/K,  还剩下 N % K 份，将这个剩下的份数，依次放在前面第1到第N%K份里面
 * 
 *  
 */

 
 /**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func splitListToParts(root *ListNode, k int) []*ListNode {
	var n int = 0
	node := root
	for node != nil {
		n = n + 1
		node = node.Next
	}
	
	basicWidth := n / k
	remain := n % k
	
	ret := make([]int, 0)

	cur := root

	for i:= 0; i< k; i++ {
		h := cur
		j := 0
		end := basicWidth
		if (i < remain) {
			end = basicWidth + 1
		} 
		
		// 这里必须是end - 1 ，循环走完 cur才在正确的尾节点，不然在尾节点的下一个
		for j < end - 1 {
		  if (cur != nil) {
			  cur = cur.Next
		  }
		  j= j + 1
		}

	   // 将尾指针的下一个置为null
	   if (cur != nil) {
		//   pre := cur
		//   pre.Next = nil
		//   cur = cur.Next

		// 上面的是错误的，想错哪儿了

	   	 	n := cur.Next
           cur.Next = nil
           cur = n   
	
		}
	   
	   ret = append(ret, h)
	}
	return ret
}


