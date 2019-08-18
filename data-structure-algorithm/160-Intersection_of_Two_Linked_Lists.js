/**
 * 
 * 
 *  160. Intersection of Two Linked Lists
 * 
    Write a program to find the node at which the intersection of two singly linked lists begins.

    求两个链表的交叉点

    A: a1 → a2 
    ↘ 
    c1 → c2 → c3 
    ↗ 
    B: b1 → b2 → b3 


    a1 a2 c1 c2 c3 b1 b2 b3 c1 c2 c3
    b1 b2 b3 c1 c2 c3 a1 a2 c1 c2 c3

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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  var map = new Map()
  while (heapA) {
    // temp.push(tempA)
    map.set(headA, 1)
    headA = headA.next
  }

  while(headB) {
    if(map.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
};

var getIntersectionNode = function(heapA, heapB) {
  let p1 = heapA
  let p2 = heapB
  while (p1 != p2){
    p1 = p1 == undefined ? heapB : p1.next
    p2 = p2 == undefined ? heapA : p2.next
  }
  return p1
}