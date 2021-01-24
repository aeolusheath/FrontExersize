
/**
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure incidate the result:


Build the result list and return its head.



Example 1:


Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
Example 2:


Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.


Constraints:

3 <= list1.length <= 10^4
1 <= a <= b < list1.length - 1
1 <= list2.length <= 10^4

*
*/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

 
// 有问题，list1的指针丢失，在第一个if执行以后
var mergeInBetween = function(list1, a, b, list2) {
  const h2 = list2
  while (list2 && list2.Next!= undefined) {
    list2 = list2.next
  }
  const h1 = list1
  let id = 0
  while( id <= b) {

    if (id == (a - 2)) {
      var temp = list1
      temp.next = h2
    }
    if (id == (b + 1)) {
      list2.next = list1
      break
    }
    list1 = list1.next
    id++
  }
  return h1
};


// 找到要替换的两个指针，找到前一个和后一个
var mergeInBetween = function(list1, a, b, list2) {
  const h2 = list2
  while (list2 && list2.next!= undefined) {
    list2 = list2.next
  }
  // 找到要去调的节点的前一个与后一个
  const pre = null
  const next = null
  const h1 = list1
  let id = 0
  while( id <= b) {
    if (id == (a - 1)) {
      pre = list1
    }
    // 循环的条件限制，所以这里id不能=b+1
    // if (id == (b + 1)) {
    //   next = list1
    // }
    // 改用下面的
    if (id == b) {
      next = list1.next
    }
  }
  pre.next = h2
  list2.next = next
  return h1
};
// func mergeInBetween(list1 *ListNode, a int, b int, list2 *ListNode) *ListNode {
// 	h2 := list2

// 	for list2 != nil && list2.Next != nil {
// 		list2 = list2.Next
// 	}

// 	h1 := list1
// 	idx := 0
// 	var temp *ListNode
// 	for idx <= b {
// 		if idx == a-1 {
// 			temp = list1
// 			temp.Next = h2
// 		}
// 		if idx == b {
// 			list2.Next = list1.Next
// 			break
// 		}
// 		list1 = list1.Next
// 		idx += 1
// 	}
// 	return h1
// }
