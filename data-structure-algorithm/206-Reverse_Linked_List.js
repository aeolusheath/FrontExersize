/**
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 */

 // 循环
var reverseLinkedList = (head) => {
 let x 
 let y
 while (head) {
    y = head.next
    head.next = x
    x = head
    head = y
 }
 return x
}

// 递归
var reverseLinkedList = (head) => {
  if (!head || !head.next) {
    return head
  }
  let newHead = reverseLinkedList(head.next)
  head.next.next = head
  head.next = null
  return newHead
 }