/**
 * 
 * 
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

  Example 1:

  Input: 1->1->2
  Output: 1->2
  Example 2:

  Input: 1->1->2->3->3
  Output: 1->2->3
 * 
 * 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   if (head == null) return null
   let curHead = head
   let cur = head.val // 这个变量实际上不需要单独存储
   let node = head
   while(node != null) {
    let nextNode = node.next
    if (nextNode != null) {
      if(nextNode.val == cur) {
        node.next = nextNode.next
      } else {
        cur = nextNode.val
        node = node.next
      }
    } else {
        break // 这里break的话， 可以直接将node.next 和node 不为null都放在while的判定条件里面
    }
   }
   return curHead
};


// much better
var deleteDuplicates = function(head) {
  let node = head
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}