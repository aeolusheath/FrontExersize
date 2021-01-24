/**
 * 
 

  you are given the head of a linked list, and an integer k.

  Return the head of the linked list after swapping the values of the kth node from the beginning 
  
  and the kth node from the end (the list is 1-indexed).
 * 
 * 
 *
 * 
 * 
 *  The number of nodes in the list is n.
    1 <= k <= n <= 10^5
    0 <= Node.val <= 100








    1 -> [2] -> 3 -> 4 -> 5

    1 ->  4 ->  3 -> [2] -> 5
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 为了找到这两个节点，遍历了两次
// 时间复杂度O(n) 空间复杂度O(n^2)
var swapNodes = function(head, k) {
  // 找到两个点
  let first = null
  let secend = null

  let node = head
  let ret = head

  let i = 1

  while(node) {
    if (i== k) {
      first = k
    } 
    node = node.next
    i++
  }
  // i 已经是n了
  let secondIndex = i - k

  let j = 1
  while(head) {
    if (j == secondIndex) {
      secend = head
    }
    head = head.next
    j++
  } 
  let temp = first.val
  first.val = secend.val
  secend.val = temp
  return ret

};



/**
 * 
    1 -> [2] -> 3 -> 4 -> 5
    1 ->  4 ->  3 -> [2] -> 5
 */

// 双指针只遍历一次
var swapNodes = function(head, k) {
  let f = head
  let s = head
  let node = head

  let i = 1

  // 这个判定条件回让i最终停留在正确的index，不然就是n+1
  while(node.next != null) {
     if (i == k) {
       f = node
     } 
     if (i >= k) {
       s = s.next
     }
     i++
     node = node.next
  }
  console.log(f, s)

  var temp = f.val
  f.val = s.val
  s.val = temp
  return head
}



/**
 * 
    1 -> [2] -> 3 -> 4 -> 5
    1 ->  4 ->  3 -> [2] -> 5
 */
// 双指针中的快慢指针
var swapNodes = function(head, k) {
  let node = head
  let f = head
  let s = head

  let i = 1
  // 快慢
  while(node.next != null) {
    if (i < k) {
      f = f.next
    } else {
      s = s.next
    }
    i++
    node = node.next
  }
  var temp = f.val
  f.val = s.val
  s.val = temp
  return head
}




