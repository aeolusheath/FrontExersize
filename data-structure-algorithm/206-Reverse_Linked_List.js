/**
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 */

 // wrong - where is temp
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


var reverseList =  (head) => {
  if (!head) return null
  let prev = null
  let node = head
  while (node.next != null) {      
      let temp = node.next
      node.next = prev
      prev = node
      node = temp
  }
  node.next = prev
  return node
}

var reverseList = (head) => {
  if (!head) return null
  let prev = null
  let node = head
  while(node) {
    let temp = node.next
    node.next = prev
    prev = node
    node = temp
  }
  return prev // 这里是返回prev ，注意while的循环结束
}