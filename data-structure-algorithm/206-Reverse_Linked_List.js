/**
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 */

function reverseLinkedList(head) {
  let prev = null
  while (head) {
    let temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return temp
}