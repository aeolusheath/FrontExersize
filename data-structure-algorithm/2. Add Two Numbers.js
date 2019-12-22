/*
 * @Author: kevin
 * @Date: 2019-12-19 12:47:59
 * @LastEditTime : 2019-12-19 12:48:25
 */
/**
 * 
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order and each of their nodes contain a single digit. 
    Add the two numbers and return it as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let head = new ListNode(), node = head
  while(l1 || l2) {
    let t1 = l1 ? l1.val : 0, t2 = l2 ? l2.val : 0
    let temp = t1 + t2 + carry;
    if (temp >= 10) {
      let remain = temp % 10
      node.next = new ListNode(remain)
      carry = Math.floor(temp / 10) // 这里应该是1，直接赋值就ok
    } else {
      node.next = new ListNode(temp)
      carry = 0
    }
    node = node.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry > 0) {
    node.next = new ListNode(carry)
  }
  return head.next
};

// 对上面的优化
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let dummyHead = new ListNode(), node = dummyHead
  while (l1 || l2) {
    let t1 = l1 ? l1.val : 0
    let t2 = l2 ? l2.val : 0
    let sum = t1 + t2 + carry
    // 上面判断大于10 有一点多余, 无论sum大于10，都是 sum % 10
    carry = Math.floor(sum / 10) 
    node.next = new ListNode(sum % 10)
    node = node.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry > 0) node.next = new ListNode(carry)
  return dummyHead.next
};




